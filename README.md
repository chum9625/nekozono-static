# Concept

- 静的サイトとWordPressが共存するハイブリッドサイト。
- 制作者とクライアントで管理を切り分け、各々の作業を軽減。
- UXを低下させるような動きは避ける。
  - サイト訪問時のロゴアニメーションはセッション中1回のみ実行。
- トップページにWordPress最新記事を3件表示。

## History

- __2022.5.25__ サイト設計開始（Wireフレーム、簡易デザイン）
  -  ツール：XD
     - [初期デザイン案1280w](https://xd.adobe.com/view/193944f9-4114-4ae5-bb9f-5cd4284df7d6-4c6a/?fullscreen)
     - [初期デザイン案375w](https://xd.adobe.com/view/e0d61eca-fe49-4461-8113-8ac5e36b7315-b585/?fullscreen)
  - モダンなデザイン探す中TailwindCSSを知る
  - [daisy UI](https://daisyui.com/)入れてみた
  - js組み込み 参考：[動くWebデザインアイディア帳](https://coco-factory.jp/ugokuweb/)
  - sessionStorage組み込み（アニメーションはセッション中初回のみ実行）
- __2022.6.11__ HTML完成。
- __2022.6.12__ 細部メンテナンス。
  - レンタルページに、ページネーション・パン屑リストなどパーツリスト追加。
  - section区切り、見出しcenterは個別に設定。
  - サイト全体の構成について考察、検証、実装。
    - WordPress実装フェーズはDocker（wp-env）で開発。リポジトリはstaticと分ける。
    - デプロイはVScodeの拡張機能sftpを使う。context設定でハマる
    - sftp仕様上、ディレクトリ名変更。 src → nekozono 
- __2022.6.14__ static公開。
  - リンク、表示確認しながら修正作業。
  - WinとMacで表示違い確認、修正済み。
- __2022.6.16__ WordPressと静的ページの共存作業開始。（やっと本題）
  - HTML上でphpを実行するため .htaccess を配備。
  - index.html 1行目に追記。
  - 新着情報セクション（お知らせ、にゃんず）をWordPressタグで修正。
  - ちょっと待て。REST API か？と過去の引き出しから降臨、調査。
  - ファビコン配備 [source](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)
- __2022.6.17__ API 実装
  - API情報を眺めていたらauthor情報丸出しに気づく。セキュリティプラグインを直ぐに導入し隠蔽。 
- __2022.6.19__ API記事のレイアウトを除きほぼ完成。
  - API記事レイアウト完了。カテゴリ取得APIを実装。
  -  ----- 開発終了 -----
- __2023.4.1__ 外部カレンダーセクションの配置を左寄せ→センターに修正。

---
## Bug fix

1. 2022.6.26 記事投稿に画像が無い場合のindexサムネイル表示処理漏れ。
