class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end
    
    def create
        user = User.create(userParams)
        render json: user
    end

    private
    def userParams
        params.require(:user).permit(:username, :password, :house)
    end

end
