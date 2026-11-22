// Packs the contents of out/ into sattva-website.zip for upload to GoDaddy.
// Every file sits at the top level of the zip (index.html, .htaccess, _next/...),
// not inside an "out" folder, so extracting it into public_html just works.
import { existsSync, readdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const zip = "sattva-website.zip";

if (!existsSync("out/index.html") || !existsSync("out/.htaccess")) {
  console.error("out/ is missing index.html or .htaccess. Run `npm run build` first.");
  process.exit(1);
}

// Windows 10/11 and macOS include bsdtar, which writes a .zip when given -a.
// On Windows, call it by full path so Git Bash's GNU tar (no zip support) isn't picked up instead.
const tar =
  process.platform === "win32"
    ? join(process.env.SystemRoot ?? "C:\\Windows", "System32", "tar.exe")
    : "tar";

// Name each top-level item instead of "." so paths inside the zip don't start with "./"
// (Windows Explorer shows a zip like that as empty).
const items = readdirSync("out");
rmSync(zip, { force: true });
const result = spawnSync(tar, ["-a", "-cf", join("..", zip), ...items], { cwd: "out", stdio: "inherit" });
if (result.error || result.status !== 0) {
  console.error(`Could not create ${zip}.`, result.error?.message ?? "");
  process.exit(1);
}
console.log(`Created ${zip}: ${items.length} items at the top level, including index.html, .htaccess and _next/.`);
