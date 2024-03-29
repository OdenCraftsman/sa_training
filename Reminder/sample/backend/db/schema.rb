# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_03_27_153803) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'pg_graphql'
  enable_extension 'pg_stat_statements'
  enable_extension 'pgcrypto'
  enable_extension 'pgjwt'
  enable_extension 'pgsodium'
  enable_extension 'plpgsql'
  enable_extension 'supabase_vault'
  enable_extension 'uuid-ossp'

  # Custom types defined in this database.
  # Note that some types may not work with other database engines. Be careful if changing database.
  create_enum 'aal_level', %w[aal1 aal2 aal3]
  create_enum 'code_challenge_method', %w[s256 plain]
  create_enum 'factor_status', %w[unverified verified]
  create_enum 'factor_type', %w[totp webauthn]
  create_enum 'key_status', %w[default valid invalid expired]
  create_enum 'key_type', %w[aead-ietf aead-det hmacsha512 hmacsha256 auth shorthash generichash kdf secretbox secretstream stream_xchacha20]

end
