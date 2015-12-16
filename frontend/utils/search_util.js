var MovieActions = require('../actions/movie_actions');

var SearchUtil = {
  searchFor: function(searchText){
    $.get('/search', {search: searchText}, function(movies){
      MovieActions.receiveAll(movies);
    });
  }
};

module.exports = SearchUtil;
