var React = require('react'),
    MovieStore = require('../../stores/movie_store'),
    UserStore = require('../../stores/user_store'),
    UserActions = require('../../actions/user_actions'),
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

  getForm: function(event){
    if(UserStore.currentStatus() === 'Logged In'){
      this.history.pushState(null, "movies/new");
    } else{
      UserActions.logInRequired();
    }
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
        <button onClick={this.getForm}>New Movie</button>
      </div>
    )
  }
})

module.exports = Index;
