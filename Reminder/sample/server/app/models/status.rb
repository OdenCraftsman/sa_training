class Status < ApplicationRecord
  validates :name, presence: true
  validates :color, presence: true
  validates :sort_order, presence: true, numericality: { only_integer: true }
end
