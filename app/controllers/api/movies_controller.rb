class Api::MoviesController < ApplicationController
  def index
    render json: Movie.all()
  end

  def show
    id = params[:movieId]
    render json: Movie.find(id)
  end

  def create
    movie = Movie.create(movie_params)
    render json: movie
  end

  def update
    movie = Movie.find(params[:movieId])
    if movie.update(movie_params)
      render json: movie
    else
      flash.now[:errors] = movie.errors.full_messages
    end
  end

  def destroy
    movie = movie.find(params[:movieId])
    if movie.destroy
      flash.now[:errors] = "deleted " + movie.title
      render json: Movie.all()
    else
      flash.now[:errors] = movie.errors.full_messages
    end
  end

  def movie_params
    params.require(:movie).permit(:title, :release_date, :plot)
  end
end
