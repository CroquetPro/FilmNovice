Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :show, :create, :destroy]

  namespace :api, defaults: {format: :json} do
      resources :movies, except: [:new, :edit] do
        resources :reviews, except: [:new, :edit] do
          resources :votes, except: [:new, :edit, :show]
        end
      end
  end
end
