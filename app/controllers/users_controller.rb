class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render json: @user
    else
      render json: @user.errors.full_messages.join(" and "), status: 400
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
