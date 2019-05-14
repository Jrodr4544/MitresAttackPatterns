class Api::AttackPatternsController < ApplicationController
  before_action :set_attack_pattern, only: [:add_comment]

  def index
    # binding.pry
    @attackPatterns = AttackPattern.all
    render :json => @attackPatterns, include: ['comments', 'external_references', 'kill_chain_phases'] 
  end

  def add_comment
    @attackPattern.comments.create(name: params[:name],content: params[:content])
    #binding.pry
    if @attackPattern.save
      # binding.pry
      render :json => @attackPattern, include: ['comments', 'external_references', 'kill_chain_phases'] 
    else
      render json: @attackPattern, status: 404
    end
  end

  private

    def set_attack_pattern
      @attackPattern = AttackPattern.find(params[:attack_pattern_id])
    end

    def attack_pattern_params 
      params.require(:attack_pattern).permit!
    end
end