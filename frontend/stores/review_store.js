var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    ReviewConstants = require('../constants/review_constants'),
    _reviews = {};
    _form = false;
    _edit = false;

var ReviewStore = new Store(AppDispatcher);

ReviewStore.all = function () {
  return Object.keys(_reviews).map(function (reviewId) {
    return _reviews[reviewId];
  });
};

var resetReviews = function(reviews){
  _reviews = {};
  reviews.forEach(function (review) {
    _reviews[review.id] = review;
  });
};

var removeReview = function(review){
  delete _reviews[review.id];
};

ReviewStore.find = function(id){
  return _reviews[id];
};

ReviewStore.form = function(){
  return _form;
};

ReviewStore.edit = function(){
  return _edit;
};

ReviewStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ReviewConstants.REVIEWS_RECEIVED:
      resetReviews(payload.reviews);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_RECEIVED:
        resetReviews([payload.review]);
        ReviewStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_CREATED:
      resetReviews([payload.review]);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_UPDATED:
      resetReviews([payload.review]);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_DESTROYED:
      removeReview(payload.review);
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.FORM_FALSE:
      ReviewStore.__emitChange();
      break;
    case ReviewConstants.EDIT_FALSE:
      ReviewStore.__emitChange();
      break;
  }
}


module.exports = ReviewStore;
