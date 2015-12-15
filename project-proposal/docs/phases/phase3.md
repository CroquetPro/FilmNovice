# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers
* Api::ReviewsController (create, destroy, index, show, update)

### Views
* reviews/index.json.jbuilder
* reviews/show.json.jbuilder

## Flux
### Views (React Components)
* MoviesIndex
  - MoviesIndexItem
* MovieShow
  - ReviewIndex
    - ReviewIndexItem
* MovieForm
* ReviewForm

### Stores
* Review

### Actions
* ApiActions.deleteReview
* ReviewActions.fetchAllReviews -> triggers ApiUtil
* ReviewActions.fetchSingleReview
* ReviewActions.createReview
* ReviewActions.editReview
* ReviewActions.destroyReview
* ReviewActions.registerVote

### ApiUtil
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReview
* ApiUtil.createReview
* ApiUtil.editReview
* ApiUtil.destroyReview
* ApiUtil.vote

## Gems/Libraries
* Flux Dispatcher (npm)
