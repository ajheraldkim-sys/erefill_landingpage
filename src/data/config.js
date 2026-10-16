/**
 * eRefill Application & Download Configuration
 * Exclusively focused on Water Refilling Station Owners and Customers.
 */

export const EREFILL_CONFIG = {
  appName: "eRefill",
  tagline: "A Smart Order and Inventory Manager for Water Refilling Stations & Customers",
  version: "v1.0.0",
  fileSize: "76.8 MB",
  rawFileSizeBytes: 80582626,
  releaseDate: "October 16, 2026",
  minAndroid: "Android 8.0 (Oreo) or higher",
  targetPlatform: "Android (ARM64 & ARMv7)",
  fileFormat: "APK (Package Installer)",
  packageId: "com.erefill.app",
  downloadUrl: "/downloads/eRefill.apk",
  fileName: "eRefill.apk",
  checksum: "SHA-256 Verified Official Build",
  sha256: "1bdb103da59c9389611a2761812a833c55c33244a72a2282a338266189f73da0",
  supportEmail: "support@erefill.app",
};

export const KEY_FEATURES = [
  {
    id: "orders",
    title: "Live Orders Queue",
    shortDesc: "Organize walk-in, phone, and customer app refill orders in a clear real-time queue from dispensing to completion.",
    category: "Station Owner",
    iconName: "ClipboardList",
    badge: "Order Queue",
    bullet: "Atomic status tracking prevents missed customer refills."
  },
  {
    id: "inventory",
    title: "Slim & Round Gallon Inventory",
    shortDesc: "Track 5-gallon containers accurately. Know your count of Slim and Round jugs in the shop, with clients, or in washing.",
    category: "Station Owner",
    iconName: "Droplets",
    badge: "5-Gal Inventory",
    bullet: "Eliminate lost jugs and bottle shortages."
  },
  {
    id: "debt",
    title: "Customer Debt / Utang Ledger",
    shortDesc: "Maintain a clean digital ledger for regular customer credit balances and log partial payments without paper notebooks.",
    category: "Station Owner",
    iconName: "Receipt",
    badge: "Utang Ledger",
    bullet: "Accurate tracking for customer credit balances."
  },
  {
    id: "analytics",
    title: "Daily Sales & Volume Reports",
    shortDesc: "Instantly view daily revenue totals, gallon dispense counters, and sales summaries without manual paperwork.",
    category: "Station Owner",
    iconName: "BarChart3",
    badge: "Sales Reports",
    bullet: "Automated daily revenue and gallon counters."
  },
  {
    id: "customer_order",
    title: "Doorstep Refill Ordering",
    shortDesc: "Customers order purified, alkaline, or mineral water refills in seconds with fast container and quantity selection.",
    category: "Customer",
    iconName: "ShoppingCart",
    badge: "Easy Ordering",
    bullet: "Quick doorstep refill placement in seconds."
  },
  {
    id: "payments",
    title: "Cashless & Cash on Delivery",
    shortDesc: "Flexible checkout supporting GCash, Maya, cards, as well as Cash on Delivery for customer convenience.",
    category: "Customer",
    iconName: "CreditCard",
    badge: "GCash & COD",
    bullet: "Instant cashless payments or Cash on Delivery."
  },
  {
    id: "delivery_tracking",
    title: "Live Delivery Tracking",
    shortDesc: "Customers monitor order progress from preparation and dispensing directly to doorstep arrival.",
    category: "Customer",
    iconName: "MapPin",
    badge: "Live Progress",
    bullet: "Visual delivery updates from order to doorstep."
  },
  {
    id: "chat",
    title: "In-App Station Chat",
    shortDesc: "Direct instant chat between customer and station staff for delivery instructions, landmarks, and bottle queries.",
    category: "Customer",
    iconName: "MessageSquare",
    badge: "Direct Chat",
    bullet: "Instant messaging for special delivery notes."
  }
];

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Order Refill",
    tagline: "Customers place refills in seconds",
    description: "Customers choose Purified, Alkaline, or Mineral water and select their Slim or Round containers. Station staff can also quickly log walk-in customers.",
    metric: "< 30 sec",
    metricLabel: "Average ordering time"
  },
  {
    step: 2,
    title: "Dispense & Stock",
    tagline: "Queue management & gallon inventory",
    description: "Refills appear in the station order queue. Staff sanitize containers and dispense water while Slim and Round stock counts update automatically.",
    metric: "100% Live",
    metricLabel: "Inventory visibility"
  },
  {
    step: 3,
    title: "Deliver to Doorstep",
    tagline: "Live progress & arrival updates",
    description: "Orders are prepared and delivered to the customer's address. Customers track progress directly on their mobile screen.",
    metric: "Real-time",
    metricLabel: "Order progress tracking"
  },
  {
    step: 4,
    title: "Settle & Record",
    tagline: "GCash, COD, & Utang ledger",
    description: "Complete payment via GCash, Maya, or Cash on Delivery, or log regular customer credit to the digital utang ledger with zero paper notebooks.",
    metric: "Zero paper",
    metricLabel: "Transparent transaction records"
  }
];

export const USER_ROLES = [
  {
    id: "owner",
    roleName: "Station Owner",
    tagline: "Complete operational control of your water refilling station",
    description: "Built for water station owners to manage incoming customer orders, track Slim and Round 5-gallon container inventory, audit customer utang ledgers, and monitor sales.",
    iconName: "Store",
    badge: "Station Oversight",
    features: [
      "Real-time order queue for walk-ins, phone calls, and app refills",
      "Slim and Round 5-gallon container inventory tracking",
      "Customer credit (Utang) ledger with partial payment logging",
      "Automated daily sales calculations and gallon volume reports",
      "One-tap station availability toggle (Open / Closed)"
    ]
  },
  {
    id: "customer",
    roleName: "Customer & Household",
    tagline: "Fresh drinking water refills delivered right to your doorstep",
    description: "A simple and convenient mobile experience for households and businesses to order drinking water refills, track delivery progress, and pay with ease.",
    iconName: "Users",
    badge: "Doorstep Convenience",
    features: [
      "Order water types: Purified, Alkaline, or Mineral in seconds",
      "Refill existing gallons or borrow station containers",
      "Flexible payments: GCash, Maya, cards, or Cash on Delivery",
      "Live order progress tracker up to doorstep arrival",
      "Direct in-app messaging with your refilling station"
    ]
  }
];

export const APP_SCREENS = [
  {
    id: "dashboard",
    title: "Station Dashboard",
    roleBadge: "Station Owner",
    description: "Comprehensive live dashboard displaying daily sales, completed refills, gallon stock, and active orders at a glance.",
    highlights: [
      "Live revenue and gallon volume statistics",
      "One-tap station availability toggle (Open / Closed)",
      "Instant quick action shortcuts for walk-in orders",
      "Real-time incoming orders overview"
    ]
  },
  {
    id: "orders",
    title: "Live Orders Queue",
    roleBadge: "Station Owner",
    description: "Real-time order management queue routing orders through Dispensing, Out for Delivery, and Completed.",
    highlights: [
      "Clear order tracking eliminates missed customer refills",
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
      "Quick adjustment shortcuts (+5, +10, +25, +50)"
    ]
  },
  {
    id: "credits",
    title: "Customer Debt / Utang Ledger",
    roleBadge: "Station Owner",
    description: "Dedicated digital credit ledger to record customer utang balances, partial collections, and payment history.",
    highlights: [
      "Track customer balances and unpaid refills",
      "Record partial collections and log payment history",
      "Paperless balance tracking for regular customers",
      "Clear history log for all credit transactions"
    ]
  },
  {
    id: "customer_order",
    title: "Customer Refill Ordering",
    roleBadge: "Customer",
    description: "Clean ordering experience for households and offices. Choose water category, quantity, container type, and checkout method.",
    highlights: [
      "Water selection: Purified, Alkaline, Mineral",
      "Instant payment via GCash, Maya, or Cash on Delivery",
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
      "Visual progress tracker from order to delivery",
      "Delivery address confirmation and estimated arrival",
      "Direct chat and contact shortcuts with the water station",
      "Digital receipt upon doorstep completion"
    ]
  },
  {
    id: "chat_system",
    title: "In-App Station Chat",
    roleBadge: "Customer & Station",
    description: "Direct instant communication between customers and station staff for delivery instructions, landmarks, or bottle queries.",
    highlights: [
      "Direct messaging linked to active refill orders",
      "Send landmarks, gate directions, or jug notes",
      "Chat history and unread message indicators",
      "Instant customer support and updates"
    ]
  }
];

export const FAQS = [
  {
    question: "What is eRefill?",
    answer: "eRefill is a dedicated mobile application designed specifically for water refilling stations and customers. It provides a simple platform to manage water orders, inventory of Slim and Round 5-gallon containers, customer debt (utang), and digital payments."
  },
  {
    question: "Who can use eRefill?",
    answer: "eRefill is purpose-built for two roles: 1) Water Refilling Station Owners who want complete operational control over orders, container assets, customer debts, and sales. 2) Customers who want a hassle-free way to order clean drinking water refills, track delivery, and pay digitally."
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
    answer: "eRefill supports Android 8.0 (Oreo) and all newer versions. The app is lightweight, optimized for fast performance, and runs smoothly on both budget and modern smartphones."
  },
  {
    question: "How does eRefill help manage 5-gallon containers?",
    answer: "eRefill gives station owners dedicated tracking for both Slim and Round 5-gallon containers. You can easily view how many jugs are ready in your shop, how many are held by customers, and how many are awaiting sanitization."
  },
  {
    question: "How do I install the APK on my Android phone?",
    answer: "Installation is simple and takes under 60 seconds: 1) Download the APK from this page. 2) Open the downloaded erefill.apk file from your notification tray or Downloads folder. 3) If prompted, tap Settings and allow 'Install unknown apps' for your browser or file manager. 4) Tap Install on the confirmation prompt. 5) Open eRefill and choose Station Owner or Customer!"
  },
  {
    question: "How does the Customer Debt / Utang ledger work?",
    answer: "Station owners can maintain a transparent, paperless ledger for trusted regular customers who pay on credit. You can log unpaid refills, record partial cash or GCash payments, and review balance history at any time without messy paper notebooks."
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
    desc: "Open eRefill, choose Station Owner or Customer, and start managing refills or placing orders!"
  }
];
