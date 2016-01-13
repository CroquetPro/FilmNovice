var ReviewActions = require('../actions/review_actions'),
    FlashActions = require('../actions/flash_actions');


var ReviewUtil = {
  fetchAll: function(movieId){
    $.get('/api/movies/' + movieId + '/reviews', function(reviews){
      ReviewActions.receiveAll(reviews);
    });
  },

  createReview: function(data){
    $.ajax({
      url: "api/movies/" + data.review.movie_id + "/reviews/",
      type: "POST",
      data: data,
      success: function(review){ ReviewActions.reportCreation(review); },
      error: function(error){ FlashActions.reportError(error) }
    });
  },

  editReview: function(data){
    var reviewId = data.review.id;
    $.ajax({
      url: "api/movies/" + data.review.movie_id + "/reviews/" + reviewId,
      type: "PATCH",
      data: data,
      success: function(review){ ReviewActions.reportUpdate(review); },
      error: function(error){ FlashActions.reportError(error) }
    });
  },

  deleteReview: function(data){
    $.ajax({
      url: "api/movies/" + data.movie_id + "/reviews/" + data.review_id,
      type: "DELETE",
      success: function(review){ ReviewActions.reportDestruction(review); },
      error: function(error){ FlashActions.reportError(error) }
    });
  }
};

module.exports = ReviewUtil;
