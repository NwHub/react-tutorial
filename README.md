# react-tutorial

Reactのチュートリアル

## Lesson2

### Lesson2をチェックアウト

強制的にチェックアウト

``` shell
git checkout -f lesson-02
```

### Firebaseにアクセス（Webコンソール）

firebaseコンソールに頑張ってログイン

https://console.firebase.google.com/

`プロジェクト追加`をポチる

![スクリーンショット 2020-10-03 19 42 43](https://user-images.githubusercontent.com/1374058/94990008-ceb22b80-05b3-11eb-8e41-3714c3c2ab3a.png)

プロジェクト名を`react-tutorial`とか適当に設定する

![スクリーンショット 2020-10-03 19 43 43](https://user-images.githubusercontent.com/1374058/94990010-cf4ac200-05b3-11eb-8c88-17750945af33.png)

`Google アナリティクス`をoffにして`プロジェクトを作成`ポチる

### firebase-toolsのインストール

``` shell
yarn global add firebase-tools
```

### firebaseにログイン

Googleアカウントへのログインが要求される。

``` shell
firebase login
```

### プロジェクトでfirebase初期化

``` shell
firebase init
```

1. `Hosting: Configure and deploy Firebase Hosting sites`をスペースキーで選択する![スクリーンショット 2020-10-03 19 43 43](https://user-images.githubusercontent.com/1374058/94990010-cf4ac200-05b3-11eb-8c88-17750945af33.png)

1. `Use an existing project`を選択して、firebaseコンソールで作成した`react-tutorial`を選択する。

1. `? What do you want to use as your public directory?`で`dist`と入力

1. `? Configure as a single-page app (rewrite all urls to /index.html)? `で`N`と入力

1. `? File dist/index.html already exists. Overwrite?`で`N`と入力

### ビルド

``` shell
yarn build
```

### デプロイ

表示されるURLにアクセスして表示されることを確認する。
※変更してデプロイしても変わらない場合はブラウザのキャッシュである可能性が高いです。
シークレットモードなどで試しましょう！

``` shell
firebase deploy
```
