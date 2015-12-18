
movies = [
  { title: 'Fight Club', release_date: Date.new(1999, 10, 15), year: 1999,
    director: 'David Fincher',
    actors: 'Edward Norton, Brad Pitt, Helena Bonham Carter, Meat Loaf',
    image_url: "http://cdn2-www.comingsoon.net/assets/uploads/1970/01/file_611196_fight-club-curb-2-640x320.jpg",
    plot: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more..."
  },
  { title: 'Pulp Fiction', release_date: Date.new(1994, 10, 14), year: 1994,
    director: 'Quentin Tarantino',
    actors: 'John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis',
    image_url: "http://images.mentalfloss.com/sites/default/files/pulpfiction.jpeg",
    plot: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  { title: "The Dark Knight", year: 2008,
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    image_url: "http://wallpaperswide.com/download/batman_the_dark_knight_3-wallpaper-960x640.jpg",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice."
  },
  { title: "The Big Lebowski", year: 1998,
    director: "Joel Coen",
    actors: "Jeff Bridges, John Goodman, Julianne Moore, Steve Buscemi",
    image_url: "http://cdn.collider.com/wp-content/uploads/the-big-lebowski-movie-image-01.jpg",
    plot: "'The Dude' Lebowski, mistaken for a millionaire Lebowski, seeks restitution for his ruined rug and enlists his bowling buddies to help get it."
  },
  { title: "The Shawshank Redemption", year: 1994,
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    image_url: "http://i.telegraph.co.uk/multimedia/archive/02772/shawshank1_2772806b.jpg",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  }
]

movies.each { |movie| Movie.create(movie) }

guest = { username: "Guest", password: "password"}
User.create(guest)

# directors= [
#   { name: 'David Fincher' },
#   { name: 'Quentin Tarantino' }
# ]
#
# actors = [
#   { name: 'Edward Norton'},
#   { name: 'Brad Pitt'},
#   { name: 'Helena Bonham Carter'},
#   { name: 'Meat Loaf'},
#   { name: 'John Travolta'},
#   { name: 'Samuel L. Jackson'},
#   { name: 'Uma Thurman'},
#   { name: 'Bruce Willis'}
# ]
#
# castings = [
#   { movie_id: 1, actor_id: 1, order: 1 },
#   { movie_id: 1, actor_id: 2, order: 2 },
#   { movie_id: 1, actor_id: 3, order: 3 },
#   { movie_id: 1, actor_id: 4, order: 4 },
#   { movie_id: 2, actor_id: 5, order: 1 },
#   { movie_id: 2, actor_id: 6, order: 2 },
#   { movie_id: 2, actor_id: 7, order: 3 },
#   { movie_id: 2, actor_id: 8, order: 4 },
# ]
#
#
