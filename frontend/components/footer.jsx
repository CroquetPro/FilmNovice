var React = require('react');

var Footer = React.createClass({
  render: function(){
    var links = [];
    return(
      <div className="footer">
        <span className="footerContents">
          <a href="http://croquetpro.github.io">Portfolio</a>
          © Ben Rothman 2015
        </span>
      </div>
    );
  }
});

module.exports = Footer;
