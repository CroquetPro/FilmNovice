class Director < ActiveRecord::Base
  validates :name, presence: true

  has_many :movies
end
