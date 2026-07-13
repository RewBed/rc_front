import PageBanner from "@/components/Common/PageBanner";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import { getSettings } from "@/lib/api";
import { contactSettings } from "@/lib/content-data";

export default async function ContactPage() {
  const settings = await getSettings();
  const contacts = contactSettings(settings);

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Контакты"
        BGImage="/images/page-banner-contacts-artel.jpg"
      />
      <ContactInfo contacts={contacts} />
      <ContactForm email={contacts.email} />
      <Footer settings={settings} />
    </>
  );
}
