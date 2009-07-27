var LoadingNotice = Class.create({
	initialize: function() {
		this.loaded = false;
		this.loading = this.buildLoader();
		
		Ajax.Responders.register({
	    	"onCreate": this.startLoading.bind(this),
	    	"onComplete": this.stopLoading.bind(this),
			"onException": this.stopLoading.bind(this)
	  	});	
	},

    buildLoader: function(){
        var loader = new Element('div', {'id': 'loading'}).update("Loading ...").hide();
        document.body.appendChild(loader);
        return loader;
    },

  	startLoading: function() {
    	this.loaded = false;
    	window.setTimeout(this.showLoading.bind(this), 200);
  	},

  	showLoading: function() {
    	if (!this.loaded) {
			this.positionLoading();
	       	new Effect.Appear(this.loading.id, {duration: 0.5});
	
			// document.observe('resize', this.positionLoading.bind(this));
			// document.observe('scroll', this.positionLoading.bind(this));
			window.onresize = this.positionLoading.bind(this);
			window.onscroll = this.positionLoading.bind(this);
    	}
  	},

	positionLoading: function() {
		var top = document.viewport.getScrollOffsets().top + 1;
		var page_width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
		var left = (document.viewport.getScrollOffsets().left + ((page_width - this.loading.getWidth())) / 2);
		
		this.loading.style.top = top + 'px';
		this.loading.style.left = left + 'px';
	},

  	stopLoading: function() {
    	this.loading.hide();
    	this.loaded = true;

		window.onresize = null;
		window.onscroll = null;
  	}
});

document.observe("dom:loaded", function() {
    new LoadingNotice();
});

