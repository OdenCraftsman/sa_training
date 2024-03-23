# frozen_string_literal: true

# HomeController handles requests for the root path ("/").
# It renders a JSON response with a status and a message.
class HomeController < ApplicationController
  def index
    render json: { status: 'success', message: 'hello world! 2' }
  end
end