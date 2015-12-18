var React = require('react'),
    Dispatcher = require('../dispatcher/dispatcher'),
    MovieConstants = require('../constants/movie_constants');

var MovieActions = {
  receiveAll: function(movies){
    Dispatcher.dispatch({
      actionType: MovieConstants.MOVIES_RECEIVED,
      movies: movies
    });
  },

  receiveSingle: function(movie){
    Dispatcher.dispatch({
      actionType: MovieConstants.MOVIE_RECEIVED,
      movie: movie
    });
  },

  reportCreation: function(movie){
    Dispatcher.dispatch({
      actionType: MovieConstants.MOVIE_CREATED,
      movie: movie
    });
  },

  failedCreation: function(error){
    Dispatcher.dispatch({
      actionType: MovieConstants.CREATE_FAIL,
      error: error
    });
  },

  reportUpdate: function(movie){
    Dispatcher.dispatch({
      actionType: MovieConstants.MOVIE_UPDATED,
      movie: movie
    });
  },

  failedUpdate: function(error){
    Dispatcher.dispatch({
      actionType: MovieConstants.EDIT_FAIL,
      error: error
    });
  },

  reportDestruction: function(movie){
    Dispatcher.dispatch({
      actionType: MovieConstants.MOVIE_DESTROYED,
      movie: movie
    });
  },

  failedDestruction: function(error){
    Dispatcher.dispatch({
      actionType: MovieConstants.DELETE_FAIL,
      error: error
    });
  },
};

module.exports = MovieActions;
