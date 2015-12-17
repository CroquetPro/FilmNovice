var React = require('react'),
    CurrentUserStore = require('../../stores/user_store'),
    UserForm = require('./user_form'),
    SessionForm = require('./session_form'),
    UserUtil = require('../../utils/user_util'),
    History = require('react-router').History;

var User = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return ({ status: "Logged Out",
              user: CurrentUserStore.currentUser() });
  },

  componentDidMount: function(){
    this.storeToken = CurrentUserStore.addListener(this._onChange);
    UserUtil.fetchCurrentUser();
  },

  componentWillUnmount: function(){
    this.storeToken.remove();
  },

  _onChange: function(){
    this.setState({ status: CurrentUserStore.currentStatus(),
                    user: CurrentUserStore.currentUser() });
  },

  handleLogIn: function(event){
    UserUtil.loggingIn();
  },

  guestLogIn:  function(event){
    UserUtil.logIn({user: { username: 'Guest', password: 'password' }});
  },

  handleLogOut: function(event){
    UserUtil.logOut();
  },

  handleSignUp: function(){
    UserUtil.signingUp();
  },

  render: function(){
    switch(this.state.status) {
      case "Logged Out":
        return(
          <div className='User'>
            <button className='guest' onClick={this.guestLogIn}>Guest</button>
            <button className='signup' onClick={this.handleSignUp}>SignUp</button>
            <button className='login' onClick={this.handleLogIn}>Sign In</button>
          </div>
        );
        break;
      case "Signing Up":
        return(
          <div className='User'>
            <UserForm />
          </div>
        );
        break;
      case "Logging In":
        return(
          <div className='User'>
            <SessionForm />
          </div>
        );
        break;
      case "Logged In":
        return(
          <div className='User'>
            <div className='currentUser'><h3>{this.state.user.username}</h3></div>
            <button className='logout' onClick={this.handleLogOut}>LogOut</button>
          </div>
        );
        break;
    }
  }
})

module.exports = User;
