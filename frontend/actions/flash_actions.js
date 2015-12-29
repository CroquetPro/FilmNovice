var React = require('react'),
    Dispatcher = require('../dispatcher/dispatcher');

var FlashActions = {
  clearFlash: function(){
    Dispatcher.dispatch({
      actionType: "CLEAR_FLASH"
    });
  },

  reportError: function(error){
    Dispatcher.dispatch({
      actionType: "ERROR",
      error: error
    });
  }
};

module.exports = FlashActions;
