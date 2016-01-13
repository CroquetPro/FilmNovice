var React = require('react'),
    MovieStore = require('../../stores/movie_store'),
    UserStore = require('../../stores/user_store'),
    UserActions = require('../../actions/user_actions'),
    MovieUtil = require('../../utils/movie_util'),
    IndexItem = require('./index_item'),
    Search = require('./search'),
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
    var url = "movies/" + event.target.getAttribute('key');
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
      return <li key={movie.id}><IndexItem movie={movie} /></li>
      // return <li key={movie.id} data-id={movie.id}>{movie.title}</li>
    });
    return(
      <div className="movies">
        <Search />
        <ul className="index">
          {movies}
        </ul>
        <button onClick={this.getForm}>New Movie</button>
      </div>
    )
  }
})

module.exports = Index;
