/*
api-docs
A template for creating API documentation, inspired by Stripe
Copyright (c)2015 Aaron Collegeman
MIT Licensed
*/
!function($) {

	if (document.location.hash) {
		$('#content').scrollTop( $(document.location.hash).offset().top );
	}

	function go(id) {
		try {
			history.pushState(null, null, '#' + id);
		} catch (e) {
			// we don't care: window.console && console.error(e);
		} finally {
			$('a.selected').removeClass('selected');
			$('[href="#' + id + '"]').addClass('selected');
			$('#header select').val(id);
		}
	};

	function createWaypoints() {
		var context = $('#content').get(0);
		$('#content section[id]').each(function() {
			var id = $(this).attr('id');
			new Waypoint({
				'element': this,
				'handler': function(direction) {
					go(id);
				},
				'context': context,
				'offset': 10
			});
		});
	};

	function destroyWaypoints() {
		Waypoint.destroyAll();
	};

	$('#header select').change(function() {
		var id = $(this).val();
		if (id) {
			go(id);
		}
	});

	setTimeout(function() {
		createWaypoints();
	}, 0);

}(jQuery);