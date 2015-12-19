var React = require('react'),
    MovieUtil = require('../../utils/movie_util'),
    MovieStore = require('../../stores/movie_store'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var ReviewForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function(){
    if(this.props.params['movieId']){
      var movieId = parseInt(this.props.params['movieId']);
      var movie = MovieStore.find(movieId);
      movie['id'] = movieId;
      return( movie );
    } else {
      return ({ title: "", year: null, director: "",
                actors: "", image_url: "", plot: "" });
    }
  },

  componentDidMount: function(){
    MovieUtil.fetchSingle(parseInt(this.props.params['movieId']));
  },
  handleBack: function(event){
    this.setState({ title: "", year: null, director: "",
                    actors: "", image_url: "", plot: "" });
    this.history.pushState(null, "/");
  },

  handleSubmit: function(event){
    event.preventDefault();
    postData = { movie: this.state };
    if(this.props.params['movieId']){
      MovieUtil.editMovie(postData)
      this.setState({ title: "", year: null, director: "",
                      actors: "", image_url: "", plot: "" });
      var path = "/movies/" + this.props.params['movieId'];
      this.history.pushState(null, path);
    } else {
      MovieUtil.createMovie(postData);
      this.setState({ title: "", year: null, director: "",
                      actors: "", image_url: "", plot: "" });
      MovieUtil.fetchAll();
      this.history.pushState(null, "/");
    }
  },

  render: function(){
    var buttonText = this.props.params['movieId'] ? "Edit Movie" : "Create Movie";
    return(
      <div className="form">
        <button onClick={this.handleBack}>Movies</button>
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
          <label>Image URL:
            <input
              type="text"
              valueLink={this.linkState('image_url')} />
          </label>
          <br></br>
          <label>Plot Synopsis:
            <input
              type="textarea"
              valueLink={this.linkState('plot')} />
          </label>
          <br></br>
          <input type="submit" value={buttonText} />
        </form>
      </div>
    )
  }
})

module.exports = ReviewForm;
