var ReviewActions = require('../actions/review_actions');

var ReviewUtil = {
  fetchAll: function(movieId){
    $.get('/api/movies/' + movieId + '/reviews', function(reviews){
      ReviewActions.receiveAll(reviews);
    });
  },

  // fetchSingle: function(id){
  //   var url = '/api/movies/:movieId/reviews/' + id
  //   $.get(url, function(review){
  //     ReviewActions.receiveSingle(review);
  //   });
  // },

  createReview: function(data){
    $.ajax({
      url: "api/movies/" + data.review.movie_id + "/reviews/",
      type: "POST",
      data: data,
      success: function(review){ ReviewActions.reportCreation(review); },
      error: function(error){ ReviewActions.failedCreation(error) }
    });
  },

  editReview: function(data){
    var reviewId = data.review.id;
    $.ajax({
      url: "api/movies/" + data.review.movie_id + "/reviews/" + reviewId,
      type: "PATCH",
      data: data,
      success: function(review){ ReviewActions.reportUpdate(review); },
      error: function(error){ ReviewActions.failedUpdate(error) }
    });
  },

  deleteReview: function(data){
    $.ajax({
      url: "api/movies/" + data.movie_id + "/reviews/" + data.reviewId,
      type: "DELETE",
      success: function(review){ ReviewActions.reportDestruction(review); },
      error: function(error){ ReviewActions.failedDestruction(error) }
    });
  }
};

module.exports = ReviewUtil;
