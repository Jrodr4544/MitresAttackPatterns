Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :attack_patterns do
      member do
        post 'add_comment'
      end
    end
    # resources :comments, only: %i[create]
  end
end
