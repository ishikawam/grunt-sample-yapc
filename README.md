grunt-sample-yapc
=================

Grunt sample for YAPC::Asia 2013 Catalyst Demo Code.

YAPC::Asia Tokyo 2013 で発表した Grunt のデモ用サンプルコードです。

発表資料はこちら→ http://www.slideshare.net/mishikawa55/2013-yapc

## デモの使い方

事前にCatalystを入れておきましょう。
もちろんnode、Gruntも。


```
# セットアップ
mkdir ~/tmp
cd ~/tmp
git clone git@github.com:ishikawam/grunt-sample-yapc.git
cd grunt-sample-yapc
npm install

# サーバを起動（開発用、本番用）
script/gruntsample_server.pl -r -p 3000 dev
script/gruntsample_server.pl -r -p 3001

# ブラウザで開く（開発用、本番用）
open http://localhost:3000
open http://localhost:3001

# grunt-contrib-watchを起動
grunt

```

* Growl, GrowlNotifyをいれておけばGruntのタスク終了後にメッセージが通知されます。（便利！）
* ブラウザにLiveReloadエクステンションを入れておけばコードを編集保存を監視してGruntタスクが走ります。（かっこいい！）

開発環境はDocumentRootを /root_dev/ に、本番環境は /root/ に、Catalystのサーバ起動時に'dev'オプションをつけることで切り替えています。
( https://github.com/ishikawam/grunt-sample-yapc/commit/7232a0e96765877889f381687259e8e0add350be )

gruntを起動（watch）させている状態で /root_dev/ 内のソースを編集してみて下さい。ファイルによってGruntタスクが自動で走ります。

> 例） /root_dev/ 内のcssを編集すればcssmin,csslintが走り、 /root/ に圧縮されたcssが出力されます。

git statusそすればGruntが変更したファイル差分を確認できます。


使用したサンプルHTMLはBootswatchを使用しています。OSSバンザイ！
