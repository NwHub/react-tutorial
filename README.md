# react-tutorial

Reactのチュートリアル

## Lesson1

### Lesson1をチェックアウト

強制的にチェックアウト

``` shell
git checkout -f lesson-01
```

### Tweet作成

./src/Tweet.jsx

```JSX
import React, { useState } from 'react';

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
          <input name="userName" placeholder="ユーザー名" />
          <textarea name="message" placeholder="今日の出来事" />
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div>
        {tweets.map((tweet, index) => (
          <div key={index}>
            <div>
              <span> {tweet.userName}</span>
            </div>
            <h3>{tweet.message}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### サーバー起動

```shell
yarn start
```

### CSSを適応して立派にする

./src/style.css

``` css
/* input */
.inputUserName {
  font-size: 16pt;
  font-weight: 200;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 90%;
  padding: 0.5em;
  margin: 0.5em 0.5em;
}

.message {
  font-size: 16pt;
  font-weight: 200;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 90%;
  height: 5em;
  padding: 0.5em;
  margin: 0.5em 0.5em;
}

.send {
  font-size: 1.4em;
  font-weight: bold;
  padding: 10px 30px;
  background-color: #248;
  color: #fff;
  border-style: none;
  margin: 0.5em;
}

/* MessageList */
.messageRoot {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1em;
  margin: 0.5em;
}

.userName {
  color: #aaa;
}

```

./src/Tweet.jsx

```JSX
import React, { useState } from 'react';
import './style.css' // 追加

export default function Tweet() {
・・・
  const handleSubmit = (event) => {
    ・・・
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input className="inputUserName" name="userName" placeholder="ユーザー名" />{/* 修正 */}
          <textarea className="message" name="message" placeholder="今日の出来事" />{/* 修正 */}
          <div>
            <button className="send" type="submit">Send</button>{/* 修正 */}
          </div>
        </form>
      </div>
      <div>
        {tweets.map((tweet, index) => (
          <div className="messageRoot" key={index}>{/* 修正 */}
            <div>
              <span className="userName">{tweet.userName}</span>{/* 修正 */}
            </div>
            <h3>{tweet.message}</h3>
          </div>
        ))}
      </div>
    </div>
  );
```

### リロードして確認

### 試しに表示を新しい順にしてみる

./src/Tweet.jsx

```JSX
  return (
・・・
        {tweets.map((tweet, index) => (
          <div className="messageRoot" key={index}>
            <div>
              <span className="userName">{tweet.userName}</span>
            </div>
            <h3>{tweet.message}</h3>
          </div>
        )).reverse()}{/* 修正 */}
```
