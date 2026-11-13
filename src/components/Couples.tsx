import { COUPLES } from "@/data/couples";
import BookButton from "./BookButton";

export default function Couples() {
  return (
    <section className="couples band" id="couples">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Couples&apos; retreat</div>
            <h2>Experiences crafted for two</h2>
          </div>
          <p>
            A private room with warmth, petals and candlelight, just for the two of you. Both
            rituals include a complimentary 30-minute private Jacuzzi session.
          </p>
        </div>
        <div className="cgrid">
          {COUPLES.map((c) => (
            <article className="c" key={c.name}>
              <div>
                {c.bestseller && <span className="best">Bestseller</span>}
                <h3>{c.name}</h3>
                <p>{c.description}</p>
              </div>
              <div className="c-side">
                <small>Per couple</small>
                <strong>{c.price}</strong>
                <span className="free">+ Free 30-min private Jacuzzi</span>
                <BookButton className="btn btn-primary" item={c.name} dataBook>
                  Book for two
                </BookButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
