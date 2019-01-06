class CreateKillChainPhases < ActiveRecord::Migration[5.1]
  def change
    create_table :kill_chain_phases do |t|
      t.string :phase_name
      t.string :kill_chain_name

      t.references :attack_pattern, foreign_key: true
      #t.belongs_to :attack_pattern, foreign_key: true

      t.timestamps
    end
  end
end
