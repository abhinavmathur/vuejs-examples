Rails.application.routes.draw do
  get '/tickets' => 'tickets#index'
end
