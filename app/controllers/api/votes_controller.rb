class Api::VotesController < ApplicationController
  def index
    @review = Review.find(params[:review_id])
    render json: @review.votes
  end

  def show
    id = params[:id]
    render json: Vote.find(id)
  end

  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      render json: @vote
    else
      render json: @vote.errors.full_messages.join(" and "), status: 406
    end
  end

  def update
    @vote = Vote.find(params[:id])
    if @vote.update(vote_params)
      render json: @vote
    else
      render json: @vote.errors.full_messages.join(" and "), status: 418
    end
  end

  def destroy
    @vote = Vote.find(params[:id])
    if @vote.destroy
      render json: @vote
    else
      render json: @vote.errors.full_messages.join(" and "), status: 420
    end
  end

  def vote_params
    params.require(:vote).permit(:value, :voter_id, :user_id, :review_id)
  end
end
