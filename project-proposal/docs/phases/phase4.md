# Phase 1: User Authentication, Movie Model and JSON API

## Rails
### Models

### Controllers

### Views
* users/show.json.jbuilder
* reviews/index.json.jbuilder
* reviews/show.json.jbuilder

## Flux
### Views (React Components)
* UserShow
  - ReviewIndex
    -ReviewIndexItem
* App
  - Votes

### Stores
* Review

### Actions
* ReviewActions.fetchAllReviews -> triggers ApiUtil
* ReviewActions.fetchSingleReview


### ApiUtil
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReview


## Gems/Libraries
* Flux Dispatcher (npm)
