class Movie < ActiveRecord::Base
  validates :title, :plot, presence: true
  validates :title, uniqueness: true

  # belongs_to :director
  # belongs_to :writer
  # has_many :reviews
  # has_many :castings
  # has_many :actors, through: :castings

  # def lead_actor
  #   casting_object = Casting.where(movie_id: this.id).where(order: 1)
  #   actor = Actor.where(id: casting_object.actor_id)
  #   return actor.name
  # end
end
