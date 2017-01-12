class CreateSubscriber < ActiveRecord::Migration[5.0]
  def change
    create_table :subscribers do |t|
      t.string :email
      t.string :verification_code
      t.boolean :verified
      t.boolean :active

      t.timestamps
    end
  end
end
