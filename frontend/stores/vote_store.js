var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    VoteConstants = require('../constants/vote_constants'),
    _votes = {};

var VoteStore = new Store(AppDispatcher);

VoteStore.total = function (review_id) {
  if (_votes[review_id]){
    var votes = _votes[review_id];
    var total = votes.reduce( function(sum, vote) {
          return sum + vote.value;
        }, 0);
    return total;
  };
};

var clearVotes = function(){
  _votes = {};
};

var resetReviewVotes = function(votes){
  var review_id = votes[0].review_id
  _votes[review_id] = [];
  votes.forEach( function(vote){
    _votes[review_id].push(vote);
  })
};

// var removeVote = function(vote){
//   _votes.splice(_votes.indexOf(vote));
// };

var addVote = function(vote) {
  debugger;
  var review_id = vote.review_id;
  if(_votes[review_id]){
    _votes[review_id].push(vote);
  } else {
    _votes[review_id] = [];
    _votes[review_id].push(vote);
  }
};
//
// VoteStore.find = function(id){
//   if(_votes.indexOf(vote)){
//     return _votes[_votes.indexOf(vote)]
//   }
// };

VoteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case VoteConstants.RECEIVE_REVIEW_VOTES:
      resetReviewVotes(payload.votes);
      VoteStore.__emitChange();
      break;
    case VoteConstants.VOTE_CREATED:
      addVote(payload.vote);
      VoteStore.__emitChange();
      break;
    case VoteConstants.CLEAR_VOTES:
      clearVotes();
      VoteStore.__emitChange();
      break;
  }
}


module.exports = VoteStore;
