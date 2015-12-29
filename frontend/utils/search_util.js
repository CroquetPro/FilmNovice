var MovieActions = require('../actions/movie_actions'),
    FlashActions = require('../actions/flash_actions');

var SearchUtil = {
  searchFor: function(searchText){
    $.ajax({ url: '/search', type: 'GET', data: {search: searchText},
          success: function(movies){ MovieActions.receiveAll(movies); },
          error: function(error){ FlashActions.reportError(error); }
    });
  }
};

module.exports = SearchUtil;
