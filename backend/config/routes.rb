Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :scoreboards
  resources :scores

  post "/login", to: "auth#create"
  post '/scoreboards', to: 'scoreboards#create'
  post '/scores', to: 'scores#create'
end
