json.extract!(
  movie, :title, :release_date, :plot
)

# if show_reviews
#   json.reviews do
#     json.array!(movie.reviews) do |review|
#       json.extract!( review, :title, :body )
#     end
#   end
