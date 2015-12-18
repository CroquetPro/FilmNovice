var React = require('react'),
    FlashStore = require('../../stores/flash_store'),
    UserStore = require('../../stores/user_store'),
    MovieStore = require('../../stores/movie_store');

var Flash = React.createClass({

  getInitialState: function(){
    return ({ error: null,
              notification: null });
  },

  componentDidMount: function(){
    this.userToken = UserStore.addListener(this._onChange);
    this.movieToken = MovieStore.addListener(this._onChange);
    this.flashToken = FlashStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.flashToken.remove();
    this.userToken.remove();
    this.movieToken.remove();
  },

  _onChange: function(){
    this.setState({
      error: FlashStore.currentError(),
      notification: FlashStore.currentNotification()
    });
  },

  render: function(){
    return(
      <div className='flash'>
        <div className='error'>{this.state.error}</div>
        <div className='notification'>{this.state.notification}</div>
      </div>
    );
  }
});

module.exports = Flash;
