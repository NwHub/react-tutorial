# react-tutorial

Reactのチュートリアル

## Lesson0

### Visual Studio Code（VSCode）のインストール

[Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)

### パッケージマネージャーとNode.jsのインストール

Macは`Homebrew`、Windowsは`Scoop`がオススメ

- Mac
  - [MacにNode.jsをインストール](https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09)
  - Macの場合はXcodeの`Command Line Tools`をインストールする必要があり、`Homebrew`入れる途中でいい感じにインストールされたが、最近できないとの報告あり。
  - Apple Developersで直接ダウンロードする必要があるかも、[Apple Developers](https://qiita.com/mochiflappe/items/b6ecbe9d9a3a37cebbab)

- Windows
  - [windows10 scoopを使ってnode.jsをインストールする](https://mebee.info/2020/04/20/post-10056/)

### gitをインストール

- Mac

``` shell
brew install git
```

- Windows

``` shell
scoop install git
```

### Yarnをインストール

- Mac

``` shell
brew install yarn
```

- Windows

``` shell
scoop install yarn
```

### プロジェクトをClone

```shell
git clone https://github.com/NwHub/react-tutorial.git
cd react-tutorial
git checkout lesson-0
```

### プロジェクトを初期化

色々質問されるけれども、全部エンター

```shell
yarn init
```

### パッケージインストール

```shell
yarn add react react-dom
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server
```

### フォルダとファイルの作成

```shell
mkdir -p src/asset
```

./src/asset/index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>React Tutorials</title>
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>
```

./src/index.jsx

```JSX
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

./src/App.jsx

```JSX
import React from 'react';

export default function App() {
    return (<h1>Well Come!</h1>);
}
```

### `package.json`のmainを`index.js`から`webpack.config.js`に変更する

``` JSON
  "main": "webpack.config.js",
```

### `package.json`にscriptsを追加する

``` JSON
  "license": "MIT",
--------↓↓↓↓追加↓↓↓↓--------
  "scripts": {
    "build": "webpack --mode development",
    "start": "webpack-dev-server --open"
  },
--------↑↑↑↑追加↑↑↑↑--------
  "dependencies": {
```

### buildしてファイルを生成する`

buildに成功すると`./dist`に`index.html`と`index.min.js`が生成されていることを確認する。
`./dist/index.html`をブラウザで開けば「Well Come!」と表示されるはず。

実際のサーバーなどに公開する場合は`build`で生成されたファイルを使う事になる。

```shell
yarn build
```

### 開発環境向けのサーバーが起動することを確認

サーバー起動だと変更がリアルタイムで変更されて便利。

```shell
yarn start
```

### サーバーを起動したまま`Well Come!`を変更し、即時反映することを確認してみる
