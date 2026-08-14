"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ------------------------------------------------------------------
   The "depth field": a shader-driven particle ocean in the brand's
   deep-teal scale, with a slowly tumbling wireframe icosahedron.
   Pointer moves the camera; scroll (via GSAP ScrollTrigger) sinks
   the field as the hero leaves the viewport.
------------------------------------------------------------------- */

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  varying float vElevation;

  void main() {
    vec3 p = position;
    float wave =
      sin(p.x * 0.55 + uTime * 0.6) * 0.35 +
      sin(p.y * 0.7 + uTime * 0.45) * 0.3 +
      sin((p.x + p.y) * 0.25 + uTime * 0.3) * 0.4;
    p.z += wave;
    p.z -= uScroll * 3.0;
    vElevation = wave;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.6 + vElevation * 1.4) * (12.0 / -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  varying float vElevation;

  void main() {
    // round points
    vec2 uv = gl_PointCoord - 0.5;
    if (dot(uv, uv) > 0.25) discard;

    vec3 deep   = vec3(0.102, 0.267, 0.365);  // #1a445d
    vec3 mist   = vec3(0.561, 0.690, 0.753);  // #8fb0c0
    vec3 signal = vec3(1.0, 0.706, 0.329);    // #ffb454

    float t = smoothstep(-0.6, 1.0, vElevation);
    vec3 color = mix(deep, mist, t);
    color = mix(color, signal, smoothstep(0.85, 1.05, vElevation) * 0.9);

    gl_FragColor = vec4(color, 0.85);
  }
`;

function ParticleField({ scroll }: { scroll: React.MutableRefObject<number> }) {
  const material = useRef<THREE.ShaderMaterial>(null);

  const geometry = useMemo(() => {
    const cols = 140;
    const rows = 70;
    const positions = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        positions[i++] = (x / cols - 0.5) * 30;
        positions[i++] = (y / rows - 0.5) * 16;
        positions[i++] = 0;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = state.clock.elapsedTime;
    material.current.uniforms.uScroll.value = scroll.current;
  });

  return (
    <points
      geometry={geometry}
      rotation={[-Math.PI / 2.6, 0, 0]}
      position={[0, -2.2, 0]}
    >
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        uniforms={{
          uTime: { value: 0 },
          uScroll: { value: 0 },
        }}
      />
    </points>
  );
}

function Icosahedron({ scroll }: { scroll: React.MutableRefObject<number> }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.12;
    mesh.current.rotation.y += delta * 0.18;
    mesh.current.position.y =
      0.6 +
      Math.sin(state.clock.elapsedTime * 0.5) * 0.15 +
      scroll.current * 2.5;
  });

  return (
    <mesh ref={mesh} position={[2.6, 0.6, -1]}>
      <icosahedronGeometry args={[1.3, 1]} />
      <meshBasicMaterial color="#1a445d" wireframe transparent opacity={0.7} />
    </mesh>
  );
}

function Rig({
  pointer,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  useFrame((state) => {
    const { x, y } = pointer.current;
    state.camera.position.x += (x * 0.6 - state.camera.position.x) * 0.04;
    state.camera.position.y += (1.2 + y * 0.4 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

/**
 * Fixed-behind-the-hero WebGL layer. Purely decorative:
 * aria-hidden, never gates content, static for reduced-motion users.
 */
export default function HeroScene({
  fadeOnScroll = true,
}: {
  fadeOnScroll?: boolean;
}) {
  const wrapper = useRef<HTMLDivElement>(null);
  const scroll = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useGSAP(() => {
    if (prefersReduced || !fadeOnScroll) return;
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "60% top",
      scrub: true,
      onUpdate: (self) => {
        scroll.current = self.progress;
        if (wrapper.current) {
          wrapper.current.style.opacity = String(1 - self.progress * 0.9);
        }
      },
    });
  });

  return (
    <div
      ref={wrapper}
      aria-hidden="true"
      onPointerMove={(e) => {
        pointer.current = {
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: -(e.clientY / window.innerHeight - 0.5) * 2,
        };
      }}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      <Canvas
        camera={{ position: [0, 1.2, 6], fov: 55 }}
        frameloop={prefersReduced ? "demand" : "always"}
        dpr={[1, 1.75]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        eventSource={
          typeof document !== "undefined" ? document.body : undefined
        }
      >
        <ParticleField scroll={scroll} />
        <Icosahedron scroll={scroll} />
        <Rig pointer={pointer} />
        <fog attach="fog" args={["#06141c", 6, 14]} />
      </Canvas>
    </div>
  );
}
