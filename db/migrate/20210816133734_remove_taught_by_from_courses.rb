class RemoveTaughtByFromCourses < ActiveRecord::Migration[6.1]
  def change
    remove_column :courses, :taught_by, :string
  end
end
