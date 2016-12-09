class Games::WebhooksController < ApplicationController
  protect_from_forgery except: :build_hook

  def build_hook
    links = params[:links]
    project = params[:projectName]
    target_name = params[:buildTargetName]

    if links && project && target_name
      build_url = links[:api_self][:href]

      unity = Unity.new
      file = unity.download_build(build_url)

      key = "builds/#{project}/#{target_name}/#{Time.now.to_i}-#{target_name}.zip"

      resource = Aws::S3::Resource.new
      resource.bucket($s3_bucket).object(key).put(body: file)

      build = Build.find_or_initialize_by url: key
      build.game = project
      build.platform = target_name
      build.save
    else
      render_404
    end
  end

end