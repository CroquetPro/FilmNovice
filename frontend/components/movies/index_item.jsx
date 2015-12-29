var React = require('react'),
    MovieStore = require('../../stores/movie_store'),
    UserStore = require('../../stores/user_store'),
    UserActions = require('../../actions/user_actions'),
    MovieUtil = require('../../utils/movie_util'),
    History = require('react-router').History;


var IndexItem = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return({ selected: false })
  },

  handleClick: function(event){
    var url = "movies/" + event.currentTarget.getAttribute('data-id');
    this.history.pushState(null, url);
  },

  render: function(){
    return(
      <div  className="index_item"
            data-id={this.props.movie.id}
            onClick={this.handleClick}>
        <h1>{this.props.movie.title}</h1>
        <img src={this.props.movie.image_url} className="img-responsive" />
        <br></br>
        <h3>Released: {this.props.movie.year}</h3>
        <br></br>
        <h2>Directed by: {this.props.movie.director}</h2>
        <br></br>
        <h2>Cast: {this.props.movie.actors}</h2>
      </div>
    )
  }
})

module.exports = IndexItem;
