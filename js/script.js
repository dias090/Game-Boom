$(document).ready(function () {
	$(".slick1").slick({
		slidesToShow: 5
	});

	$(".slick-next").click(function () {
		$(".slick-next").css({
			"backgroundColor":"rgba(151, 191, 3, 1)"
		});
		$(".slick-prev").css({
			"backgroundColor":"rgba(170, 222, 0, 1)"
		});
	});

	$(".slick-prev").click(function () {
		$(".slick-prev").css({
			"backgroundColor":"rgba(151, 191, 3, 1)"
		});
		$(".slick-next").css({
			"backgroundColor":"rgba(170, 222, 0, 1)"
		});
	});
})