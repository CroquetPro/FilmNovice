class CreateCastings < ActiveRecord::Migration
  def change
    create_table :castings do |t|
      t.integer :movie_id, null: false
      t.integer :actor_id, null: false
      t.integer :order, null: false
      t.timestamps null: false
    end
    add_index :castings, :movie_id
    add_index :castings, :actor_id
  end
end
