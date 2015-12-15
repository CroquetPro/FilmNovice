class ChangeMovies < ActiveRecord::Migration
  def change
    change_column :movies, :director_id, :integer, null: false
    add_index :movies, :director_id
  end
end
