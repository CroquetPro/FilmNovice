var UserActions = require('../actions/user_actions');

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
    $.post('/users', data, function(user){
      UserActions.newSession(user);
    });
  },

  loggingIn: function(){
    UserActions.loggingIn();
  },

  logIn: function(data){
    $.post('/session', data, function(user){
      UserActions.newSession(user);
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
