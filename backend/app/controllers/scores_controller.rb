class ScoresController < ApplicationController
    skip_before_action :logged_in?

    def index
        scores = Score.all
        render json: scores.to_json(:include => {
            :user => {:only => [:username]},
            :scoreboard => {:only => [:name]}
        })
    end

    def create
        # byebug
        user = User.find_by(username: user_params[:user])
        if user == nil 
            score = Score.create(points: user_params[:score], user_id: User.first.id, scoreboard_id: Scoreboard.last.id)
        else
            score = Score.create(points: user_params[:score], user_id: user.id, scoreboard_id: Scoreboard.last.id)
            render json: score
        end
    end

    private

    def user_params
        params.require(:score).permit(:score, :user)
    end
end
