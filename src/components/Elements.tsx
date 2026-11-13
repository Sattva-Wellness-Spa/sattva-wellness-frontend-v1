import { ELEMENTS } from "@/data/elements";

export default function Elements() {
  return (
    <section className="elements band" id="philosophy">
      <div className="wrap">
        <div className="intro">
          <div>
            <div className="eyebrow">The idea behind Sattva</div>
            <h2>Five elements, held in balance</h2>
          </div>
          <p>
            Ayurveda holds that the body and the universe are made of the same five elements, the
            Pancha Mahabhuta. When they fall out of balance we feel it as stiffness, fatigue or
            restlessness. Every therapy at Sattva is chosen to bring one of them back into line.
          </p>
        </div>
        <div className="five">
          {ELEMENTS.map((el) => (
            <div key={el.name}>
              <div className="dev">{el.devanagari}</div>
              <h3>{el.name}</h3>
              <p>{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
