class Api::ReviewsController < ApplicationController
  def index
    @movie = Movie.find(params[:movie_id])
    render json: @movie.reviews
  end

  def show
    id = params[:id]
    render json: Review.find(id)
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages.join(" and "), status: 406
    end
  end

  def update
    # @review = Review.find(params[:id])
    # if @review.update(review_params)
    #   render json: @review
    # else
    #   render json: @review.errors.full_messages.join(" and "), status: 418
    # end
  end

  def destroy
    # @review = Review.find(params[:id])
    # if @review.destroy
    #   render json: @review
    # else
    #   render json: @review.errors.full_messages.join(" and "), status: 420
    # end
  end

  def review_params
    params.require(:review).permit(:title, :body, :author_name, :movie_id, :user_id)
  end
end
