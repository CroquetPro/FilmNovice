class Review < ActiveRecord::Base
  validates :title, :body, :author_name, presence: true

  belongs_to :movie
  belongs_to :user
  has_many :votes

  def total_votes
    self.votes.sum(:value)
  end
end
