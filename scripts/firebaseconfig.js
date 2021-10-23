(function (window){
  'use strict';
  var App = window.App || {};

  var FirebaseConfig = {
    apiKey: "AIzaSyAY4JslDMLta5JVCZIHyQDOBbbHjJuh8vM",
    authDomain: "coffeerun-55756.firebaseapp.com",
    projectId: "coffeerun-55756",
    storageBucket: "coffeerun-55756.appspot.com",
    messagingSenderId: "559742670089",
    appId: "1:559742670089:web:3c4ffded924cc655722fd8",
    measurementId: "G-KGLE64W7L6"
  };

  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);

  window.App = App;
}) (window);
