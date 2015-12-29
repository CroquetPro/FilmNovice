var React = require('react'),
    Dispatcher = require('../dispatcher/dispatcher'),
    ReviewConstants = require('../constants/review_constants');

var ReviewActions = {
  receiveAll: function(reviews){
    Dispatcher.dispatch({
      actionType: ReviewConstants.REVIEWS_RECEIVED,
      reviews: reviews
    });
  },

  // receiveSingle: function(review){
  //   Dispatcher.dispatch({
  //     actionType: ReviewConstants.REVIEW_RECEIVED,
  //     review: review
  //   });
  // },

  reportCreation: function(review){
    Dispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_CREATED,
      review: review
    });
  },

  // failedCreation: function(error){
  //   Dispatcher.dispatch({
  //     actionType: ReviewConstants.CREATE_FAIL,
  //     error: error
  //   });
  // },

  reportUpdate: function(review){
    Dispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_UPDATED,
      review: review
    });
  },

  // failedUpdate: function(error){
  //   Dispatcher.dispatch({
  //     actionType: ReviewConstants.EDIT_FAIL,
  //     error: error
  //   });
  // },

  reportDestruction: function(review){
    Dispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_DESTROYED,
      review: review
    });
  },

  // failedDestruction: function(error){
  //   Dispatcher.dispatch({
  //     actionType: ReviewConstants.DELETE_FAIL,
  //     error: error
  //   });
  // },
};

module.exports = ReviewActions;
