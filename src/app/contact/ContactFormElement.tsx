"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import Alert from "@/components/Alert";
import Reveal from "@/components/gsap/Reveal";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "./schema";

export default function ContactFormElement() {
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EJ_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EJ_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EJ_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setAlert({
          message: "Email service is not configured properly.",
          type: "error",
        });
        return;
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        publicKey,
      );

      if (response.status === 200) {
        reset();
        setAlert({
          message: "Thank you! Your message has been sent.",
          type: "success",
        });
        return;
      }
      setAlert({
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    } catch {
      setAlert({
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    }
  };

  const inputClass =
    "w-full bg-deep border border-brand rounded-lg px-3.5 py-2.5 text-paper font-inherit text-[0.95rem] transition-colors duration-200 focus:outline-none focus:border-signal placeholder:text-mist placeholder:opacity-60";

  return (
    <>
      <Reveal
        className="w-full flex items-center xl:max-w-xl mx-auto order-2 md:order-0"
        delay={0.2}
      >
        <form
          className="w-full bg-ink border border-brand rounded-2xl p-[clamp(1.25rem,3vw,2rem)] flex flex-col gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col gap-1.5 text-left">
            <label
              htmlFor="name"
              className="text-[0.85rem] text-paper font-medium"
            >
              Name*
            </label>
            <input
              id="name"
              type="text"
              placeholder="Billy Jhons"
              aria-invalid={!!errors.name}
              className={inputClass}
              {...register("name")}
            />
            {errors.name && (
              <span className="text-[#ef4444] text-[0.85rem] mt-1 block">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label
              htmlFor="email"
              className="text-[0.85rem] text-paper font-medium"
            >
              Email*
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              aria-invalid={!!errors.email}
              className={inputClass}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-[#ef4444] text-[0.85rem] mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label
              htmlFor="phone"
              className="text-[0.85rem] text-paper font-medium"
            >
              Phone number (optional)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              aria-invalid={!!errors.phone}
              className={inputClass}
              {...register("phone")}
            />
            {errors.phone && (
              <span className="text-[#ef4444] text-[0.85rem] mt-1 block">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label
              htmlFor="message"
              className="text-[0.85rem] text-paper font-medium"
            >
              Message*
            </label>
            <textarea
              id="message"
              placeholder="Enter a question, feedback, or suggestions..."
              rows={3}
              aria-invalid={!!errors.message}
              className={`${inputClass} resize-y`}
              {...register("message")}
            ></textarea>
            {errors.message && (
              <span className="text-[#ef4444] text-[0.85rem] mt-1 block">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn--primary w-full mt-2 justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </Reveal>
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
    </>
  );
}
