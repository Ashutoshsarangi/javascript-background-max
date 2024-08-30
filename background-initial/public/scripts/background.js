navigator.serviceWorker.register("/sw.js");

// Page Visibility API
let backgroundInitialTimeStamp;
window.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState === "hidden") {
    // We are in the background
    const now = new Date().toLocaleTimeString();
    backgroundInitialTimeStamp = performance.now();
    log(`Going to Background at ${now}`);
  } else {
    // We are back from the Background
    const timeElapsed = Math.floor(
      performance.now() - backgroundInitialTimeStamp
    );
    log(`We are back from background after, ${timeElapsed / 1000}s`);
  }
});

// Beacon
document.getElementById("btnBeacon").addEventListener("click", (event) => {});

// Background Sync
document
  .getElementById("btnSync")
  .addEventListener("click", async (event) => {});

// Background Periodic Sync
document
  .getElementById("btnPeriodicSync")
  .addEventListener("click", async (event) => {});

// Background Fetch
document
  .getElementById("btnFetch")
  .addEventListener("click", async (event) => {});
