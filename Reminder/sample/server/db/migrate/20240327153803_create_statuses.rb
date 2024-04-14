# frozen_string_literal: true

# This class is used to create the 'statuses' table in the database.
class CreateStatuses < ActiveRecord::Migration[7.0]
  def change
    create_table :statuses do |t|
      # t.データ型 :カラム名, 制約名: 値
      t.string :name, null: false
      t.string :color, null: false
      t.integer :sort_order, null: false
      t.timestamps
    end
  end
end
