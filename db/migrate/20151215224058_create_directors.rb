class CreateDirectors < ActiveRecord::Migration
  def change
    create_table :directors do |t|
      t.text :name, null: false
      t.timestamps null: false
    end
    add_column :movies, :director_id, :integer
  end
end
