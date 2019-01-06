class CreateAttackPatterns < ActiveRecord::Migration[5.1]
  def change
    create_table :attack_patterns, :primary_key => :id do |t|
      #t.primary_key :key
      t.string :key
      t.string :created_by_ref
      t.string :name
      t.text :description
      t.text :definition_type
      t.text :definition
      t.string :type
      t.string :x_mitre_version
      t.string :x_mitre_detection
      t.string :modified
      t.string :created

      t.timestamps
    end
  end
end
