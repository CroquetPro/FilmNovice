class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.is_password?(params[:user][:password])
      login!(@user)
      render json: @user
    end
  end

  def show
    render json: current_user
  end

  def destroy
    @user = current_user
    logout!(current_user)
    render json: @user
  end
end
