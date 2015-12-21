var React = require('react'),
    ReviewStore = require('../../stores/review_store'),
    ReviewUtil = require('../../utils/review_util'),
    MovieStore = require('../../stores/movie_store'),
    UserStore = require('../../stores/user_store'),
    // UserActions = require('../../actions/user_actions'),
    ReviewForm = require('./form'),
    History = require('react-router').History;


var Show = React.createClass({
  mixins: [History],

  getInitialState: function(){
    var reviewId = parseInt(this.props.review.id);
    var movieId = parseInt(this.props.movie.id);
    return({  review: ReviewStore.find(reviewId),
              movie: MovieStore.find(movieId)
          });
  },

  componentDidMount: function(){
    this.token = ReviewStore.addListener(this._onChange);
    var reviewId = parseInt(this.props.review.id);
    // ReviewUtil.fetchSingle(parseInt(reviewId)); caused infinite loop!
    this.setState({ review: ReviewStore.find(reviewId) });
  },

  // componentWillReceiveProps: function(newProps){
  //   this.setState({ review: ReviewStore.find(parseInt(newProps.review.id)) });
  // },

  componentWillUnmount: function(){
    this.token.remove();
  },

  _onChange: function(){
    var reviewId = parseInt(this.props.review.id);
    this.setState({ review: ReviewStore.find(reviewId) });
  },

  handleEdit: function(event){
    if(UserStore.currentStatus() === 'Logged In'){
      var movieId = this.props.movie.id;
      var reviewId = this.props.review.id;
      var url = "movies/" + movieId + "/reviews/" + reviewId +"/edit";
      this.history.pushState(null, url);
    } else{
      UserActions.logInRequired();
    }
  },
  //
  handleDelete: function(event){
    if(UserStore.currentStatus() === 'Logged In'){
      var movieId = this.props.movie.id;
      var reviewId = this.props.review.id;
      ReviewUtil.deleteReview(reviewId);
    } else{
      UserActions.logInRequired();
    }
  },

  // reviewForm: function(event){
  //   if(UserStore.currentStatus() === 'Logged In'){
  //     var url = "movies/" + this.props.params['movieId'] + "/review";
  //     this.history.pushState(null, url);
  //   } else{
  //     UserActions.logInRequired();
  //   }
  // },

  render: function(){
    // if(typeof this.state.movie === 'undefined'){ return(<div/>) }
    // else {
    //   var reviews = this.state.movie.reviews.map(function(review){
    //     return <li key={review.id}><Review review={review} /></li>
    //   });
      return(
        <div className='review'>
            <h4>{this.props.review.title}</h4>
            <h5>by: {this.props.review.author_name}</h5>
            <p>{this.props.review.body}</p>
            <button onClick={this.handleEdit}>Edit Review</button>
            <button onClick={this.handleDelete}>Delete Review</button>
        </div>
      )
    // }
  }
})

module.exports = Show;
