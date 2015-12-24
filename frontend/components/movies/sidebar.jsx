var React = require('react');

var Sidebar = React.createClass({
  render: function(){
    return(
      <div className="sidebar">
        <span className="sidebarContents">
          <div className="line1">
            <h4>Film Novice is a web application</h4>
          </div>
          <div className="line2">
            <h4>built using Ruby on Rails and React.</h4>
          </div>
          <div className="line3">
            <h4>Film Novice has amateur movie reviews.</h4>
          </div>
        </span>
      </div>
    );
  }
});

module.exports = Sidebar;
