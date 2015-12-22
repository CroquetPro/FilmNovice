var React = require('react'),
    MovieStore = require('../../stores/movie_store'),
    MovieUtil = require('../../utils/movie_util'),
    UserStore = require('../../stores/user_store'),
    UserActions = require('../../actions/user_actions'),
    ReviewUtil = require('../../utils/review_util'),
    ReviewStore = require('../../stores/review_store'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var ReviewForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function(){
    if(this.props.params['reviewId']){
      var reviewId = parseInt(this.props.params['reviewId']);
      var review = ReviewStore.find(reviewId);
      return( review );
    } else {
      return ({ title: "", body: "",
                movie_id: this.props.params['movieId'],
                author_name: UserStore.currentUser().username,
                user_id: UserStore.currentUser().id });
    }
  },

  componentDidMount: function(){
    // MovieUtil.fetchSingle(parseInt(this.props.params['movieId']));
  },

  handleBack: function(event){
    this.setState({ title: "", body: "",
                    movie_id: this.props.params['movieId'],
                    author_name: UserStore.currentUser().username,
                    user_id: UserStore.currentUser().id });
    this.history.pushState(null, "movies/" + this.props.params['movieId']);
  },

  handleSubmit: function(event){
    event.preventDefault();
    postData = { review: this.state };
    if(this.props.params['reviewId']){
      ReviewUtil.editReview(postData)
      this.setState({ title: "", body: "",
                      movie_id: this.props.params['movieId'],
                      author_name: UserStore.currentUser().username,
                      user_id: UserStore.currentUser().id });
      this.history.pushState(null, "movies/" + this.props.params['movieId']);
    } else {
      ReviewUtil.createReview(postData);
      this.setState({ title: "", body: "",
                      movie_id: this.props.params['movieId'],                    author_name: UserStore.currentUser().username,
                      author_name: UserStore.currentUser().username,
                      user_id: UserStore.currentUser().id });
      ReviewUtil.fetchAll(parseInt(this.props.params['movieId']));
      this.history.pushState(null, "movies/" + this.props.params['movieId']);
    }
  },

  render: function(){
    var buttonText = this.props.params['reviewId'] ? "Edit Review" : "Create Review";
    return(
      <div className="form">
        <button onClick={this.handleBack}>Movie</button>
        <h2>New Review</h2>
        <form onSubmit={this.handleSubmit} >
          <label>Title:
            <input
              type="text"
              valueLink={this.linkState('title')} />
          </label>
          <br></br>
          <label>Body:
            <textarea class="form-control" rows="2"
                      valueLink={this.linkState('body')}/>
          </label>
          <br></br>
          <input type="submit" value={this.buttonText} />
        </form>
      </div>
    )
  }
})

module.exports = ReviewForm;
