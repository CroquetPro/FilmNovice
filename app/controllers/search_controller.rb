class SearchController < ApplicationController
  def index
    search_text = params[:search]
    search_reg = Regexp.new(search_text)
    movies = []
    Movie.all.each do |movie|
      if  movie.title =~ search_reg ||
          movie.director =~ search_reg ||
          movie.actors =~ search_reg ||
          movie.plot =~ search_reg
        movies << movie
      end
    end
    render json: movies
  end
end
