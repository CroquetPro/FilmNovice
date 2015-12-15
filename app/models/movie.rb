class Movie < ActiveRecord::Base
  validates :title, :release_date, :plot, presence: true
  validates :title, uniqueness: true

  # belongs_to :director
  # belongs_to :writer
  # has_many :reviews
  has_many :castings
  has_many :actors, through: :castings
end
