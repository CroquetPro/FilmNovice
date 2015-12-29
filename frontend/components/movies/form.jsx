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
    this.history.pushState(null, "/movies");
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
      this.history.pushState(null, "/movies");
    }
  },

  render: function(){
    var buttonText = this.props.params['movieId'] ? "Edit Movie" : "Create Movie";
    return(
      <div className="form">
        <button onClick={this.handleBack}>Back to Movies</button>
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
          <label className='TA2'>Actors:</label>
          <textarea class="form-control" rows="2"
                      valueLink={this.linkState('actors')}/>
          <br></br>
          <label>Image URL:
            <input
              type="text"
              valueLink={this.linkState('image_url')} />
          </label>
          <br></br>
          <label className='TA4'>Plot Synopsis:</label>
          <textarea class="form-control" rows="4"
                      valueLink={this.linkState('plot')}/>
          <br></br>
          <input type="submit" value={buttonText} />
        </form>
      </div>
    )
  }
})

module.exports = MovieForm;
