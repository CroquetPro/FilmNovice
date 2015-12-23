var React = require('react'),
    UserUtil = require('../../utils/user_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return ({ username: "", password: "" })
  },

  handleSubmit: function(event){
    event.preventDefault();
    postData = { user: this.state };
    UserUtil.signUp(postData);
    this.setState({ username: "", password: "" });
  },

  render: function(){

    return(
      <div className="form">
        <form onSubmit={this.handleSubmit} >
          <label>Username:
            <input
              type="text"
              valueLink={this.linkState('username')} />
          </label>
          <label>Password:
            <input
              type="password"
              valueLink={this.linkState('password')} />
          </label>
          <br></br>
          <br></br>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
})

module.exports = SessionForm;
