var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserActions = {
  fetchCurrentUser: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.FOUND_USER,
      user: user
    });
  },

  newSession: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.SESSION_CREATED,
      user: user
    });
  },

  endSession: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.SESSION_DESTROYED,
      user: user
    });
  },

  signingUp: function(){
    Dispatcher.dispatch({
      actionType: UserConstants.SIGNING_UP,
    });
  },

  logInRequired: function(){
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN_REQUIRED,
    });
  },

  loggingIn: function(){
    Dispatcher.dispatch({
      actionType: UserConstants.LOGGING_IN,
    });
  },

  goBack: function(){
    Dispatcher.dispatch({
      actionType: UserConstants.GO_BACK,
    });
  }
};

module.exports = UserActions;
