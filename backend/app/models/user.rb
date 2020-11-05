class User < ApplicationRecord
    has_secure_password
    
    has_many :scores
	has_many :scoreboards, through: :scores
end
