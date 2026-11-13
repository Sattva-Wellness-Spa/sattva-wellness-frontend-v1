# Differences from reference/index.html

Layout, colours, copy, prices, numbers, ids, classes and `data-*` attributes match the reference. These are the only places where the Next.js version differs, and why.

## Fonts

- Marcellus, Karla and Tiro Devanagari Sanskrit are self-hosted with `next/font` instead of loaded from the Google Fonts stylesheet. The `--f-display`, `--f-body` and `--f-deva` tokens start with the `next/font` variables, followed by the reference's fallback stacks. This loads faster and doesn't depend on Google at runtime.

## Head

- `<meta name="claude:viewport-fit-sides">` is omitted. It only applies inside the Claude artifact viewer, not on a real website.
- The JSON-LD `<script>` is at the start of `<body>` instead of in `<head>`. Its content is identical, and Google reads JSON-LD in either place.
- Added `sitemap.xml`, `robots.txt` and an SVG favicon, as the build prompt requested. The favicon shows only "स", because the full word "सत्त्व" is unreadable at 16px. It's drawn with the visitor's system Devanagari font.

## Behaviour

- **Booking date:** the reference computes "tomorrow" and the minimum date with `toISOString()`, which is in UTC. In India, between midnight and 5:30 AM, that gives today's date as "tomorrow" and yesterday as the earliest date. This version uses the visitor's local date.
- **Copy buttons:** where the Clipboard API isn't available (for example over plain `http://`), the reference throws a script error. This version shows the fallback toast instead ("Number: …" on branch cards, "Call or WhatsApp …" in the booking panel). The reference's "select the number text" fallback is unreachable there (no `[data-copy]` button follows a `.phone` element), so it isn't ported.
- **Branch switcher keyboard support** (requested in the build prompt): arrow keys, Home and End move the selection, and only the selected option is in the Tab order (standard radiogroup behaviour).
