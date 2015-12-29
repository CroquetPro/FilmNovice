var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    NavBar = require('./components/header/navbar'),
    Footer = require('./components/footer'),
    SplashPage = require('./components/splash_page'),
    MoviesIndex = require('./components/movies/index'),
    MovieShow = require('./components/movies/show'),
    MovieForm = require('./components/movies/form'),
    ReviewForm = require('./components/reviews/form');

document.addEventListener('DOMContentLoaded', function () {
  var App = React.createClass({
    render: function(){
      return (
        <div className="app">

          {this.props.children}

        </div>
      );
    }
  });
    var Content = React.createClass({
      render: function(){
        return (
          <div className="content">
            <NavBar />
            {this.props.children}
            <Footer />
          </div>
        );
      }
  });
  var routes = (
    <Route path="/" component={App} >
      // <Route component={SplashPage} />
      <IndexRoute component={SplashPage} />
      <Route component={Content} >
        <Route path="movies" component={MoviesIndex} />
        <Route path="movies/new" component={MovieForm} />
        <Route path="movies/:movieId" component={MovieShow} />
        <Route path="movies/:movieId/edit" component={MovieForm} />
        <Route path="movies/:movieId/reviews" component={ReviewForm} />
        <Route path="movies/:movieId/reviews/:reviewId/edit" component={ReviewForm} />
      </Route>
    </Route>);
  var content = document.querySelector('#content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
// <Route path="users/:userId" component={UserShow} />
