import * as firebase from 'firebase';
   

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQVg2T0_yOaurZ06NZXdr0LB1R0F5iB2w",
    authDomain: "reactfirebaseappbatch.firebaseapp.com",
    databaseURL: "https://reactfirebaseappbatch.firebaseio.com",
    projectId: "reactfirebaseappbatch",
    storageBucket: "reactfirebaseappbatch.appspot.com",
    messagingSenderId: "964094183421",
    appId: "1:964094183421:web:4f338726f62296bc497b94",
    measurementId: "G-V6GRGB55PV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;  