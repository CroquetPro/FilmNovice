var React = require('react'),
    MovieUtil = require('../../utils/movie_util'),
    MovieStore = require('../../stores/movie_store'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var MovieForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function(){
    if(this.props.params['movieId']){
      var movieId = parseInt(this.props.params['movieId']);
      var movie = MovieStore.find(movieId);
      movie['id'] = movieId;
      return( movie );
    } else {
      return ({ title: "", year: null, director: "", actors: "", plot: "" });
    }
  },

  // componentDidMount: function(){
  // },

  handleSubmit: function(event){
    event.preventDefault();
    postData = { movie: this.state };
    if(this.props.params['movieId']){
      MovieUtil.editMovie(postData)
      this.setState({ title: "", year: null, director: "", actors: "", plot: "" });
      var path = "/movies/" + this.props.params['movieId'];
      this.history.pushState(null, path);
    } else {
      MovieUtil.createMovie(postData);
      this.setState({ title: "", year: null, director: "", actors: "", plot: "" });
      MovieUtil.fetchAll();
      this.history.pushState(null, "/");
    }
  },

  render: function(){
    return(
      <div className="form">
        <h2>New Movie</h2>
        <form onSubmit={this.handleSubmit} >
          <label>Title:
            <input
              type="text"
              valueLink={this.linkState('title')} />
          </label>
          <br></br>
          <label>Year:
            <input
              type="text"
              valueLink={this.linkState('year')} />
          </label>
          <br></br>
          <label>Director:
            <input
              type="text"
              valueLink={this.linkState('director')} />
          </label>
          <br></br>
          <label>Actors:
            <input
              type="textarea"
              valueLink={this.linkState('actors')} />
          </label>
          <br></br>
            <label>Plot Synopsis:
              <input
                type="textarea"
                valueLink={this.linkState('plot')} />
            </label>
          <br></br>
          <input type="submit" value="Create Movie" />
        </form>
      </div>
    )
  }
})

module.exports = MovieForm;
