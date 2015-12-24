var React = require('react'),
    UserUtil = require('../../utils/user_util'),
    UserActions = require('../../actions/user_actions'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return ({ username: "", password: "" })
  },

  handleSubmit: function(event){
    event.preventDefault();
    postData = { user: this.state };
    UserUtil.logIn(postData);
    this.setState({ username: "", password: "" });
  },

  handleClick: function(event){
    event.preventDefault();
    UserActions.endSession();
  },

  render: function(){

    return(
      <div className="userForm">
        <form onSubmit={this.handleSubmit} >
          <label>Username:</label>
          <input
              type="text"
              valueLink={this.linkState('username')} />
          <button onClick={this.handleClick}>Back</button>
          <br></br>
          <label>Password:</label>
          <input
              type="password"
              valueLink={this.linkState('password')} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
})

module.exports = SessionForm;
