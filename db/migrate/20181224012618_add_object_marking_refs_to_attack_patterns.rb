class AddObjectMarkingRefsToAttackPatterns < ActiveRecord::Migration[5.1]
  def change
    add_column :attack_patterns, :object_marking_refs, :string, array: true, default: []
  end
end
