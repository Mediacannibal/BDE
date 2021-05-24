import firebase from 'firebase/app';
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
// const messaging = firebase.messaging();
const messaging = firebase.messaging.isSupported() ? firebase.messaging() : null
export const getToken= () =>{
  
  
return new Promise((resolve, reject) => {
   messaging?.requestPermission().then(() => messaging?.getToken())
        .then((firebaseToken) => {
            resolve(firebaseToken);
            console.log(firebaseToken);
        })
        .catch((err) => {
          console.log(err);
            reject(err);
        });
});
}


  export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging?.onMessage((payload) => {
      console.log(payload);
      resolve(payload);
    });
});