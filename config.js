/**
 * Environment-based API config.
 * Auto-detects: localhost → local API; otherwise → production API.
 * Set window.API_BASE_URL before this script to override.
 */
(function () {
  if (window.API_BASE_URL) return;
  var isLocal = window.location.hostname === "localhost";
  window.API_BASE_URL = isLocal
    ? "http://localhost:3000/api/chat"
    : "https://agent-be-hire-ramona-dsouza.vercel.app/api/chat";
})();
