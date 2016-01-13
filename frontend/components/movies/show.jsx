var React = require('react'),
    MovieStore = require('../../stores/movie_store'),
    MovieUtil = require('../../utils/movie_util'),
    ReviewStore = require('../../stores/review_store'),
    ReviewUtil = require('../../utils/review_util'),
    UserStore = require('../../stores/user_store'),
    UserActions = require('../../actions/user_actions'),
    Form = require('../reviews/form'),
    Review = require('../reviews/show'),
    History = require('react-router').History;


var Show = React.createClass({
  mixins: [History],

  getInitialState: function(){
    var movieId = parseInt(this.props.params['movieId']);
    return({  movie: MovieStore.find(movieId),
              reviews: ReviewStore.all(),
              form: false
          });
  },

  componentDidMount: function(){
    var movieId = parseInt(this.props.params['movieId']);
    this.movieToken = MovieStore.addListener(this._onChange);
    this.reviewToken = ReviewStore.addListener(this._onChange);
    MovieUtil.fetchSingle(movieId);
    ReviewUtil.fetchAll(movieId);
    this.setState({ movie: MovieStore.find(movieId),
                    reviews: ReviewStore.all() });
  },

  componentWillReceiveProps: function(newProps){
    var movieId = parseInt(this.props.params['movieId']);
    ReviewUtil.fetchAll(movieId);
    this.setState({ movie: MovieStore.find(parseInt(newProps.params.movieId)),
                    reviews: ReviewStore.all() });
  },

  componentWillUnmount: function(){
    this.movieToken.remove();
    this.reviewToken.remove();
  },

  _onChange: function(){
    var movieId = parseInt(this.props.params['movieId']);
    this.setState({ movie: MovieStore.find(movieId),
                    reviews: ReviewStore.all(),
                    form: ReviewStore.form()
                  });
  },

  handleBack: function(event){
    this.history.pushState(null, "/movies");
  },

  handleEdit: function(event){
    if(UserStore.currentStatus() === 'Logged In'){
      var url = "movies/" + this.props.params['movieId'] + "/edit";
      this.history.pushState(null, url);
    } else{
      UserActions.logInRequired();
    }
  },

  handleDelete: function(event){
    if(UserStore.currentStatus() === 'Logged In'){
      var movieId = this.props.params['movieId'];
      MovieUtil.deleteMovie(movieId);
      this.history.pushState(null, "/movies");
    } else{
      UserActions.logInRequired();
    }
  },

  reviewForm: function(event){
    if(UserStore.currentStatus() === 'Logged In'){
      // var url = "movies/" + this.props.params['movieId'] + "/reviews";
      // this.history.pushState(null, url);
      this.setState({ form: true });
    } else{
      UserActions.logInRequired();
    }
  },

  render: function(){
    if(typeof this.state.movie === 'undefined'){ return(<div/>) }
    else {
      var movie = this.state.movie;
      var reviews = this.state.reviews.map(function(review){
        return  <li key={review.id}><Review review={review} movie={movie} /></li>
      });
      var form = (this.state.form) ? <li><Form movieId={parseInt(this.props.params['movieId'])} /></li> : null;
      var button = (this.state.form) ? null : <button onClick={this.reviewForm}>New Review</button>;
      return(
        <div className='show'>
          <div className="movie">
            <button onClick={this.handleBack}>Back to Movies</button>
            <h1>{this.state.movie.title}</h1>
            <button onClick={this.handleEdit}>Edit Movie</button>
            <button onClick={this.handleDelete}>Delete Movie</button>
            <img src={this.state.movie.image_url} className="img-responsive" />
            <h2>Released: {this.state.movie.year}</h2>
            <h2>Directed by: {this.state.movie.director}</h2>
            <br></br>
            <h2>Cast: {this.state.movie.actors}</h2>
            <br></br>
            <h2>Plot: </h2><p>{this.state.movie.plot}</p>
            <br></br>
            <span>
              <ul>
                {reviews}
                {form}
              </ul>
              {button}
            </span>
          </div>
        </div>
      )
    }
  }
})

module.exports = Show;
