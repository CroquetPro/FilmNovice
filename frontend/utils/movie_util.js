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
      MovieActions.receiveSingle(movie);
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
  }
};

module.exports = MovieUtil;
