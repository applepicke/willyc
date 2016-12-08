class CreateBuilds < ActiveRecord::Migration[5.0]
  def change
    create_table :builds do |t|
      t.string :game
      t.string :platform
      t.string :url

      t.timestamps
    end
  end
end
