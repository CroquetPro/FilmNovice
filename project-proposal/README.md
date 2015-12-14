# Film Novice

(Eventual Heroku link)

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Film Novice is a web application inspired by Rap Genius built using Ruby on
Rails and React.js.
Film Novice allows users to:

-When Visiting-
- [ ] View Movie Index
- [ ] View Movie Details including cast/crew/plot synopsis
- [ ] View Movie Reviews contributed by users
- [ ] Search for movies
- [ ] Create an account

-When Signed Up-
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete reviews
- [ ] Upvote or Downvote Other User's Reviews (one vote per)
- [ ] Add Movies to be reviewed

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Movie Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). The Signup/Login will be entirely within the navbar.
Users will stay on the root page when signed in, but with additional information
(username, vote tally, logout button)
in the navbar. Before building out the
front end, I will begin by setting up a full JSON API for Movies. Users can
bring up movies in a separate view by searching for the title.

### Phase 2: Flux Architecture and Movie CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Movie store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Movie `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Movies can be created, read, edited and destroyed in the browser.
Lastly, while constructing the views I will start using basic CSS for
styling.

### Phase 3: Contributions and Votes (2 days)

Phase 3 adds crowdsourced reviews to the Movies. Seed data will be 1* amazon
reviews. Create JSON API for Reviews. Reviews can also now be voted up or down.
Votes will belong to the voter while also applying to the review, and the
review author.

### Phase 4: User contribution page and Top Charts (2 days)

I will create a page that users can navigate to by clicking their username in
the navbar. This page will show their reviews with the most recent at the top
and the specific vote totals of those contributions as well as their total
votes. This data will also be used to populate the top contributors charts on
the root page.

### Phase 5: Connecting to IMDB (1 day)

Phase 5 introduces allows for auto-filling of new movie forms with IMDB data
about cast/crew and plot synopsis. (I found Open Movie Data Base API at
  http://www.omdbapi.com/).

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Pagination / infinite scroll for Movie Index
- [ ] Multiple sessions
