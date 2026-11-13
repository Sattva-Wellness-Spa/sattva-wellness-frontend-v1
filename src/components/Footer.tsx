import { BRANCHES, BRANCH_KEYS } from "@/data/branches";
import { footerNav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="band">
      <div className="wrap">
        <div className="f-br">
          {BRANCH_KEYS.map((key) => {
            const b = BRANCHES[key];
            return (
              <span key={key}>
                <b>{b.short}</b> · {b.footerAddress} · <span className="num">{b.phone}</span>
              </span>
            );
          })}
          <span>{site.copyright}</span>
        </div>
        <nav>
          {footerNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
