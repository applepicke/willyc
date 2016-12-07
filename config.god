RAILS_ROOT = File.dirname(__FILE__)

God.watch do |w|
  w.name = "willyc"
  w.start = "#{RAILS_ROOT}/bin/bundle exec foreman start"
  w.keepalive
end