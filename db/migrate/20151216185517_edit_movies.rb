class EditMovies < ActiveRecord::Migration
  def change
    add_column :movies, :director, :text
    add_column :movies, :actors, :text
    add_column :movies, :year, :integer
    change_column :movies, :director_id, :integer, null: true
    change_column :movies, :release_date, :date, null: true
  end
end
