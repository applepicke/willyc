module Concerns
  module ErrorHandling
    extend ActiveSupport::Concern

    included do
      # Ideally we would rescue from uncaught errors here, but there appears to
      # be some issues doing so: https://github.com/rails/rails/issues/671

      # rescue_from Exception,                            :with => :page_error
      # rescue_from ActionController::RoutingError,       :with => :rescue_from_routing_error # unless Rails.env.development?
      # rescue_from ActiveRecord::RecordNotFound,         :with => :page_not_found  # unless Rails.env.development?
      # rescue_from AbstractController::ActionNotFound,   :with => :page_not_found
      # rescue_from ActionController::UnknownController,  :with => :page_not_found
    end

  private

    def render_404
      send_file Rails.root.join('public', '404.html'), type: 'text/html; charset=utf-8', disposition: 'inline', status: 404
    end

    def render_403
      send_file Rails.root.join('public', '403.html'), type: 'text/html; charset=utf-8', disposition: 'inline', status: 403
    end

    def rescue_from_routing_error(error)
      case error.message.to_sym
      when :not_found
        page_not_found(error)
      when :forbidden
        page_forbidden(error)
      else
        render :text => error.inspect
      end
    end

    def page_not_found(error)
      Rails.logger.debug "  > Rendering 404 in response to: #{error.inspect}"
      render "shared/errors/not_found", :layout => 'home', :status => :not_found
    end

    def page_forbidden(error)
      Rails.logger.debug "  > Rendering 403 in response to: #{error.inspect}"
      render "shared/errors/forbidden", :layout => 'home', :status => :forbidden
    end

    def page_error(error)
      Rails.logger.debug "  > Rendering 500 in response to: #{error.inspect}"
      render 'shared/errors/server_error', :layout => 'home', :status => 500
    end

  end
end
