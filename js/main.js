/**
 * eRefill Landing Page Client JavaScript
 * Lightweight, zero dependencies, accessible, high-performance
 */

document.addEventListener('DOMContentLoaded', () => {
  initDownloadConfig();
  initMobileNav();
  initFaqAccordion();
  initScreenshotShowcase();
  initScrollEffects();
  initDownloadTriggers();
  initInstallModal();
});

/**
 * Injects configuration parameters from config.js into the DOM
 */
function initDownloadConfig() {
  if (typeof EREFILL_CONFIG === 'undefined') return;

  // Bind all download buttons
  const downloadButtons = document.querySelectorAll('[data-apk-download]');
  downloadButtons.forEach(btn => {
    btn.setAttribute('href', EREFILL_CONFIG.downloadUrl);
    btn.setAttribute('download', EREFILL_CONFIG.fileName);
  });

  // Populate dynamic metadata values
  const configElements = document.querySelectorAll('[data-config]');
  configElements.forEach(el => {
    const key = el.getAttribute('data-config');
    if (EREFILL_CONFIG[key] !== undefined) {
      el.textContent = EREFILL_CONFIG[key];
    }
  });
}

/**
 * Mobile Navigation Drawer Toggle & Escape handler
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (!toggleBtn || !mobileNav) return;

  const toggle = (force) => {
    const isOpen = typeof force === 'boolean' ? force : !mobileNav.classList.contains('open');
    mobileNav.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen.toString());
  };

  toggleBtn.addEventListener('click', () => toggle());

  // Close when clicking mobile nav links
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      toggle(false);
    }
  });
}

/**
 * Accessible FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;

    button.addEventListener('click', () => {
      const isCurrentlyOpen = item.classList.contains('open');

      // Close all other items for a clean single-open accordion
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle clicked item
      item.classList.toggle('open', !isCurrentlyOpen);
      button.setAttribute('aria-expanded', (!isCurrentlyOpen).toString());
    });
  });
}

/**
 * Interactive App Preview / Screenshot switcher
 * Authentic screen contents and descriptions for Owner, Customer, and Rider workflows
 */
const PREVIEW_DATA = {
  dashboard: {
    badge: "Station Owner",
    title: "Real-Time Station Dashboard",
    description: "Get instant visibility over daily refill volumes, active orders, revenue earnings, and active delivery riders from a single intuitive view.",
    highlights: [
      "Live order counter (completed, in-progress, pending)",
      "Daily revenue calculation and sales breakdown",
      "One-tap station availability toggle (Open / Closed)",
      "Instant quick actions to add orders or dispatch staff"
    ],
    screenType: "dashboard"
  },
  orders: {
    badge: "Operations",
    title: "Smart Order Management",
    description: "Eliminate order confusion and missing water deliveries. Process orders in real time with atomic status synchronization from placement to doorstep.",
    highlights: [
      "Real-time incoming orders with customer details and item breakdown",
      "Direct status flow: Order Placed → Dispensing → Assigned → Delivered",
      "Immediate rider dispatching with route notes",
      "Support for refill only or new container purchases"
    ],
    screenType: "orders"
  },
  inventory: {
    badge: "Inventory & Assets",
    title: "Water & Gallon Stock Tracker",
    description: "Never lose track of your expensive 5-gallon containers. Monitor purified and alkaline volumes alongside Slim and Round containers.",
    highlights: [
      "Tracks Slim (blue/clear) and Round container inventory separately",
      "Monitors containers held by customers vs in-station stock",
      "Tracks empty gallons pending washing and sanitization",
      "Quick transaction logging with batch additions (+5, +10, +25, +50)"
    ],
    screenType: "inventory"
  },
  delivery: {
    badge: "Logistics",
    title: "OpenStreetMap Delivery Tracking",
    description: "Pinpoint customer drop-off locations and track rider movements live on the map without expensive third-party mapping subscriptions.",
    highlights: [
      "Interactive OpenStreetMap integration with custom station & delivery pins",
      "Live GPS tracking of active delivery riders",
      "Accurate ETA, distance calculations, and navigation routes",
      "Geofenced status updates when rider reaches the drop-off point"
    ],
    screenType: "delivery"
  },
  customer: {
    badge: "Customer Portal",
    title: "Seamless Customer Ordering",
    description: "Customers can order clean drinking water in seconds, schedule delivery or pickup, and choose digital payments or Cash on Delivery.",
    highlights: [
      "Find nearby water refilling stations within delivery range",
      "Select water types: Purified, Alkaline, or Mineral",
      "Flexible payment: PayMongo GCash, Maya, cards, or Cash on Delivery",
      "Live 4-step order progress timeline with rider contact details"
    ],
    screenType: "customer"
  },
  rider: {
    badge: "Delivery Rider",
    title: "Rider Tasks & Offline Utang Tracking",
    description: "Empower riders with a dedicated task queue, turn-by-turn customer locations, digital proof-of-delivery signatures, and offline balance tracking.",
    highlights: [
      "Assigned delivery queue with customer phone & address shortcuts",
      "Offline SQLite storage: works even in low-signal areas",
      "Customer credit (Utang) ledger and debt collection recording",
      "Automatic rider commission and gallon milestone tallying"
    ],
    screenType: "rider"
  }
};

function initScreenshotShowcase() {
  const tabButtons = document.querySelectorAll('.preview-tab-btn');
  const badgeEl = document.getElementById('previewBadge');
  const titleEl = document.getElementById('previewTitle');
  const descEl = document.getElementById('previewDesc');
  const listEl = document.getElementById('previewHighlights');
  const screenContainer = document.getElementById('showcaseScreenContent');

  if (!tabButtons.length || !screenContainer) return;

  const updatePreview = (key) => {
    const data = PREVIEW_DATA[key];
    if (!data) return;

    // Update active tab button
    tabButtons.forEach(btn => {
      const isActive = btn.getAttribute('data-preview-key') === key;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive.toString());
    });

    // Update text details
    if (badgeEl) badgeEl.textContent = data.badge;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.description;

    if (listEl) {
      listEl.innerHTML = data.highlights.map(h => `
        <li class="preview-highlight-item">
          <svg class="preview-highlight-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
          <span>${h}</span>
        </li>
      `).join('');
    }

    // Render screen UI inside phone mockup
    renderScreenContent(screenContainer, data.screenType);
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-preview-key');
      updatePreview(key);
    });
  });

  // Initial load
  updatePreview('dashboard');
}

/**
 * Generates the internal UI for the phone mockup based on current screen
 */
function renderScreenContent(container, type) {
  switch (type) {
    case 'dashboard':
      container.innerHTML = `
        <div class="phone-status-bar"><span>9:41</span><span>4G • 98%</span></div>
        <div class="phone-app-header">
          <div class="phone-app-brand">
            <div style="width:24px;height:24px;border-radius:6px;background:#fff;display:flex;align-items:center;justify-content:center;color:#0437F2;font-weight:900;font-size:11px;">eR</div>
            <div>
              <div class="phone-app-title">AquaPure Station</div>
              <div class="phone-app-subtitle">Station Owner Dashboard</div>
            </div>
          </div>
          <span class="phone-badge-open">OPEN</span>
        </div>
        <div class="phone-content">
          <div class="mini-stat-grid">
            <div class="mini-stat-card">
              <div class="mini-stat-label">TODAY'S REVENUE</div>
              <div class="mini-stat-value">₱4,850</div>
              <div class="mini-stat-sub">↑ 18% vs yesterday</div>
            </div>
            <div class="mini-stat-card">
              <div class="mini-stat-label">GALLONS DELIVERED</div>
              <div class="mini-stat-value">138</div>
              <div class="mini-stat-sub">34 orders completed</div>
            </div>
          </div>
          <div class="mini-stat-grid">
            <div class="mini-stat-card">
              <div class="mini-stat-label">ACTIVE RIDERS</div>
              <div class="mini-stat-value">4 Online</div>
              <div style="font-size:8px;color:#0437F2;font-weight:600;margin-top:2px;">All on deliveries</div>
            </div>
            <div class="mini-stat-card">
              <div class="mini-stat-label">SLIM STOCK</div>
              <div class="mini-stat-value">62 Available</div>
              <div style="font-size:8px;color:#5C6784;margin-top:2px;">48 With customers</div>
            </div>
          </div>
          <div class="phone-section-label">
            <span>ACTIVE ORDERS</span>
            <span style="color:#0437F2;cursor:pointer;">View All (8)</span>
          </div>
          <div class="mini-order-card">
            <div class="mini-order-top">
              <span class="mini-order-id">#ORD-1082 • Juan Dela Cruz</span>
              <span class="mini-status-chip status-delivering">Out for Delivery</span>
            </div>
            <div class="mini-order-detail">3x 5-gal Slim Alkaline • Mabini St.</div>
            <div class="mini-order-foot">
              <span class="mini-rider-tag">🛵 Rider: Mark R.</span>
              <span class="mini-order-price">₱135 (Paid - GCash)</span>
            </div>
          </div>
          <div class="mini-order-card">
            <div class="mini-order-top">
              <span class="mini-order-id">#ORD-1083 • Elena Santos</span>
              <span class="mini-status-chip status-ready">Dispensing</span>
            </div>
            <div class="mini-order-detail">2x 5-gal Round Purified • Rizal Ave.</div>
            <div class="mini-order-foot">
              <span class="mini-rider-tag">🛵 Assigning Rider...</span>
              <span class="mini-order-price">₱70 (COD)</span>
            </div>
          </div>
        </div>
        <div class="phone-bottom-nav">
          <div class="phone-nav-item active"><span>📊</span><span>Dashboard</span></div>
          <div class="phone-nav-item"><span>📦</span><span>Orders</span></div>
          <div class="phone-nav-item"><span>💧</span><span>Inventory</span></div>
          <div class="phone-nav-item"><span>🛵</span><span>Riders</span></div>
        </div>
      `;
      break;

    case 'orders':
      container.innerHTML = `
        <div class="phone-status-bar"><span>9:41</span><span>4G • 98%</span></div>
        <div class="phone-app-header">
          <div>
            <div class="phone-app-title">Live Orders</div>
            <div class="phone-app-subtitle">Atomic Queue & Dispatch</div>
          </div>
          <span style="font-size:10px;background:#fff;color:#0437F2;padding:3px 8px;border-radius:12px;font-weight:700;">+ New Order</span>
        </div>
        <div class="phone-content">
          <div style="display:flex;gap:6px;margin-bottom:2px;">
            <span style="font-size:9px;background:#0437F2;color:#fff;padding:3px 8px;border-radius:12px;font-weight:700;">All (14)</span>
            <span style="font-size:9px;background:#fff;border:1px solid #E2E8F0;color:#5C6784;padding:3px 8px;border-radius:12px;font-weight:600;">Pending (2)</span>
            <span style="font-size:9px;background:#fff;border:1px solid #E2E8F0;color:#5C6784;padding:3px 8px;border-radius:12px;font-weight:600;">On Delivery (5)</span>
          </div>
          <div class="mini-order-card" style="border-left:3px solid #0437F2;">
            <div class="mini-order-top">
              <span class="mini-order-id">#ORD-1085 • Barangay Health Center</span>
              <span class="mini-status-chip" style="background:#FFF7ED;color:#9A3412;">Pending Dispatch</span>
            </div>
            <div class="mini-order-detail">10x 5-gal Slim Purified • City Proper</div>
            <div class="mini-order-foot">
              <span style="color:#0437F2;font-weight:700;">Tap to Assign Rider</span>
              <span class="mini-order-price">₱350</span>
            </div>
          </div>
          <div class="mini-order-card">
            <div class="mini-order-top">
              <span class="mini-order-id">#ORD-1082 • Juan Dela Cruz</span>
              <span class="mini-status-chip status-delivering">Out for Delivery</span>
            </div>
            <div class="mini-order-detail">3x Slim Alkaline • ETA 6 mins</div>
            <div class="mini-order-foot">
              <span class="mini-rider-tag">🛵 Rider: Mark R.</span>
              <span class="mini-order-price">₱135 (GCash)</span>
            </div>
          </div>
          <div class="mini-order-card">
            <div class="mini-order-top">
              <span class="mini-order-id">#ORD-1081 • Carlos Mendoza</span>
              <span class="mini-status-chip" style="background:#ECFDF3;color:#065F46;">Completed</span>
            </div>
            <div class="mini-order-detail">4x Round Purified • Delivered 9:28 AM</div>
            <div class="mini-order-foot">
              <span class="mini-rider-tag">✍️ Signed by: C. Mendoza</span>
              <span class="mini-order-price">₱140 (Paid)</span>
            </div>
          </div>
        </div>
        <div class="phone-bottom-nav">
          <div class="phone-nav-item"><span>📊</span><span>Dashboard</span></div>
          <div class="phone-nav-item active"><span>📦</span><span>Orders</span></div>
          <div class="phone-nav-item"><span>💧</span><span>Inventory</span></div>
          <div class="phone-nav-item"><span>🛵</span><span>Riders</span></div>
        </div>
      `;
      break;

    case 'inventory':
      container.innerHTML = `
        <div class="phone-status-bar"><span>9:41</span><span>4G • 98%</span></div>
        <div class="phone-app-header">
          <div>
            <div class="phone-app-title">Inventory & Containers</div>
            <div class="phone-app-subtitle">Slim & Round Gallon Tracking</div>
          </div>
          <span style="font-size:10px;background:#fff;color:#0437F2;padding:3px 8px;border-radius:12px;font-weight:700;">+ Log Stock</span>
        </div>
        <div class="phone-content">
          <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:10px;">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;display:flex;justify-content:space-between;">
              <span>5-GALLON SLIM CONTAINERS</span>
              <span style="color:#0437F2;">Total: 220</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;text-align:center;">
              <div style="background:#F8FAFC;padding:6px;border-radius:6px;">
                <div style="font-size:8px;color:#5C6784;">Available</div>
                <div style="font-weight:800;font-size:13px;color:#065F46;">145</div>
              </div>
              <div style="background:#F8FAFC;padding:6px;border-radius:6px;">
                <div style="font-size:8px;color:#5C6784;">With Client</div>
                <div style="font-weight:800;font-size:13px;color:#0437F2;">63</div>
              </div>
              <div style="background:#F8FAFC;padding:6px;border-radius:6px;">
                <div style="font-size:8px;color:#5C6784;">Washing</div>
                <div style="font-weight:800;font-size:13px;color:#9A3412;">12</div>
              </div>
            </div>
          </div>
          <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:10px;">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;display:flex;justify-content:space-between;">
              <span>5-GALLON ROUND CONTAINERS</span>
              <span style="color:#0437F2;">Total: 180</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;text-align:center;">
              <div style="background:#F8FAFC;padding:6px;border-radius:6px;">
                <div style="font-size:8px;color:#5C6784;">Available</div>
                <div style="font-weight:800;font-size:13px;color:#065F46;">112</div>
              </div>
              <div style="background:#F8FAFC;padding:6px;border-radius:6px;">
                <div style="font-size:8px;color:#5C6784;">With Client</div>
                <div style="font-weight:800;font-size:13px;color:#0437F2;">58</div>
              </div>
              <div style="background:#F8FAFC;padding:6px;border-radius:6px;">
                <div style="font-size:8px;color:#5C6784;">Washing</div>
                <div style="font-weight:800;font-size:13px;color:#9A3412;">10</div>
              </div>
            </div>
          </div>
          <div style="background:#E8EFFF;border-radius:8px;padding:8px;display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:9px;font-weight:700;color:#0437F2;">Quick Transaction Log</div>
              <div style="font-size:8px;color:#5C6784;">Record returned or borrowed empties</div>
            </div>
            <span style="font-size:9px;background:#0437F2;color:#fff;padding:3px 8px;border-radius:4px;font-weight:600;">Record</span>
          </div>
        </div>
        <div class="phone-bottom-nav">
          <div class="phone-nav-item"><span>📊</span><span>Dashboard</span></div>
          <div class="phone-nav-item"><span>📦</span><span>Orders</span></div>
          <div class="phone-nav-item active"><span>💧</span><span>Inventory</span></div>
          <div class="phone-nav-item"><span>🛵</span><span>Riders</span></div>
        </div>
      `;
      break;

    case 'delivery':
      container.innerHTML = `
        <div class="phone-status-bar"><span>9:41</span><span>4G • 98%</span></div>
        <div class="phone-app-header">
          <div>
            <div class="phone-app-title">Logistics & Tracking</div>
            <div class="phone-app-subtitle">OpenStreetMap GPS View</div>
          </div>
          <span style="font-size:10px;background:rgba(255,255,255,0.2);color:#fff;padding:3px 8px;border-radius:12px;">Live</span>
        </div>
        <div class="phone-content" style="padding:0;position:relative;background:#E5E7EB;overflow:hidden;">
          <div style="height:280px;background:linear-gradient(135deg,#D1D5DB,#E5E7EB);display:flex;align-items:center;justify-content:center;position:relative;">
            <!-- Simulated OSM Map UI -->
            <div style="position:absolute;inset:0;opacity:0.4;background-image:radial-gradient(#94A3B8 1px, transparent 1px);background-size:16px 16px;"></div>
            <!-- Station Pin -->
            <div style="position:absolute;top:50px;left:60px;display:flex;flex-direction:column;align-items:center;">
              <div style="background:#0437F2;color:#fff;font-size:8px;font-weight:700;padding:2px 6px;border-radius:4px;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2);">Station Hub</div>
              <div style="width:12px;height:12px;background:#0437F2;border:2px solid #fff;border-radius:50%;margin-top:2px;"></div>
            </div>
            <!-- Rider Pin with Pulse -->
            <div style="position:absolute;top:130px;left:140px;display:flex;flex-direction:column;align-items:center;">
              <div style="background:#0F172A;color:#fff;font-size:8px;font-weight:700;padding:2px 6px;border-radius:4px;box-shadow:0 2px 4px rgba(0,0,0,0.2);">🛵 Rider Mark (1.2 km)</div>
              <div style="width:14px;height:14px;background:#10B981;border:2px solid #fff;border-radius:50%;box-shadow:0 0 0 4px rgba(16,185,129,0.3);margin-top:2px;"></div>
            </div>
            <!-- Drop-off Pin -->
            <div style="position:absolute;top:200px;right:60px;display:flex;flex-direction:column;align-items:center;">
              <div style="background:#DC2626;color:#fff;font-size:8px;font-weight:700;padding:2px 6px;border-radius:4px;box-shadow:0 2px 4px rgba(0,0,0,0.2);">📍 Drop-off: J. Dela Cruz</div>
              <div style="width:10px;height:10px;background:#DC2626;border:2px solid #fff;border-radius:50%;margin-top:2px;"></div>
            </div>
          </div>
          <div style="padding:12px;background:#fff;border-top:1px solid #E2E8F0;flex:1;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
              <span style="font-weight:800;font-size:11px;color:#14213D;">Active Dispatch: #ORD-1082</span>
              <span style="font-size:9px;font-weight:700;color:#0437F2;background:#E8EFFF;padding:2px 6px;border-radius:4px;">ETA 6 MIN</span>
            </div>
            <div style="font-size:9px;color:#5C6784;">Rider is en route to Mabini St. via Rizal Ave.</div>
            <div style="margin-top:8px;display:flex;gap:6px;">
              <button style="flex:1;background:#0437F2;color:#fff;padding:6px;border-radius:6px;font-size:9px;font-weight:700;">Call Rider</button>
              <button style="flex:1;background:#F1F5F9;border:1px solid #E2E8F0;color:#14213D;padding:6px;border-radius:6px;font-size:9px;font-weight:600;">Order Details</button>
            </div>
          </div>
        </div>
        <div class="phone-bottom-nav">
          <div class="phone-nav-item"><span>📊</span><span>Dashboard</span></div>
          <div class="phone-nav-item"><span>📦</span><span>Orders</span></div>
          <div class="phone-nav-item"><span>💧</span><span>Inventory</span></div>
          <div class="phone-nav-item active"><span>🛵</span><span>Riders</span></div>
        </div>
      `;
      break;

    case 'customer':
      container.innerHTML = `
        <div class="phone-status-bar"><span>9:41</span><span>4G • 98%</span></div>
        <div class="phone-app-header">
          <div>
            <div class="phone-app-title">Hello, Juan 👋</div>
            <div class="phone-app-subtitle">Order Clean Refills</div>
          </div>
          <span style="font-size:9px;background:rgba(255,255,255,0.2);color:#fff;padding:3px 8px;border-radius:12px;">Cart (3)</span>
        </div>
        <div class="phone-content">
          <div style="background:#E8EFFF;border-radius:10px;padding:10px;display:flex;align-items:center;gap:10px;">
            <div style="font-size:20px;">💧</div>
            <div>
              <div style="font-size:10px;font-weight:800;color:#0437F2;">AquaPure Refilling Station</div>
              <div style="font-size:8px;color:#5C6784;">0.6 km away • Open • Fast delivery</div>
            </div>
          </div>
          <div class="phone-section-label">
            <span>SELECT WATER TYPE</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:#fff;border:1px solid #0437F2;border-radius:8px;padding:8px;position:relative;">
              <div style="font-size:9px;font-weight:800;color:#0437F2;">Alkaline Refill</div>
              <div style="font-size:12px;font-weight:900;color:#14213D;margin-top:2px;">₱45 / gal</div>
              <div style="font-size:8px;color:#5C6784;">pH 8.5+ ionized</div>
              <div style="margin-top:6px;background:#0437F2;color:#fff;font-size:8px;text-align:center;padding:3px;border-radius:4px;font-weight:700;">Selected (3)</div>
            </div>
            <div style="background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:8px;">
              <div style="font-size:9px;font-weight:800;color:#14213D;">Purified Water</div>
              <div style="font-size:12px;font-weight:900;color:#14213D;margin-top:2px;">₱30 / gal</div>
              <div style="font-size:8px;color:#5C6784;">16-stage filtration</div>
              <div style="margin-top:6px;background:#F1F5F9;color:#14213D;font-size:8px;text-align:center;padding:3px;border-radius:4px;font-weight:600;">Add to Cart</div>
            </div>
          </div>
          <div style="background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:10px;">
            <div style="font-size:9px;font-weight:700;margin-bottom:4px;">PAYMENT METHOD</div>
            <div style="display:flex;gap:6px;font-size:8px;">
              <span style="background:#ECFDF3;color:#065F46;padding:3px 6px;border-radius:4px;font-weight:700;">✓ GCash (PayMongo)</span>
              <span style="background:#F8FAFC;border:1px solid #E2E8F0;color:#5C6784;padding:3px 6px;border-radius:4px;">Cash on Delivery</span>
            </div>
          </div>
          <button style="background:#0437F2;color:#fff;padding:8px;border-radius:8px;font-size:10px;font-weight:800;width:100%;border:none;">Place Order • ₱135</button>
        </div>
        <div class="phone-bottom-nav">
          <div class="phone-nav-item active"><span>🏠</span><span>Stations</span></div>
          <div class="phone-nav-item"><span>📋</span><span>My Orders</span></div>
          <div class="phone-nav-item"><span>💬</span><span>Chat</span></div>
          <div class="phone-nav-item"><span>👤</span><span>Account</span></div>
        </div>
      `;
      break;

    case 'rider':
      container.innerHTML = `
        <div class="phone-status-bar"><span>9:41</span><span>Offline Ready • 95%</span></div>
        <div class="phone-app-header">
          <div>
            <div class="phone-app-title">Mark Ramos (Rider)</div>
            <div class="phone-app-subtitle">AquaPure Delivery Partner</div>
          </div>
          <span style="font-size:9px;background:#ECFDF3;color:#065F46;padding:3px 8px;border-radius:12px;font-weight:700;">● Active</span>
        </div>
        <div class="phone-content">
          <div class="mini-stat-grid">
            <div class="mini-stat-card">
              <div class="mini-stat-label">TODAY'S COMMISSIONS</div>
              <div class="mini-stat-value">₱480</div>
              <div style="font-size:8px;color:#065F46;">32 gallons delivered</div>
            </div>
            <div class="mini-stat-card">
              <div class="mini-stat-label">OFFLINE UTANG LOG</div>
              <div class="mini-stat-value">₱150</div>
              <div style="font-size:8px;color:#0437F2;">SQLite Synced</div>
            </div>
          </div>
          <div class="phone-section-label">
            <span>CURRENT DELIVERY</span>
            <span style="color:#0437F2;">1 of 3</span>
          </div>
          <div class="mini-order-card" style="border:1.5px solid #0437F2;">
            <div class="mini-order-top">
              <span class="mini-order-id">Juan Dela Cruz</span>
              <span class="mini-status-chip status-delivering">En Route</span>
            </div>
            <div class="mini-order-detail">📍 Purok 3, Mabini St., Brgy. San Jose</div>
            <div class="mini-order-detail" style="margin-top:2px;font-weight:600;color:#14213D;">3x 5-gal Slim Alkaline • Refill</div>
            <div style="margin-top:8px;display:flex;gap:6px;">
              <button style="flex:1;background:#0437F2;color:#fff;padding:6px;border-radius:6px;font-size:8px;font-weight:700;">Open Map</button>
              <button style="flex:1;background:#ECFDF3;color:#065F46;border:1px solid #A7F3D0;padding:6px;border-radius:6px;font-size:8px;font-weight:700;">Mark Delivered</button>
            </div>
          </div>
          <div style="background:#FFF7ED;border:1px solid #FFEDD5;border-radius:8px;padding:8px;">
            <div style="font-size:9px;font-weight:700;color:#9A3412;">Debt / Utang Tracker</div>
            <div style="font-size:8px;color:#5C6784;">Customer requested partial payment? Record debt to station ledger.</div>
          </div>
        </div>
        <div class="phone-bottom-nav">
          <div class="phone-nav-item active"><span>📦</span><span>Deliveries</span></div>
          <div class="phone-nav-item"><span>💰</span><span>Earnings</span></div>
          <div class="phone-nav-item"><span>📝</span><span>Credits</span></div>
          <div class="phone-nav-item"><span>👤</span><span>Profile</span></div>
        </div>
      `;
      break;
  }
}

/**
 * Header shadow on scroll & active nav links
 */
function initScrollEffects() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    const scrollY = window.pageYOffset;
    if (header) {
      header.classList.toggle('scrolled', scrollY > 20);
    }

    // Nav active section spy
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Download button trigger & toast feedback
 */
function initDownloadTriggers() {
  const downloadBtns = document.querySelectorAll('[data-apk-download]');
  const toast = document.getElementById('downloadToast');
  const toastMessage = document.getElementById('toastMessage');

  let toastTimer;

  const showToast = (message) => {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  };

  downloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const version = (typeof EREFILL_CONFIG !== 'undefined' && EREFILL_CONFIG.version) ? EREFILL_CONFIG.version : 'v1.0.0';
      showToast(`Downloading eRefill APK (${version})... Check your notification tray or downloads folder.`);
    });
  });

  // Direct link copy helper
  const copyLinkBtn = document.getElementById('copyDownloadLinkBtn');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const directUrl = window.location.origin + '/' + (EREFILL_CONFIG.downloadUrl || 'downloads/erefill.apk');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(directUrl).then(() => {
          showToast('Direct download URL copied to clipboard!');
        }).catch(() => {
          showToast('Download URL: ' + directUrl);
        });
      } else {
        showToast('Download URL: ' + directUrl);
      }
    });
  }
}

/**
 * Installation Guide Modal
 */
function initInstallModal() {
  const modal = document.getElementById('installModal');
  const openBtns = document.querySelectorAll('[data-open-install-modal]');
  const closeBtns = document.querySelectorAll('[data-close-modal]');

  if (!modal) return;

  const toggleModal = (show) => {
    modal.classList.toggle('open', show);
    document.body.style.overflow = show ? 'hidden' : '';
  };

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleModal(true);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => toggleModal(false));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) toggleModal(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      toggleModal(false);
    }
  });
}
