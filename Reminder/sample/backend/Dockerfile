# Dockerfile
FROM ruby:3.2
RUN apt-get update -qq
# RUN apt-get update -qq && apt-get install -y nodejs npm
# RUN npm install -g yarn
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . /app

# アセットのプリコンパイルなど、必要に応じてコマンドを追加
# RUN RAILS_ENV=production bundle exec rake assets:precompile --trace

# 一度だけ実行すると，ホットリロードが有効になる
RUN rails livereload:install
# ENV RAILS_ENV=production
# CMD ["rails", "server", "-b", "0.0.0.0", "-e", "production"]
CMD ["rails", "server", "-b", "0.0.0.0"]
