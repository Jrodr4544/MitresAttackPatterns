class AddXMitreDataSourcesToAttackPatterns < ActiveRecord::Migration[5.1]
  def change
    add_column :attack_patterns, :x_mitre_data_sources, :text, array: true, default: []
  end
end
