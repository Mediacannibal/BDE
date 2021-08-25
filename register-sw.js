const registerServiceWorker = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("firebase-messaging-sw.js")
        .then(function(registration) {
          console.log("Registration successful, scope is:", registration.scope);
        })
        .catch(function(err) {
          console.log("Service worker registration failed, error:", err);
        });
    }
  };
  
  export { registerServiceWorker };

    // Error during service worker registration: TypeError: Failed to register a ServiceWorker for scope ('https://app.mediacannibal.com/undefined/') with script ('https://app.mediacannibal.com/undefined/service-worker.js')