class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.is_password?(params[:user][:password])
      login!(@user)
      redirect_to root_url
    else
      @user = User.new(username: params[:user][:username])
      flash.now[:errors] = ["Incorrect username or password"]
      render :new
    end
  end

  def destroy
    logout!(current_user)
    redirect_to new_session_url
  end
end
