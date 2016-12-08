class Games::TinyController < ApplicationController

  def index
    builds = Build.where(game: 'tiny')

    @latest = {
      x32: builds.where(platform: 'tiny-x32').last,
      x64: builds.where(platform: 'tiny-x64').last,
      osx: builds.where(platform: 'tiny-osx').last
    }
  end

end