/* global $ */
(function() {
	window.run = function() {
		$(window)
			.on('scroll',function() {
				if ($.scrollDetecter) clearTimeout($.scrollDetecter);
				
				$.scrollDetecter = setTimeout(function(w,h,c,s) {
					w = $(window);
					h = $('#header');
					c = 'is-scrolled';
					s = h.hasClass(c);
					
					if (w.scrollTop() > 0) {
						if (!s) h.addClass(c);
					}
					else {
						if (s) h.removeClass(c);
					}
				},200);
			})
			.trigger('scroll');
			
		$('.header-menu-toggle')
			.on('click',function() {
				$('body')
					.toggleClass('has-menu');
				
				if ($('body').hasClass('has-menu')) {
					$('#page')
						.one('click',function() {
							$('.nav-close')
								.trigger('click');
						});
				}
				
				return false;
			});
			
		$('.nav-close')
			.on('click',function() {
				$('body')
					.removeClass('has-menu');
				
				return false;
			});
			
		$(window)
			.on('keydown',function(e) {
				if (e.which == 27) {
					$('.nav-close')
						.trigger('click');
				}
			});
	};
})();

(function(d,u,t,h,o) {
	h = d.getElementsByTagName(t)[0];
	o = d.createElement(t);
	o.async = 1;
	o.src = u;
	o.onload = function() {
		if (typeof window.run == 'function') window.run();
	};
	h.parentNode.insertBefore(o,h);
})(document,'//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js','script');

(function(d,h) {
	h = d.getElementById('hero');
	h.style.backgroundImage = 'url(' + h.getAttribute('data-background') + ')';
})(document);

/*
(function(d,u,o) {
	o = d.createElement('img');
	o.onload = function() {
		document.getElementById('hero').style.backgroundImage = 'url(' + this.src + ')';
	};
	o.async = 1;
	o.src = u;
})(document,'/images/hero.jpg');
*/