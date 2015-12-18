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
        <h3>{this.props.movie.title}</h3>
        <img src={this.props.movie.image_url} className="img-responsive" />
        <h4>Released: {this.props.movie.year}</h4>
        <h4>Directed by: {this.props.movie.director}</h4>
        <h4>Cast: {this.props.movie.actors}</h4>
      </div>
    )
  }
})

module.exports = IndexItem;
