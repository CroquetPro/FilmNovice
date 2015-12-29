class SearchController < ApplicationController
  def index
    search_text = params[:search].downcase
    search_reg = Regexp.new(search_text)
    movies = []
    all_movies = Movie.all
    all_movies.each do |movie|
      if  movie.title.downcase =~ search_reg ||
          movie.director.downcase =~ search_reg ||
          movie.actors.downcase =~ search_reg ||
          movie.plot.downcase =~ search_reg
        movies << movie
      end
    end
    if movies.length == 0
      render json: "No results match your search", status: 404
    else
      render json: movies
    end
  end
end
