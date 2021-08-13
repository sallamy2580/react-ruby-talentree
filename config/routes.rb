Rails.application.routes.draw do
  resources :posts
  resources :courses
  resources :users, only: [:index, :show, :create]
  
  post "/users/login", to: "users#login"
  get "/users/verify", to: "users#verify"
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
