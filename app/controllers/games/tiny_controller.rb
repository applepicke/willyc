class Games::TinyController < ApplicationController

  def index
    builds = Build.where(game: 'tiny')

    @x32_builds = builds.where(platform: 'tiny-x32').order('created_at DESC')
    @x64_builds = builds.where(platform: 'tiny-x64').order('created_at DESC')
    @osx_builds = builds.where(platform: 'tiny-osx').order('created_at DESC')
  end

end