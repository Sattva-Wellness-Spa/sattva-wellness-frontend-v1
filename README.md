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

## Deploy to cPanel / MilesWeb

1. Run `npm run build`. Everything the site needs is now in the `out/` folder.
2. Log in to cPanel and open **File Manager → public_html**.
3. Delete the old site files in `public_html`, but keep anything your host put there that you still need (for example `.well-known/`, `cgi-bin/`).
4. Upload **the contents** of `out/`, not the `out` folder itself. The quickest way: zip the contents of `out/`, upload the zip, then use **Extract** in File Manager.
5. Make sure `.htaccess` was uploaded. It's a hidden file: in File Manager, open **Settings** and tick **Show Hidden Files (dotfiles)**.
6. Open the site and hard-refresh (Ctrl + F5).

### What `.htaccess` does

`public/.htaccess` is copied into `out/` on every build. It:

- serves `index.html` for the home page and `404.html` for missing pages,
- caches `/_next/static/` files for one year (their names change on every build, so this is safe),
- makes browsers re-check HTML pages on every visit, so a new upload shows up straight away,
- has a commented-out block that redirects to `https://www.` once SSL is active on the domain.
