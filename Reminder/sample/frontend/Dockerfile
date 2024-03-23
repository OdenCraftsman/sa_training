# ベースイメージとして Node.js の公式イメージを使用
FROM node:20

# アプリケーションの作業ディレクトリを設定
WORKDIR /app

# package.json と yarn.lock を /app にコピー
COPY package.json yarn.lock ./

# 依存関係をインストール
RUN yarn install

# 残りのアプリケーションファイルを作業ディレクトリにコピー
COPY . .

# アプリケーションをビルド
# RUN yarn build

# 開発環境での実行コマンド
CMD ["yarn", "dev"]

# 本番環境用の設定
# 本番環境でアプリケーションを実行する場合は、以下の行のコメントを解除してください
# CMD ["yarn", "serve"]
