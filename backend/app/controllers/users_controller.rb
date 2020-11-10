class UsersController < ApplicationController
    skip_before_action :logged_in?, only: [:create]

    def index
        users = User.all
        render json: users
    end
    
    
  # Sign Up
    def create
    #  create a new User instance
    user = User.new(user_params)
        if user.valid?
            user.save
            render json: {user: user}, status: :created
        else
            render json: {error: "Failed to create user"}, status: :not_acceptable
        end
        
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :house)
    end

end
