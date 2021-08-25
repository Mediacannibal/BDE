// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import 'firebase/messaging';

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

export const getToken = (setTokenFound) => {
  const a = messaging.getToken({ vapidKey: 'BHRovRsRVsGuEcsg3HaJ1fI4e_aBl9QYbkBSS7OHp7HzryXZm2nXQ2RvZrns1MNxZdVWGKACKMwAEGANZKqUR_M' }).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);

    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  })
  const b = () => {
    console.log("does not support");
  }
  return navigator.userAgent.toLowerCase().indexOf('safari/') > -1 ? a : b;
}

export const onMessageListener = () => {
  const a = new Promise((resolve) => {
    messaging.onMessage((payload) => {
      console.log("=====>", payload);
      resolve(payload);
    });
  });
  const b = () => {
    console.log("does not support");
  }
  return navigator.userAgent.toLowerCase().indexOf('safari/') > -1 ? a : b;
}

export default firebase;