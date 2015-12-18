var React = require('react'),
    UserStore = require('../../stores/user_store'),
    User = require('./user'),
    Search = require('./search'),
    Flash = require('./flash');

var NavBar = React.createClass({
  render: function(){
    return(
      <div className='NavBar'>
        {this.props.children}
        <h1>Film Novice</h1>
        <User />
        <Search />
        <Flash />
      </div>
    );
  }
});

module.exports = NavBar;
