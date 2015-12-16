var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

UserStore.currentUser = function(){
  return this.user;
};

var removeUser = function(){
  this.user = null;
};

var addUser = function(user){
  this.user = user;
};

UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case UserConstants.SESSION_DESTROYED:
      removeUser();
      UserStore.__emitChange();
      break;
    case UserConstants.SESSION_CREATED:
      addUser(payload.user);
      UserStore.__emitChange();
      break;
  };
};  

module.exports = UserStore;
