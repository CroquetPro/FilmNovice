var React = require('react'),
    ReviewStore = require('../../stores/review_store'),
    ReviewUtil = require('../../utils/review_util'),
    VoteUtil = require('../../utils/vote_util'),
    VoteStore = require('../../stores/vote_store'),
    MovieStore = require('../../stores/movie_store'),
    UserStore = require('../../stores/user_store'),
    VoteStore = require('../../stores/vote_store'),
    UserActions = require('../../actions/user_actions'),
    ReviewForm = require('./form'),
    History = require('react-router').History;


var Show = React.createClass({
  mixins: [History],

  getInitialState: function(){
    var reviewId = parseInt(this.props.review.id);
    return({
      total_votes: VoteStore.total(reviewId)
    });
  },

  componentDidMount: function(){
    this.reviewToken = ReviewStore.addListener(this._onChange);
    this.userToken = UserStore.addListener(this._onChange);
    this.voteToken = VoteStore.addListener(this._onChange);
    var reviewId = parseInt(this.props.review.id);
    var movieId = parseInt(this.props.movie.id);
    VoteUtil.fetchReviewVotes({ review_id: reviewId, movie_id: movieId });
    this.setState({ total_votes: VoteStore.total(reviewId) });
  },

  // componentWillReceiveProps: function(newProps){
  //   this.setState({ review: ReviewStore.find(parseInt(newProps.review.id)) });
  // },

  componentWillUnmount: function(){
    this.reviewToken.remove();
    this.userToken.remove();
    this.voteToken.remove();
  },

  _onChange: function(){
    debugger;
    var reviewId = parseInt(this.props.review.id);
    this.setState({ total_votes: VoteStore.total(reviewId) });
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

  handleDelete: function(event){
    if(UserStore.currentStatus() === 'Logged In'){
      var data = {  movie_id: this.props.movie.id,
                    review_id: this.props.review.id }
      ReviewUtil.deleteReview(data);
    } else{
      UserActions.logInRequired();
    }
  },

  handleVote: function(event){
    if(UserStore.currentStatus() === 'Logged In'){
      var value = event.target.classList.contains("Upvote") ? 1 : -1;
      var data = {
        movie_id: this.props.movie.id,
        vote: {
          user_id: this.props.review.user_id,
          voter_id: UserStore.currentUser().id,
          review_id: this.props.review.id,
          value: value
        }
      };
      // if user has already voted, update?
      VoteUtil.create(data);
    } else{
      UserActions.logInRequired();
    }
  },

  render: function(){
    var currentUser = UserStore.currentUser();
    if (currentUser && currentUser.id === this.props.review.user_id){
      var button1text = "Edit Review";
      var button1action = this.handleEdit;
      var button2text = "Delete Review";
      var button2action = this.handleDelete;
    } else {
      var button1text = "Upvote";
        var button1action = this.handleVote;
        var button2text = "Downvote";
        var button2action = this.handleVote;
    }
      return(
        <div className='review'>
            <h4>{this.props.review.title}</h4>
            <h5>{this.state.total_votes}</h5>
            <h5>by: {this.props.review.author_name}</h5>
            <div className="buttons">
              <button onClick={button1action}
                    className={button1text}>{button1text}</button>
              <button onClick={button2action}
                    className={button2text}>{button2text}</button>
            </div>
            <p>{this.props.review.body}</p>
        </div>
      )
  }
})

module.exports = Show;
