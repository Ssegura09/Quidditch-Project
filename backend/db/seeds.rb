# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Scoreboard.destroy_all
Score.destroy_all


u1 = User.create(username: "Guest", password: "password", house: "Slytherin")
u2 = User.create(username: "Eddie", password: "password", house: "Slytherin")
u3 = User.create(username: "Stephanie", password: "password", house: "Gryffindor")
sb1 = Scoreboard.create(name: "Memory Card", highscore: 200)
sb1 = Scoreboard.create(name: "Memory Card", highscore: 200)
score1 = Score.create(points: 100, user_id: u1.id, scoreboard_id: sb1.id )
score2 = Score.create(points: 100, user_id: u1.id, scoreboard_id: sb1.id )
score3 = Score.create(points: 200, user_id: u3.id, scoreboard_id: sb1.id )
score4 = Score.create(points: 200, user_id: u2.id, scoreboard_id: sb1.id )

puts "we done be seeded"
