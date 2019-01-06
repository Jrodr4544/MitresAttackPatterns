class KillChainPhase < ApplicationRecord
  belongs_to :AttackPattern, optional: true
end
