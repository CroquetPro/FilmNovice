var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserActions = {
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
};

module.exports = UserActions;
