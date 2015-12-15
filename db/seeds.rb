movies = [
  { title: 'Fight Club', release_date: Date.new(1999, 10, 15), plot: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more..." },
  { title: 'Pulp Fiction', release_date: Date.new(1994, 10, 14), plot: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption." }
]

movies.each { |movie| Movie.create(movie) }
