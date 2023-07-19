function modalOff() {
	$("#modal-desktop").addClass("d-none");
	$("#overlay").addClass("d-none");
}

$('.button-fechar').on('click', modalOff);

setTimeout(function () {
	$('#modal-desktop').removeClass('d-none');
	$("#overlay").removeClass("d-none");
}, 5000);

$('.row.fullbanner-container').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	dots: true,
	infinite: true,
	arrows: true,
	speed: 1600,
	appendDots: ".fullbanner-dots-container",
	appendArrows: ".fullbanner-custom-arrows",
	prevArrow: "<div class='prev-arrow'><img src='./img/next-icon-prev.svg'></div>",
	nextArrow: "<div class='next-arrow'><img src='./img/next-icon-next.svg'></div>"
});

$('.row.fullbanner-container img').removeClass("d-none")

setInterval(function () {
	$('.fullbanner-dots-container .slick-dots button').not('.slick-active').css('background', 'unset');;

	$('.fullbanner-dots-container .slick-dots .slick-active button').css('background', '#FAA500');
}, 100)

$('.vitrine-cards').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: false,
	infinite: true,
	arrows: true,
	speed: 1600,
	appendDots: ".vitrine-dots-container",
	appendArrows: ".vitrine-custom-arrows",
	prevArrow: "<div class='prev-arrow'><img src='./img/next-icon-prev.svg'></div>",
	nextArrow: "<div class='next-arrow'><img src='./img/next-icon-next.svg'></div>",
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.vitrine-cards .col-2').removeClass("d-none")

$('.tipbar-cards, .parcerias-cards').slick({
	responsive: [
		{
			breakpoint: 5000,
			settings: "unslick"
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 0,
				speed: 6000,
				dots: false,
				infinite: true,
				arrows: false,
				cssEase: 'linear'
			}
		}
	]
});

$('.tipbar-cards .col-2, .parcerias-cards .col-2').removeClass("d-none");