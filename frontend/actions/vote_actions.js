var React = require('react'),
    Dispatcher = require('../dispatcher/dispatcher'),
    VoteConstants = require('../constants/vote_constants');

var VoteActions = {
  reportCreation: function(vote){
    Dispatcher.dispatch({
      actionType: VoteConstants.VOTE_CREATED,
      vote: vote
    });
  },

  // failedCreation: function(error){
  //   Dispatcher.dispatch({
  //     actionType: VoteConstants.CREATE_FAIL,
  //     error: error
  //   });
  // },

  receiveReview: function(votes){
    Dispatcher.dispatch({
      actionType: VoteConstants.RECEIVE_REVIEW_VOTES,
      votes: votes
    });
  }
};

module.exports = VoteActions;
