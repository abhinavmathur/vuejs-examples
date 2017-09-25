Rails.application.routes.draw do
  get '/tickets' => 'tickets#index'
  get '/components' => 'tickets#components'

  resources :customers

  resources :peoples do
    collection do
      post '/search' => 'peoples#search'
      post '/image_upload' => 'peoples#image_upload'
      get '/join' => 'peoples#join'
    end
  end
end
