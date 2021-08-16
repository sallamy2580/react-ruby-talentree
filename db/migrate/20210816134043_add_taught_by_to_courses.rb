class AddTaughtByToCourses < ActiveRecord::Migration[6.1]
  def change
    add_reference :courses, :taught_by
    add_reference :courses, :taken_by
  end
end
