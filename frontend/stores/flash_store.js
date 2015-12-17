var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants'),
    MovieConstants = require('../constants/movie_constants');

var FlashStore = new Store(AppDispatcher);

var error = null;
var notification = null;

var addError = function(newError){
  error = newError;
};

var removeError = function(newError){
  error = null;
};

var addNotification = function(newNotification){
  notification = newNotification;
};

var removeNotification = function(newNotification){
  notification = null;
};

FlashStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case UserConstants.NO_SUCH_USER:
      var name = payload.user.username
      addError("Username \'" + name + "\' is not in our database. Try Sign Up")
      FlashStore.__emitChange();
      break;
    case UserConstants.RECEIVED_USER:
      addNotification("Created user: " + payload.user.username);
      FlashStore.__emitChange();
      break;
    case UserConstants.WRONG_PASSWORD:
      var name = payload.user.username
      addError("Incorrect password for username: \'" + name + "\'.");
      FlashStore.__emitChange();
      break;
    case UserConstants.LOGIN_REQUIRED:
      addError("Login required for this part of the site. Try Sign Up, Sign In or Guest.");
      FlashStore.__emitChange();
      break;
    case UserConstants.SESSION_CREATED:
      addNotification("logged in: " + payload.user.username);
      FlashStore.__emitChange();
      break;
    case UserConstants.SESSION_DESTROYED:
      addNotification("logged out: " + payload.user.username);
      FlashStore.__emitChange();
      break;
    case MovieConstants.MOVIE_CREATED:
      addNotification("Created movie: " + payload.movie.title);
      FlashStore.__emitChange();
      break;
    case MovieConstants.MOVIE_DESTROYED:
      addNotification("Destroyed movie: " + payload.movie.title);
      FlashStore.__emitChange();
      break;
  }
};

module.exports = FlashStore;
