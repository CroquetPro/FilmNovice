var React = require('react'),
    UserStore = require('../../stores/user_store'),
    User = require('./user');

var NavBar = React.createClass({
  render: function(){
    // <Search />
    // <Errors />


    return(
      <div className='NavBar'>
        {this.props.children}
        <h1>Film Novice</h1>
        <User />

      </div>
    );
  }
});

module.exports = NavBar;
