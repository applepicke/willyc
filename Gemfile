source 'https://rubygems.org'

gem 'foreman'
gem 'rails', '>= 5.0.0.1'

gem 'sqlite3'

gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'exception_notification'


# Extra Libraries
gem 'bootstrap-sass'
gem 'haml'
gem 'aws-sdk', '~> 2'
gem 'httparty'
gem 'dotenv-rails'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
end

group :development do
  gem 'thin'
  gem 'spring'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'capistrano', '~> 3.3.0'
  gem 'capistrano-rails', '~> 1.1'
  gem 'capistrano-chruby'
  gem 'capistrano-bundler'
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :production do
  gem 'unicorn'
end
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
