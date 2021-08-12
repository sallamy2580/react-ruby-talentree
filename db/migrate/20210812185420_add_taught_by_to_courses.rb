class AddTaughtByToCourses < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :taught_by, :string
  end
end
