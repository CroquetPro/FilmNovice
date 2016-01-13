var React = require('react'),
    UserStore = require('../../stores/user_store'),
    User = require('./user'),
    Flash = require('./flash'),
    History = require('react-router').History;;

var NavBar = React.createClass({
  mixins: [History],
  handleClick: function(event){
    this.history.pushState(null, "/movies");
  },

  render: function(){
    return(
      <div className='NavBar'>
        <img id="camera" src="http://www.clipartbest.com/cliparts/RiG/G5g/RiGG5ge6T.png" />
        <h1 onClick={this.handleClick}>Film Novice</h1>
        <img id="slate" src="http://cliparts.co/cliparts/8TG/6Bg/8TG6Bgnec.jpg" />
        {this.props.children}
        <User />
        <Flash />
      </div>
    );
  }
});

module.exports = NavBar;
