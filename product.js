/* =========================================
   VERTEX ELECTRONICS - PRODUCTS PAGE LOGIC
   Handles: product rendering, search,
   category filter, sorting, and cart.
========================================= */

/* -----------------------------------------
   1. PRODUCT DATA
   Each product has an id, name, brand, model,
   category (matches the data-category buttons),
   price, optional oldPrice, and a Font Awesome icon.
----------------------------------------- */

const PRODUCTS = [

    // ---------- TVs & Audio ----------
    { id: 1,  name: "55\" 4K UHD Smart TV",        brand: "Vertex",   model: "VX-TV55U",   category: "tv",         price: 68999,  oldPrice: 79999, icon: "fa-tv" },
    { id: 2,  name: "43\" Full HD LED TV",         brand: "Vertex",   model: "VX-TV43F",   category: "tv",         price: 36999,  oldPrice: 42999, icon: "fa-tv" },
    { id: 3,  name: "65\" QLED Smart TV",          brand: "Vertex",   model: "VX-TV65Q",   category: "tv",         price: 112999, oldPrice: 129999,icon: "fa-tv" },
    { id: 4,  name: "Soundbar 2.1 Bluetooth",      brand: "Vertex",   model: "VX-SB210",   category: "tv",         price: 18999,  oldPrice: null,  icon: "fa-volume-high" },
    { id: 5,  name: "Home Theatre System 5.1",     brand: "Vertex",   model: "VX-HT510",   category: "tv",         price: 29999,  oldPrice: 34999, icon: "fa-music" },

    // ---------- Refrigerators ----------
    { id: 6,  name: "Double Door Fridge 350L",     brand: "Vertex",   model: "VX-RF350",   category: "fridge",     price: 74999,  oldPrice: 84999, icon: "fa-temperature-low" },
    { id: 7,  name: "Single Door Fridge 180L",     brand: "Vertex",   model: "VX-RF180",   category: "fridge",     price: 38999,  oldPrice: null,  icon: "fa-temperature-low" },
    { id: 8,  name: "Side-by-Side Fridge 560L",    brand: "Vertex",   model: "VX-RF560",   category: "fridge",     price: 159999, oldPrice: 179999,icon: "fa-temperature-low" },
    { id: 9,  name: "Chest Freezer 200L",          brand: "Vertex",   model: "VX-CF200",   category: "fridge",     price: 44999,  oldPrice: 49999, icon: "fa-snowflake" },
    { id: 10, name: "Mini Bar Fridge 90L",         brand: "Vertex",   model: "VX-RF090",   category: "fridge",     price: 21999,  oldPrice: null,  icon: "fa-temperature-low" },

    // ---------- Washing Machines ----------
    { id: 11, name: "Front Load Washer 8kg",       brand: "Vertex",   model: "VX-WM08F",   category: "washing",    price: 64999,  oldPrice: 72999, icon: "fa-shirt" },
    { id: 12, name: "Top Load Washer 7kg",         brand: "Vertex",   model: "VX-WM07T",   category: "washing",    price: 42999,  oldPrice: null,  icon: "fa-shirt" },
    { id: 13, name: "Twin Tub Washer 10kg",        brand: "Vertex",   model: "VX-WM10D",   category: "washing",    price: 28999,  oldPrice: 32999, icon: "fa-shirt" },
    { id: 14, name: "Washer Dryer Combo 9kg",      brand: "Vertex",   model: "VX-WD09C",   category: "washing",    price: 89999,  oldPrice: 99999, icon: "fa-shirt" },

    // ---------- Microwaves ----------
    { id: 15, name: "Solo Microwave 20L",          brand: "Vertex",   model: "VX-MW20S",   category: "microwave",  price: 11999,  oldPrice: 13999, icon: "fa-fire" },
    { id: 16, name: "Grill Microwave 25L",         brand: "Vertex",   model: "VX-MW25G",   category: "microwave",  price: 17999,  oldPrice: null,  icon: "fa-fire" },
    { id: 17, name: "Convection Microwave 30L",    brand: "Vertex",   model: "VX-MW30C",   category: "microwave",  price: 24999,  oldPrice: 28999, icon: "fa-fire" },
    { id: 18, name: "Digital Microwave 23L",       brand: "Vertex",   model: "VX-MW23D",   category: "microwave",  price: 14999,  oldPrice: null,  icon: "fa-fire" },

    // ---------- Dishwashers ----------
    { id: 19, name: "Freestanding Dishwasher 12P", brand: "Vertex",   model: "VX-DW12F",   category: "dishwasher", price: 69999,  oldPrice: 78999, icon: "fa-soap" },
    { id: 20, name: "Compact Dishwasher 6P",       brand: "Vertex",   model: "VX-DW06C",   category: "dishwasher", price: 44999,  oldPrice: null,  icon: "fa-soap" },
    { id: 21, name: "Built-In Dishwasher 14P",     brand: "Vertex",   model: "VX-DW14B",   category: "dishwasher", price: 94999,  oldPrice: 109999,icon: "fa-soap" },

    // ---------- Air Conditioners ----------
    { id: 22, name: "Split AC 1.0HP Inverter",     brand: "Vertex",   model: "VX-AC10I",   category: "ac",         price: 54999,  oldPrice: 62999, icon: "fa-snowflake" },
    { id: 23, name: "Split AC 1.5HP Inverter",     brand: "Vertex",   model: "VX-AC15I",   category: "ac",         price: 69999,  oldPrice: null,  icon: "fa-snowflake" },
    { id: 24, name: "Portable AC 1.0HP",           brand: "Vertex",   model: "VX-AC10P",   category: "ac",         price: 47999,  oldPrice: 52999, icon: "fa-wind" },
    { id: 25, name: "Window AC 1.5HP",             brand: "Vertex",   model: "VX-AC15W",   category: "ac",         price: 58999,  oldPrice: 64999, icon: "fa-snowflake" },

    // ---------- Cookers ----------
    { id: 26, name: "4-Gas Cooker + Oven",         brand: "Vertex",   model: "VX-CK40G",   category: "cooker",     price: 48999,  oldPrice: 55999, icon: "fa-kitchen-set" },
    { id: 27, name: "3-Gas + 1-Electric Cooker",   brand: "Vertex",   model: "VX-CK31M",   category: "cooker",     price: 52999,  oldPrice: null,  icon: "fa-kitchen-set" },
    { id: 28, name: "Ceramic Hob Cooker",          brand: "Vertex",   model: "VX-CK4CH",   category: "cooker",     price: 61999,  oldPrice: 69999, icon: "fa-fire-burner" },
    { id: 29, name: "Table Top Cooker 2-Burner",   brand: "Vertex",   model: "VX-CK2TT",   category: "cooker",     price: 8999,   oldPrice: null,  icon: "fa-fire-burner" },

    // ---------- Built-In ----------
    { id: 30, name: "Built-In Oven 70L",           brand: "Vertex",   model: "VX-BO70",    category: "builtin",    price: 72999,  oldPrice: 82999, icon: "fa-house" },
    { id: 31, name: "Built-In Gas Hob 4-Burner",   brand: "Vertex",   model: "VX-BH04",    category: "builtin",    price: 39999,  oldPrice: null,  icon: "fa-house" },
    { id: 32, name: "Built-In Cooker Hood 90cm",   brand: "Vertex",   model: "VX-BC90",    category: "builtin",    price: 33999,  oldPrice: 37999, icon: "fa-house" },

    // ---------- Small Appliances ----------
    { id: 33, name: "Blender 1.5L 2-in-1",         brand: "Vertex",   model: "VX-BL15",    category: "small",      price: 6499,   oldPrice: 7999,  icon: "fa-blender" },
    { id: 34, name: "Electric Kettle 1.7L",        brand: "Vertex",   model: "VX-EK17",    category: "small",      price: 3499,   oldPrice: null,  icon: "fa-mug-hot" },
    { id: 35, name: "2-Slice Toaster",             brand: "Vertex",   model: "VX-TS02",    category: "small",      price: 4299,   oldPrice: 4999,  icon: "fa-bread-slice" },
    { id: 36, name: "Steam Iron 2200W",            brand: "Vertex",   model: "VX-SI22",    category: "small",      price: 3999,   oldPrice: null,  icon: "fa-shirt" }

];


/* -----------------------------------------
   2. STATE
----------------------------------------- */

let currentCategory = "all";
let currentSearch   = "";
let currentSort     = "featured";

let cart = loadCart();   // [{ id, qty }]


/* -----------------------------------------
   3. DOM ELEMENTS
----------------------------------------- */

const productGrid    = document.getElementById("productGrid");
const noProducts     = document.getElementById("noProducts");
const searchInput    = document.getElementById("searchInput");
const sortSelect     = document.getElementById("sortProducts");
const categoryBtns   = document.querySelectorAll(".category-btn");
const productCounter = document.getElementById("productCounter");
const resultsText    = document.getElementById("resultsText");

const cartButton  = document.getElementById("cartButton");
const cartCount   = document.getElementById("cartCount");
const cartPanel   = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart   = document.getElementById("closeCart");
const cartItems   = document.getElementById("cartItems");
const cartTotal   = document.getElementById("cartTotal");

const footerCatLinks = document.querySelectorAll("[data-footer-category]");
const mobileMenuBtn  = document.getElementById("mobileMenuBtn");


/* -----------------------------------------
   4. HELPERS
----------------------------------------- */

/* Format a number as Kenyan Shillings, e.g. 68999 -> "KSh 68,999" */
function formatPrice(amount) {
    return "KSh " + amount.toLocaleString("en-KE");
}

/* Return products after applying category + search + sort */
function getFilteredProducts() {

    let list = PRODUCTS.slice();

    // Category filter
    if (currentCategory !== "all") {
        list = list.filter(function (p) {
            return p.category === currentCategory;
        });
    }

    // Search filter (name, brand, model)
    if (currentSearch.trim() !== "") {

        const term = currentSearch.trim().toLowerCase();

        list = list.filter(function (p) {
            return (
                p.name.toLowerCase().includes(term)  ||
                p.brand.toLowerCase().includes(term) ||
                p.model.toLowerCase().includes(term) ||
                p.category.toLowerCase().includes(term)
            );
        });
    }

    // Sorting
    if (currentSort === "low") {
        list.sort(function (a, b) { return a.price - b.price; });
    } else if (currentSort === "high") {
        list.sort(function (a, b) { return b.price - a.price; });
    } else if (currentSort === "name") {
        list.sort(function (a, b) { return a.name.localeCompare(b.name); });
    }
    // "featured" keeps the original order

    return list;
}


/* -----------------------------------------
   5. RENDER PRODUCTS
----------------------------------------- */

function renderProducts() {

    const list = getFilteredProducts();

    // Update counters
    const count = list.length;

    if (resultsText) {
        resultsText.textContent = count + (count === 1 ? " product" : " products");
    }

    if (productCounter) {
        if (currentCategory === "all" && currentSearch.trim() === "") {
            productCounter.textContent = "Showing all products";
        } else {
            productCounter.textContent = "Showing " + count + " of " + PRODUCTS.length + " products";
        }
    }

    // Empty state
    if (count === 0) {
        productGrid.innerHTML = "";
        if (noProducts) { noProducts.style.display = "block"; }
        return;
    } else {
        if (noProducts) { noProducts.style.display = "none"; }
    }

    // Build cards
    let html = "";

    list.forEach(function (p) {

        // Discount badge (only if there is an old price)
        let badge = "";
        if (p.oldPrice) {
            const percent = Math.round((1 - p.price / p.oldPrice) * 100);
            badge = '<span class="discount-badge">-' + percent + '%</span>';
        }

        // Old price line
        let oldPriceHtml = "";
        if (p.oldPrice) {
            oldPriceHtml = '<span class="old-price">' + formatPrice(p.oldPrice) + '</span>';
        }

        html +=
            '<div class="product-card">' +

                '<div class="product-visual">' +
                    badge +
                    '<span class="category-label">' + categoryName(p.category) + '</span>' +
                    '<div class="product-icon">' +
                        '<i class="fas ' + p.icon + '"></i>' +
                    '</div>' +
                '</div>' +

                '<div class="product-info">' +
                    '<div class="product-brand">' + p.brand + '</div>' +
                    '<h3 class="product-name">' + p.name + '</h3>' +
                    '<div class="product-model">' + p.model + '</div>' +

                    '<div class="price-row">' +
                        '<div>' +
                            '<span class="price">' + formatPrice(p.price) + '</span>' +
                            oldPriceHtml +
                        '</div>' +
                        '<button class="add-cart" data-id="' + p.id + '" aria-label="Add to cart">' +
                            '<i class="fas fa-cart-plus"></i>' +
                        '</button>' +
                    '</div>' +
                '</div>' +

            '</div>';
    });

    productGrid.innerHTML = html;

    // Attach add-to-cart handlers
    const addButtons = productGrid.querySelectorAll(".add-cart");
    addButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const id = parseInt(btn.getAttribute("data-id"), 10);
            addToCart(id);
        });
    });
}

/* Friendly category label shown on the card */
function categoryName(cat) {
    const names = {
        tv: "TV",
        fridge: "Fridge",
        washing: "Washer",
        microwave: "Microwave",
        dishwasher: "Dishwasher",
        ac: "AC",
        cooker: "Cooker",
        builtin: "Built-In",
        small: "Appliance"
    };
    return names[cat] || "Product";
}


/* -----------------------------------------
   6. CART LOGIC
----------------------------------------- */

function loadCart() {
    try {
        const saved = localStorage.getItem("vertexCart");
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
}

function saveCart() {
    try {
        localStorage.setItem("vertexCart", JSON.stringify(cart));
    } catch (e) {
        /* localStorage not available - cart stays in memory only */
    }
}

function addToCart(id) {

    const existing = cart.find(function (item) { return item.id === id; });

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: id, qty: 1 });
    }

    saveCart();
    updateCartUI();
    openCartPanel();   // open the panel so the user sees what was added
}

function removeFromCart(id) {
    cart = cart.filter(function (item) { return item.id !== id; });
    saveCart();
    updateCartUI();
}

function changeQty(id, delta) {

    const item = cart.find(function (i) { return i.id === id; });
    if (!item) { return; }

    item.qty += delta;

    if (item.qty <= 0) {
        removeFromCart(id);
    } else {
        saveCart();
        updateCartUI();
    }
}

function updateCartUI() {

    // Count badge (total items)
    const totalItems = cart.reduce(function (sum, i) { return sum + i.qty; }, 0);
    if (cartCount) { cartCount.textContent = totalItems; }

    // Empty cart
    if (cart.length === 0) {
        cartItems.innerHTML =
            '<div class="empty-cart">' +
                '<i class="fas fa-cart-shopping"></i>' +
                '<h3>Your cart is empty</h3>' +
                '<p>Add products to your cart to see them here.</p>' +
            '</div>';
        if (cartTotal) { cartTotal.textContent = "KSh 0"; }
        return;
    }

    // Build cart item rows
    let html = "";
    let total = 0;

    cart.forEach(function (item) {

        const product = PRODUCTS.find(function (p) { return p.id === item.id; });
        if (!product) { return; }

        const lineTotal = product.price * item.qty;
        total += lineTotal;

        html +=
            '<div class="cart-item">' +

                '<div class="cart-item-icon">' +
                    '<i class="fas ' + product.icon + '"></i>' +
                '</div>' +

                '<div class="cart-item-details">' +
                    '<h4>' + product.name + '</h4>' +
                    '<p>' + formatPrice(product.price) + ' × ' + item.qty + '</p>' +
                    '<p><strong>' + formatPrice(lineTotal) + '</strong></p>' +

                    '<div class="qty-controls">' +
                        '<button class="qty-btn" data-action="dec" data-id="' + item.id + '">−</button>' +
                        '<span>' + item.qty + '</span>' +
                        '<button class="qty-btn" data-action="inc" data-id="' + item.id + '">+</button>' +
                    '</div>' +
                '</div>' +

                '<button class="remove-item" data-id="' + item.id + '" aria-label="Remove item">' +
                    '<i class="fas fa-trash"></i>' +
                '</button>' +

            '</div>';
    });

    cartItems.innerHTML = html;
    if (cartTotal) { cartTotal.textContent = formatPrice(total); }

    // Remove handlers
    cartItems.querySelectorAll(".remove-item").forEach(function (btn) {
        btn.addEventListener("click", function () {
            removeFromCart(parseInt(btn.getAttribute("data-id"), 10));
        });
    });

    // Quantity handlers
    cartItems.querySelectorAll(".qty-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const id = parseInt(btn.getAttribute("data-id"), 10);
            const delta = btn.getAttribute("data-action") === "inc" ? 1 : -1;
            changeQty(id, delta);
        });
    });
}


/* -----------------------------------------
   7. CART PANEL OPEN / CLOSE
----------------------------------------- */

function openCartPanel() {
    if (cartPanel)   { cartPanel.classList.add("open"); }
    if (cartOverlay) { cartOverlay.classList.add("show"); }
}

function closeCartPanel() {
    if (cartPanel)   { cartPanel.classList.remove("open"); }
    if (cartOverlay) { cartOverlay.classList.remove("show"); }
}


/* -----------------------------------------
   8. EVENT LISTENERS
----------------------------------------- */

// Search (live as you type)
if (searchInput) {
    searchInput.addEventListener("input", function () {
        currentSearch = searchInput.value;
        renderProducts();
    });
}

// Sorting
if (sortSelect) {
    sortSelect.addEventListener("change", function () {
        currentSort = sortSelect.value;
        renderProducts();
    });
}

// Category buttons
categoryBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {

        categoryBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        currentCategory = btn.getAttribute("data-category");
        renderProducts();
    });
});

// Footer "Shop" links that filter by category
footerCatLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const cat = link.getAttribute("data-footer-category");
        currentCategory = cat;

        // Sync the category buttons highlight
        categoryBtns.forEach(function (b) {
            b.classList.toggle("active", b.getAttribute("data-category") === cat);
        });

        renderProducts();

        // Scroll up to the product grid
        const section = document.querySelector(".catalogue-section");
        if (section) { section.scrollIntoView({ behavior: "smooth" }); }
    });
});

// Cart open / close
if (cartButton)  { cartButton.addEventListener("click", openCartPanel); }
if (closeCart)   { closeCart.addEventListener("click", closeCartPanel); }
if (cartOverlay) { cartOverlay.addEventListener("click", closeCartPanel); }

// Mobile menu toggle (shows/hides the nav on small screens)
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
        const nav = document.querySelector(".main-nav");
        if (nav) { nav.classList.toggle("show-mobile"); }
    });
}


/* -----------------------------------------
   9. INITIALISE
----------------------------------------- */

renderProducts();
updateCartUI();
