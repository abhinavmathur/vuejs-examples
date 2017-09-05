class PeoplesController < ApplicationController

  def index

  end

  def new

  end

  def create

  end

  def show

  end

  def edit

  end

  def update

  end

  def destroy

  end

  def search
    @search_results = Person.where('name LIKE ?', '%' + params[:name] + '%')
  end

  def join

  end

  private

  def filter_params
    params.permit(:name)
  end
end
