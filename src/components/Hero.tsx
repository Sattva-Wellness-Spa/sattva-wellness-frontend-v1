import BranchText from "./BranchText";
import RippleBowl from "./RippleBowl";

export default function Hero() {
  return (
    <section className="hero band">
      <div className="wrap">
        <div>
          <div className="eyebrow">Wellness spa · Sector 83 &amp; Sector 64, Gurugram</div>
          <h1>
            Return to balance.
            <br />
            <em>One unhurried hour</em> at a time.
          </h1>
          <p className="lede">
            Sattva means purity and harmony. Our therapists work with aromatic oils, Thai and
            Balinese technique and time-tested pressure points to quiet a busy mind and loosen a
            tired body, in rooms kept spotless between every guest.
          </p>
          <div className="ctas">
            <a className="btn btn-primary" href="#book">
              Book on WhatsApp
            </a>
            <a className="btn btn-ghost" href="#therapies">
              See therapies &amp; prices
            </a>
          </div>
          <div className="facts">
            <span>Two branches, one menu, packages valid at both</span>
            <span>Therapies from ₹1,999</span>
            <span>Couples&apos; rituals with private Jacuzzi</span>
          </div>
          <p className="mybranch">
            Booking for{" "}
            <b data-b="short">
              <BranchText field="short" />
            </b>{" "}
            · call or WhatsApp{" "}
            <span className="num" data-b="phone">
              <BranchText field="phone" />
            </span>{" "}
            · <a href="#branches">change branch</a>
          </p>
        </div>
        <RippleBowl />
      </div>
    </section>
  );
}
