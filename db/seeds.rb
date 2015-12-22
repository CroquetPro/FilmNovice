
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
  },
  { title: "The Godfather", year: 1972,
    director: "Francis Ford Coppola",
    actors: "Marlon Brando, Al Pacino, James Caan",
    image_url: "http://cdn.crushable.com/files/2011/03/thegodfather.jpg",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  { title: "Finding Nemo", year: 2003,
    director: "Andrew Stanton",
    actors: "Albert Brooks, Ellen DeGeneres",
    image_url: "http://img4.wikia.nocookie.net/__cb20130801230959/disney/images/d/d4/Finding_Nemo(7).jpg",
    plot: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
  },
  { title: "Harry Potter and the Sorcerer's Stone", year: 2001,
    director: "Chris Columbus",
    actors: "Daniel Radcliffe, Emma Watson, Rupert Grint, Richard Harris, Maggie Smith",
    image_url: "http://images.contentful.com/7h71s48744nc/2bPKBoWupiim0SiOg4Y6eA/103c011afb362cda5a10a0c7964c378c/harry-potter-and-the-sorcerers-stone.jpg",
    plot: "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry."
  },
  { title: "The Lord of the Rings: Return of the King", year: 2003,
    director: "Peter Jackson",
    actors: "Elijah Wood, Viggo Mortensen, Ian McKellen",
    image_url: "http://www.filmhdwallpapers.com/files/movie/The-Lord-of-the-Rings-The-Return-of-the-King-HD-Wallpapers.jpg",
    plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
  },
  { title: "Beauty and the Beast", year: 1991,
    director: "Gary Trousdale",
    actors: "Paige O'Hara, Robby Benson, Jesse Corti",
    image_url: "http://cdn.collider.com/wp-content/uploads/beauty-and-the-beast-disney.jpg",
    plot: "Belle, whose father is imprisoned by the Beast, offers herself instead, unaware her captor to be an enchanted prince."
  },
  { title: "The Wizard of Oz", year: 1939,
    director: "Victor Fleming",
    actors: "Judy Garland, Frank Morgan, Ray Bolger",
    image_url: "http://www.tamswitmark.com/wp-content/uploads/2013/09/Wizard-of-Oz-RSC-and-MUNI1-541x346.jpg",
    plot: "Dorothy Gale is swept away to a magical land in a tornado and embarks on a quest to see the Wizard who can help her return home."
  },
  { title: "Avatar", year: 2009,
    director: "James Cameron",
    actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
    image_url: "http://assets1.ignimgs.com/2014/11/26/avatar-1280cjpg-44d49c_1280w.jpg",
    plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
  },
  { title: "The Avengers", year: 2012,
    director: "Joss Whedon",
    actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth, Mark Ruffalo, Jeremy Renner",
    image_url: "http://screenrant.com/wp-content/uploads/The-Avengers-Movie-Roster-Concept-Art.jpg",
    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity."
  },
  { title: "The Incredibles", year: 2004,
    director: "Brad Bird",
    actors: "Craig T. Nelson, Samuel L. Jackson, Holly Hunter",
    image_url: "http://www.insidethemagic.net/wp-content/uploads/2014/03/incredibles.jpg",
    plot: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world."
  },
  { title: "Willy Wonka and the Chocolate Factory", year: 1971,
    director: "Mel Stuart",
    actors: "Gene Wilder, Jack Albertson, Peter Ostrum",
    image_url: "https://www.relix.com/images/sized/images/uploads/willy-wonka--the-chocolate-factory-4fea54fa7c6ab-760x428.jpg",
    plot: "A poor boy wins the opportunity to tour the most eccentric and wonderful candy factory of all."
  }
]
# { title: "", year ,
#   director: "",
#   actors: "",
#   image_url: "",
#   plot: ""
# }
movies.each { |movie| Movie.create(movie) }

users = [
  { username: "Guest", password: "password" },
  { username: "Amazon", password: "password" },
  { username: "Twitter", password: "password" },
  { username: "Ben", password: "password" },
  { username: "Cody", password: "password" },
  { username: "The Dude", password: "password" },
  { username: "Ghost", password: "password" },
  { username: "Neck Beard", password: "password" },
]

users.each { |user| User.create(user) }


# :title, :body, :author_name, :movie_id, :user_id
reviews = [
  { title: "Shhh",
    body: "I'm not supposed to talk about it",
    author_name: "Twitter", movie_id: 1, user_id: 3 },
  { title: "Who would have imagined.",
    body: "A conversation about hamburgers leads to violence.",
    author_name: "Twitter", movie_id: 2, user_id: 3 },
  { title: "What a shame.",
    body: "Miserable billionaire terrorizes mentally ill man.",
    author_name: "Twitter", movie_id: 3, user_id: 3 },
  { title: "Weird",
    body: "Noseless guy has an unhealthy obsession with a teenage boy.",
    author_name: "Twitter", movie_id: 8, user_id: 3 },
  { title: "Typical",
    body: "White child is told he is special, then he goes to private school.",
    author_name: "Twitter", movie_id: 8, user_id: 3 },
  { title: "Sad, really",
    body: "Man takes a vacation to destroy a family heirloom.",
    author_name: "Twitter", movie_id: 9, user_id: 3 },
  { title: "Psychologically gripping",
    body: "Love in the time of stockholm syndrome.",
    author_name: "Twitter", movie_id: 10, user_id: 3 },
  { title: "Kind of funny",
    body: "Impressionable teenage girl from Kansas tries acid for the first time.",
    author_name: "Twitter", movie_id: 11, user_id: 3 },
  { title: "Boring",
    body: "Hitch hikers with self-esteem issues get lost in the woods and meet a televangelist who is a fraud.",
    author_name: "Twitter", movie_id: 11, user_id: 3 },
  { title: "It's been done before",
    body: "Pocahontas with blue people.",
    author_name: "Twitter", movie_id: 12, user_id: 3 },
  { title: "A family story",
    body: "Adopted child's older brother will not let him hold the hammer.",
    author_name: "Twitter", movie_id: 13, user_id: 3 },
  { title: "At least it is animated",
    body: "Man's midlife crisis endangers his family and an entire city.",
    author_name: "Twitter", movie_id: 14, user_id: 3 },
  { title: "Almost a horror movie",
    body: "A drug crazed lunatic slowly kills children in front of their parents, one by one.",
    author_name: "Twitter", movie_id: 15, user_id: 3 },
]
reviews.each { |review| Review.create(review) }
            # {PF: "A conversation about hamburgers leads to violence"},
            # {FC: "I'm not supposed to talk about it"},
            # {DK: "Miserable billionaire terrorizes mentally ill man."},
            # {HP: "Noseless guy has an unhealthy obsession with a teenage boy."},
            # {HP: "White child is told he is special, then he goes to private school."},
            # {LotR: "Man takes a vacation to destroy a family heirloom."},
            # {BatB: "Love in the time of stockholm syndrome."},
            # {WoO: "Impressionable teenage girl from Kansas tries acid for the first time."},
            # {WoO: "Hitch hikers with self-esteem issues get lost in the woods and meet a televangelist who is a fraud."},
            # {Avatar: "Pocahontas with blue people."},
            # {Avengers: "Adopted child's older brother will not let him hold the hammer."},
            # {Incredibles: "Man's midlife crisis endangers his family and an entire city."},
            # {WWatCF: "A drug crazed lunatic slowly kills children in front of their parents, one by one."}
#           ]
# (:value, :voter_id, :user_id, :review_id)
votes = [
  {
    
  }
]
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
