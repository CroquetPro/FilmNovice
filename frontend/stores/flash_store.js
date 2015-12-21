var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants'),
    MovieConstants = require('../constants/movie_constants'),
    ReviewConstants = require('../constants/review_constants');

var FlashStore = new Store(AppDispatcher);

var error = null;
var notification = null;

var addError = function(newError){
  error = newError;
};

var removeError = function(newError){
  error = null;
};

FlashStore.currentError = function(){
  var thisError = error;
  return thisError;
};

var addNotification = function(newNotification){
  notification = newNotification;
};

var removeNotification = function(newNotification){
  notification = null;
};

FlashStore.currentNotification = function(){
  var thisNotification = notification;
  return thisNotification;
};

FlashStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case "CLEAR_FLASH":
      removeNotification();
      removeError();
      FlashStore.__emitChange();
      break;
    case UserConstants.SIGN_UP_FAIL:
      addError(payload.error.responseText);
      FlashStore.__emitChange();
      break;
    case UserConstants.RECEIVED_USER:
      addNotification("Created user: " + payload.user.username);
      FlashStore.__emitChange();
      break;
    case UserConstants.LOG_IN_FAIL:
      addError(payload.error.responseText);
      FlashStore.__emitChange();
      break;
    case UserConstants.LOGIN_REQUIRED:
      addError("Login required for this part of the site. Try Sign Up, Sign In or Guest");
      FlashStore.__emitChange();
      break;
    case UserConstants.SESSION_CREATED:
      addNotification("Logged in: " + payload.user.username);
      FlashStore.__emitChange();
      break;
    case UserConstants.SESSION_DESTROYED:
      addNotification("Logged out: " + payload.user.username);
      FlashStore.__emitChange();
      break;
    case MovieConstants.CREATE_FAIL:
      addError(payload.error.responseText);
      FlashStore.__emitChange();
      break;
    case MovieConstants.MOVIE_CREATED:
      addNotification("Created movie: " + payload.movie.title);
      FlashStore.__emitChange();
      break;
    case MovieConstants.EDIT_FAIL:
      addError(payload.error.responseText);
      FlashStore.__emitChange();
      break;
    case MovieConstants.MOVIE_UPDATED:
      addNotification("Updated movie: " + payload.movie.title);
      FlashStore.__emitChange();
      break;
    case MovieConstants.DELETE_FAIL:
      addError(payload.error.responseText);
      FlashStore.__emitChange();
      break;
    case MovieConstants.MOVIE_DESTROYED:
      addNotification("Destroyed movie: " + payload.movie.title + " :'(");
      FlashStore.__emitChange();
      break;
    case ReviewConstants.CREATE_FAIL:
      addError(payload.error.responseText);
      FlashStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_CREATED:
      addNotification("Created review: " + payload.review.title);
      FlashStore.__emitChange();
      break;
    case ReviewConstants.EDIT_FAIL:
      addError(payload.error.responseText);
      FlashStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_UPDATED:
      addNotification("Updated review: " + payload.review.title);
      FlashStore.__emitChange();
      break;
    case ReviewConstants.DELETE_FAIL:
      addError(payload.error.responseText);
      FlashStore.__emitChange();
      break;
    case ReviewConstants.REVIEW_DESTROYED:
      addNotification("Destroyed review: " + payload.review.title + " :'(");
      FlashStore.__emitChange();
      break;
  }
};

module.exports = FlashStore;
