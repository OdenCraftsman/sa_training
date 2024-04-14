# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Status.create!([
                 { name: '未完了', color: 'red', sort_order: 10 },
                 { name: '実施中', color: 'yellow', sort_order: 20 },
                 { name: '完了', color: 'green', sort_order: 30 }
               ])
