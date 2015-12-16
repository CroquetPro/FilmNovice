var React = require('react'),
    MovieStore = require('../../stores/movie_store'),
    MovieUtil = require('../../utils/movie_util'),
    History = require('react-router').History;


var Index = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return({ movies: MovieStore.all()
    });
  },

  componentDidMount: function(){
    this.token = MovieStore.addListener(this._onChange);
    MovieUtil.fetchAll();
  },

  componentWillUnmount: function(){
    this.token.remove();
  },

  _onChange: function(){
      this.setState({ movies: MovieStore.all() });
  },

  handleClick: function(event){
    var url = "movies/" + event.target.getAttribute('data-id');
    this.history.pushState(null, url);
  },

  render: function(){
    var movies = this.state.movies.map(function(movie){
      // <IndexItem key = {movie.id} movie={movie} />
      return <li key={movie.id} data-id={movie.id}>{movie.title}</li>
    });
    return(
      <div className="movies">
        <ul className="index" onClick={this.handleClick}>
          {movies}
        </ul>
      </div>
    )
  }
})

module.exports = Index;
