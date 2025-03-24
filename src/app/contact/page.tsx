import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactFaq } from "@/components/contact/contact-faq";

export const metadata = {
  title: "Contact | AP Gaming",
  description:
    "Get in touch with AP Gaming for inquiries, sponsorships, or joining our team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Fixed background overlays */}
      <div className="grid-overlay"></div>
      <div className="vignette-overlay"></div>

      <main className="min-h-screen">
        <Navbar />
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactFaq />
        <Footer />
      </main>
    </>
  );
}
