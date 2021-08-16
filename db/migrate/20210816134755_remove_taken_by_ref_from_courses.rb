class RemoveTakenByRefFromCourses < ActiveRecord::Migration[6.1]
  def change
    remove_reference :courses, :taken_by
  end
end
