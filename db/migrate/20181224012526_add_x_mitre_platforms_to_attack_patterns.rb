class AddXMitrePlatformsToAttackPatterns < ActiveRecord::Migration[5.1]
  def change
    add_column :attack_patterns, :x_mitre_platforms, :text, array: true, default: []
  end
end
