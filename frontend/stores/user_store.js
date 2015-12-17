var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var user = null;
var status = "Logged Out";

UserStore.currentUser = function(){
  return user;
};

UserStore.currentStatus = function(){
  return status;
};

var removeUser = function(){
  user = null;
  status = "Logged Out";
};

var addUser = function(newUser){
  if(newUser){
    user = newUser;
    status = "Logged In";
  } else {
    user = null;
    status = "Logged Out";
  }
};

UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case UserConstants.RECEIVED_USER:
      addUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.SESSION_DESTROYED:
      removeUser();
      UserStore.__emitChange();
      break;
    case UserConstants.SESSION_CREATED:
      addUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.SIGNING_UP:
      status = "Signing Up";
      UserStore.__emitChange();
      break;
    case UserConstants.LOGGING_IN:
      status = "Logging In";
      UserStore.__emitChange();
      break;
  };
};

module.exports = UserStore;
