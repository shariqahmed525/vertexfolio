import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="container"
      style={{
        minHeight: "100svh",
        display: "grid",
        placeContent: "center",
        gap: "1.5rem",
        textAlign: "center",
      }}
    >
      <p className="eyebrow" style={{ justifyContent: "center" }}>
        ~/404
      </p>
      <h1 className="heading-lg">Page not found.</h1>
      <Link className="btn btn--primary" href="/" style={{ justifySelf: "center" }}>
        Back home
      </Link>
    </main>
  );
}
