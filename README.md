# History
1. サイト設計開始（Wireフレーム、簡易デザイン） ツール：XD【↓2022.5.25↓】
  - [初期デザイン案1280w](https://xd.adobe.com/view/193944f9-4114-4ae5-bb9f-5cd4284df7d6-4c6a/?fullscreen)
  - [初期デザイン案375w](https://xd.adobe.com/view/e0d61eca-fe49-4461-8113-8ac5e36b7315-b585/?fullscreen)
2. モダンなデザイン探す中TailwindCSSを知る
3. [daisy UI](https://daisyui.com/)入れてみた
4. js組み込み 参考：[動くWebデザイン
アイディア帳](https://coco-factory.jp/ugokuweb/)
5. sessionStorage組み込み（アニメーションはセッション中初回のみ実行）
6. HTML完成。【↓2022.6.11↓】
7. ページネーション、パン屑リストなどのレンタルページにパーツリスト追加。細部メンテナンス。section区切り、見出しcenterは個別に設定など。【↓2022.6.12↓】
8. サイト全体の構成について考察、検証、実装。
   - WordPress実装フェーズはDocker（wp-env）で開発。リポジトリはstaticと分ける。
   - デプロイはVScodeの拡張機能sftpを使う。context設定でハマる
   - sftp仕様上、ディレクトリ名変更。 src → nekozono 
9.  static公開。リンク、表示確認しながら修正作業。 WinとMacで表示違い確認、修正済み。【↓2022.6.14↓】
10. ファビコン配備 [source](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)【↓2022.6.16↓】
11. WordPressと静的ページを共存。（やっと本題）
    - ~HTML上でphpを実行するための .htaccess を配備。
    - index.html 1行目に追記。
    - 新着情報セクション（お知らせ、にゃんず）をWordPressタグで修正。
    - ちょっと待て。REST api か？
    - api 実装 【↓2022.6.17↓】👈イマココ
