var React = require('react'),
    MovieUtil = require('../../utils/movie_util'),
    SearchUtil = require('../../utils/search_util');

var Search = React.createClass({
  getInitialState: function(){
    return({ searchText: "" });
  },

  handleChange: function(event){
    event.preventDefault();
    this.setState({ searchText: event.currentTarget.value });
    SearchUtil.searchFor(event.currentTarget.value);
  },

  handleSubmit: function(event){
    event.preventDefault();
  },

  render: function(){
    return(
      <div className='search'>
        <form className='searchBar' onSubmit={this.handleSubmit}>
          <label>Search: </label>
          <input type="text"
                value={this.state.searchText}
                onChange={this.handleChange} />
        </form>
      </div>
    )
  }
});

module.exports = Search;
