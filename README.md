# Sattva Wellness Spa: website

The one-page website for Sattva Wellness Spa (Sector 83 and Sector 64, Gurugram), built with Next.js (App Router, TypeScript) and exported as plain static files.

`reference/index.html` is the original design and the source of truth. The Next.js site must look and behave exactly like it. Any deliberate difference is listed in [CHANGES.md](CHANGES.md).

## Requirements

- Node.js 20 or newer (`node -v`)
- npm

## Run it locally

```bash
npm install      # first time only, and after package.json changes
npm run dev      # http://localhost:3000, reloads as you edit
```

## Check and build

```bash
npm run lint     # must report no problems
npm run build    # type-checks and writes the finished site to out/
```

To preview the built site exactly as it will be served:

```bash
npx serve out
```

## Where to change things

| What | File |
|---|---|
| Prices, therapy names and descriptions | `src/data/therapies.ts` |
| Couples' rituals | `src/data/couples.ts` |
| Packages | `src/data/packages.ts` |
| Branch addresses, phone numbers, map links | `src/data/branches.ts` |
| Opening hours, page title, SEO text, nav links | `src/data/site.ts` |
| FAQ | `src/data/faq.ts` |
| Colours, fonts, spacing | `src/app/globals.css` |

The booking form's Therapy list is built automatically from the therapies, couples' rituals and packages.

## Host on GoDaddy

The site is plain files (HTML, CSS, JS, fonts), so it runs on GoDaddy's ordinary **Web Hosting (cPanel, Linux)** plan. There's no server code or database.

> Make sure the plan is **Web Hosting with cPanel**. GoDaddy's Website Builder and Managed WordPress can't host this site, and Windows (Plesk) hosting ignores `.htaccess`.

### 1. Build the upload file

```bash
npm install          # first time only
npm run build:zip    # builds the site and creates sattva-website.zip
```

`sattva-website.zip` (in the project folder) holds everything the site needs, including the hidden `.htaccess` file. The zip is made with the `tar` command built into Windows 10/11 and macOS.

### 2. Connect the domain to the hosting (first time only)

If the domain and the hosting are in the same GoDaddy account, pick `sattvawellnessspa.com` when you set up the hosting and GoDaddy connects them for you.

Otherwise, in GoDaddy go to **Domain → DNS** and set:

| Type | Name | Value |
|---|---|---|
| A | `@` | your hosting's IP address (shown in the hosting dashboard / cPanel) |
| CNAME | `www` | `@` |

DNS changes usually take effect within an hour, sometimes up to 48 hours.

### 3. Upload the site

1. GoDaddy → **My Products → Web Hosting → Manage → cPanel Admin**, then open **File Manager**.
2. Open **Settings** (top right), tick **Show Hidden Files (dotfiles)** and save.
3. Open **public_html**. Delete GoDaddy's placeholder or any old site files, but keep `.well-known/` and `cgi-bin/` if they're there.
4. Click **Upload**, choose `sattva-website.zip`, wait for it to finish, then go back to `public_html`.
5. Right-click `sattva-website.zip` → **Extract** → extract into `/public_html`. Then delete the zip.
6. Check that `public_html` now contains `index.html`, `.htaccess` and the `_next` folder directly, not inside a subfolder.
7. Open the site and hard-refresh (Ctrl + F5).

### 4. Switch on HTTPS (first time only)

GoDaddy's cPanel plans include a free SSL certificate, which is installed some time after the domain is connected (allow a few hours). Check in the hosting dashboard if it doesn't appear.

Once `https://www.sattvawellnessspa.com/` opens with a padlock:

1. In `public/.htaccess`, remove the `# ` from the start of each line in the **GO LIVE** block.
2. Run `npm run build:zip` and upload as in step 3 (or upload just the new `out/.htaccess`).
3. Open `http://sattvawellnessspa.com`. It should land on `https://www.sattvawellnessspa.com/`.

Don't enable this block before the padlock works, or visitors will see a security warning.

### 5. After launch

- **Share preview:** send the link to yourself on WhatsApp. It should show the Sattva card from `src/app/opengraph-image.png`. To change the picture, replace that file (1200 × 630 px, under 300 KB) and the text in `opengraph-image.alt.txt`. WhatsApp and Facebook cache previews for a while.
- **Google:** add the site in [Google Search Console](https://search.google.com/search-console), then submit `https://www.sattvawellnessspa.com/sitemap.xml`. Put the website link on both Google Business Profiles.

### Updating the site later

Edit, run `npm run build:zip`, then repeat step 3 (overwrite when asked). Visitors see the change on their next visit. Old files left in `_next/` do no harm; to tidy up, delete the `_next` folder before extracting.

### If something goes wrong

| Problem | Fix |
|---|---|
| "500 Internal Server Error" on every page | Usually `.htaccess`. Rename it to `htaccess.off` in File Manager. If the site comes back, undo your last change to `public/.htaccess` and re-upload. |
| GoDaddy placeholder page still shows | An old `index.html`/`default.html` is left in `public_html`, or DNS hasn't updated yet. |
| Site looks unstyled | The `_next` folder is missing or in the wrong place. It must sit directly in `public_html`. |
| Using a different domain | Change `url` in `src/data/site.ts` and the domain in the **GO LIVE** block of `public/.htaccess`, then rebuild. |

### What `.htaccess` does

`public/.htaccess` is copied into `out/` on every build. It:

- serves `index.html` for the home page and `404.html` for missing pages,
- adds security headers (Content-Security-Policy, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, and HSTS once HTTPS is on),
- compresses HTML, CSS and JS,
- caches `/_next/static/` files for one year (their names change on every build, so this is safe),
- makes browsers re-check pages on every visit, so a new upload shows up straight away,
- has a commented-out **GO LIVE** block that redirects to `https://www.` once SSL is active.

The Content-Security-Policy only allows files from this site. If you add Google Analytics, a Maps embed, a chat widget or similar later, add its domains to that line or the browser will block it.
