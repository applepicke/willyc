class Build < ApplicationRecord
  validates :platform, presence: true
  validates :game, presence: true
  validates :url, presence: true, uniqueness: true
end
