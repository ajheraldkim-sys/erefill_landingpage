/**
 * eRefill Application & Download Configuration
 * Exclusively focused on Water Refilling Station Owners and Customers.
 */

export const EREFILL_CONFIG = {
  appName: "eRefill",
  tagline: "A Smart Order and Inventory Manager for Water Refilling Stations & Customers",
  version: "v1.0.0",
  buildNumber: "1",
  fileSize: "100.1 MB",
  rawFileSizeBytes: 104982158,
  releaseDate: "September 24, 2026",
  minAndroid: "Android 8.0 (Oreo) or higher",
  targetPlatform: "Android (ARM64 & ARMv7)",
  fileFormat: "APK (Package Installer)",
  packageId: "com.erefill.app",
  downloadUrl: "/downloads/erefill.apk",
  fileName: "erefill.apk",
  checksum: "SHA-256 Verified Official Build",
  supportEmail: "support@erefill.app",
};

export const KEY_FEATURES = [
  {
    id: "orders",
    title: "Smart Order Management",
    shortDesc: "Organize walk-in, phone, and customer app orders in a unified real-time queue from placement to doorstep.",
    category: "Operations",
    iconName: "ClipboardList",
    badge: "Real-time Sync",
    bullet: "Atomic status tracking prevents missed refills."
  },
  {
    id: "inventory",
    title: "Water & Empty Gallon Inventory",
    shortDesc: "Track Slim and Round 5-gallon containers accurately. Know units in-station, with clients, or in sanitization.",
    category: "Asset Control",
    iconName: "Droplets",
    badge: "Slim & Round",
    bullet: "Eliminate lost jugs and container shortages."
  },
  {
    id: "debt",
    title: "Customer Debt / Utang Tracking",
    shortDesc: "Maintain a transparent digital ledger for customer credit balances and partial payments online & offline.",
    category: "Finance",
    iconName: "Receipt",
    badge: "Credit Ledger",
    bullet: "Complete transparency for customer balances."
  },
  {
    id: "customer_portal",
    title: "Doorstep Customer Ordering",
    shortDesc: "Customers order purified, alkaline, or mineral water in seconds with live delivery progress updates.",
    category: "Customer App",
    iconName: "ShoppingCart",
    badge: "Easy Ordering",
    bullet: "Browse nearby stations and schedule refills."
  },
  {
    id: "payments",
    title: "Digital Payments & GCash",
    shortDesc: "Integrated PayMongo checkout supporting GCash, Maya, cards, as well as Cash on Delivery.",
    category: "Checkout",
    iconName: "CreditCard",
    badge: "GCash & Maya",
    bullet: "Instant cashless payments or Cash on Delivery."
  },
  {
    id: "delivery_tracking",
    title: "Interactive Delivery Tracking",
    shortDesc: "Track delivery progress on OpenStreetMap with accurate drop-off pins and estimated arrival times.",
    category: "Logistics",
    iconName: "MapPin",
    badge: "OpenStreetMap",
    bullet: "Clear address pins and delivery progress."
  },
  {
    id: "analytics",
    title: "Station Sales & Volume Reports",
    shortDesc: "Track daily revenue summaries, gallon dispense counters, and sales trends without manual paperwork.",
    category: "Business Insights",
    iconName: "BarChart3",
    badge: "Daily Analytics",
    bullet: "Automated daily sales & revenue reports."
  },
  {
    id: "sync",
    title: "Online Cloud Synchronization",
    shortDesc: "Powered by Supabase Realtime, data synchronizes instantly between station owners and customer screens.",
    category: "Cloud",
    iconName: "RefreshCw",
    badge: "Instant Sync",
    bullet: "Live updates across all devices."
  },
  {
    id: "offline",
    title: "Offline SQLite Reliability",
    shortDesc: "Built-in local SQLite database ensures station owners can record orders, inventory, and utang during internet dropouts.",
    category: "Reliability",
    iconName: "Database",
    badge: "SQLite Offline",
    bullet: "Zero data loss with auto-sync."
  }
];

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Order",
    tagline: "Customers place water refills in seconds",
    description: "Customers select their preferred water type (Purified, Alkaline, Mineral), container type, and address. Station staff can also quickly log walk-in customers.",
    metric: "< 30 sec",
    metricLabel: "Average ordering time"
  },
  {
    step: 2,
    title: "Manage",
    tagline: "Station owners oversee dispensing & inventory",
    description: "Owners monitor live gallon inventory, track Slim and Round jugs, review customer debt (utang) balances, and dispatch water deliveries with one tap.",
    metric: "100% Live",
    metricLabel: "Inventory visibility"
  },
  {
    step: 3,
    title: "Deliver",
    tagline: "Water delivered right to customer doorstep",
    description: "Customers receive real-time delivery updates, pay via GCash, Maya, or COD, and receive verified digital transaction receipts upon drop-off.",
    metric: "Real-time",
    metricLabel: "Doorstep delivery tracking"
  }
];

export const USER_ROLES = [
  {
    id: "owner",
    roleName: "Station Owner",
    tagline: "Complete operational and financial command of your refilling station",
    description: "Built for water station owners to manage incoming customer orders, track Slim and Round empty gallon assets, audit customer debt ledgers, and monitor sales.",
    iconName: "Store",
    badge: "Station Oversight",
    features: [
      "Real-time order queue for walk-ins, phone orders, and app orders",
      "Slim and Round 5-gallon container inventory tracker",
      "Customer credit (Utang) ledger with partial payment logging",
      "Delivery dispatch and customer address mapping",
      "Daily revenue calculations and gallon volume reports",
      "One-tap station availability toggle (Open / Closed)"
    ]
  },
  {
    id: "customer",
    roleName: "Customer",
    tagline: "Clean, fresh drinking water refills delivered directly to your doorstep",
    description: "A frictionless mobile experience for households and businesses to browse nearby stations, schedule refills, track drop-offs, and pay conveniently.",
    iconName: "Users",
    badge: "Doorstep Convenience",
    features: [
      "Discover verified water refilling stations in your area",
      "Select water types: Purified, Alkaline, or Mineral",
      "Refill existing gallons or borrow station containers",
      "Flexible payments: PayMongo GCash, Maya, cards, or Cash on Delivery",
      "Live order progress tracker with delivery arrival times",
      "Order history and past transaction receipts"
    ]
  }
];

export const APP_SCREENS = [
  {
    id: "dashboard",
    title: "Station Dashboard",
    roleBadge: "Station Owner",
    description: "Comprehensive live dashboard displaying daily sales, active deliveries, completed refills, and gallon stock at a glance.",
    highlights: [
      "Live revenue and gallon volume statistics",
      "One-tap station availability toggle (Open / Closed)",
      "Instant quick action shortcuts for new walk-ins",
      "Real-time incoming orders overview"
    ]
  },
  {
    id: "orders",
    title: "Smart Orders Queue",
    roleBadge: "Station Owner",
    description: "Real-time order management queue routing orders through Dispensing, Out for Delivery, and Completed.",
    highlights: [
      "Atomic order tracking eliminates missed requests",
      "Filter by Pending, Dispensing, or Delivered",
      "Walk-in, phone, and mobile customer orders in one place",
      "Itemized gallon breakdown and payment status badges"
    ]
  },
  {
    id: "inventory",
    title: "Gallon Inventory",
    roleBadge: "Station Owner",
    description: "Track 5-gallon containers with precision. Differentiate Slim and Round jugs, customer holdings, and units undergoing sanitization.",
    highlights: [
      "Separate tracking for Slim and Round 5-gallon jugs",
      "Counts units in-station vs containers with clients",
      "Tracks empty gallons pending cleaning & sterilization",
      "Batch transaction shortcuts (+5, +10, +25, +50)"
    ]
  },
  {
    id: "credits",
    title: "Customer Debt / Utang Ledger",
    roleBadge: "Station Owner",
    description: "Dedicated digital credit ledger to record customer utang balances, partial payments, and transaction history.",
    highlights: [
      "Track customer balances and unpaid gallons",
      "Record partial collections and log payment history",
      "Works offline via local SQLite database",
      "Clear audit trail for all customer credit transactions"
    ]
  },
  {
    id: "customer_order",
    title: "Customer Refill Ordering",
    roleBadge: "Customer",
    description: "Clean ordering experience for households and offices. Choose water category, quantity, container type, and checkout method.",
    highlights: [
      "Clean water selection: Purified, Alkaline, Mineral",
      "Instant payment via GCash & Maya through PayMongo",
      "Refill existing container or borrow station gallon",
      "Saved delivery addresses for quick 1-tap reordering"
    ]
  },
  {
    id: "customer_tracking",
    title: "Live Delivery Tracker",
    roleBadge: "Customer",
    description: "Customers can track their water delivery progress in real time with estimated arrival time and order status updates.",
    highlights: [
      "Visual 4-step progress bar from order to delivery",
      "OpenStreetMap delivery routing and estimated arrival",
      "Direct chat and contact shortcuts with the water station",
      "Digital receipt upon doorstep completion"
    ]
  }
];

export const FAQS = [
  {
    question: "What is eRefill?",
    answer: "eRefill is a dedicated mobile application designed specifically for water refilling station owners and customers. It provides a synchronized ecosystem to manage water orders, inventory of Slim and Round 5-gallon containers, customer debt (utang), OpenStreetMap deliveries, and digital payments."
  },
  {
    question: "Who can use eRefill?",
    answer: "eRefill is purpose-built for two primary user groups: 1) Water Refilling Station Owners who need total operational control over orders, container assets, customer debts, and sales. 2) Customers who want a hassle-free way to order clean drinking water refills, track delivery, and pay digitally."
  },
  {
    question: "Is eRefill free to download and use?",
    answer: "Yes! The official eRefill Android APK is 100% free to download and install. There are no download fees or trial expiration locks."
  },
  {
    question: "How do I download the APK?",
    answer: "Simply tap any of the 'Download eRefill APK' buttons on this website. Your browser will download the official erefill.apk file directly to your Android device."
  },
  {
    question: "What Android version is supported?",
    answer: "eRefill supports Android 8.0 (Oreo) and all newer versions (Android 9, 10, 11, 12, 13, 14, and 15). The app is lightweight, optimized for fast performance, and runs smoothly on both budget and high-end smartphones."
  },
  {
    question: "Can eRefill work offline?",
    answer: "Yes! eRefill features an offline-first architecture powered by local SQLite storage. Station owners can continue recording walk-ins, stock changes, and customer credit balances (utang) even when internet connectivity drops."
  },
  {
    question: "How do I install the APK on my Android phone?",
    answer: "Installation is simple and takes under 60 seconds: 1) Download the APK from this page. 2) Open the downloaded erefill.apk file from your notification tray or Downloads folder. 3) If prompted, tap Settings and allow 'Install unknown apps' for your browser or file manager. 4) Tap Install on the confirmation prompt. 5) Open eRefill and select your role as Station Owner or Customer!"
  },
  {
    question: "Is my data synchronized when I reconnect to the internet?",
    answer: "Yes! As soon as your device reconnects to Wi-Fi or cellular mobile data, eRefill's synchronization engine automatically transmits all queued local SQLite records—such as completed orders, customer debt logs, and inventory adjustments—to the Supabase cloud database, updating all screens instantly."
  }
];

export const INSTALL_STEPS = [
  {
    step: 1,
    title: "Download APK",
    desc: "Tap the download button to save erefill.apk directly to your Android device."
  },
  {
    step: 2,
    title: "Open File",
    desc: "Tap the download finished notification or open erefill.apk from your Downloads folder."
  },
  {
    step: 3,
    title: "Allow Unknown Apps",
    desc: "If Android displays a security notice, tap Settings and enable 'Allow from this source'."
  },
  {
    step: 4,
    title: "Tap Install",
    desc: "Return to the installer prompt and tap Install to finalize the package setup."
  },
  {
    step: 5,
    title: "Start Using eRefill",
    desc: "Open eRefill, choose Station Owner or Customer, and start managing operations or ordering!"
  }
];
