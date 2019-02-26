class Comment < ApplicationRecord
  belongs_to :AttackPattern, optional: true
end
