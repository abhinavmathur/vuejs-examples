json.array! @search_results.each do |result|
  json.name result.name
end