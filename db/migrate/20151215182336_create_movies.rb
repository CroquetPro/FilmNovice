class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.date :release_date, null: false
      t.string :plot, null: false
      t.timestamps null: false
    end
    add_index :movies, :title, unique: true
  end
end
