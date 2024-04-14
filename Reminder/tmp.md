docker (server)に入って以下のコマンドを実行
rails db:create
rails db:migrate



rails db:create RAILS_ENV=production
rails db:migrate:reset


<!-- supabaseにテーブルを作成する -->
rails db:migrate  RAILS_ENV=production
rails db:seed RAILS_ENV=production
rails db:migrate:reset RAILS_ENV=production DISABLE_DATABASE_ENVIRONMENT_CHECK=1

EDITOR="vim" bin/rails credentials:edit --environment production