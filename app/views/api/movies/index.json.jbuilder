json.array!(@movies) do |movie|
  json.partial!('movie', movie: movie) #show_reviews: false
end
