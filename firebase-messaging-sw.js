// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js'); 

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBROSFdFQWbp8K2xMMjKaqazC4HP4grI5A",
    authDomain: "mc-bde.firebaseapp.com",
    projectId: "mc-bde",
    storageBucket: "mc-bde.appspot.com",
    messagingSenderId: "181659839939",
    appId: "1:181659839939:web:bd1bd39cb9b2232add6176",
    measurementId: "G-R7GER30TG2"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('serviceworker captured message', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});