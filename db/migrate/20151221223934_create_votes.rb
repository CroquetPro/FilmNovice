class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :value, null: false
      t.integer :voter_id, null: false
      t.integer :review_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :votes, [:voter_id, :review_id], unique: true
  end
end
