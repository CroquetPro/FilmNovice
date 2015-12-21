class Review < ActiveRecord::Base
  validates :title, :body, :author_name, presence: true

  belongs_to :movie
  belongs_to :user
end
