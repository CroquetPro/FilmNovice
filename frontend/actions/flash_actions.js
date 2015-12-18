var React = require('react'),
    Dispatcher = require('../dispatcher/dispatcher');

var FlashActions = {
  clearFlash: function(){
    Dispatcher.dispatch({
      actionType: "CLEAR_FLASH"
    })
  }
};

module.exports = FlashActions;
