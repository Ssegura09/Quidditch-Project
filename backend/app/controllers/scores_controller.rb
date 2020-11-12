class ScoresController < ApplicationController
    skip_before_action :logged_in?

    def index
        scores = Score.all
        render json: scores
    end

    def create
        user = User.find_by(username: user_params[:user])
        score = Score.create(points: user_params[:score], user_id: user.id, scoreboard_id: Scoreboard.last.id)
        render json: score
    end

    private

    def user_params
        params.require(:score).permit(:score, :user)
    end
end
