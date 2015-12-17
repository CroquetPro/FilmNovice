var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserActions = {
  fetchCurrentUser: function(user){
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVED_USER,
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

  loggingIn: function(){
    Dispatcher.dispatch({
      actionType: UserConstants.LOGGING_IN,
    });
  },
};

module.exports = UserActions;
