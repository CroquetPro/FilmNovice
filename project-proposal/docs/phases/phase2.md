# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models
### Controllers
### Views

###Javascripts
* stylesheet

## Flux
### Views (React Components)
* MoviesIndex
  - MovieIndexItem
* MovieForm

### Stores
* Movie

### Actions
* ApiActions.receiveAllMovies -> triggered by ApiUtil
* ApiActions.receiveSingleMovie
* ApiActions.deleteMovie
* MovieActions.fetchAllMovies -> triggers ApiUtil
* MovieActions.fetchSingleMovie
* MovieActions.createMovie
* MovieActions.destroyMovie

### ApiUtil
* ApiUtil.fetchAllMovies
* ApiUtil.fetchSingleMovie
* ApiUtil.createMovie
* ApiUtil.destroyMovie

## Gems/Libraries
* Flux Dispatcher (npm)
