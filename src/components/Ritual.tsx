import { RITUAL_STEPS } from "@/data/ritual";

export default function Ritual() {
  return (
    <section className="ritual band" id="ritual">
      <div className="wrap">
        <div className="eyebrow">What to expect</div>
        <h2>Your visit, from arrival to the last sip of tea</h2>
        <ol className="steps">
          {RITUAL_STEPS.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
