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
    $.post('api/movies', data, function(movie){
      MovieActions.reportCreation(movie);
    });
  },

  editMovie: function(data){
    var movieId = data.movie.id;
    $.ajax({
      url: "api/movies/" + movieId,
      type: "PATCH",
      data: data,
      success: function(movie){
        MovieActions.receiveSingle(movie);
      }
    });
  },

  deleteMovie: function(id){
    $.ajax({
      url: "api/movies/" + id,
      type: "DELETE",
      success: function(movie){
        MovieActions.reportDestruction(movie);
      }
    });
  }
};

module.exports = MovieUtil;
