Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#index'

  get :games, to: 'games#index'
  namespace :games do
    get :tiny, to: 'tiny#index'
    post :tiny, to: 'tiny#index'

    # webhooks
    post :build_hook, to: 'webhooks#build_hook'
  end

  get :secret_sarah, to: 'home#secret_sarah'

end
