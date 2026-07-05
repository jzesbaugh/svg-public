# Seattle Vegan Restaurant Guide

A lightweight, embeddable directory of 100% vegan restaurants in the greater Seattle area, from Capitol Hill to Everett. It's a single JavaScript file with no build step, no dependencies, and no tracking. Drop it on any web page and it renders a searchable, filterable guide.

**Live:** https://www.seattlevegangroup.org/guide
Maintained by [Seattle Vegan Group](https://www.seattlevegangroup.org). Free to use and adapt (see [License](#license)).

## What it does

- Lists every fully vegan restaurant we can verify in the region (currently 26).
- Filter by **area** (12 neighborhood zones) or **cuisine**.
- Free-text search across names, cuisines, neighborhoods, and addresses.
- Each card links to the restaurant's website, phone, Google reviews, and social pages.
- Self-contained: it injects its own styles and icon font, so there is nothing else to install.

> **Beta.** The data is verified by hand but the world changes. If you spot a wrong address, an old phone number, a closed spot, or a place we missed, email **info@seattlevegangroup.org**.

## Add it to your own website

Two steps. First, put a container where you want the guide to appear:

```html
<div id="vegan-restaurant-guide">Loading…</div>
```

Then load the script once, anywhere on the page (the end of the `<body>` or your site's header/footer both work):

```html
<script src="https://cdn.jsdelivr.net/gh/jzesbaugh/svg-public@main/guide.js"></script>
```

That's it. The script finds the `#vegan-restaurant-guide` element and builds the guide inside it.

### Notes

- **Keep some text in the container** (like `Loading…`). Some CMS editors delete empty `<div>` elements on save; the text keeps it alive and the script replaces it. (Brilliant Directories does this, which is why the example includes it.)
- **No dependencies.** The widget adds its own CSS and the Tabler icon font automatically. It won't touch the rest of your page: all styles are scoped under `#vegan-restaurant-guide`.
- **Pinning a version.** `@main` always serves the latest file. jsDelivr caches it for up to ~12 hours; to force an update immediately after a change, load `https://purge.jsdelivr.net/gh/jzesbaugh/svg-public@main/guide.js` once. To lock to a fixed version, replace `@main` with a tag or commit hash.
- **SEO (optional).** For rich search results you can add JSON-LD structured data (`ItemList` of restaurants) to your page `<head>`. Ask us if you'd like a copy.

## Updating the data

- **`SVG_Guide_Data.csv`** is the readable source of truth (one row per restaurant, 19 columns, up to four locations each).
- **`guide.js`** is what actually renders. The restaurant list lives in the `restaurants` array near the top of the file.

To change the guide: edit both so they match, commit `guide.js`, then purge jsDelivr (see above). When the count changes, update the subtitle line in `guide.js` too.

## Data and license

The **code** in this repository is released under the [MIT License](LICENSE): free to use, copy, modify, and redistribute.

The **restaurant data** (`SVG_Guide_Data.csv`) is contributed to the public domain. Use it however you like, no attribution required. A link back to Seattle Vegan Group is always appreciated but never required.

Icons are from [Tabler Icons](https://tabler.io/icons) (MIT).

## Make one for your own city

Anyone is welcome to adapt this for a different area. See **[MAKE-YOUR-OWN.md](MAKE-YOUR-OWN.md)** for a step-by-step walkthrough. If you build one, we'd genuinely love to hear about it: **info@seattlevegangroup.org**.

## Contact

Questions, corrections, or a vegan spot we should add: **info@seattlevegangroup.org**
