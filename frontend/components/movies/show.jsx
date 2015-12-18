var React = require('react'),
    MovieStore = require('../../stores/movie_store'),
    MovieUtil = require('../../utils/movie_util'),
    UserStore = require('../../stores/user_store'),
    UserActions = require('../../actions/user_actions'),
    MovieForm = require('./form'),
    History = require('react-router').History;


var Show = React.createClass({
  mixins: [History],

  getInitialState: function(){
    var movieId = this.props.params['movieId'];
    return({ movie: MovieStore.find(parseInt(movieId)) });
  },

  componentDidMount: function(){
    this.token = MovieStore.addListener(this._onChange);
    MovieUtil.fetchSingle(parseInt(this.props.params['movieId']));
    this.setState({ movie: MovieStore.find(parseInt(this.props.params.movieId)) });
  },

  componentWillReceiveProps: function(newProps){
    this.setState({ movie: MovieStore.find(parseInt(newProps.params.movieId)) });
  },

  componentWillUnmount: function(){
    this.token.remove();
  },

  _onChange: function(){
    var movieId = this.props.params['movieId'];
    this.setState({ movie: MovieStore.find(parseInt(movieId)) });
  },

  handleBack: function(event){
    this.history.pushState(null, "/");
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
      this.history.pushState(null, "/");
    } else{
      UserActions.logInRequired();
    }
  },

  // handleClick: function(event){
  // },

  render: function(){
    // <IndexItem key = {movie.id} movie={movie} />
    if(typeof this.state.movie === 'undefined'){ return(<div/>)}
    else {
      return(
        <div className='show'>
          <div className="movie">
            <button onClick={this.handleBack}>Movies</button>
            <h2>{this.state.movie.title}</h2>
            <button onClick={this.handleEdit}>Edit Movie</button>
            <button onClick={this.handleDelete}>Delete Movie</button>
            <h3>Released: {this.state.movie.year}</h3>
            <h3>Directed by: {this.state.movie.director}</h3>
            <h3>Cast : {this.state.movie.actors}</h3>
            <p>Plot: {this.state.movie.plot}</p>
          </div>
        </div>
      )
    }
  }
})

module.exports = Show;
