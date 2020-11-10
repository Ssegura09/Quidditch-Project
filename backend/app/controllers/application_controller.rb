class ApplicationController < ActionController::API
    before_action :logged_in?

   def logged_in? 
    # "Authorization": "Bearer localStorage.token"
    # 
    # byebug
    headers = request.headers["Authorization"] #"Bearer token"
    token = headers.split(" ")[1]

    begin
        # post lecture notes: 
        # since we encoded a hash, we can grab that hash after we decode it
        # JWT.decode(token, "texas")[0] => {"user_id" => user.id} 
        # we assign it and if there any error with our token we render our json error in
        #  line 26
        user_id = JWT.decode(token, "texas")[0]["user_id"]
        user = User.find(user_id)
        # byebug
    rescue
        user = nil
        
    # else
        
    end
    render json: {error: "Please Login"} unless user

   end

end
