import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyB9RqLyjqV3Gv6Ue8fqIIt_BPKDMv9fB3k',
  authDomain: 'accounting01-d081c.firebaseapp.com',
  databaseURL: 'https://accounting01-d081c.firebaseio.com',
  projectId: 'accounting01-d081c',
  storageBucket: 'accounting01-d081c.appspot.com',
  messagingSenderId: '54457ffffffff4480660',
  appId: '1:544574480660:web:487e189c62b57d76f3e201',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
