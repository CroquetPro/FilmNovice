var React = require('react'),
    UserUtil = require('../../utils/user_util'),
    UserActions = require('../../actions/user_actions'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return ({ username: "", password: "" })
  },

  handleBack: function(event){
    event.preventDefault();
    UserActions.goBack();
  },

  handleSubmit: function(event){
    event.preventDefault();
    postData = { user: this.state };
    UserUtil.signUp(postData);
    this.setState({ username: "", password: "" });
  },

  render: function(){

    return(
      <div className="userForm">
        <form >
          <label>Username:</label>
          <input
              type="text"
              valueLink={this.linkState('username')} />
            <button className="myButton" onClick={this.handleBack}>Back</button>
          <br></br>
          <label>Password:</label>
          <input
              type="password"
              valueLink={this.linkState('password')} />
            <button className="myButton" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
})

module.exports = SessionForm;
