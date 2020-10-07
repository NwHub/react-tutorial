import React, { useState } from 'react';
import './style.css';

export default function Tweet() {
  const initialState = [
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

  const [tweets, setTweets] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.userName.value;
    const msg = event.target.message.value;
    if (!msg) return;
    setTweets((tweets) => [
      ...tweets,
      {
        userName: name,
        message: msg,
      },
    ]);
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
