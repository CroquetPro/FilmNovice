class Actor < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  
  has_many :castings
  has_many :movies, through: :castings
end
