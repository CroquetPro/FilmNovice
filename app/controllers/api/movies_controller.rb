class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render :index
  end

  def show
    id = params[:id]
    render json: Movie.find(id)
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render json: @movie
    else
      render json: @movie.errors.full_messages.join(" and "), status: 406
      # flash.now[:errors] = @movie.errors.full_messages, status: 422
    end
  end

  def update
    @movie = Movie.find(params[:id])
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: @movie.errors.full_messages.join(" and "), status: 418
      # flash.now[:errors] = @movie.errors.full_messages, status: 422
    end
  end

  def destroy
    @movie = Movie.find(params[:id])
    if @movie.destroy
      # flash.now[:errors] = "deleted " + movie.title
      render json: @movie
    else
      render json: @movie.errors.full_messages.join(" and "), status: 420
      # flash.now[:errors] = movie.errors.full_messages
    end
  end

  def movie_params
    params.require(:movie).permit(:title, :year, :director,
                                  :actors, :image_url, :plot)
  end
end
