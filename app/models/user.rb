class User < ApplicationRecord
  has_many :courses
  has_many :posts
end
