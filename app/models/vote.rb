class Vote < ActiveRecord::Base
  validates :value, :voter_id, :user_id, :review_id, presence: true
  validates :voter_id, uniqueness: { scope: [:review_id] }


  validates_uniqueness_of :voter_id, :scope => [:review_id]

  belongs_to :review
  belongs_to :user
  belongs_to :voter, class_name: "User"
end
