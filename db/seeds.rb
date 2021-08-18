# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Student.destroy_all

require 'faker'
Post.destroy_all
Course.destroy_all
User.destroy_all

@professorx = User.create!(
  username: 'professorx',
  email: 'professorx@xmen.org',
  bio: 'I took my mom telling me to use my brain a little too literally (and extremely).',
  img_url: 'https://assets.entrepreneur.com/content/3x2/2000/20160901055636-ProfessorX.jpeg',
  password: 'telepathya',
  is_teacher: true
)

@jenedict_teacher = User.create!(
  username: 'jenedictcumberbatch',
  email: 'jenedict@yahoo.com',
  bio: 'I go well with eggs',
  img_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cobra-k-1526581667.jpg?resize=480:*',
  password: 'eggsjenedict_and_moolah',
  is_teacher: true
)

@johnson_student = User.create!(
  username: 'johnsonandpfizer',
  email: 'johnson@john.son',
  bio: 'I just love Juicy Drop Pops.',
  img_url: 'https://www.indiewire.com/wp-content/uploads/2018/06/02_CobraKai.jpg?w=780',
  password: 'checkyourjohnson_and_moolah',
  is_teacher: false
)

@adult_student = User.create!(
  username: 'adultperson',
  email: 'adult@facebook.edu',
  bio: 'I think I am the most adultest adult to be honest.',
  img_url: 'https://costumewall.com/wp-content/uploads/2018/10/mr-miyagi.jpg',
  password: 'adultperson_and_moolah',
  is_teacher: false
)

@dance1 = Course.create!(
  name: 'Dance 101',
  description: 'Learn about dance and the choreography process.',
  category: 'Dance',
  start_date: Date.today,
  end_date: Date.tomorrow,
  teacher: @jenedict_teacher,
  student: @adult_student
)

@piano1 = Course.create!(
  name: 'Piano 101',
  description: 'Learn about piano technique and play classical music.',
  category: 'Music',
  start_date: Date.today,
  end_date: Date.tomorrow,
  teacher: @jimothy_teacher,
  student: @johnson_student
)
@guitar1 = Course.create!(
  name: 'Guitar 101',
  description: 'Learn about guitar and play some pop tunes.',
  category: 'Music',
  start_date: Date.today,
  end_date: Date.tomorrow,
  teacher: @jimothy_teacher,
  student: @adult_student
)

Post.create!(
  user: @jimothy_teacher, 
  course: @dance1,
  media_url: 'https://i.ytimg.com/vi/Wr3wDQL9hOw/maxresdefault.jpg',
  content: Faker::Lorem.paragraph
)
Post.create!(
  user: @jenedict_teacher, 
  course: @piano1,
  media_url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/182FA/production/_110866099_gettyimages-905799292.jpg',
  content: Faker::Lorem.paragraph
)
Post.create!(
  user: @johnson_student, 
  course: @guitar1,
  media_url: 'https://online.berklee.edu/takenote/wp-content/uploads/2020/07/learn_acoustic_blues_guitar_article_image.jpg',
  content: Faker::Lorem.paragraph
)
Post.create!(
  user: @adult_student, 
  course: @dance1,
  media_url: 'https://i.ytimg.com/vi/Wr3wDQL9hOw/maxresdefault.jpg',
  content: Faker::Lorem.paragraph
)


puts "#{User.count} users created!"
puts "#{Course.count} courses created!"
puts "#{Post.count} posts created!"

# Student.destroy_all

# Student.create!(name:"Brian Danger", age: 33, special_attack:"Failing Upwards", sensei: @john)
# Student.create!(name:"Bobby Talley", age: 95, special_attack:"The Mem-Fist Tenesseeya Later", sensei: @johnny)
# Student.create!(name:"David Whitlatch", age: 15, special_attack:"The David Whiplash", sensei: @miyagi)
# Student.create!(name:"Maddy Rombes", age: 25, special_attack:"The Rom-Bee Sting", sensei: @daniel)
# puts "#{Student.count} students created!"