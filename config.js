import firebase from 'firebase';

var firebaseConfig = {
  //paste your SDK here
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: 'AIzaSyDkF-X97VUXHSkFRjzegH_9QSfqXPt6vwc',
  authDomain: 'voteapp-81c75.firebaseapp.com',
  databaseURL: 'https://voteapp-81c75-default-rtdb.firebaseio.com',
  projectId: 'voteapp-81c75',
  storageBucket: 'voteapp-81c75.appspot.com',
  messagingSenderId: '13382580698',
  appId: '1:13382580698:web:e4459ad96cbdd46565e8e3',
  measurementId: 'G-EZRQ1PDJWH',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
