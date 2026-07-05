/* ============================================================
   SVG Vegan Restaurant Guide — self-contained widget (external file)
   Source of truth: SVG_Guide/SVG_VeganGuide.html — regenerate this when data changes.

   WHY THIS FILE: Brilliant Directories corrupts complex code pasted into its
   content/code fields (strips <script> and <input>, mangles the JS so it won't parse).
   An externally hosted file is immune — BD only links to it, it can't edit it.

   HOW TO USE ON /guide (three tiny pieces, none of which BD can break):
     1. BODY (HTML/code block):  <div id="vegan-restaurant-guide"></div>
     2. HEAD TAGS slot:          the SEO JSON-LD from SVG_Guide_HeadTags.html
                                 (the icon font is injected by this file, so the
                                  <link> is optional there now).
     3. FOOTER JS slot OR HEAD TAGS slot:
                                 <script src="HOSTED_URL/guide.js"></script>
        - GitHub + jsDelivr:  https://cdn.jsdelivr.net/gh/USER/REPO@main/guide.js
        - BD File Manager:    https://www.seattlevegangroup.org/your-upload-path/guide.js
   ============================================================ */
(function () {
  "use strict";

  var ICON_HREF = "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css";

  var CSS = `
  #vegan-restaurant-guide, #vegan-restaurant-guide * { box-sizing: border-box; margin: 0; padding: 0; }
  #vegan-restaurant-guide { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #faf6ef; color: #23201a; padding: 1.5rem; max-width: 720px; margin: 0 auto; }

  #vegan-restaurant-guide .guide-head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
  #vegan-restaurant-guide .guide-mark { width: 44px; height: 44px; border-radius: 12px; background: #0d5c46; color: #bfe6d6; display: flex; align-items: center; justify-content: center; font-size: 23px; flex-shrink: 0; }
  #vegan-restaurant-guide h1 { font-size: 21px; font-weight: 600; color: #0d3a2c; line-height: 1.1; }
  #vegan-restaurant-guide .subtitle { font-size: 12px; color: #9a8f7c; margin-top: 3px; }

  #vegan-restaurant-guide input[type="text"] { width: 100%; padding: 9px 13px; border: 1px solid #e3d9c6; border-radius: 9px; font-size: 14px; background: #fff; margin-bottom: 1.1rem; outline: none; color: #23201a; }
  #vegan-restaurant-guide input[type="text"]:focus { border-color: #1d8a6b; box-shadow: 0 0 0 3px rgba(29,138,107,0.13); }
  #vegan-restaurant-guide input[type="text"]::placeholder { color: #b3a892; }

  #vegan-restaurant-guide .tabs { display: flex; margin-bottom: 1rem; border: 1px solid #e3d9c6; border-radius: 9px; overflow: hidden; background: #fff; }
  #vegan-restaurant-guide .tab { flex: 1; padding: 8px 12px; font-size: 13px; text-align: center; cursor: pointer; color: #6b6453; transition: all 0.12s; user-select: none; }
  #vegan-restaurant-guide .tab:first-child { border-right: 1px solid #e3d9c6; }
  #vegan-restaurant-guide .tab.active { background: #0d5c46; color: #fff; font-weight: 500; }

  #vegan-restaurant-guide .filter-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.4rem; }
  #vegan-restaurant-guide .chip { font-size: 13px; padding: 5px 13px; border-radius: 999px; border: 1px solid #e3d9c6; background: #fff; color: #6b6453; cursor: pointer; transition: all 0.12s; user-select: none; }
  #vegan-restaurant-guide .chip:hover { border-color: #c4603d; color: #c4603d; }
  #vegan-restaurant-guide .chip.active { background: #c4603d; border-color: #c4603d; color: #fff; font-weight: 500; }

  #vegan-restaurant-guide .results-meta { font-size: 13px; color: #9a8f7c; margin-bottom: 12px; }

  #vegan-restaurant-guide .card { background: #fff; border-radius: 12px; padding: 14px 16px; margin-bottom: 11px; box-shadow: 0 1px 3px rgba(40,30,10,0.06), 0 0 1px rgba(40,30,10,0.04); display: flex; gap: 12px; }
  #vegan-restaurant-guide .card-ico { width: 40px; height: 40px; border-radius: 11px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 20px; }
  #vegan-restaurant-guide .card-body { flex: 1; min-width: 0; }
  #vegan-restaurant-guide .card-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 5px; }
  #vegan-restaurant-guide .card-name { font-size: 17px; font-weight: 500; line-height: 1.25; }
  #vegan-restaurant-guide .card-name a { color: #23201a; text-decoration: none; }
  #vegan-restaurant-guide .card-name a:hover { color: #1d8a6b; }
  #vegan-restaurant-guide .tag-row { display: flex; gap: 5px; flex-wrap: wrap; }
  #vegan-restaurant-guide .tag { font-size: 11px; font-weight: 500; padding: 2px 9px; border-radius: 999px; white-space: nowrap; }
  #vegan-restaurant-guide .card-locations { display: flex; flex-direction: column; gap: 6px; margin: 6px 0 9px; }
  #vegan-restaurant-guide .loc-line { font-size: 12px; }
  #vegan-restaurant-guide .loc-zone { display: block; color: #1d8a6b; font-weight: 500; margin-bottom: 1px; }
  #vegan-restaurant-guide .loc-addr-row { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
  #vegan-restaurant-guide .loc-addr { color: #a89c86; }
  #vegan-restaurant-guide .card-phone { font-size: 12px; font-weight: 500; color: #0d5c46; background: #e3f1ea; border: 1px solid #c4e3d4; padding: 2px 9px; border-radius: 999px; display: inline-flex; align-items: center; gap: 5px; text-decoration: none; }
  #vegan-restaurant-guide .card-phone:hover { background: #d3ebdf; }
  #vegan-restaurant-guide .card-desc { font-size: 13px; color: #5c5547; line-height: 1.5; margin-bottom: 10px; }
  #vegan-restaurant-guide .card-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
  #vegan-restaurant-guide .website-link { font-size: 13px; font-weight: 500; color: #1d8a6b; display: inline-flex; align-items: center; gap: 5px; text-decoration: none; }
  #vegan-restaurant-guide .website-link:hover { color: #0d5c46; text-decoration: underline; }
  #vegan-restaurant-guide .footer-left { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  #vegan-restaurant-guide .reviews-link { font-size: 13px; font-weight: 500; color: #5c5547; display: inline-flex; align-items: center; gap: 5px; text-decoration: none; }
  #vegan-restaurant-guide .reviews-link:hover { color: #23201a; }
  #vegan-restaurant-guide .reviews-link .ti-brand-google { color: #4285F4; }
  #vegan-restaurant-guide .social-links { display: flex; gap: 7px; }
  #vegan-restaurant-guide .social-link { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 16px; color: #fff; transition: transform 0.12s, opacity 0.12s; flex-shrink: 0; }
  #vegan-restaurant-guide .social-link:hover { transform: scale(1.12); opacity: 0.9; }
  #vegan-restaurant-guide .social-link--ig { background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }
  #vegan-restaurant-guide .social-link--fb { background: #1877f2; }
  #vegan-restaurant-guide .empty { text-align: center; padding: 2rem; color: #b3a892; font-size: 14px; }

  #vegan-restaurant-guide .guide-foot { font-size: 12px; color: #9a8f7c; text-align: center; margin-top: 1.75rem; padding-top: 1rem; border-top: 1px solid #ecdcc6; line-height: 1.6; }
  #vegan-restaurant-guide .guide-foot a { color: #c4603d; text-decoration: none; }
  #vegan-restaurant-guide .guide-foot a:hover { text-decoration: underline; }
  `;

  var MARKUP =
    '<div class="guide-head">' +
    '  <div class="guide-mark"><i class="ti ti-leaf"></i></div>' +
    '  <div>' +
    '    <h1>Seattle vegan restaurant guide</h1>' +
    '    <div class="subtitle">26 all-vegan spots · Capitol Hill to Everett</div>' +
    '  </div>' +
    '</div>' +
    '<input type="text" id="svg-guide-search" placeholder="Search restaurants…" />' +
    '<div class="tabs">' +
    '  <div class="tab active" id="svg-guide-tab-hood" data-tab="hood">Area</div>' +
    '  <div class="tab" id="svg-guide-tab-type" data-tab="type">Cuisine</div>' +
    '</div>' +
    '<div class="filter-row" id="svg-guide-filters"></div>' +
    '<div class="results-meta" id="svg-guide-meta"></div>' +
    '<div id="svg-guide-cards"></div>' +
    '<div class="guide-foot">Last updated July 5, 2026 · Spotted something off? <a href="mailto:info@seattlevegangroup.org">Email us a correction</a></div>';

  function boot() {
    var root = document.getElementById('vegan-restaurant-guide');
    if (!root) return;

    // Inject icon font once
    if (!document.querySelector('link[data-svg-guide-icons]')) {
      var lk = document.createElement('link');
      lk.rel = 'stylesheet';
      lk.href = ICON_HREF;
      lk.setAttribute('data-svg-guide-icons', '');
      document.head.appendChild(lk);
    }
    // Inject styles once
    if (!document.getElementById('svg-guide-styles')) {
      var st = document.createElement('style');
      st.id = 'svg-guide-styles';
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    // Build markup (search input is created here, so BD can never strip it)
    root.innerHTML = MARKUP;

    var restaurants = [
      { name: "Araya's Place", url: "https://www.arayasplace.com", types: ["Thai"], social: { ig: "https://instagram.com/arayasplace", fb: "https://facebook.com/ArayasVegetarianPlace" }, desc: "Classic Thai — Pad Thai, Massaman Banana Curry, Avocado Curry. Two locations.", locations: [
        { zone: "U-District", address: "5240 University Way NE, Seattle, WA 98105", phone: "(206) 524-4332" },
        { zone: "Eastside", address: "10246 Main St Ste C, Bellevue, WA 98004", phone: "(425) 454-2440" } ] },
      { name: "Ba Bar Green", url: "https://babargreen.com", types: ["Asian Fusion"], social: { ig: "https://instagram.com/babargreenseattle" }, desc: "Easygoing plant-based Asian spot with creative bowls, noodles, banh mi, pho, curries, and snacks inspired by Vietnamese, Malaysian, Korean, and Singaporean flavors.", locations: [
        { zone: "South Lake Union", address: "500 Terry Ave N, Seattle, WA 98109", phone: "(206) 582-2131" } ] },
      { name: "Box Bar", url: "https://boxbarseattle.com", types: ["American", "Bar"], social: {}, desc: "Casual plant-based brunch, dinner, and crafted cocktails. 21+ only.", locations: [
        { zone: "West Seattle", address: "5401 California Ave SW, Seattle, WA", phone: "(206) 432-9554" } ] },
      { name: "Brown Sugar Baking Co.", url: "https://brownsugarbakingcompany.com", types: ["Bakery"], social: { ig: "https://instagram.com/brownsugarbaking", fb: "https://facebook.com/BSBCO" }, desc: "Black woman-owned vegan bakery. Cinnamon buns, brownies, custom event cakes.", locations: [
        { zone: "Capitol Hill / Central District", address: "308 22nd Ave S Ste 101, Seattle, WA 98144", phone: "(206) 556-0749" } ] },
      { name: "Cafe Red", url: "https://caferedseattle.com", types: ["Café"], social: { ig: "https://instagram.com/caferedseattle", fb: "https://facebook.com/caferedseattle" }, desc: "All-vegan café with artisanal coffee, breakfast sandwiches, burritos, mac & cheese.", locations: [
        { zone: "Rainier Valley", address: "7148 Martin Luther King Jr Way S, Seattle, WA 98118", phone: "(206) 257-1267" } ] },
      { name: "Chu Minh Tofu & Vegan Deli", url: "https://chuminhtofu.com", types: ["Vietnamese"], social: { ig: "https://instagram.com/chuminhtofu", fb: "https://facebook.com/chuminhtofu" }, desc: "Vietnamese deli, all-you-can-eat buffet, pho, banh mi. Two locations.", locations: [
        { zone: "Capitol Hill / Central District", address: "1043 S Jackson St, Seattle, WA 98104", phone: "(206) 723-6095" },
        { zone: "Rainier Valley", address: "6754 Martin Luther King Jr Way S, Seattle, WA 98118", phone: "(206) 457-4469" } ] },
      { name: "Dough Joy Donuts", url: "https://www.doughjoydonuts.com", types: ["Bakery"], social: { ig: "https://instagram.com/doughjoydonuts", fb: "https://facebook.com/doughjoydonuts" }, desc: "Colorful vegan donuts with creative rotating flavors and espresso at each location.", locations: [
        { zone: "West Seattle", address: "4310 SW Oregon St, Seattle, WA 98116", phone: "(323) 739-8112" },
        { zone: "Ballard", address: "2052 NW Market St, Seattle, WA 98107", phone: "" } ] },
      { name: "El Borracho", url: "https://www.elborracho.co", types: ["Mexican", "Bar"], social: { ig: "https://instagram.com/elborrachoseattle" }, desc: "Lively plant-based Mexican bar — tacos, burritos, nachos near Pike Place Market. All ages before 5pm; 21+ only after 5pm.", locations: [
        { zone: "Downtown / Belltown", address: "1521 1st Ave, Seattle, WA 98101", phone: "(206) 538-0144" } ] },
      { name: "Frankie & Jo's", url: "https://frankieandjos.com", types: ["Ice Cream"], social: { ig: "https://instagram.com/frankieandjos" }, desc: "Creamy inventive plant-based ice cream with seasonal rotating flavors.", locations: [
        { zone: "Capitol Hill / Central District", address: "1010 E Union St, Seattle, WA 98122", phone: "(206) 557-4603" } ] },
      { name: "Georgetown Liquor Co.", url: "https://glcseattle.com", types: ["American", "Bar"], social: { ig: "https://instagram.com/glcseattle" }, desc: "Punk bar with all-vegan pub grub — burgers, tacos, nachos, local brews. 21+ only.", locations: [
        { zone: "Georgetown", address: "5501 Airport Way S Ste B, Seattle, WA 98108", phone: "(206) 402-5367" } ] },
      { name: "Harvest Beat", url: "https://www.harvestbeat.com", types: ["Fine Dining"], social: { ig: "https://instagram.com/harvestbeat_", fb: "https://facebook.com/HarvestBeatSutra" }, desc: "Seasonal 5-course prix-fixe tasting menu built around Pacific Northwest produce. Reservations strongly recommended; single evening seating.", locations: [
        { zone: "Fremont & Wallingford", address: "1711 N 45th St, Seattle, WA 98103", phone: "(206) 547-1348" } ] },
      { name: "Kati Vegan Thai", url: "https://kativeganthai.com", types: ["Thai"], social: { ig: "https://instagram.com/kativeganthai" }, desc: "Cauliflower Bombs, Devil Wings, Khao Soi curry, Old-Style Pad Thai.", locations: [
        { zone: "South Lake Union", address: "1190 Thomas St, Seattle, WA 98109", phone: "(206) 900-7954" },
        { zone: "Eastside", address: "12540 120th Ave NE Ste 110, Kirkland, WA 98034", phone: "(323) 989-1968" } ] },
      { name: "Life on Mars", url: "https://lifeonmarsseattle.com", types: ["American", "Bar"], social: { ig: "https://instagram.com/lifeonmarsseattle" }, desc: "Plant-based cocktail bar with creative small plates and a vinyl vibe. 21+ only.", locations: [
        { zone: "Capitol Hill / Central District", address: "722 E Pike St, Seattle, WA 98122", phone: "(206) 323-9166" } ] },
      { name: "Pi Vegan Pizzeria", url: "https://www.pizzapivegan.com", types: ["Pizza"], social: { ig: "https://instagram.com/pivegan", fb: "https://facebook.com/veganpizzapi" }, desc: "Mac & Cheese Pizza, Buffalo Chik'n, Artichokey Hokey Pokey. Calzones + wings.", locations: [
        { zone: "U-District", address: "5301 Roosevelt Way NE, Seattle, WA 98105", phone: "(206) 343-1415" } ] },
      { name: "Plantiful Superfoods", url: "https://www.plantiful.us", types: ["Café", "Fast Casual"], social: { ig: "https://instagram.com/plantifulsuperfoods", fb: "https://facebook.com/eatplantiful" }, desc: "Smoothies, superfood bowls, burgers, pizzas, acai bowls. Four locations.", locations: [
        { zone: "Capitol Hill / Central District", address: "734 12th Ave, Seattle, WA 98122", phone: "(206) 829-6868" },
        { zone: "South Lake Union", address: "340 Westlake Ave N, Seattle, WA 98109", phone: "(206) 687-6269" },
        { zone: "Downtown / Belltown", address: "1405 1st Ave, Seattle, WA 98101", phone: "(206) 567-8979" },
        { zone: "Snohomish County", address: "19723 Highway 99 Ste D, Lynnwood, WA 98036", phone: "(425) 276-6999" } ] },
      { name: "Rojo's Mexican Food", url: "https://www.rojosmexicanfood.com", types: ["Mexican"], social: { ig: "https://instagram.com/rojosmexicanfood" }, desc: "Fully vegan tacos, burritos, tortas, quesadillas. Fast-casual counter service.", locations: [
        { zone: "Downtown / Belltown", address: "217 James St, Seattle, WA 98104", phone: "" } ] },
      { name: "The Sushi Samurai", url: "https://thesushisamurai.com", types: ["Sushi"], social: { ig: "https://instagram.com/the.sushi.samurai" }, desc: "Creative plant-based sushi — inventive rolls, nigiri, and appetizers.", locations: [
        { zone: "Downtown / Belltown", address: "1817 Queen Anne Ave N, Seattle, WA 98109", phone: "(206) 766-0298" } ] },
      { name: "Teapot Vegetarian House", url: "https://teapotvegetarianhouse.com", types: ["Pan-Asian"], social: { fb: "https://facebook.com/teapotvegetrian" }, desc: "Pan-Asian comfort food — dumplings, noodles, Kung Pao tofu, tofu cheesecake.", locations: [
        { zone: "Eastside", address: "15230 NE 24th St, Redmond, WA 98052", phone: "(425) 373-1888" } ] },
      { name: "Veggie Grill", url: "https://www.veggiegrill.com", types: ["Fast Casual"], social: { ig: "https://instagram.com/veggiegrill", fb: "https://facebook.com/veggiegrill" }, desc: "Burgers, sandwiches, bowls, salads. Go-to fast-casual vegan comfort food.", locations: [
        { zone: "Downtown / Belltown", address: "1427 4th Ave, Seattle, WA 98101", phone: "(206) 934-1144" },
        { zone: "U-District", address: "2681 NE University Village St, Seattle, WA 98105", phone: "(206) 962-5566" },
        { zone: "Ballard", address: "1401 NW 46th St Suite 126, Seattle, WA 98107", phone: "(206) 800-6090" } ] },
      { name: "Veggie Life", url: "https://www.veggielifeseattle.com", types: ["Chinese"], social: { fb: "https://www.facebook.com/profile.php?id=61576880651955" }, desc: "Plant-based Chinese restaurant with Vegetarian Peking Duck, Tofu Clay Pot, Kung Pao Tofu, General Tso's Mushrooms, and traditional noodle and rice dishes.", locations: [
        { zone: "Eastside", address: "8518 122nd Ave NE, Kirkland, WA 98033", phone: "(206) 817-7467" } ] },
      { name: "Vital Creations", url: "https://vitalcreationsvegancafe.com", types: ["Café"], social: { ig: "https://instagram.com/vitalcreationsveganbistro" }, desc: "Vegan café and bistro with plant-based comfort food and creative daily specials.", locations: [
        { zone: "Fremont & Wallingford", address: "3601 Fremont Ave N Ste 207, Seattle, WA 98103", phone: "(206) 829-9619" } ] },
      { name: "Yaygit", url: "https://yaygit.com", types: ["Café"], social: { ig: "https://instagram.com/yaygit", fb: "https://facebook.com/yaygit" }, desc: "Gut-healthy juice bar — smoothies, cold-pressed juices, faux tuna sandwiches.", locations: [
        { zone: "Ballard", address: "5309 22nd Ave NW Suite D, Seattle, WA 98107", phone: "" } ] },
      { name: "Cinnaholic", url: "https://www.cinnaholicseattle.com/", types: ["Bakery"], social: { ig: "https://instagram.com/cinnaholicseattle", fb: "https://www.facebook.com/Cinnaholic.Seattle.CapitolHill/" }, desc: "100% vegan cinnamon roll bakery. Customize rolls with frosting flavors (cream cheese, almond, lemon, marshmallow) and toppings. Featured on Shark Tank.", locations: [
        { zone: "Capitol Hill / Central District", address: "816 E Pike St, Seattle, WA 98122", phone: "(206) 922-3253" } ] },
      { name: "Moe Vegan", url: "https://www.moevegan.com/", types: ["Soul Food"], social: { ig: "https://instagram.com/moevegan", fb: "https://www.facebook.com/100057535085849/" }, desc: "Family-owned 100% vegan soul food. Bold comfort food classics reimagined plant-based. Open Thu–Sun.", locations: [
        { zone: "South King County", address: "23325 Pacific Hwy S, Kent, WA 98032", phone: "(206) 886-4471" } ] },
      { name: "Cafe Wylde", url: "https://www.cafewylde.com/", types: ["Café"], social: { ig: "https://instagram.com/cafewylde", fb: "https://www.facebook.com/CafeWylde/" }, desc: "100% vegan organic café in downtown Everett. Smoothies, juices, sandwiches, tacos, burritos, grain bowls, and raw cheesecake desserts.", locations: [
        { zone: "Snohomish County", address: "2918 Hoyt Ave Suite 101, Everett, WA 98201", phone: "(425) 374-3877" } ] },
      { name: "The Bayside Cafe", url: "https://thebaysidecafe.com/", types: ["Café", "Bar"], social: { ig: "https://instagram.com/the_bayside_cafe", fb: "https://www.facebook.com/thebaysidecafeeverett/" }, desc: "100% plant-based café in downtown Everett — burgers, hot dogs, sandwiches, nachos — with craft beers. Best Vegan Restaurant 2024.", locations: [
        { zone: "Snohomish County", address: "2913 West Marine View Dr, Everett, WA 98201", phone: "(425) 418-0640" } ] }
    ];

    // Cuisine -> plant-based / neutral icon + color family (NO animal or meat icons)
    var TINT = {
      blue:  { bg: "#dcebf6", fg: "#2f6f93" },
      clay:  { bg: "#f6e0d6", fg: "#b14e2a" },
      rose:  { bg: "#f7e3ea", fg: "#a83d63" },
      gold:  { bg: "#f3e3cf", fg: "#9a6b1a" },
      green: { bg: "#dcefe4", fg: "#1d8a6b" }
    };
    var CUISINE = {
      "Thai":         { i: "ti-soup", c: "blue" },
      "Vietnamese":   { i: "ti-bowl", c: "blue" },
      "Chinese":      { i: "ti-bowl", c: "blue" },
      "Pan-Asian":    { i: "ti-bowl", c: "blue" },
      "Asian Fusion": { i: "ti-bowl", c: "blue" },
      "Sushi":        { i: "ti-bowl", c: "blue" },
      "Mexican":      { i: "ti-pepper", c: "clay" },
      "Pizza":        { i: "ti-pizza", c: "clay" },
      "Bakery":       { i: "ti-cake", c: "rose" },
      "Ice Cream":    { i: "ti-ice-cream", c: "rose" },
      "Café":         { i: "ti-coffee", c: "gold" },
      "Bar":          { i: "ti-glass-full", c: "gold" },
      "American":     { i: "ti-tools-kitchen-2", c: "green" },
      "Soul Food":    { i: "ti-tools-kitchen-2", c: "green" },
      "Fast Casual":  { i: "ti-salad", c: "green" },
      "Fine Dining":  { i: "ti-chef-hat", c: "green" }
    };
    function cuisineOf(t) { return CUISINE[t] || { i: "ti-tools-kitchen-2", c: "green" }; }
    function tintOf(t) { return TINT[cuisineOf(t).c]; }
    function domain(u) { return u.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/.*$/, ""); }
    function gmaps(r) { var a = r.locations[0] ? r.locations[0].address : ""; return "https://www.google.com/maps/search/" + encodeURIComponent(r.name + " " + a); }
    function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

    var ZONE_ORDER = [
      "Capitol Hill / Central District", "Downtown / Belltown", "South Lake Union", "U-District",
      "Fremont & Wallingford", "Ballard", "Rainier Valley", "Georgetown", "West Seattle",
      "Eastside", "South King County", "Snohomish County"
    ];
    var zones = ZONE_ORDER.filter(function (z) { return restaurants.some(function (r) { return r.locations.some(function (l) { return l.zone === z; }); }); });
    var types = [];
    restaurants.forEach(function (r) { r.types.forEach(function (t) { if (types.indexOf(t) === -1) types.push(t); }); });
    types.sort();

    var activeTab = "hood", activeFilter = null;

    var searchEl = root.querySelector("#svg-guide-search");
    var tabHoodEl = root.querySelector("#svg-guide-tab-hood");
    var tabTypeEl = root.querySelector("#svg-guide-tab-type");
    var filtersEl = root.querySelector("#svg-guide-filters");
    var metaEl = root.querySelector("#svg-guide-meta");
    var cardsEl = root.querySelector("#svg-guide-cards");

    function switchTab(tab) {
      activeTab = tab; activeFilter = null;
      tabHoodEl.classList.toggle("active", tab === "hood");
      tabTypeEl.classList.toggle("active", tab === "type");
      buildFilters(); render();
    }
    root.querySelector(".tabs").addEventListener("click", function (e) {
      var tab = e.target.closest(".tab");
      if (tab) switchTab(tab.dataset.tab);
    });

    function buildFilters() {
      var items = activeTab === "hood" ? zones : types;
      filtersEl.innerHTML = items.map(function (item) {
        return '<div class="chip' + (item === activeFilter ? " active" : "") + '" data-filter="' + esc(item) + '">' + esc(item) + '</div>';
      }).join("");
    }
    filtersEl.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      var val = chip.dataset.filter;
      activeFilter = activeFilter === val ? null : val;
      buildFilters(); render();
    });

    searchEl.addEventListener("input", render);

    function socialIcons(s) {
      var out = [];
      if (s.ig) out.push('<a class="social-link social-link--ig" href="' + s.ig + '" target="_blank" rel="noopener" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>');
      if (s.fb) out.push('<a class="social-link social-link--fb" href="' + s.fb + '" target="_blank" rel="noopener" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>');
      return out.join("");
    }
    function locationLine(l) {
      var tel = l.phone ? '<a class="card-phone" href="tel:' + l.phone.replace(/\D/g, "") + '"><i class="ti ti-phone" aria-hidden="true"></i> ' + l.phone + '</a>' : "";
      return '<div class="loc-line"><span class="loc-zone">' + esc(l.zone) + '</span><span class="loc-addr-row"><span class="loc-addr">' + esc(l.address) + '</span>' + tel + '</span></div>';
    }

    function render() {
      var q = searchEl.value.toLowerCase().trim();
      var results = restaurants;
      if (activeFilter) {
        if (activeTab === "hood") results = results.filter(function (r) { return r.locations.some(function (l) { return l.zone === activeFilter; }); });
        else results = results.filter(function (r) { return r.types.indexOf(activeFilter) !== -1; });
      }
      if (q) {
        results = results.filter(function (r) {
          return r.name.toLowerCase().indexOf(q) !== -1 ||
            r.desc.toLowerCase().indexOf(q) !== -1 ||
            r.types.some(function (t) { return t.toLowerCase().indexOf(q) !== -1; }) ||
            r.locations.some(function (l) { return l.zone.toLowerCase().indexOf(q) !== -1 || l.address.toLowerCase().indexOf(q) !== -1; });
        });
      }
      metaEl.textContent = results.length + " restaurant" + (results.length !== 1 ? "s" : "");
      if (!results.length) { cardsEl.innerHTML = '<div class="empty">No restaurants match — try a different filter or search.</div>'; return; }
      cardsEl.innerHTML = results.map(function (r) {
        var shown = (activeTab === "hood" && activeFilter) ? r.locations.filter(function (l) { return l.zone === activeFilter; }) : r.locations;
        var cu = cuisineOf(r.types[0]);
        var cuT = TINT[cu.c];
        var tags = r.types.map(function (t) { var ti = tintOf(t); return '<span class="tag" style="background:' + ti.bg + ';color:' + ti.fg + '">' + esc(t) + '</span>'; }).join("");
        return '' +
          '<div class="card">' +
          '  <div class="card-ico" style="background:' + cuT.bg + ';color:' + cuT.fg + '"><i class="ti ' + cu.i + '"></i></div>' +
          '  <div class="card-body">' +
          '    <div class="card-header">' +
          '      <div class="card-name"><a href="' + r.url + '" target="_blank" rel="noopener">' + esc(r.name) + '</a></div>' +
          '      <div class="tag-row">' + tags + '</div>' +
          '    </div>' +
          '    <div class="card-locations">' + shown.map(locationLine).join("") + '</div>' +
          '    <div class="card-desc">' + esc(r.desc) + '</div>' +
          '    <div class="card-footer">' +
          '      <div class="footer-left">' +
          '        <a class="website-link" href="' + r.url + '" target="_blank" rel="noopener"><i class="ti ti-world" aria-hidden="true"></i> ' + domain(r.url) + '</a>' +
          '        <a class="reviews-link" href="' + gmaps(r) + '" target="_blank" rel="noopener"><i class="ti ti-brand-google" aria-hidden="true"></i> Reviews <i class="ti ti-external-link" style="font-size:12px" aria-hidden="true"></i></a>' +
          '      </div>' +
          '      <div class="social-links">' + socialIcons(r.social) + '</div>' +
          '    </div>' +
          '  </div>' +
          '</div>';
      }).join("");
    }

    buildFilters();
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
