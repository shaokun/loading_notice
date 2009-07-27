LoadingNotice
=============

Loading Notice is a plugin, built on Prototype, which shows an indictor when a slow AJAX is under process automatically. Basically, it's like the "Loading" div appears in gmail when busy. And when the users scroll or resize the window, it will still keep showing on the top of the page.
 
 
 
HOWTO
-----
 
1. Install the plugin:

    $ ruby script/plugin install git://github.com/thomd/loading_notice.git

    $ rake loading_notice:install
    
2. Include the library into your project:

    <%= javascript_include_tag :defaults, 'loading_notice' %>
    
    <%= stylesheet_link_tag 'loading_notice' %>
		
3. That's all!
 
 
Author
------
 
Origin Plugin written by [Shaokun Wu](http://www.kudelabs.com). Mail me to `shaokun at kudelabs.com` for bug reports, feature requests or any comment.

Minor enhancement by [Thomas Duerr](http://thomd.net). 


Copyright (c) 2009 Kude Labs, released under the MIT license