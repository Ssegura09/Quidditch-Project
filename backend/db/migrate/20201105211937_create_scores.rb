class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :points
      t.integer :user_id
      t.integer :scoreboard_id

      t.timestamps
    end
  end
end
