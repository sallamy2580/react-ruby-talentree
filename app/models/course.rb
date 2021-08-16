# Have multiple foreign keys point to same user table.
# Info cited from:
# https://stackoverflow.com/questions/2166613/multiple-foreign-keys-referencing-the-same-table-in-ror
class Course < ApplicationRecord
  belongs_to :student, :class_name => 'User'
  belongs_to :teacher, :class_name => 'User'
end
