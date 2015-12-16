var React = require('react'),
    UserStore = require('../../stores/user_store'),
    UserUtil = require('../../utils/user_util'),
    History = require('react-router').History;

var User = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return ({ currentUser: UserStore.currentUser() });
  },

  componentDidMount: function(){
    this.storeToken = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.storeToken.remove();
  },

  _onChange: function(){
    this.setState({ currentUser: UserStore.currentUser() });
  },

  handleLogIn: function(event){
    
  },

  handleLogOut: function(event){

  },

  handleSignUp: function(){

  },

  render: function(){
    if (this.state.currentUser){
      var user = this.state.currentUser
      var current = "<h3>" + user.name + "</h3> <h4>" + user.votes + "</h4><br/>";
      var buttonText = 'Log Out';
      var action = this.handleLogOut;
    } else {
      var guestLogIn = ""
      var signUp = "<button onClick={handleSignUp}>SignUp</button><br/>"
      var current = guestLogIn + signUp;
      var buttonText = 'Log In';
      var action = this.handleLogIn;
    }
    return(
      <div className='User'>
        {current}
        <button onClick={action}>{buttonText}</button>
      </div>
    );
  }
})
