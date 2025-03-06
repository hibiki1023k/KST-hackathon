# KST-hackathon

## ブランチルール
- main: 本番環境、基本的にdevelopのみからマージを受け付ける\
- develop: 開発環境の合流点、features/\[hogehoge\], fix/\[fugafuga\]からマージを受け付ける\
- features/\[hogehoge\]: 各機能の実装(hogehoge: issue番号)\
- fix/\[fugafuga\]: developで起きた不具合についてホットフィックスを行う(fugafuga: 不具合の箇所を端的に示す)\

## マージのタイミング
- main <- develop: developの動作確認後、最終的なプロダクトに反映する\
- develop <- features: 機能実装後、最新のdevelopの取り入れて動作確認をしてから開発環境に反映する\

## App Routerのルール
- `src/app/`配下にページパスを記載したディレクトリ、その下に`page.tsx`を配置する\
ex): `/About`にページを作る: `/src/app/About/page.tsx`
