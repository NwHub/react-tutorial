import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './style.css';

export default function Tweet() {
  const [tweets, setTweets] = useState([]);
  const db = firebase.firestore();

  // 画面が開かれた時や値が更新されたときDBが更新された時に更新される不思議な処理
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
    const name = event.target.userName.value;
    const msg = event.target.message.value;
    if (!msg) return;

    let docRef = db.collection('messages');
    docRef.add({
      userName: name,
      message: msg,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="inputUserName"
            name="userName"
            placeholder="ユーザー名"
          />

          <textarea
            className="message"
            name="message"
            placeholder="今日の出来事"
          />

          <div>
            <button className="send" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
      <div>
        {tweets.map((tweet, index) => (
          <div className="messageRoot" key={index}>
            <div>
              <span className="userName">{tweet.userName}</span>
            </div>
            <h3>{tweet.message}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
