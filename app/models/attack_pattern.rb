class AttackPattern < ApplicationRecord
    self.primary_key = 'id'
    self.inheritance_column = :_type_disabled

    serialize :definition

    has_many :external_references
    has_many :kill_chain_phases
end