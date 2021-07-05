import firebase from 'firebase/app';
import 'firebase/messaging';
import "firebase/auth";


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

const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  "BHRovRsRVsGuEcsg3HaJ1fI4e_aBl9QYbkBSS7OHp7HzryXZm2nXQ2RvZrns1MNxZdVWGKACKMwAEGANZKqUR_M"
);

messaging.getToken({ vapidKey: "BHRovRsRVsGuEcsg3HaJ1fI4e_aBl9QYbkBSS7OHp7HzryXZm2nXQ2RvZrns1MNxZdVWGKACKMwAEGANZKqUR_M" });

// const messaging = firebase.messaging.isSupported() ? firebase.messaging() : null

// export const getToken = () => {


//   return new Promise((resolve, reject) => {
//     messaging?.requestPermission().then(() => {
//       //  console.log("permission granted");
//       return messaging?.getToken()
//     }
//     ).then((firebaseToken) => {
//       resolve(firebaseToken);
//       console.log(">>>>>", firebaseToken);
//     })
//       .catch((err) => {
//         console.log(err);
//         reject(err);
//       });
//   });
// }

export const getToken = (setTokenFound) => {
  return messaging.getToken({ vapidKey: 'BHRovRsRVsGuEcsg3HaJ1fI4e_aBl9QYbkBSS7OHp7HzryXZm2nXQ2RvZrns1MNxZdVWGKACKMwAEGANZKqUR_M' }).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = async (registration) => {
  try {

    const messaging = firebase.messaging();

    firebase.messaging().onMessage(notification => {
      alert('Notification received!', notification);
    });

    await messaging.onMessage(notification => {
      console.log('Notification received!', notification);
      message.info(notification?.data?.title + ':' + notification?.data?.body)
    });

    const registration = await navigator.serviceWorker
      .register("./firebase-messaging-sw.js")
      .then(function (registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function (err) {
        console.log("Service worker registration failed, error:", err);
      });
    await Notification.requestPermission().then((callBack) => {
      console.log(callBack)
    }).catch(e => {
    });

    const token = await messaging.getToken({
      vapidKey: 'BHRovRsRVsGuEcsg3HaJ1fI4e_aBl9QYbkBSS7OHp7HzryXZm2nXQ2RvZrns1MNxZdVWGKACKMwAEGANZKqUR_M',
      serviceWorkerRegistration: registration
    });
    // await //send token
    //   console.log('token :', token);
    // return token;

  } catch (error) {
    console.error(error);
  }
}

export default firebase;