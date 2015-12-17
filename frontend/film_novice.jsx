var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    NavBar = require('./components/header/navbar'),
    MoviesIndex = require('./components/movies/index'),
    MovieShow = require('./components/movies/show'),
    MovieForm = require('./components/movies/form');

document.addEventListener('DOMContentLoaded', function () {
  var App = React.createClass({
    render: function(){
      return (
        <div className="app">
          <NavBar />
          {this.props.children}
        </div>
      );
    }
  });
  var routes = (
    <Route path="/" component={App} >
      <IndexRoute component={MoviesIndex} />
      <Route path="movies/new" component={MovieForm} />
      <Route path="movies/:movieId" component={MovieShow} />
    </Route>);
  var content = document.querySelector('#content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
// <Route path="users/:userId" component={UserShow} />
