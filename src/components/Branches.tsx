"use client";

import { useBranch } from "@/context/BranchContext";
import { BRANCHES, BRANCH_KEYS, telHref } from "@/data/branches";
import { site } from "@/data/site";

export default function Branches() {
  const { branchKey, setBranch } = useBranch();

  return (
    <section className="branches band" id="branches">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Our branches</div>
            <h2>Two calm rooms in Gurugram</h2>
          </div>
          <p>
            The same therapists&apos; training, the same menu and the same prices at both. Pick the
            one closer to you and book directly with that branch.
          </p>
        </div>
        <div className="bgrid">
          {BRANCH_KEYS.map((key) => {
            const b = BRANCHES[key];
            // A click anywhere on the card, including its buttons, selects this branch.
            // Keyboard users switch branches with the header switch.
            return (
              <article
                key={key}
                className={key === branchKey ? "br sel" : "br"}
                id={`sector-${key}`}
                data-card={key}
                aria-current={key === branchKey ? "true" : undefined}
                onClick={() => setBranch(key)}
              >
                <span className="tag">{b.tag}</span>
                <h3>{b.name}</h3>
                <address>
                  {b.addressLines[0]}
                  <br />
                  {b.addressLines[1]}
                </address>
                <dl className="hours">
                  <dt>Call / WhatsApp</dt>
                  <dd className="num">{b.phone}</dd>
                  <dt>Open</dt>
                  <dd>{site.hours}</dd>
                </dl>
                <div className="line">
                  <a
                    className="btn btn-primary"
                    href={telHref(b)}
                    title={`Call ${b.short}: ${b.phone}`}
                    data-pick={key}
                  >
                    Book at {b.short}
                  </a>
                  <a
                    className="mini"
                    href={telHref(b)}
                    title={`Call ${b.short}: ${b.phone}`}
                  >
                    Call Now
                  </a>
                  <a className="mini" href={b.map} target="_blank" rel="noopener">
                    Directions
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
