class ExternalReference < ApplicationRecord
  belongs_to :AttackPattern, optional: true 
end
