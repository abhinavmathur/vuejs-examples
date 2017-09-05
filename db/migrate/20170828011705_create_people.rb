class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :name
      t.text :details
      t.integer :age
      t.boolean :admin, default: false
      t.string :occupation
      t.integer :rank

      t.timestamps
    end
  end
end
