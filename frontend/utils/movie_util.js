var MovieActions = require('../actions/movie_actions');

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
      error: function(error){ MovieActions.failedCreation(error) }
    });
  },

  editMovie: function(data){
    var movieId = data.movie.id;
    $.ajax({
      url: "api/movies/" + movieId,
      type: "PATCH",
      data: data,
      success: function(movie){ MovieActions.reportUpdate(movie); },
      error: function(error){ MovieActions.failedUpdate(error) }
    });
  },

  deleteMovie: function(id){
    $.ajax({
      url: "api/movies/" + id,
      type: "DELETE",
      success: function(movie){ MovieActions.reportDestruction(movie); },
      error: function(error){ MovieActions.failedDestruction(error) }
    });
  }
};

module.exports = MovieUtil;
