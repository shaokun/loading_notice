LoadingNotice
=============

Loading Notice is a plugin, built on Prototype, which shows an indictor when a slow AJAX is under process automatically. Basically, it's like the "Loading" div appears in gmail when busy. When the users scroll or resize the window, it will still keep showing on the top of the page.

 

 
Howto
-----
 
Installation of the plugin:

    $ ruby script/plugin install git://github.com/shaokun/loading_notice.git
    $ rake loading_notice:install
    
Include the library into your project:

    <%= javascript_include_tag :defaults, 'loading_notice' %>
    <%= stylesheet_link_tag 'loading_notice' %>
		 



Demo
----

Use the [loading-notice-demo template](http://gist.github.com/156145) (for rails >= 2.3) to generate a fully functional proof-of-concept of the loading_notice plugin:

    $ rails loading-notice-demo -m http://gist.github.com/156145.txt



 
Author
------
 
Minor enhancements by [Thomas Duerr](http://thomd.net). 

Original Plugin written by [Shaokun Wu](http://www.kudelabs.com). Mail to `shaokun at kudelabs.com` for bug reports, feature requests or any comment.



Copyright (c) 2009 Kude Labs, released under the MIT license