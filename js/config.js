/**
 * eRefill Application & Download Configuration
 * Update this file when releasing new versions of the eRefill APK.
 * All download buttons, version badges, file sizes, and release dates
 * across the entire landing page will update automatically.
 */
const EREFILL_CONFIG = {
  appName: "eRefill",
  tagline: "A Smart Order and Inventory Manager for Water Refilling Stations",
  version: "v1.0.0",
  buildNumber: "1",
  fileSize: "76.8 MB",
  rawFileSizeBytes: 80582626,
  releaseDate: "October 16, 2026",
  minAndroid: "Android 8.0 (Oreo) or higher",
  targetPlatform: "Android (ARM64 & ARMv7)",
  fileFormat: "APK (Package Installer)",
  packageId: "com.erefill.app",
  downloadUrl: "downloads/eRefill.apk",
  directPath: "/downloads/eRefill.apk",
  checksum: "SHA-256 Verified Official Build",
  sha256: "1bdb103da59c9389611a2761812a833c55c33244a72a2282a338266189f73da0",
  supportEmail: "support@erefill.app",
  installSteps: [
    {
      step: 1,
      title: "Download",
      description: "Click the Download eRefill APK button to save the package file to your Android device."
    },
    {
      step: 2,
      title: "Open APK",
      description: "When the download completes, tap the file in your notification panel or your Downloads folder."
    },
    {
      step: 3,
      title: "Allow Installation",
      description: "If prompted, enable 'Allow from this source' or 'Install unknown apps' in your Android security settings."
    },
    {
      step: 4,
      title: "Install",
      description: "Tap 'Install' on the system dialog to finish setting up the official eRefill application."
    },
    {
      step: 5,
      title: "Start using eRefill",
      description: "Open eRefill, choose your role (Owner, Customer, or Rider), and start managing your water operations."
    }
  ]
};

// Expose configuration globally
if (typeof window !== "undefined") {
  window.EREFILL_CONFIG = EREFILL_CONFIG;
}
