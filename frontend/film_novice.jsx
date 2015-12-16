var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    NavBar = require('./components/header/navbar'),
    MovieIndex = require('./components/movies/index');

document.addEventListener('DOMContentLoaded', function () {
  var App = React.createClass({
    render: function(){
      return (
        <div>
          <NavBar />
          {this.props.children}
        </div>
      );
    }
  });
  var routes = (
    <Route path="/" component={App} >
      <IndexRoute component={MoviesIndex} />
    </Route>);
  var content = document.querySelector('#content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
// <Route path="movies/new" component={MovieForm} />
// <Route path="movies/:movieId" component={MovieShow} />
// <Route path="users/:userId" component={UserShow} />
