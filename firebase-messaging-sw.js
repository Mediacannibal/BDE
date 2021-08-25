 
import { getMessaging } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBROSFdFQWbp8K2xMMjKaqazC4HP4grI5A",
  authDomain: "mc-bde.firebaseapp.com",
  projectId: "mc-bde",
  storageBucket: "mc-bde.appspot.com",
  messagingSenderId: "181659839939",
  appId: "1:181659839939:web:bd1bd39cb9b2232add6176",
  measurementId: "G-R7GER30TG2",
  databaseURL: 'https://mc-bde.firebaseio.com',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
 
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});