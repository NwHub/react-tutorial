import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import InputText from './InputText';
import MessageList from './MessageList';

export default function Tweet() {
  const init = [
    {
      userName: 'user1',
      message: 'message1',
    },
    {
      userName: 'user2',
      message: 'message2',
    },
    {
      userName: 'user3',
      message: 'message3',
    },
  ];
  const [tweets, setTweets] = useState([]);
  const db = firebase.firestore();
  useEffect(() => {
    const unsubscribe = db
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        const data = snap.docs.map((doc) => doc.data());
        setTweets([...data]);
      });

    return () => unsubscribe();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!tweets) return;

    const userName = event.target.userName.value;
    const message = event.target.message.value;

    let docRef = db.collection('messages');

    docRef.add({
      userName: userName,
      message: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTweets([...tweets, { userName: userName, message: message }]);
  };

  return (
    <div>
      <InputText handleSubmit={handleSubmit} />
      <MessageList tweets={tweets} />
    </div>
  );
}
