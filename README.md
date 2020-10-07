# react-tutorial

Reactのチュートリアル

## Lesson4

### Lesson4をチェックアウト

強制的にチェックアウト

``` shell
git checkout -f lesson-04
```

### 移動

``` shell
mkdir ./src/component
mv ./src/Tweet.jsx ./src/style.css ./src/component
```

``` JSX
import React from 'react';
import Tweet from './component/Tweet'; // 変更

export default function App() {
  return <Tweet />;
}

```

### 分割（メッセージ表示）

./src/component/MessageList.jsx

```JSX
import React from 'react';
import './MessageList.css'

export default function MessageList(prop) {
  return (
    <div>
      {prop.tweets.map((tweet, index) => (
        <div className="messageRoot" key={index}>
          <div>
            <span className="userName">{tweet.userName}</span>
          </div>
          <h3>{tweet.message}</h3>
        </div>
      ))}
    </div>
  );
}

```

./src/component/MessageList.css

```css
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

./src/component/Tweet.jsx

``` JSX
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './style.css';
import MessageList from './MessageList'; // 追加

export default function Tweet() {
・・・
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
      {/* ↓変更------ */}
      <MessageList tweets={tweets} />
      {/* ----------- */}
    </div>
  );
}

```

### 分割（メッセージ入力）

./src/component/InputText.jsx

```JSX
import React from 'react';
import './InputText.css'

export default function InputText(prop) {
  return (
    <div>
      <form onSubmit={prop.handleSubmit}>
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
  );
}

```

./src/component/InputText.css

```css
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

```

./src/component/Tweet.jsx

``` JSX
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './style.css';
import MessageList from './MessageList';
import InputText from './InputText'; // 追加

export default function Tweet() {
・・・
  return (
    <div>
      {/* ↓変更------ */}
      <InputText handleSubmit={handleSubmit} />
      {/* ----------- */}
      <MessageList tweets={tweets} />
    </div>
  );
}

```

### ゴミ削除

``` shell
rm ./src/component/style.css
```

./src/component/Tweet.jsx

``` JSX
// import './style.css';
```

### ローカル環境で確認

``` shell
yarn start
```

### デプロイ

``` shell
yarn build
```

``` shell
firebase deploy
```

### お疲れ様でした

- [master](https://github.com/NwHub/react-tutorial)
