import { PACKAGES, PACKAGES_NOTE } from "@/data/packages";
import BookButton from "./BookButton";

export default function Packages() {
  return (
    <section className="packages band" id="packages">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Exclusive wellness packages</div>
            <h2>Come back more, pay less</h2>
          </div>
          <p>
            Prepaid packages for regulars, couples and families. Pick the one that matches how
            often you visit, and use your sessions at either branch.
          </p>
        </div>
        <div className="pgrid">
          {PACKAGES.map((p) => (
            <article className={p.featured ? "p feat" : "p"} key={p.code}>
              <div className="p-head">
                <span className="code">{p.code}</span>
                <h3>{p.name}</h3>
                <strong>{p.price}</strong>
                <span className="save">You save {p.save}</span>
              </div>
              <div className="tbl">
                <table>
                  <thead>
                    <tr>
                      <th>Therapy</th>
                      <th>Sessions</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.rows.map((row) => (
                      <tr key={row.therapy}>
                        <td>{row.therapy}</td>
                        <td>{row.sessions}</td>
                        <td>{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <dl className="p-meta">
                <dt>Total</dt>
                <dd>{p.total}</dd>
                <dt>Validity</dt>
                <dd>{p.validity}</dd>
                <dt>Actual value</dt>
                <dd>{p.actual}</dd>
              </dl>
              <BookButton className="btn btn-ghost" item={p.enquiry} dataBook>
                Enquire about this package
              </BookButton>
            </article>
          ))}
        </div>
        <p className="note">{PACKAGES_NOTE}</p>
      </div>
    </section>
  );
}
