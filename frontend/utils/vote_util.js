var VoteActions = require('../actions/vote_actions');

var VoteUtil = {
  create: function(data){
    $.ajax({
      url: "api/movies/:movieId/reviews/:reviewId/votes",
      type: "POST",
      data: data,
      success: function(vote){ VoteActions.reportCreation(vote); },
      error: function(error){ VoteActions.failedCreation(error) }
    });
  }
};

module.exports = VoteUtil;
