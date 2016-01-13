var React = require('react'),
    MovieStore = require('../../stores/movie_store'),
    MovieUtil = require('../../utils/movie_util'),
    UserStore = require('../../stores/user_store'),
    UserActions = require('../../actions/user_actions'),
    ReviewUtil = require('../../utils/review_util'),
    ReviewStore = require('../../stores/review_store'),
    ReviewActions = require('../../actions/review_actions'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var ReviewForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function(){
    if(this.props && this.props.review){
      return( this.props.review );
    } else {
      return ({ title: "", body: "",
                // movie_id: this.props.params['movieId'],
                movie_id: this.props.movieId,
                author_name: UserStore.currentUser().username,
                user_id: UserStore.currentUser().id });
    }
  },

  componentDidMount: function(){
    // MovieUtil.fetchSingle(parseInt(this.props.params['movieId']));
  },

  handleBack: function(event){
    // this.setState({ title: "", body: "",
    //                 movie_id: this.props.review.movie_id,
    //                 author_name: UserStore.currentUser().username,
    //                 user_id: UserStore.currentUser().id });
    // this.history.pushState(null, "movies/" + this.props.params['movieId']);
    ReviewActions.editFalse();
  },

  handleSubmit: function(event){
    event.preventDefault();
    postData = { review: this.state };
    if(this.props.review){
      ReviewUtil.editReview(postData)

      // this.setState({ title: "", body: "",
      //                 movie_id: this.props.movieId,
      //                 author_name: UserStore.currentUser().username,
      //                 user_id: UserStore.currentUser().id
      //               });
      // this.history.pushState(null, "movies/" + this.props.review.movie_id);
      // ReviewActions.formFalse();
      ReviewUtil.fetchAll(this.state.movie_id);
    } else {
      ReviewUtil.createReview(postData);
      ReviewUtil.fetchAll(this.state.movie_id);
      this.setState({ title: "", body: "",
                      movie_id: this.props.movieId,
                      author_name: UserStore.currentUser().username,
                      user_id: UserStore.currentUser().id });
      // this.history.pushState(null, "movies/" + this.props.params['movieId']);
    }
    ReviewActions.editFalse();
  },

  render: function(){
    // var buttonText = "Edit Review";
    var buttonText = this.props.review ? "Edit Review" : "Create Review";
    return(
      <div className="reviewForm">
        <button onClick={this.handleBack} className="Left">Back to Movie</button>
        <h2>{buttonText}</h2>
        <form onSubmit={this.handleSubmit} >
          <label>Title:</label>
          <input
              type="text"
              valueLink={this.linkState('title')} />

          <br></br>
          <label className='TA2'>Body:</label>
          <textarea class="form-control" rows="2"
                      valueLink={this.linkState('body')}/>
          <br></br>
          <input type="submit" className="Right" value={buttonText} />
        </form>
      </div>
    )
  }
})

module.exports = ReviewForm;
