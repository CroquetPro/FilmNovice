var React = require('react'),
    UserStore = require('../../stores/user_store'),
    User = require('./user'),
    Search = require('./search'),
    Flash = require('./flash');

var NavBar = React.createClass({
  render: function(){
    return(
      <div className='NavBar'>
        <img id="camera" src="http://www.clipartbest.com/cliparts/RiG/G5g/RiGG5ge6T.png" />
        <h1>Film Novice</h1>
        <img id="slate" src="http://cliparts.co/cliparts/8TG/6Bg/8TG6Bgnec.jpg" />
        {this.props.children}
        <Search />
        <User />
        <Flash />
      </div>
    );
  }
});

module.exports = NavBar;
