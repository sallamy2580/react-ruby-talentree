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
Post.destroy_all
Course.destroy_all
User.destroy_all

@jimothy_teacher = User.create!(
  username: 'jimothaniel',
  email: 'jimoth@aol.com',
  bio: 'I just love Juicy Drop Pops.',
  img_url: 'https://i.pinimg.com/originals/98/60/73/9860734188ab14fcbb16e72f5dd2ad86.jpg',
  password_digest: 'shrimp',
  is_teacher: true
)

@jenedict_teacher = User.create!(
  username: 'jenedictarnold',
  email: 'jenedict@yahoo.com',
  bio: 'I go well with eggs',
  img_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cobra-k-1526581667.jpg?resize=480:*',
  password_digest: 'eggsbenedict',
  is_teacher: true
)

@johnson_student = User.create!(
  username: 'johnsonandpfizer',
  email: 'johnson@john.son',
  bio: 'I just love Juicy Drop Pops.',
  img_url: 'https://www.indiewire.com/wp-content/uploads/2018/06/02_CobraKai.jpg?w=780',
  password_digest: 'checkyourjohnson',
  is_teacher: false
)

@adult_student = User.create!(
  username: 'adultperson',
  email: 'adult@facebook.edu',
  bio: 'I think I am the most adultest adult to be honest.',
  img_url: 'https://costumewall.com/wp-content/uploads/2018/10/mr-miyagi.jpg',
  password_digest: 'adultperson',
  is_teacher: false
)

@dance1 = Course.create!(
  name: 'Dance 101',
  description: 'Learn about dance and the choreography process.',
  category: 'Dance',
  taught_by: 'Jenedict',
  start_date: Date.today,
  end_date: Date.tomorrow,
  user: @adult_student
)
@piano1 = Course.create!(
  name: 'Piano 101',
  description: 'Learn about piano technique and play classical music.',
  category: 'Music',
  taught_by: 'Jimothy',
  start_date: Date.today,
  end_date: Date.tomorrow,
  user: @johnson_student
)
@guitar1 = Course.create!(
  name: 'Guitar 101',
  description: 'Learn about guitar and play some pop tunes.',
  category: 'Music',
  taught_by: 'Jimothy',
  start_date: Date.today,
  end_date: Date.tomorrow,
  user: @johnson_student
)

puts "#{User.count} users created!"
puts "#{Course.count} courses created!"

# Student.destroy_all

# Student.create!(name:"Brian Danger", age: 33, special_attack:"Failing Upwards", sensei: @john)
# Student.create!(name:"Bobby Talley", age: 95, special_attack:"The Mem-Fist Tenesseeya Later", sensei: @johnny)
# Student.create!(name:"David Whitlatch", age: 15, special_attack:"The David Whiplash", sensei: @miyagi)
# Student.create!(name:"Maddy Rombes", age: 25, special_attack:"The Rom-Bee Sting", sensei: @daniel)
# puts "#{Student.count} students created!"