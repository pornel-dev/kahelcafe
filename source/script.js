/* ─── DATA ─────────────────────────────────────────── */
const menuItems = {
  "Coffee": [
    { name:"Espresso",           priceM:60,  priceL:null, desc:"Pure and bold — our house espresso shot, clean and direct", tag:"", img:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80" },
    { name:"Americano",          priceM:100, priceL:110,  desc:"Smooth double shot with hot water, bold and clean", img:"https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=600&q=80" },
    { name:"Cafe Latte",         priceM:140, priceL:150,  desc:"Espresso with velvety steamed milk, a café classic", img:"https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=600&q=80" },
    { name:"Vanilla Oat Latte",  priceM:170, priceL:180,  desc:"Espresso, oat milk, and a smooth vanilla sweetness", tag:"Bestseller", img:"https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80" },
    { name:"White Mocha",        priceM:160, priceL:170,  desc:"Espresso with white chocolate and creamy steamed milk", img:"https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=80" },
    { name:"Spanish Latte",      priceM:150, priceL:160,  desc:"Espresso with sweetened condensed milk and steamed milk", img:"https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80" },
    { name:"Cafe Mocha",         priceM:160, priceL:170,  desc:"Rich espresso blended with chocolate and steamed milk", img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80" },
    { name:"Caramel Macchiato",  priceM:160, priceL:170,  desc:"Layered espresso, vanilla milk, and a caramel drizzle", tag:"Bestseller", img:"https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&q=80" },
  ],
  "Kahel Specials": [
    { name:"Biscoff Latte",       price:170, desc:"Espresso with creamy Biscoff spread and steamed milk", img:"https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600&q=80" },
    { name:"Seasalt Latte",       price:160, desc:"Espresso with a hint of sea salt and smooth milk foam", tag:"Bestseller", img:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80" },
    { name:"Kahel Espresso",      price:150, desc:"Our house-crafted espresso blend, Kahel's signature style", img:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80" },
    { name:"Tiramisu Latte",      price:180, desc:"Espresso with mascarpone-inspired cream and cocoa dusting", img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80" },
    { name:"Creamy White Mocha",  price:170, desc:"Extra-rich white chocolate espresso with pillowy foam", img:"https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=80" },
    { name:"Cereal Latte",        price:180, desc:"Espresso infused with cereal milk — nostalgic and indulgent", img:"https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600&q=80" },
    { name:"Mad Matcha",          price:170, desc:"Premium matcha blended with espresso and steamed milk", img:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80" },
    { name:"Honey Cinnamon",      price:170, desc:"Espresso with honey syrup, cinnamon, and warm steamed milk", img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
  ],
  "Frappe": [
    { name:"Dark Mocha",          priceM:170, priceL:180, desc:"Blended dark chocolate and espresso over ice — rich and bold", tag:"Bestseller", img:"https://images.unsplash.com/photo-1572490122747-3e9b7c8b06e3?w=600&q=80" },
    { name:"Vanilla Caramel",     priceM:170, priceL:180, desc:"Sweet vanilla and caramel blended into a smooth iced frappe", img:"https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&q=80" },
    { name:"Coffee Jelly",        priceM:170, priceL:180, desc:"Blended coffee with coffee jelly bits — a local favorite", img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80" },
    { name:"Oreo Milkshake",      priceM:160, priceL:170, desc:"Creamy blended Oreo frappe with cookie pieces throughout", img:"https://images.unsplash.com/photo-1572490122747-3e9b7c8b06e3?w=600&q=80" },
    { name:"Choco Chip Cream",    priceM:170, priceL:180, desc:"Blended chocolate frappe loaded with chocolate chips and cream", tag:"Bestseller", img:"https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80" },
    { name:"Strawberry Cream",    priceM:160, priceL:170, desc:"Fresh strawberry blended with cream — fruity and refreshing", img:"https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=600&q=80" },
    { name:"Matcha Cream",        priceM:160, priceL:170, desc:"Ceremonial matcha blended smooth with sweet cream on top", img:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80" },
  ],
  "Non-Coffee": [
    { name:"Lemon Peach",         priceM:170, priceL:180, desc:"Zesty lemon and sweet peach blended into a refreshing drink", tag:"Bestseller", img:"https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=600&q=80" },
    { name:"Berry Hibiscus",      priceM:160, priceL:170, desc:"Floral hibiscus with mixed berry — vibrant and tangy", img:"https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80" },
    { name:"Lychee Tea",          priceM:160, priceL:170, desc:"Delicate lychee flavour over brewed tea and ice", img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
    { name:"Matcha Latte",        priceM:150, priceL:160, desc:"Premium matcha whisked with steamed or iced milk", img:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80" },
    { name:"Cacao Latte",         priceM:150, priceL:160, desc:"Pure cacao blended with milk for a rich chocolate-free coffee drink", img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80" },
    { name:"Raspberry Fizz",      priceM:150, priceL:160, desc:"Sparkling raspberry soda with a bright, tart finish", img:"https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=600&q=80" },
    { name:"Greenapple Fizz",     priceM:150, priceL:160, desc:"Crisp green apple soda — sweet, tart, and perfectly bubbly", tag:"Bestseller", img:"https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=600&q=80" },
    { name:"House Blend Iced Tea",priceM:150, priceL:169, desc:"Our signature house-brewed iced tea, lightly sweetened", img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
  ],
  "Starters": [
    { name:"Beef Nachos",         price:170, desc:"Crispy tortilla chips with beef, cheese, jalapeños, and salsa", img:"https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&q=80" },
    { name:"Parmesan Fries",      price:180, desc:"Golden fries tossed in parmesan and herbs", img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80" },
    { name:"Chicken Wings",       price:250, desc:"Crispy fried wings with your choice of sauce", tag:"Bestseller", img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80" },
    { name:"Chicken Poppers",     price:200, desc:"Bite-sized crispy chicken pieces, perfectly seasoned", img:"https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80" },
    { name:"Fish & Chips",        price:190, desc:"Beer-battered fish fillet served with crispy chips and dipping sauce", img:"https://images.unsplash.com/photo-1544982503-9f984c14501a?w=600&q=80" },
    { name:"Shrimp Poppers",      price:200, desc:"Crispy breaded shrimp bites with sweet chili dipping sauce", img:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80" },
    { name:"Mozarella Sticks",    price:190, desc:"Golden-fried mozzarella sticks with marinara sauce", img:"https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=600&q=80" },
    { name:"Salted Fries",        price:130, desc:"Classic salted fries, crispy on the outside and fluffy inside", img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80" },
  ],
  "Pasta": [
    { name:"Chicken Pesto",       price:180, desc:"Grilled chicken with house-made basil pesto over al dente pasta", img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80" },
    { name:"Carbonara",           price:170, desc:"Creamy egg and parmesan sauce with crispy bacon bits", tag:"Bestseller", img:"https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80" },
    { name:"Mac n Cheese",        price:160, desc:"Extra cheesy baked mac and cheese, golden and gooey", img:"https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&q=80" },
    { name:"Bolognese",           price:180, desc:"Slow-cooked beef meat sauce over spaghetti", img:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80" },
    { name:"Shrimp Aglio Olio",   price:180, desc:"Sautéed shrimp in garlic olive oil with chili flakes and parsley", img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80" },
  ],
  "Sandwich": [
    { name:"Classic Burger",      price:190, desc:"Juicy beef patty with lettuce, tomato, and special sauce", img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80" },
    { name:"Kahel Chicken",       price:190, desc:"Crispy or grilled chicken fillet with our signature Kahel sauce", tag:"Bestseller", img:"https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80" },
    { name:"Double Cheese Burger",price:220, desc:"Double beef patty stacked with two layers of melted cheese", img:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80" },
    { name:"Breakfast Burger",    price:220, desc:"Beef patty with a fried egg, bacon, and cheese on a toasted bun", img:"https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&q=80" },
    { name:"Club Sandwich",       price:190, desc:"Triple-decker with chicken, bacon, lettuce, tomato, and mayo", img:"https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=600&q=80" },
  ],
  "Salad": [
    { name:"Caesar Salad",        price:220, desc:"Crisp romaine lettuce, croutons, parmesan, and house Caesar dressing", img:"https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80" },
    { name:"Kani Salad",          price:200, desc:"Japanese-style kani with cucumber, mango, and Japanese mayo", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" },
  ],
  "Rice Meal": [
    { name:"Chicken Teriyaki",    price:180, desc:"Grilled chicken glazed in teriyaki sauce served with steamed rice", tag:"Bestseller", img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" },
    { name:"Lechon Kawali",       price:200, desc:"Crispy deep-fried pork belly served with rice and liver sauce", img:"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80" },
    { name:"Garlic Pepper Beef",  price:180, desc:"Tender beef strips sautéed in garlic and black pepper sauce", img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
    { name:"Creamy Fish Fillet",  price:180, desc:"Pan-fried fish fillet in a rich creamy sauce served with rice", img:"https://images.unsplash.com/photo-1544982503-9f984c14501a?w=600&q=80" },
    { name:"Chicken Ala King",    price:190, desc:"Tender chicken in a creamy mushroom and bell pepper sauce", img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" },
    { name:"Crispy Sisig",        price:200, desc:"Sizzling crispy pork sisig served on a hot plate with rice", tag:"Bestseller", img:"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80" },
    { name:"Creamy Garlic Shrimp",price:200, desc:"Plump shrimp in a rich garlic cream sauce over steamed rice", img:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80" },
    { name:"Burger Steak",        price:220, desc:"Juicy beef patties smothered in mushroom gravy with rice", img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
    { name:"Creamy Mushroom Beef",price:190, desc:"Tender beef strips in a velvety mushroom cream sauce with rice", tag:"Bestseller", img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
  ],
  "Breakfast": [
    { name:"American Breakfast",  price:320, desc:"Eggs any style, bacon or sausage, toast, hash browns, and juice", img:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80" },
    { name:"Beef Tapa",           price:190, desc:"Sweet and savoury cured beef served with garlic rice and egg", tag:"Bestseller", img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" },
    { name:"Hungarian Sausage",   price:160, desc:"Pan-fried Hungarian sausage with garlic rice and sunny-side up egg", img:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80" },
    { name:"Bangus Belly",        price:180, desc:"Marinated milkfish belly, crispy-fried with garlic rice and egg", img:"https://images.unsplash.com/photo-1544982503-9f984c14501a?w=600&q=80" },
    { name:"Spam",                price:170, desc:"Pan-fried Spam with garlic fried rice and a fried egg", img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" },
  ],
  "Pizza": [
    { name:"Kahel's Choice",      price:300, desc:"The house pizza — topped with our chef's seasonal selection of the finest ingredients", tag:"Bestseller", img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80" },
    { name:"Pepperoni",           price:280, desc:"Classic pepperoni with mozzarella and house tomato sauce", img:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&q=80" },
    { name:"Gourmet Shrimp",      price:320, desc:"Plump shrimp with garlic butter, mozzarella, and fresh herbs", img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80" },
  ],
};

/* ─── ANNOUNCEMENTS DATA ───────────────────────────── */
const announcements = {
  featured: {
    type: "Employee of the Year",
    typeClass: "ann-type-award",
    badge: "🏆 2026 Winner",
    title: "Congratulations, Maria Santos — Employee of the Year!",
    meta: "June 2, 2026  ·  Posted by Management",
    desc: "We are beyond proud to announce that Maria Santos, our lead barista and shift supervisor, has been named Kahel Café's Employee of the Year for 2026. Maria exemplifies everything Kahel stands for — warmth, craft, and an unwavering commitment to every guest. From perfecting our Signature Blend to mentoring new team members with patience and passion, she has made this café a better place every single day. Thank you, Maria, for your heart and dedication.",
    author: "HR",
    authorName: "Management",
    isNew: true,
    icon: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="22" cy="14" r="6"/>
      <path d="M10 40c0-9 5-14 12-14s12 5 12 14"/>
      <path d="M17 6l-4-4M27 6l4-4"/>
      <path d="M13 10l-5 2M31 10l5 2"/>
    </svg>`,
  },
  items: [
    {
      type: "New Product",
      typeClass: "ann-type-product",
      isNew: true,
      title: "Introducing: Ube Horchata Cold Brew",
      date: "June 1, 2026",
      dateIcon: "🆕",
      desc: "Our kitchen team has been working on something magical. The Ube Horchata Cold Brew blends 18-hour cold brew with house-made ube horchata — creamy, earthy, and uniquely Filipino. Available starting June 5.",
      author: "K",
      authorName: "Kitchen Team",
      tag: "New",
      fullDesc: "Our kitchen team has been working on something magical for the past month. The Ube Horchata Cold Brew blends 18-hour single-origin cold brew with a house-made ube horchata — creamy, earthy, and uniquely Filipino. We source our ube directly from a farm in Benguet and prepare the horchata fresh daily with cinnamon and toasted rice. Available starting June 5 at ₱245. Ask for it at the counter.",
    },
    {
      type: "Promo",
      typeClass: "ann-type-promo",
      isNew: true,
      title: "June Birthday Month: Free Drink for Celebrants",
      date: "June 1–30, 2026",
      dateIcon: "🎂",
      desc: "Celebrating your birthday in June? Show your valid ID at the counter and enjoy one free drink of your choice (up to ₱225 value). Because every birthday deserves a Kahel moment.",
      author: "M",
      authorName: "Marketing",
      tag: "Limited",
      fullDesc: "Celebrating your birthday in June? Show your valid ID at the counter and enjoy one free drink of your choice (up to ₱225 value). The promo runs the entire month of June 2026. Valid for dine-in only. One redemption per guest. Cannot be combined with other promos. Because every birthday deserves a Kahel moment.",
    },
    {
      type: "Company News",
      typeClass: "ann-type-news",
      isNew: false,
      title: "Kahel Named Best Specialty Café 2026 by Metro Manila Food Awards",
      date: "May 28, 2026",
      dateIcon: "🏅",
      desc: "We are humbled and thrilled to share that Kahel Café has been awarded Best Specialty Café 2026 by the Metro Manila Food Awards. This recognition belongs to every single member of our team.",
      author: "C",
      authorName: "Clara Reyes",
      tag: "Award",
      fullDesc: "We are humbled and thrilled to share that Kahel Café has been awarded Best Specialty Café 2026 by the Metro Manila Food Awards. This recognition belongs to every single member of our team — the baristas, kitchen staff, cashiers, and support crew who show up daily with passion and pride. We will be celebrating this milestone with a staff appreciation dinner on June 14. Stay tuned for details.",
    },
    {
      type: "Policy Update",
      typeClass: "ann-type-policy",
      isNew: false,
      title: "Updated: Staff Scheduling & Overtime Policy (Effective July 1)",
      date: "May 25, 2026",
      dateIcon: "📋",
      desc: "Please review the updated staff scheduling guidelines, including new overtime rates, swap request procedures, and holiday premium pay structures. Full policy document available in the staff portal.",
      author: "M",
      authorName: "Marco Santos",
      tag: "Important",
      fullDesc: "Effective July 1, 2026, updated policies on scheduling and overtime will take effect. Key changes include: (1) OT requests must be filed at least 48 hours in advance, (2) Holiday premium pay increases from 130% to 150%, (3) Shift swap requests must be approved by a manager before confirmation. A printed copy of the full policy is posted in the staff room. Please review and sign the acknowledgment form by June 20.",
    },
    {
      type: "New Product",
      typeClass: "ann-type-product",
      isNew: false,
      title: "Summer Menu: 4 New Drinks Added Starting June 15",
      date: "May 22, 2026",
      dateIcon: "☀️",
      desc: "The summer lineup is here. Four new seasonal drinks join our specialty menu on June 15, including the Calamansi Yuzu Soda, Lychee Oolong Fizz, and two more surprises from the kitchen.",
      author: "K",
      authorName: "Kitchen Team",
      tag: "Coming Soon",
      fullDesc: "The summer lineup is officially here. Four new seasonal drinks join our specialty menu starting June 15: Calamansi Yuzu Soda (₱215), Lychee Oolong Fizz (₱225), Strawberry Basil Lemonade (₱205), and the Pandan Coconut Cold Brew (₱235). Staff training for these new items will be held on June 10. All four drinks will be featured on the summer standee near the entrance.",
    },
    {
      type: "Update",
      typeClass: "ann-type-update",
      isNew: false,
      title: "WiFi Upgrade Complete — New Network Credentials",
      date: "May 18, 2026",
      dateIcon: "📶",
      desc: "Our in-café WiFi has been upgraded to fiber gigabit. New network name and password are posted at the counter and in the staff room. Please update your devices accordingly.",
      author: "O",
      authorName: "Operations",
      tag: "Ops",
      fullDesc: "Our in-café WiFi infrastructure has been fully upgraded to fiber gigabit (1Gbps symmetric). Two separate networks are now available: one for guests (KahelGuest) and one for staff/POS (KahelStaff). New credentials are posted in the staff room and at the manager's station. Please update your POS tablets and personal devices. Contact Marco for any connectivity issues.",
    },
  ]
};

/* ─── ACTIVE MENU CATEGORY ────────────────────────── */
let activeCategory = "Coffee";
let activeAnnFilter = "All";

/* ─── GROUP → CATEGORY MAPPINGS ──────────────────── */
const groupMap = {
  drinks:  ['Coffee', 'Non-Coffee', 'Frappe'],
  mains:   ['Pasta', 'Sandwich', 'Salad', 'Pizza'],
  morning: ['Breakfast', 'Rice Meal'],
};
const directCats = ['Starters', 'Kahel Specials'];

/* Returns which group key owns a category, or null */
function groupOfCat(cat) {
  for (const [g, cats] of Object.entries(groupMap)) {
    if (cats.includes(cat)) return g;
  }
  return null;
}

/* ─── CLOSE ALL DROPDOWNS ─────────────────────────── */
function closeAllDropdowns(except) {
  Object.keys(groupMap).forEach(g => {
    if (g === except) return;
    const drop = document.getElementById('cdrop-' + g);
    const pill = document.getElementById('cpill-' + g);
    if (drop) drop.classList.remove('open');
    if (pill) pill.classList.remove('open');
    const grp = document.getElementById('cgroup-' + g);
    if (grp) grp.classList.remove('open');
  });
}

/* ─── TOGGLE A GROUP DROPDOWN ─────────────────────── */
function toggleGroup(group) {
  const drop = document.getElementById('cdrop-' + group);
  const pill = document.getElementById('cpill-' + group);
  const grp  = document.getElementById('cgroup-' + group);
  const isOpen = drop.classList.contains('open');
  closeAllDropdowns(group);
  if (!isOpen) {
    drop.classList.add('open');
    pill.classList.add('open');
    grp.classList.add('open');
  } else {
    drop.classList.remove('open');
    pill.classList.remove('open');
    grp.classList.remove('open');
  }
}

/* ─── SELECT A DIRECT CATEGORY ────────────────────── */
function selectDirectCat(cat) {
  closeAllDropdowns(null);
  activeCategory = cat;
  updatePillActiveStates();
  animateAndRenderMenu();
}

/* ─── SELECT A CATEGORY FROM A GROUP ─────────────── */
function selectGroupCat(group, cat, labelText) {
  activeCategory = cat;
  // Update the group pill label to show selected sub-item
  const labelEl = document.getElementById('cpill-' + group + '-label');
  if (labelEl) labelEl.textContent = labelText + ': ' + cat;
  // Close dropdown
  closeAllDropdowns(null);
  updatePillActiveStates();
  animateAndRenderMenu();
}

/* ─── UPDATE PILL ACTIVE VISUAL STATES ────────────── */
function updatePillActiveStates() {
  // Reset all direct pills
  directCats.forEach(cat => {
    const el = document.getElementById('cpill-' + cat);
    if (el) el.classList.toggle('active', activeCategory === cat);
  });
  // Reset all group pills
  Object.keys(groupMap).forEach(g => {
    const el = document.getElementById('cpill-' + g);
    const grp = document.getElementById('cgroup-' + g);
    const isActiveGroup = groupMap[g].includes(activeCategory);
    if (el) el.classList.toggle('group-active', isActiveGroup);
    if (grp) grp.classList.toggle('group-active', isActiveGroup);
    // Update dropdown item highlights
    document.querySelectorAll(`#cdrop-${g} .cdrop-item`).forEach(item => {
      // match by text content
      const txt = item.textContent.trim();
      item.classList.toggle('active', txt === activeCategory);
    });
  });
}

/* ─── ANIMATE OUT THEN RENDER MENU ───────────────── */
function animateAndRenderMenu() {
  document.querySelectorAll('.menu-card-premium').forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(12px)';
  });
  setTimeout(() => renderMenu(), 160);
}

/* ─── RENDER MENU ─────────────────────────────────── */
function renderMenu() {
  // Reset group labels if needed
  Object.keys(groupMap).forEach(g => {
    const labelEl = document.getElementById('cpill-' + g + '-label');
    if (labelEl && !groupMap[g].includes(activeCategory)) {
      // restore default label
      const defaults = { drinks: 'Drinks', mains: 'Mains', morning: 'Breakfast & Rice' };
      if (!groupMap[g].includes(activeCategory)) {
        labelEl.textContent = defaults[g];
      }
    }
  });

  updatePillActiveStates();

  // Category title & count
  document.getElementById('menuCatTitle').textContent = activeCategory;
  const countEl = document.getElementById('menuItemCount');
  if (countEl) {
    const n = menuItems[activeCategory].length;
    countEl.textContent = `${n} item${n !== 1 ? 's' : ''} available`;
  }

  // ── Menu grid with image cards ──
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  grid.className = 'menu-grid-premium';

  menuItems[activeCategory].forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card-premium';
    card.style.animationDelay = `${i * 70}ms`;

    // Build price display — single price or M/L sizing
    let priceHTML = '';
    if (item.priceM !== undefined) {
      const mLabel = `<span class="mcp-size-label">M</span>₱${item.priceM}`;
      const lLabel = item.priceL ? ` <span class="mcp-size-sep">/</span> <span class="mcp-size-label">L</span>₱${item.priceL}` : '';
      priceHTML = `<div class="mcp-price mcp-price--sized">${mLabel}${lLabel}</div>`;
    } else {
      priceHTML = `<div class="mcp-price">₱${item.price}</div>`;
    }

    card.innerHTML = `
      <div class="mcp-img-wrap">
        <img class="mcp-img" src="${item.img}" alt="${item.name}" loading="lazy" />
        <div class="mcp-img-overlay"></div>
        ${item.tag ? `<span class="mcp-badge">${item.tag}</span>` : ''}
        ${priceHTML}
      </div>
      <div class="mcp-body">
        <div class="mcp-body-accent"></div>
        <h3 class="mcp-name">${item.name}</h3>
        <p class="mcp-desc">${item.desc}</p>
      </div>
      <div class="mcp-footer">
        <span class="mcp-order-hint">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 6h8M6 2l4 4-4 4"/></svg>
          Order at counter
        </span>
        <div class="mcp-category-dot"></div>
      </div>`;
    grid.appendChild(card);
  });

  // Staggered entrance
  requestAnimationFrame(() => {
    document.querySelectorAll('.menu-card-premium').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(() => {
        el.style.transition = 'opacity .45s cubic-bezier(.16,1,.3,1), transform .45s cubic-bezier(.16,1,.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 70 + 10);
    });
  });
}

/* ─── RENDER ANNOUNCEMENTS ────────────────────────── */
function renderAnnouncements() {
  // Ticker
  const tickerEl = document.getElementById('annTicker');
  const tickerItems = [
    '🏆 Employee of the Year: Maria Santos',
    '🆕 New Drink: Ube Horchata Cold Brew — June 5',
    '🎂 June Birthday Month Promo — Free Drink!',
    '🏅 Best Specialty Café 2026 — Metro Manila Food Awards',
    '☀️ Summer Menu Launching June 15',
    '📋 Policy Update Effective July 1',
  ];
  const tickerHTML = [...tickerItems, ...tickerItems].map(t =>
    `<span class="ticker-item"><span class="ticker-dot"></span>${t}</span>`
  ).join('');
  tickerEl.innerHTML = `<div class="ticker-inner">${tickerHTML}</div>`;

  // Featured
  const f = announcements.featured;
  document.getElementById('annFeatured').innerHTML = `
    <span class="ann-featured-badge">${f.badge}</span>
    <div class="ann-featured-icon">${f.icon}</div>
    <div>
      <div class="ann-featured-label">${f.type}</div>
      <h2 class="ann-featured-title">${f.title}</h2>
      <div class="ann-featured-meta">${f.meta}</div>
      <p class="ann-featured-desc">${f.desc}</p>
    </div>
  `;

  // Filter buttons
  const types = ['All', ...new Set(announcements.items.map(a => a.type))];
  const filterGroup = document.getElementById('annFilters');
  filterGroup.innerHTML = '';
  types.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'ann-filter-btn' + (t === activeAnnFilter ? ' active' : '');
    btn.textContent = t;
    btn.onclick = () => { activeAnnFilter = t; applyAnnFilter(); };
    filterGroup.appendChild(btn);
  });

  // Update count
  updateAnnCount();

  // Grid
  const grid = document.getElementById('annGrid');
  grid.innerHTML = '';
  announcements.items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'ann-card reveal';
    card.style.transitionDelay = `${i * 60}ms`;
    card.dataset.type = item.type;
    if (activeAnnFilter !== 'All' && item.type !== activeAnnFilter) {
      card.classList.add('hidden');
    }

    card.innerHTML = `
      <div class="ann-card-stripe"></div>
      <div class="ann-card-header">
        <span class="ann-card-type ${item.typeClass}">${item.type}</span>
        ${item.isNew ? '<span class="ann-card-new">New</span>' : ''}
      </div>
      <div class="ann-card-body">
        <h3 class="ann-card-title">${item.title}</h3>
        <div class="ann-card-date">
          <span>${item.dateIcon}</span>
          ${item.date}
        </div>
        <p class="ann-card-desc">${item.desc}</p>
      </div>
      <div class="ann-card-footer">
        <a class="ann-read-more" href="#">
          Read More
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 6h8M6 2l4 4-4 4"/></svg>
        </a>
        <div class="ann-card-author">
          <div class="ann-author-dot">${item.author}</div>
          ${item.authorName}
        </div>
      </div>
    `;

    card.querySelector('.ann-read-more').addEventListener('click', (e) => {
      e.preventDefault();
      openAnnModal(item);
    });

    grid.appendChild(card);
  });

  // Trigger reveal
  requestAnimationFrame(() => {
    document.querySelectorAll('.ann-card.reveal').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 20);
    });
  });
}

function applyAnnFilter() {
  // Update buttons
  document.querySelectorAll('.ann-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === activeAnnFilter);
  });

  // Show/hide cards
  document.querySelectorAll('.ann-card').forEach(card => {
    const show = activeAnnFilter === 'All' || card.dataset.type === activeAnnFilter;
    card.classList.toggle('hidden', !show);
  });

  updateAnnCount();

  // Empty state
  const grid = document.getElementById('annGrid');
  const existing = grid.querySelector('.ann-empty');
  if (existing) existing.remove();
  const visible = document.querySelectorAll('.ann-card:not(.hidden)').length;
  if (visible === 0) {
    const empty = document.createElement('div');
    empty.className = 'ann-empty';
    empty.innerHTML = `<p style="font-size:32px;margin-bottom:12px;">📭</p><p>No announcements in this category yet.</p>`;
    grid.appendChild(empty);
  }
}

function updateAnnCount() {
  const total = activeAnnFilter === 'All'
    ? announcements.items.length
    : announcements.items.filter(a => a.type === activeAnnFilter).length;
  const countEl = document.getElementById('annCount');
  if (countEl) countEl.textContent = `${total} announcement${total !== 1 ? 's' : ''}`;
}

/* ─── ANNOUNCEMENT MODAL ──────────────────────────── */
function openAnnModal(item) {
  const overlay = document.getElementById('annModalOverlay');
  document.getElementById('annModalContent').innerHTML = `
    <div class="ann-modal-top">
      <button class="ann-modal-close" onclick="closeAnnModal()">✕</button>
      <span class="ann-card-type ${item.typeClass}" style="margin-bottom:16px;display:inline-block;">${item.type}</span>
      <h2 style="font-family:var(--font-display);font-size:28px;font-weight:700;margin:12px 0 8px;line-height:1.2;">${item.title}</h2>
      <div class="ann-card-date" style="margin-bottom:0;">${item.dateIcon} ${item.date} · ${item.authorName}</div>
    </div>
    <div class="ann-modal-body">
      <p style="font-family:var(--font-body);font-size:15px;color:var(--muted);line-height:1.9;">${item.fullDesc}</p>
      ${item.tag ? `<div style="margin-top:24px;"><span class="tag-badge">${item.tag}</span></div>` : ''}
    </div>
  `;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAnnModal() {
  document.getElementById('annModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}



/* ─── MOBILE MENU ────────────────────────────────────── */
function toggleMobileMenu() {
  const menu    = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  const btn     = document.getElementById('hamburgerBtn');
  const isOpen  = menu.classList.contains('is-open');
  isOpen ? closeMobileMenu() : openMobileMenu();
}

function openMobileMenu() {
  const menu    = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  const btn     = document.getElementById('hamburgerBtn');
  menu.classList.add('is-open');
  overlay.classList.add('is-open');
  btn.classList.add('is-open');
  btn.setAttribute('aria-expanded', 'true');
  menu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  const menu    = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  const btn     = document.getElementById('hamburgerBtn');
  menu.classList.remove('is-open');
  overlay.classList.remove('is-open');
  btn.classList.remove('is-open');
  btn.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ─── SCROLL TO SERVICES ─────────────────────────────── */
function scrollToServices() {
  setTimeout(() => {
    const el = document.getElementById('servicesSection');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 280); // after page transition
}

/* ─── PAGE NAVIGATION ─────────────────────────────── */
function showPage(pageId) {
  // Smooth fade transition
  const overlay = document.getElementById('pageTransition');
  overlay.style.opacity = '1';
  overlay.style.pointerEvents = 'all';

  setTimeout(() => {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');

    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => {
      l.classList.toggle('active', l.dataset.page === pageId);
    });

    window.scrollTo({ top:0, behavior:'instant' });

    if (pageId === 'menu')          { renderMenu(); setTimeout(() => initHeroParticles('menuParticles'), 100); }
    if (pageId === 'announcements') renderAnnouncements();
    if (pageId === 'about')         setTimeout(() => initHeroParticles('aboutParticles'), 100);
    if (pageId === 'barista')       setTimeout(initBaristaParticles, 100);
    if (pageId === 'gallery')       setTimeout(() => { initGallery(); filterGallery('all', document.querySelector('.gallery-filter-btn[data-filter="all"]')); initHeroParticles('galleryParticles'); }, 100);

    // Trigger scroll reveal for current page
    setTimeout(triggerReveal, 100);

    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
  }, 220);
}

/* ─── SCROLL REVEAL ───────────────────────────────── */
function triggerReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* ─── STICKY NAV + PARALLAX ───────────────────────── */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Sticky nav glass effect
  document.getElementById('mainNav').classList.toggle('scrolled', scrollY > 60);

  // Hero parallax — move bg at 40% scroll speed for natural depth
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrollY * 0.40}px)`;
  }

  triggerReveal();
});

/* ─── CLOSE MODAL ON OVERLAY CLICK ───────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const annOverlay = document.getElementById('annModalOverlay');
  if (annOverlay) {
    annOverlay.addEventListener('click', (e) => {
      if (e.target === annOverlay) closeAnnModal();
    });
  }

  // Escape key closes all modals and mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAnnModal();
      closeMobileMenu();
    }
  });
});

/* ─── INIT ────────────────────────────────────────── */
activeCategory = "Coffee";
renderMenu();
triggerReveal();

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.cpill-group') && !e.target.closest('.cpill')) {
    closeAllDropdowns(null);
  }
});
/* ─── GALLERY LOGIC ──────────────────────────────────── */
let galleryCurrentIndex = 0;
let galleryVisibleItems = [];

function filterGallery(filter, btnEl) {
  // Update buttons
  document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const items = document.querySelectorAll('.gallery-item');
  galleryVisibleItems = [];

  items.forEach((item, i) => {
    const cat = item.dataset.cat;
    const show = filter === 'all' || cat === filter;
    item.style.transform = '';
    if (show) {
      item.classList.remove('gallery-hidden');
      item.style.animationDelay = (galleryVisibleItems.length * 50) + 'ms';
      galleryVisibleItems.push(item);
    } else {
      item.classList.add('gallery-hidden');
    }
  });
}

// Build lightbox data from gallery items
function buildGalleryData() {
  galleryVisibleItems = Array.from(document.querySelectorAll('.gallery-item:not(.gallery-hidden)'));
  return galleryVisibleItems.map(item => ({
    src:   item.querySelector('img')?.src || '',
    title: item.querySelector('.gallery-item-label')?.textContent || '',
    sub:   item.querySelector('.gallery-item-sub')?.textContent || '',
  }));
}

function openLightbox(index) {
  const lb = document.getElementById('galleryLightbox');
  if (!lb) return;
  galleryCurrentIndex = index;
  const data = buildGalleryData();
  if (!data[index]) return;
  document.getElementById('lightboxImg').src = data[index].src;
  document.getElementById('lightboxTitle').textContent = data[index].title;
  document.getElementById('lightboxSub').textContent = data[index].sub;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('galleryLightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  const data = buildGalleryData();
  galleryCurrentIndex = (galleryCurrentIndex + dir + data.length) % data.length;
  const item = data[galleryCurrentIndex];
  const img = document.getElementById('lightboxImg');
  const caption = document.querySelector('.lightbox-caption');
  img.style.transition = 'opacity .3s var(--ease-out), transform .3s var(--ease-out), filter .3s';
  img.style.opacity = '0';
  img.style.transform = dir > 0 ? 'scale(.96) translateX(-12px)' : 'scale(.96) translateX(12px)';
  img.style.filter = 'blur(4px)';
  if (caption) { caption.style.transition = 'opacity .25s'; caption.style.opacity = '0'; }
  setTimeout(() => {
    img.src = item.src;
    document.getElementById('lightboxTitle').textContent = item.title;
    document.getElementById('lightboxSub').textContent = item.sub;
    img.style.transform = dir > 0 ? 'scale(1.02) translateX(8px)' : 'scale(1.02) translateX(-8px)';
    requestAnimationFrame(() => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1) translateX(0)';
      img.style.filter = 'blur(0)';
      if (caption) caption.style.opacity = '1';
    });
  }, 220);
}

// Wire gallery items to open lightbox + cozy tilt effect
function initGallery() {
  const isTouch = window.matchMedia('(hover: none)').matches;

  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    if (item.dataset.galleryBound) return;
    item.dataset.galleryBound = 'true';

    item.addEventListener('click', () => {
      galleryVisibleItems = Array.from(document.querySelectorAll('.gallery-item:not(.gallery-hidden)'));
      const idx = galleryVisibleItems.indexOf(item);
      if (idx !== -1) openLightbox(idx);
    });

    // Premium subtle 3D tilt on hover (skip on touch devices)
    if (!isTouch) {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;  // 0..1
        const y = (e.clientY - rect.top) / rect.height;  // 0..1
        const rotateX = (0.5 - y) * 6;  // max 3deg
        const rotateY = (x - 0.5) * 8;  // max 4deg
        item.style.transform = `translateY(-10px) scale(1.025) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = '';
      });
    }
  });
}

// Init gallery when page loads
document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  // Escape key closes lightbox too
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
  });
});

/* ─── SHARED HERO SPARKLE PARTICLES ─────────────────────── */
function initHeroParticles(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  // Inject shared sparkle keyframes once
  if (!document.getElementById('sparkleKeyframes')) {
    const style = document.createElement('style');
    style.id = 'sparkleKeyframes';
    style.textContent = `
      @keyframes sparklePulse {
        0%   { opacity: 0;    transform: scale(0.2) translate(0,0); }
        20%  { opacity: 1;    transform: scale(1)   translate(0,0); }
        50%  { opacity: 0.55; transform: scale(0.7) translate(var(--dx), var(--dy)); }
        80%  { opacity: 0.9;  transform: scale(1.1) translate(calc(var(--dx)*1.4), calc(var(--dy)*0.6)); }
        100% { opacity: 0;    transform: scale(0.15) translate(calc(var(--dx)*1.8), calc(var(--dy)*1.2)); }
      }
      @keyframes sparkleFloat {
        0%,100% { opacity: var(--op); transform: scale(1)   translateY(0);    }
        30%      { opacity: 1;         transform: scale(1.35) translateY(-8px);  }
        65%      { opacity: calc(var(--op)*0.5); transform: scale(0.65) translateY(5px); }
      }
    `;
    document.head.appendChild(style);
  }

  const count = 28;
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');

    // Randomised properties
    const size   = Math.random() * 3.5 + 1.2;          // 1.2 – 4.7 px
    const x      = Math.random() * 100;
    const y      = Math.random() * 100;
    const delay  = Math.random() * 12;
    const dur    = 5 + Math.random() * 9;               // 5 – 14 s
    const op     = (0.12 + Math.random() * 0.42).toFixed(2); // amber opacity
    const dx     = ((Math.random() - 0.5) * 30).toFixed(1) + 'px';
    const dy     = ((Math.random() - 0.5) * 20).toFixed(1) + 'px';

    // Mix of two behaviours: ~40% drift-and-fade, ~60% gentle twinkle
    const anim   = Math.random() < 0.4
      ? `sparklePulse ${dur}s ease-in-out ${delay}s infinite`
      : `sparkleFloat ${dur}s ease-in-out ${delay}s infinite`;

    // Occasional larger cross/star shape
    const isStar = Math.random() < 0.18;
    if (isStar) {
      dot.innerHTML = `<svg width="${size * 3}" height="${size * 3}" viewBox="0 0 10 10"
        style="display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg">
        <line x1="5" y1="1" x2="5" y2="9" stroke="rgba(245,166,35,${op})" stroke-width="0.8" stroke-linecap="round"/>
        <line x1="1" y1="5" x2="9" y2="5" stroke="rgba(245,166,35,${op})" stroke-width="0.8" stroke-linecap="round"/>
        <line x1="2.5" y1="2.5" x2="7.5" y2="7.5" stroke="rgba(245,166,35,${(op*0.5).toFixed(2)})" stroke-width="0.5" stroke-linecap="round"/>
        <line x1="7.5" y1="2.5" x2="2.5" y2="7.5" stroke="rgba(245,166,35,${(op*0.5).toFixed(2)})" stroke-width="0.5" stroke-linecap="round"/>
      </svg>`;
      dot.style.cssText = `
        position:absolute;
        left:${x}%; top:${y}%;
        --op:${op}; --dx:${dx}; --dy:${dy};
        animation:${anim};
        pointer-events:none;
        transform-origin:center;
      `;
    } else {
      dot.style.cssText = `
        position:absolute;
        width:${size}px; height:${size}px;
        left:${x}%; top:${y}%;
        border-radius:50%;
        background:rgba(245,166,35,${op});
        box-shadow:0 0 ${(size * 2).toFixed(1)}px ${(size * 0.8).toFixed(1)}px rgba(245,166,35,${(op * 0.4).toFixed(2)});
        --op:${op}; --dx:${dx}; --dy:${dy};
        animation:${anim};
        pointer-events:none;
        transform-origin:center;
      `;
    }
    container.appendChild(dot);
  }
}

/* Back-compat wrapper for barista page */
function initBaristaParticles() { initHeroParticles('baristaParticles'); }