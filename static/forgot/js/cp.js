define(function (require) {
	var $ = require('jquery');
	require('jquery.bt3');
	require('jquery.bt3.hover-dropdown');
	var util = require('lemon/util');
	require('lemon/cp');
	$('[data-toggle="dropdown"]:not(.ignore)').dropdownHover();
	$('[data-toggle="tooltip"]').tooltip();
	// pace , 顶部滑动
	var pace = require('pace');
	pace.start({
		document: false
	});

	// 用于导航下部点击滑动
	var smooth_scroll = require('smooth-scroll');
	smooth_scroll.init();

	$(function () {
		_handle_footer();
	});
	$(window).resize(_handle_footer);

	function _handle_footer() {
		var $p_footer = $('.J_p_footer');
		if (($('body').height() == util.get_viewport().height) || ($('body').height() < util.get_viewport().height - $p_footer.height())) {
			$p_footer.css({
				position: 'fixed',
				bottom  : 0
			}).fadeIn(500);
		} else {
			$p_footer.css({
				position: 'inherit'
			}).show();
		}
	}

});