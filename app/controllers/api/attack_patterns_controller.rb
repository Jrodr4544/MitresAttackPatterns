class Api::AttackPatternsController < ApplicationController

    def index
        #binding.pry
        @attackPatterns = AttackPattern.all
        render json: @attackPatterns
    end

    def create
        @attack_pattern = AttackPattern.new(attack_pattern_params)

    end

    private
  
        def set_attack_pattern
         @attackPattern = AttackPattern.find(params[:id])
        end

        def attack_pattern_params 
            params.require(:attack_pattern).permit!
        end

end
