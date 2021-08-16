class RemoveTaughtByRefFromCourses < ActiveRecord::Migration[6.1]
  def change
    remove_reference :courses, :taught_by
  end
end
