# Make a vegan guide for your own city

This project is free to reuse. If your town doesn't have a good all-vegan restaurant guide, you can build one from this in an afternoon. Here's how.

> If you make one, please tell us: **info@seattlevegangroup.org**. We'd love to see it, cheer you on, and maybe link to each other. (This is a request, not a requirement. The license lets you do whatever you like.)

## What you'll end up with

The same widget you see at [seattlevegangroup.org/guide](https://www.seattlevegangroup.org/guide), but with your city's restaurants, your neighborhood names, and your title. One JavaScript file that you host for free and drop onto your own website.

## What you need

- A free [GitHub](https://github.com) account (to host your file).
- A website you can add a bit of HTML to.
- Time to gather and verify the restaurants. This is the real work; the code is the easy part.

## Step 1: Copy this project

On GitHub, open this repository and click **Fork** (top right). That makes your own copy under your account. Alternatively, just download `guide.js` and `SVG_Guide_Data.csv` and start from those.

## Step 2: Gather and verify your restaurants

The guide is only as good as its data, so this is the part that matters. Our standards:

- **100% vegan only.** Vegan-friendly or "has vegan options" does not qualify. Confirm on the restaurant's own site or menu.
- **Currently open.** Do a quick check before adding a place.
- **Verify against the restaurant's own website**, not directory listings. Addresses, phone numbers, and social handles on third-party sites are often wrong or out of date.
- Leave a field blank rather than guess.

`SVG_Guide_Data.csv` shows the format: one row per restaurant, with up to four locations each (address, neighborhood, and phone line up in parallel). It's the readable copy of the data.

## Step 3: Edit the data in `guide.js`

The list the widget actually renders lives in the `restaurants` array near the top of `guide.js`. Each entry looks like this:

```js
{
  name: "Restaurant Name",
  url: "https://example.com",
  types: ["Cuisine", "Bar"],            // one or more; the first drives the icon
  social: { ig: "https://...", fb: "https://..." },  // omit a key if none
  desc: "One or two sentences about the food.",
  locations: [
    { zone: "Neighborhood", address: "123 Main St, City, ST 00000", phone: "(555) 555-5555" }
  ]
}
```

Replace our restaurants with yours. Delete the ones you don't need, copy the pattern for new ones.

## Step 4: Set your zones, cuisines, and title

A few things to change for your city:

- **Zones (neighborhoods).** Near the top of `guide.js`, `ZONE_ORDER` is the list of area names and the order they appear in. Use your city's neighborhoods. Whatever `zone` values you use in the restaurant data should match this list. Tip: name zones the way locals and local guides talk about the city, and don't create a zone for a single restaurant if a bigger nearby area covers it.
- **Cuisine icons.** The `CUISINE` map assigns each cuisine an icon and color. If you add a cuisine we didn't use, add a line for it (pick an icon from [Tabler Icons](https://tabler.io/icons)). Keep icons plant-based or neutral, never an animal or a piece of meat.
- **Title and subtitle.** Search `guide.js` for the heading text ("Seattle vegan restaurant guide") and the subtitle ("26 all-vegan spots...") and change them, including the count.
- **Every `jzesbaugh/svg-public` reference.** Search `guide.js` for `jzesbaugh/svg-public` — it appears three times: the footer's "View the code & data" link, the manifest URL, and the `apple-touch-icon` URL. Replace all three with `YOUR_USERNAME/YOUR_REPO` (or delete the footer link and the two icon lines if you'd rather skip either feature). If you miss the manifest/icon lines, visitors who save your fork to their home screen get our Seattle icon and guide name instead of yours; if you miss the footer link, your guide sends visitors to our repo instead of yours. Also swap in your own `manifest.json` and icon files under `icons/`.

## Step 5: Host your file

Commit your edited `guide.js` to your forked repository (on GitHub: open the file, click the pencil to edit, or **Add file → Upload files**, then **Commit**).

Your file is then served free through jsDelivr at:

```
https://cdn.jsdelivr.net/gh/YOUR_USERNAME/YOUR_REPO@main/guide.js
```

## Step 6: Put it on your website

Add these two lines to your page. The first is where the guide appears; the second loads your file:

```html
<div id="vegan-restaurant-guide">Loading…</div>
<script src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/YOUR_REPO@main/guide.js"></script>
```

Save, reload your page, and your guide is live. See [README.md](README.md) for embedding notes (caching, empty-div gotchas, etc.).

## Keeping it fresh

Restaurants open, close, and move. Plan to re-check the list every few months, and give people an easy way to report errors (we use an email link in the footer). When you update `guide.js`, purge jsDelivr once so the change goes live right away:

```
https://purge.jsdelivr.net/gh/YOUR_USERNAME/YOUR_REPO@main/guide.js
```

## License

Free to use under the [MIT License](LICENSE). The data is public domain. Build something good, and let us know: **info@seattlevegangroup.org**.
