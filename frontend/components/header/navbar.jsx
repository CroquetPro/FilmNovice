var React = require('react'),
    UserStore = require('../../stores/user_store'),
    User = require('./user'),
    Search = require('./search');

var NavBar = React.createClass({
  render: function(){
    // <Search />
    // <Errors />


    return(
      <div className='NavBar'>
        {this.props.children}
        <h1>Film Novice</h1>
        <User />
        <Search />

      </div>
    );
  }
});

module.exports = NavBar;
