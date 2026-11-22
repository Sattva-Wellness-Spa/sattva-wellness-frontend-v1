import { THERAPIES } from "@/data/therapies";
import BookButton from "./BookButton";
import WhatsAppLink from "./WhatsAppLink";

export default function Therapies() {
  return (
    <section className="therapies band" id="therapies">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Spa menu 2025</div>
            <h2>Signature therapies</h2>
          </div>
          <p>
            Curated treatments for deep restoration. Every session begins with a short consultation
            and your choice of oil, and ends with herbal tea.
          </p>
        </div>
        <div className="menu">
          {THERAPIES.map((t) => (
            <article className="t" key={t.name}>
              <div className="top">
                <h3>{t.name}</h3>
                <span className="el">{t.element}</span>
              </div>
              <p>{t.description}</p>
              <div className="price">
                <strong>{t.price}</strong>
                <div className="acts">
                  <BookButton className="book" item={t.name}>
                    Call Now
                  </BookButton>
                  <WhatsAppLink className="book" item={t.name}>
                    WhatsApp
                  </WhatsAppLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
