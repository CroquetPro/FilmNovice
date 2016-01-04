var React = require('react');

var Sidebar = React.createClass({
  render: function(){
    return(
      <div className="sidebar">
        <span className="sidebarContents">
          <div className="line1">
            <h4>Film Novice has amateur movie reviews of</h4>
          </div>
          <div className="line2">
            <h4>critically acclaimed movies. Login to</h4>
          </div>
          <div className="line3">
            <h4>add movies or vote on reviews.</h4>
          </div>
          <div className="line4">
            <h4>Click now!</h4>
          </div>
        </span>
      </div>
    );
  }
});

module.exports = Sidebar;
