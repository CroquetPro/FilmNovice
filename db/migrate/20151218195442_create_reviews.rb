class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :movie_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :reviews, :movie_id
    add_index :reviews, :user_id
  end
end
