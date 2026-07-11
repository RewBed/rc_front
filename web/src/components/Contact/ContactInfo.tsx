import type { ContactSettings } from "@/lib/content-data";

type ContactInfoProps = {
  contacts: ContactSettings;
};

const formatTelHref = (phone: string) => phone.replace(/[^\d+]/g, "");

export default function ContactInfo({ contacts }: ContactInfoProps) {
  const requisites = [
    ["Полное наименование", contacts.fullName],
    ["Краткое наименование", contacts.shortName],
    ["ИНН", contacts.inn],
    ["КПП", contacts.kpp],
    ["ОГРН", contacts.ogrn],
    ["Юридический адрес", contacts.legalAddress],
  ].filter(([, value]) => value);

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
                <p className="contact-placeholder">Email будет добавлен позже</p>
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
              {contacts.inn && contacts.kpp && (
                <p>
                  ИНН {contacts.inn} / КПП {contacts.kpp}
                </p>
              )}
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
                <p className="contact-placeholder">Телефон будет добавлен позже</p>
              )}
              {contacts.ogrn && <p>ОГРН {contacts.ogrn}</p>}
            </div>
          </div>
        </div>

        <div className="contact-requisites">
          <div className="section-title">
            <h2>Реквизиты</h2>
          </div>

          <dl className="contact-requisites-list">
            {requisites.map(([label, value]) => (
              <div className="contact-requisites-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
