import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyCYD5nZIEyJtIwgV3_HIMWbrEuf-AfF09w',
  authDomain: 'react-tutorial-test-b0b3c.firebaseapp.com',
  databaseURL: 'https://react-tutorial-test-b0b3c.firebaseio.com',
  projectId: 'react-tutorial-test-b0b3c',
  storageBucket: 'react-tutorial-test-b0b3c.appspot.com',
  messagingSenderId: '972861136422',
  appId: '1:972861136422:web:d468af76a88405f25b90e7',
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
