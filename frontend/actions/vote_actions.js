var React = require('react'),
    Dispatcher = require('../dispatcher/dispatcher'),
    VoteConstants = require('../constants/review_constants');

var VoteActions = {
  reportCreation: function(vote){
    Dispatcher.dispatch({
      actionType: VoteConstants.VOTE_CREATED,
      vote: vote
    });
  },

  failedCreation: function(error){
    Dispatcher.dispatch({
      actionType: VoteConstants.CREATE_FAIL,
      error: error
    });
  },
};

module.exports = VoteActions;
