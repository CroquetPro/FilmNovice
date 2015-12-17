var React = require('react'),
    MovieUtil = require('../../utils/movie_util'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var MovieForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function(){
    return ({ title: "", year: null, director: "", actors: "", plot: "" })
  },

  // componentDidMount: function(){
  // },

  handleSubmit: function(event){
    event.preventDefault();
    postData = { movie: this.state };
    MovieUtil.createMovie(postData);
    this.setState({ title: "", year: null, director: "", actors: "", plot: "" });
    this.history.pushState(null, "/");
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
