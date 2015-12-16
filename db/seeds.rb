# directors= [
#   { name: 'David Fincher' },
#   { name: 'Quentin Tarantino' }
# ]

movies = [
  { title: 'Fight Club', release_date: Date.new(1999, 10, 15), year: 1999,
    director: 'Quentin Tarantino',
    actors: 'Edward Norton, Brad Pitt, Helena Bonham Carter, Meat Loaf',
    plot: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more..."
  },
  { title: 'Pulp Fiction', release_date: Date.new(1994, 10, 14), year: 1994,
    director: 'David Fincher',
    actors: 'John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis',
    plot: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  }
]

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
movies.each { |movie| Movie.create(movie) }
