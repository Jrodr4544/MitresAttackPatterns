class CreateExternalReferences < ActiveRecord::Migration[5.1]
  def change
    create_table :external_references do |t|
      t.string :external_id
      t.string :url
      t.string :description
      t.string :source_name

      t.references :attack_pattern, foreign_key: true
      #t.belongs_to :attack_pattern, foreign_key: true

      t.timestamps
    end
  end
end
