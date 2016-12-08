module ApplicationHelper

  def aws_url relative
    bucket = Rails.application.secrets[:aws]["bucket"]
    "http://s3.amazonaws.com/#{bucket}/#{relative}"
  end

end
