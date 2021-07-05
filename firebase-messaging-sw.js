importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyBROSFdFQWbp8K2xMMjKaqazC4HP4grI5A",
  authDomain: "mc-bde.firebaseapp.com",
  projectId: "mc-bde",
  storageBucket: "mc-bde.appspot.com",
  messagingSenderId: "181659839939",
  appId: "1:181659839939:web:bd1bd39cb9b2232add6176",
  measurementId: "G-R7GER30TG2"
});


const messaging = firebase.messaging();
// const messaging = firebase.messaging.isSupported() ? firebase.messaging() : null

// messaging?.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

// messaging?.setBackgroundMessageHandler(payload => {
//   console.log(payload);
//   const title = payload.data.title;
//   const options = {
//     body: payload.data.score
//   };
//   return self.registration.showNotification(title, options);
// });




messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);

  return navigator.serviceWorker.addEventListener("message", (message) => {
    console.log(message);
  });
  self.addEventListener('push', function (e) {
    var options = {
      body: 'This notification was generated from a push!',
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {
          action: 'explore', title: 'Explore this new world',
          icon: 'images/checkmark.png'
        },
        {
          action: 'close', title: 'Close',
          icon: 'images/xmark.png'
        },
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Hello world!', options)
    );
  });
});

// navigator.serviceWorker.addEventListener("message", (message) => {
//   console.log(message);
// });

// self.addEventListener('notificationclick', function (event) {
//   // do what you want
//   // ...
// });

self.addEventListener('push', function (e) {
  var options = {
    body: 'This notification was generated from a push!',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'
      },
      {
        action: 'close', title: 'Close',
        icon: 'images/xmark.png'
      },
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});