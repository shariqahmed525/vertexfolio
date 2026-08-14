import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import { siteContent } from "@/config";

export const metadata = {
  title: siteContent.contact.meta.title,
  description: siteContent.contact.meta.description,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
