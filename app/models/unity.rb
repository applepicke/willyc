class Unity

  def initialize
    token = Rails.application.secrets[:unity]["cloud_api_key"]
    @base_url = "https://build-api.cloud.unity3d.com"
    @auth_header = { Authorization: "Token #{token}" }
  end

  def request url
    HTTParty.get("#{@base_url}#{url}", headers: @auth_header, format: :json)
  end

  def download_build url
    response = request(url)
    build_url = response["links"]["download_primary"]["href"]
    HTTParty.get(build_url).body
  end

end