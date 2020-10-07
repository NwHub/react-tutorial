# react-tutorial

Reactのチュートリアル

## Lesson3

### Lesson3をチェックアウト

強制的にチェックアウト

``` shell
git checkout -f lesson-03
```

### FirebaseのDBを準備

https://console.firebase.google.com/

1. 作成したプロジェクトをクリック
![スクリーンショット 2020-10-03 21 16 24](https://user-images.githubusercontent.com/1374058/94991597-328e2180-05bf-11eb-9531-d37f4ad928ae.png)

1. `+アプリを追加`をクリック
![スクリーンショット 2020-10-03 21 17 08](https://user-images.githubusercontent.com/1374058/94991599-33bf4e80-05bf-11eb-89af-51a7150642bf.png)

1. `</>`をクリック
![スクリーンショット 2020-10-03 21 17 41](https://user-images.githubusercontent.com/1374058/94991600-33bf4e80-05bf-11eb-82d0-c9cb2e482c79.png)

1. アプリのニックネームを適当につけて、`Firebase Hosting`を設定、アプリを登録する
![スクリーンショット 2020-10-03 21 19 03](https://user-images.githubusercontent.com/1374058/94991601-3457e500-05bf-11eb-8461-db0b3158411c.png)

1. 左のペインから`Cloud Firestore`をクリック
![スクリーンショット 2020-10-03 21 20 13](https://user-images.githubusercontent.com/1374058/94991602-3457e500-05bf-11eb-806c-8fa79c9a07d0.png)

1. `データベースの作成`をクリック
![スクリーンショット 2020-10-03 21 20 56](https://user-images.githubusercontent.com/1374058/94991603-34f07b80-05bf-11eb-98e3-c6c57fd1c29c.png)

1. `本番モード`を選択（テストモードだと３ヶ月で使えなくなるので面倒）
![スクリーンショット 2020-10-03 21 21 28](https://user-images.githubusercontent.com/1374058/94991604-35891200-05bf-11eb-9339-c5a3d3171938.png)

1. `asia-east`を選択
![スクリーンショット 2020-10-03 21 22 35](https://user-images.githubusercontent.com/1374058/94991605-35891200-05bf-11eb-933b-f5f74ac93a27.png)

1. `ルール`->`trueに変更`->`公開`
![スクリーンショット 2020-10-03 21 24 17](https://user-images.githubusercontent.com/1374058/94991606-3621a880-05bf-11eb-80ac-c5df38f1a4b6.png)

### プロジェクトにfirebaseを追加

``` shell
yarn add firebase
```

### 初期化処理を追加

プロジェクトの設定から下にスクロールした`構成`の内容をコピー

![スクリーンショット 2020-10-06 8 24 27](https://user-images.githubusercontent.com/1374058/95141990-8e1e0200-07ad-11eb-9dbc-9af49fa27332.png)

![スクリーンショット 2020-10-06 8 28 33](https://user-images.githubusercontent.com/1374058/95142759-65970780-07af-11eb-8007-6db640714695.png)

./src/index.jsx

```JSX
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase' // 追加
import App from './App';

// ------------↓追加
// Firebaseからコピーした値
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
firebase.initializeApp(firebaseConfig);
// ------------

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### ツイートをDBに追加して、表示をDBからとって来るように変更する

./src/Tweet.jsx

``` JSX
import React, { useState, useEffect } from 'react'; // 変更
import firebase from 'firebase' // 追加
import './style.css';

export default function Tweet() {

  const [tweets, setTweets] = useState([]); // 変更
  const db = firebase.firestore(); // 追加

  // 追加
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

    // 追加
    let docRef = db.collection('messages');
    docRef.add({
      userName: name,
      message: msg,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // コメントアウト

    // setTweets((tweets) => [
    //   ...tweets,
    //   {
    //     userName: name,
    //     message: msg,
    //   },
    // ]);
  };
・・・
```

### ローカル環境で確認

``` shell
yarn start
```

### デプロイ

表示されるURLにアクセスして表示されることを確認する。

``` shell
yarn build
```

``` shell
firebase deploy
```

### FirebaseのAPIキーなどを別ファイルに外だしにする

実は公開されても大丈夫な値だけれど、いろいろと都合が悪い。  
とりあえず、必要なパッケージを導入する

``` shell
yarn add -D dotenv
```

.envファイルを`プロジェクト直下`に作成する
./.env

``` yaml
# 値は自分のものに変更してください
apiKey = AIzaSyDHh2rNuNxG1tIJcS5ijR0dB0nfy2SLSsU
authDomain = react-tutorial-50fe1.firebaseapp.com
databaseURL = https://react-tutorial-50fe1.firebaseio.com
projectId = react-tutorial-50fe1
storageBucket = react-tutorial-50fe1.appspot.com
messagingSenderId = 885294701649
appId = 1:885294701649:web:a9d65b7153aee52efa2c70
```

Firebaseのキー情報を`process.env.〜`に変更する

./src/index.jsx

```JSX
・・・
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
};
firebase.initializeApp(firebaseConfig);
・・・
```

`webpack.config.js`で

webpack.config.js

``` javascript
const debug = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv').config(); // 追加

module.exports = {
・・・
  plugins: [
    new HtmlWebpackPlugin({ template: `${__dirname}/src/asset/index.html` }),
    // 追加-----------
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
    // -----------
  ],
};

```

.gitignoreに`.env`を追加

./.gitignore

``` shell
.DS_store
#追加
.env
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

### お疲れ様です

- [<= Lesson03](https://github.com/NwHub/react-tutorial/tree/lesson-03)
- [Lesson04 =>](https://github.com/NwHub/react-tutorial/tree/lesson-04)
