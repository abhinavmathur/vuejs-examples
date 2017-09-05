Rails.application.routes.draw do
  get '/tickets' => 'tickets#index'
  get '/components' => 'tickets#components'

  resources :peoples do
    collection do
      post '/search' => 'peoples#search'
      get '/join' => 'peoples#join'
    end
  end
end
