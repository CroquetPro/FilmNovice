var React = require('react'),
    AppDispatcher = require('../dispatcher/dispatcher'),
    MovieConstants = require('../constants/movie_constants');

var MovieActions = {
  receiveAll: function(movies){
    AppDispatcher.dispatch({
      actionType: MovieConstants.MOVIES_RECEIVED,
      movies: movies
    });
  },

  receiveMovie: function(movie){
    AppDispatcher.dispatch({
      actionType: MovieConstants.MOVIE_RECEIVED,
      movie: movie
    });
  }
};

module.exports = MovieActions;
