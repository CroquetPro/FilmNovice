var VoteActions = require('../actions/vote_actions');

var VoteUtil = {
  create: function(data){
    $.ajax({
      url: "api/movies/"+data.movie_id+"/reviews/"+data.vote.review_id+"/votes",
      type: "POST",
      data: data,
      success: function(vote){ VoteActions.reportCreation(vote); },
      error: function(error){ VoteActions.failedCreation(error) }
    });
  },

  fetchReviewVotes: function(data){
    $.ajax({
      url: "api/movies/"+data.movie_id+"/reviews/"+data.review_id+"/votes",
      type: "GET",
      success: function(votes){ VoteActions.receiveReview(votes); },
    });
  },

  // fetchUserVotes: function(userId){
  //   $.ajax({
  //     url: "api/movies/:movieId/reviews/:reviewId/votes",
  //     type: "GET",
  //     success: function(vote){ VoteActions.receiveReview(votes); },
  //   });
  // }
};

module.exports = VoteUtil;
