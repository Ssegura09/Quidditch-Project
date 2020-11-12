class ScoreboardsController < ApplicationController
    skip_before_action :logged_in?

    def index
        scoreboards = Scoreboard.all
        render json: scoreboards
    end

    def create
        scoreboard = Scoreboard.create(user_params)
        render json: scoreboard
    end

    private

    def user_params
        params.require(:scoreboard).permit(:name, :highscore)
    end
end
