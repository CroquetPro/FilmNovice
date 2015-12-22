var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    VoteConstants = require('../constants/vote_constants'),
    _votes = {};

var VoteStore = new Store(AppDispatcher);

// VoteStore.total = function () {
//   // _votes;
//   // var total = .reduce(function(a, b) {
//     return a + b;
//   });
//   return total;
// };

var resetVotes = function(votes){
  _votes = {};
  votes.forEach(function (vote) {
    _votes[vote.id] = vote;
  });
};

var removeVote = function(vote){
  delete _votes[vote.id];
};

var addVote = function(vote) {
  _vote[vote.id] = vote;
};

VoteStore.find = function(id){
  return _votes[id];
};

VoteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case VoteConstants.RECEIVE_REVIEW_VOTES:
      resetVotes(payload.votes);
      VoteStore.__emitChange();
      break;
    case VoteConstants.VOTE_CREATED:
      addVote([payload.vote]);
      VoteStore.__emitChange();
  }
}


module.exports = VoteStore;
