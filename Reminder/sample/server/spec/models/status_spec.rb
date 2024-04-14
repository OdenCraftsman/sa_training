# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Status, type: :model do
  # バリデーションテスト
  it 'is valid with a name, color, and sort_order' do
    status = Status.new(
      name: 'Test Status',
      color: 'Red',
      sort_order: 1
    )
    expect(status).to be_valid
  end

  it 'is invalid without a name' do
    status = Status.new(name: nil)
    expect(status.valid?).to eq(false)
  end

  it 'is invalid without a color' do
    status = Status.new(color: nil)
    expect(status.valid?).to eq(false)
  end

  it 'is invalid without a sort_order' do
    status = Status.new(sort_order: nil)
    expect(status.valid?).to eq(false)
  end
end
