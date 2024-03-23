# Google Cloud Run に Rails API をデプロイし、React フロントエンドを GCS にホストする

このガイドでは、Google Cloud Run に Rails API をデプロイし、React アプリケーションをビルドして Google Cloud Storage (GCS) に保存し、固有のドメインを割り当てる方法を説明します。

## ステップ 1: Google Cloud Run に Rails API をデプロイ

### Rails アプリケーションの Docker 化

1. `Dockerfile` をプロジェクトのルートに作成します。

    ```Dockerfile
    FROM ruby:3.0
    RUN apt-get update -qq && apt-get install -y nodejs npm
    RUN npm install -g yarn
    WORKDIR /myapp
    COPY Gemfile /myapp/Gemfile
    COPY Gemfile.lock /myapp/Gemfile.lock
    RUN bundle install
    COPY . /myapp

    # アセットのプリコンパイル
    RUN RAILS_ENV=production bundle exec rake assets:precompile

    CMD ["rails", "server", "-b", "0.0.0.0"]
    ```

### Docker イメージのビルドとプッシュ

Google Container Registry API　を有効にしてください。
Artifact Registry API も有効にしてください。

2. Google Container Registry (GCR) に Docker イメージをビルドしてプッシュします。

    ```bash
    gcloud builds submit --tag gcr.io/tech-welfare/aiso-sample-todo-app
    ```

### Cloud Run にデプロイ

3. ビルドしたイメージを Cloud Run にデプロイします。

    ```bash
    gcloud run deploy aiso-rails-todo-app --image gcr.io/プロジェクトID/aiso-sample-todo-app --platform managed
    ```

## ステップ 2: React アプリケーションをビルドして GCS にアップロード

### React アプリケーションのビルド

1. React アプリケーションをビルドします。

    ```bash
    npm run build
    ```

### GCS バケットの作成と設定

2. GCS に新しいバケットを作成します。

    ```bash
    gsutil mb gs://your-bucket-name
    ```

3. ビルドされたファイルを GCS バケットにアップロードします。

    ```bash
    gsutil rsync -r build/ gs://your-bucket-name
    ```

4. バケットを公開して、静的ウェブサイトとしてアクセスできるようにします。

    ```bash
    gsutil iam ch allUsers:objectViewer gs://your-bucket-name
    ```

## ステップ 3: 固有のドメインを割り当て

### ドメインの購入と設定

1. 必要に応じてドメインを購入します。

### Cloud Run と GCS にドメインを割り当て

2. Google Cloud Console から、Cloud Run サービスと GCS バケットにカスタムドメインを追加します。

### DNS 設定の更新

3. ドメインレジストラで、提供された DNS 設定をドメインに追加します。

これで、Rails API が Cloud Run にデプロイされ、React アプリケーションが GCS にホストされ、両方が固有のドメインからアクセス可能になりました。
