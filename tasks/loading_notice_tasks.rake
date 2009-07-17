# desc "Explaining what the task does"
# task :loading_notice do
#   # Task goes here
# end

namespace :loading_notice do
  
  PLUGIN_ROOT = File.dirname(__FILE__) + '/../'

  desc 'Installs required javascript and stylesheet files to the public/ directory.'
  task :install do
    FileUtils.cp Dir[PLUGIN_ROOT + '/javascripts/*.js'], RAILS_ROOT + '/public/javascripts'
    FileUtils.cp Dir[PLUGIN_ROOT + '/stylesheets/*.css'], RAILS_ROOT + '/public/stylesheets'
  end

  desc 'Removes the javascript and stylesheet for the plugin.'
  task :remove do
    FileUtils.rm %{loading_notice.js}.collect { |f| RAILS_ROOT + "/public/javascripts/" + f  }
    FileUtils.rm %{loading_notice.css}.collect { |f| RAILS_ROOT + "/public/stylesheets/" + f  }
  end
  
end