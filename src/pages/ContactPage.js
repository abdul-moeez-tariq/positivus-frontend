import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import OfficeMap from "../components/contact/OfficeMap";
import FAQ from "../components/contact/FAQ";
import ContactCTA from "../components/contact/ContactCTA";

function ContactPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <ContactHero />

        {/* Contact Information */}
        <ContactInfo />

        {/* Contact Form */}
        <ContactForm />

        {/* Google Map */}
        <OfficeMap />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Bottom CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
