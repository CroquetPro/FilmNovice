var UserActions = require('../actions/user_actions'),
    FlashActions = require('../actions/flash_actions');

var UserUtil = {
  fetchCurrentUser: function(){
    $.get('/session', function(user){
      UserActions.fetchCurrentUser(user);
    });
  },

  signingUp: function(){
    UserActions.signingUp();
  },

  signUp: function(data){
    $.ajax({
      url: '/users',
      type: 'POST',
      data: data,
      success: function(user){ UserActions.newSession(user); },
      error:  function(error){ FlashActions.reportError(error); }
    });
  },

  loggingIn: function(){
    UserActions.loggingIn();
  },

  logIn: function(data){
    $.ajax({
      url: '/session',
      type: 'POST',
      data: data,
      success: function(user){ UserActions.newSession(user); },
      error:  function(error){ FlashActions.reportError(error); }
    });
  },

  logOut: function(){
    $.ajax({
      url: "/session",
      type: 'DELETE',
      success: function(user){
        UserActions.endSession(user);
      }
    });
  }
};

module.exports = UserUtil;
