import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(5, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
