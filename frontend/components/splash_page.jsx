var React = require('react'),
    Slate = require('./slate'),
    History = require('react-router').History;

var SplashPage = React.createClass({
  mixins: [History],

  handleClick: function(event){
    this.history.pushState(null, "/movies");
  },

  render: function(){
    var links = [];
    return(
      <div className="splash" onClick={this.handleClick}>
        <h1>Film Novice</h1>
        <Slate />
      </div>
    );
  }
});

module.exports = SplashPage;
