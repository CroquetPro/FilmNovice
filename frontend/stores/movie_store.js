var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    MovieConstants = require('../constants/movie_constants'),
    _movies = {};

var MovieStore = new Store(AppDispatcher);

MovieStore.all = function () {
  return Object.keys(_movies).map(function (movieId) {
    return _movies[movieId];
  });
};

var resetMovies = function(movies){
  _movies = {};
  movies.forEach(function (movie) {
    _movies[movie.id] = movie;
  });
};

MovieStore.find = function(id){
  return _movies[id];
};

MovieStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case MovieConstants.MOVIES_RECEIVED:
      resetMovies(payload.movies);
      MovieStore.__emitChange();
      break;
    case MovieConstants.MOVIE_RECEIVED:
        resetMovies([payload.movie]);
        //show page?
        MovieStore.__emitChange();
      break;
    case MovieConstants.MOVIE_CREATED:
      resetMovies([payload.movie]);
      //show page?
      MovieStore.__emitChange();
    case MovieConstants.MOVIE_UPDATED:
      resetMovies([payload.movie]);
      //show page?
      MovieStore.__emitChange();  
  }
}


module.exports = MovieStore;
