import type { ContactSettings } from "@/lib/content-data";

type ContactInfoProps = {
  contacts: ContactSettings;
};

const formatTelHref = (phone: string) => phone.replace(/[^\d+]/g, "");

export default function ContactInfo({ contacts }: ContactInfoProps) {
  const details = [
    contacts.inn && `ИНН ${contacts.inn}`,
    contacts.kpp && `КПП ${contacts.kpp}`,
  ]
    .filter(Boolean)
    .join(" / ");

  return (
    <div className="contact-info-area pt-100 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="icon">
                <i className="pe-7s-mail"></i>
              </div>
              <h3>Email</h3>
              {contacts.email ? (
                <p>
                  <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                </p>
              ) : (
                <p>Связь по email доступна по запросу</p>
              )}
              <p>{contacts.shortName}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="icon">
                <i className="pe-7s-map-2"></i>
              </div>
              <h3>Адрес</h3>
              <p>{contacts.legalAddress}</p>
              {details && <p>{details}</p>}
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="icon">
                <i className="pe-7s-call"></i>
              </div>
              <h3>Телефон</h3>
              {contacts.phone ? (
                <p>
                  <a href={`tel:${formatTelHref(contacts.phone)}`}>
                    {contacts.phone}
                  </a>
                </p>
              ) : (
                <p>Телефон доступен по запросу</p>
              )}
              {contacts.ogrn && <p>ОГРН {contacts.ogrn}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
