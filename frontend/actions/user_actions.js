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

  // failedSignUp: function(error){
  //   Dispatcher.dispatch({
  //     actionType: UserConstants.SIGN_UP_FAIL,
  //     error: error
  //   });
  // },

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

  // failedLogIn: function(error){
  //   Dispatcher.dispatch({
  //     actionType: UserConstants.LOG_IN_FAIL,
  //     error: error
  //   });
  // }
};

module.exports = UserActions;
