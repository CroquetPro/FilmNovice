var React = require('react'),
    MovieUtil = require('../../utils/movie_util'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var Search = React.createClass({
  mixins: [History, LinkedStateMixin],
  
  getInitialState: function(){
    return({ searchText: "" });
  },

  handleSubmit: function(event){
    event.preventDefault();
    SearchUtil.searchFor(this.state.searchText);
    this.setState({ searchText: "" });
    this.history.pushState(null, "/search");
  },

  render: function(){
    return(
      <div className='search'>
        <form className='searchBar' onSubmit={this.handleSubmit}>
          <input type="text" valueLink={this.linkState('searchText')} />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
});

module.exports = Search;
