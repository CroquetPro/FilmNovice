json.extract!(
  movie, :id, :title, :year, :director, :actors, :image_url, :plot
)

# if show_reviews
#   json.reviews do
#     json.array!(movie.reviews) do |review|
#       json.extract!( review, :title, :body )
#     end
#   end
