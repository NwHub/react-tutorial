import React from 'react';
import './MessageList.css';

export default function MessageList(prop) {
  return (
    <div>
      {prop.tweets.map((tweet, index) => {
        return (
          <div className="messageRoot" key={index}>
            <div>
              <span className="userName">{tweet.userName}</span>
            </div>
            <h3>{tweet.message}</h3>
          </div>
        );
      })}
    </div>
  );
}
