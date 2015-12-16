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
};

module.exports = MovieUtil;
