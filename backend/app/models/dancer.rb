class Dancer < ApplicationRecord
  validates :url, presence: true
end