var React = require('react');

var Footer = React.createClass({
  render: function(){
    var links = [];
    return(
      <div className="footer">
        <span className="footerContents">
          {links}
          © AppAcademy 2015
        </span>
      </div>
    );
  }
});

module.exports = Footer;
