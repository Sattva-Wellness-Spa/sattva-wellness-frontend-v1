import { FAQ } from "@/data/faq";

export default function Faq() {
  return (
    <section className="faq band" id="faq">
      <div className="wrap">
        <div>
          <div className="eyebrow">Good to know</div>
          <h2>Questions guests ask</h2>
        </div>
        <div>
          {FAQ.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
