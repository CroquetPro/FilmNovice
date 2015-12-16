var UserActions = require('../actions/user_actions');

var UserUtil = {
  logOut: function(){
    $.ajax(
      url: "/sessions",
      type: 'DELETE',
      success: function(user){
        UserActions.endSession(user);
      }
    );
  },

  logIn: function(data){
    $.post('/sessions', data, function(user){
      UserActions.newSession(user);
    });
  },

  signUp: function(data){
    $.post('/users', data, function(user){
      UserActions.newSession(user);
    });
  }
};

module.exports = UserUtil;
