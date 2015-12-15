var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    NavBar = require('./components/header/navbar');

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
    </Route>);
  var content = document.querySelector('#content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
// <IndexRoute component={MoviesIndex} ></IndexRoute>
// <Route path="movies/new" component={MovieForm} />
// <Route path="movies/:movieId" component={MovieShow} />
// <Route path="users/:userId" component={UserShow} />
