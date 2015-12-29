var MovieActions = require('../actions/movie_actions'),
    FlashActions = require('../actions/flash_actions');

var MovieUtil = {
  fetchAll: function(){
    $.get('/api/movies', function(movies){
      MovieActions.receiveAll(movies);
    });
  },

  fetchSingle: function(id){
    var url = '/api/movies/' + id
    $.get(url, function(movie){
      MovieActions.receiveSingle(movie);
    });
  },

  createMovie: function(data){
    $.ajax({
      url: "api/movies/",
      type: "POST",
      data: data,
      success: function(movie){ MovieActions.reportCreation(movie); },
      error: function(error){ FlashActions.reportError(error) }
    });
  },

  editMovie: function(data){
    var movieId = data.movie.id;
    $.ajax({
      url: "api/movies/" + movieId,
      type: "PATCH",
      data: data,
      success: function(movie){ MovieActions.reportUpdate(movie); },
      error: function(error){ FlashActions.reportError(error) }
    });
  },

  deleteMovie: function(id){
    $.ajax({
      url: "api/movies/" + id,
      type: "DELETE",
      success: function(movie){ MovieActions.reportDestruction(movie); },
      error: function(error){ FlashActions.reportError(error) }
    });
  }
};

module.exports = MovieUtil;
