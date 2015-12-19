class Review < ActiveRecord::Base
  validates :title, :body, presence: true

  belongs_to :movie
  belongs_to :user
end
