# Be sure to run "bundle update" after each update!
# Github pages compatible plugins
# https://pages.github.com/versions/
#gem 'github-pages', '94', group: :jekyll_plugins

ruby source 'https://rubygems.org'
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
gem 'github-pages', versions['github-pages']

gem 'wdm', '~> 0.1.0' if Gem.win_platform?
gem 'jemoji'

group :jekyll_plugins do
  gem 'jekyll-github-metadata'
  gem 'jekyll-redirect-from'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
end

#  gem 'jekyll-mentions'
#  gem 'jekyll-picture-tag'
