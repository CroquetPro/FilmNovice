var React = require('react'),
    MovieStore = require('../../stores/movie_store'),
    MovieUtil = require('../../utils/movie_util'),
    History = require('react-router').History;


var Show = React.createClass({
  mixins: [History],

  getInitialState: function(){
    var movieId = this.props.params['movieId'];
    return({ movie: MovieStore.find(parseInt(movieId)) });
  },

  componentDidMount: function(){
    this.token = MovieStore.addListener(this._onChange);
  },

  componentWillReceiveProps: function(newProps){
    this.setState({ movie: MovieStore.find(parseInt(newProps.params.movieId)) });
  },

  componentWillUnmount: function(){
    this.token.remove();
  },

  _onChange: function(){
    this.setState({ movie: MovieStore.find(parseInt(newProps.params.movieId)) });
  },

  // handleClick: function(event){
  // },

  render: function(){
    // <IndexItem key = {movie.id} movie={movie} />
    if(typeof this.state.movie === 'undefined'){ return(<div/>)}
    else{
      return(
        <div className="movie">
            <h2>{this.state.movie.title}</h2>
            <h3>Released: {this.state.movie.year}</h3>
            <h3>Directed by: {this.state.movie.director}</h3>
            <h3>Cast : {this.state.movie.actors}</h3>
            <p>Plot: {this.state.movie.plot}</p>
        </div>
      )
    }
  }
})

module.exports = Show;
