# frozen_string_literal: true

FactoryBot.define do
  factory :status do
    sequence(:name) { |n| "Status #{n}" }
    color { 'Red' }
    sequence(:sort_order) { |n| n }
  end
end
