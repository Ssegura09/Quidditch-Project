class AuthController < ApplicationController
    # before_action :logged_in?
    # skip_before_action :logged_in?
    def create
        # authenticate the user
        # 
        user = User.find_by(username: params[:user][:username]) 
        # byebug
        if user && user.authenticate(params[:user][:password])
            # this block runs when:
            # user exist and password matches the digest column in user table
            # if authenticated, return JWT <<< user.id

            # post lecture
            # I NEED to pass a hash of the data we want to encode
            # previously it was just the user.id, 
            # make a hash with the key you want to assign and the value of whatever it is youre passing 
            render json: {username: user.username, token: JWT.encode({user_id: user.id}, "texas")}

        else
            # if there is no user or password was incorrect
            render json: {error: "invalid username or password"}

        end
    end

end