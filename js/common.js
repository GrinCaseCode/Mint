$(document).ready(function() {


$(".dropdown-header__close").click(function() {
	$(".dropdown-header").fadeOut(200);
});

$(".btn-header_user").click(function(e) {
	e.preventDefault();
	$(".dropdown-header_user").fadeToggle(200);
});
$(".btn-header_basket").click(function(e) {
	e.preventDefault();
	$(".dropdown-header_basket").fadeToggle(200);
});

$(document).mouseup(function (e) {
  var container = $(".btn-header_user").parent(".btn-header-wrap");
  if (container.has(e.target).length === 0){
      $(".dropdown-header_user").fadeOut(200);
  }
});

$(document).mouseup(function (e) {
  var container2 = $(".btn-header_basket").parent(".btn-header-wrap");
  if (container2.has(e.target).length === 0){
      $(".dropdown-header_basket").fadeOut(200);
  }
});


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

$('.item-input input').each(function() {
	$(this).on('keyup blur', function (e) {
		if($(this).val()){
			$(this).addClass("input-valid");
			$(this).removeClass("input-invalid");
		}
		else {
			$(this).removeClass("input-valid");
		}
	});
});

$(".sidebar-open").click(function() {
	$(".sidebar-catalog").slideToggle(200);
});

$(".arrow-history").click(function() {
	$(this).parent().parent().parent().toggleClass("active");
	$(this).parent().parent().parent().siblings(".order-history__content").slideToggle(200);
});

$('.show-password').click(function(){
	var type = $(this).siblings("input").attr('type') == "text" ? "password" : 'text';
	$(this).siblings("input").prop('type', type);
});


$(".item-sidebar__title").click(function() {
	$(this).parent().toggleClass("active");
	$(this).siblings(".item-sidebar__content").slideToggle(200);
});

$(".tab-pane__title").click(function() {
	$(this).parent().siblings().find(".tab-pane__title").removeClass("active");
	$(this).parent().siblings().find(".tab-pane__content").slideUp(200);
	$(this).toggleClass("active");
	$(this).siblings(".tab-pane__content").slideToggle(200);
});

jQuery('.quantity').each(function() {
	var spinner = jQuery(this),
	input = spinner.find('input[type="number"]'),
	btnUp = spinner.find('.quantity-up'),
	btnDown = spinner.find('.quantity-down'),
	min = input.attr('min'),
	max = input.attr('max');

	btnUp.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue >= max) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue + 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
	});

	btnDown.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue <= min) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue - 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
	});

});


$("#quick-modal .btn-main").click(function(e) {
	e.preventDefault();
	$.fancybox.open('#succeed-order');
});


$(".table-order_basket .remove-tr").click(function(e) {
	e.preventDefault();
	$(this).parent().parent().append("<td class='td-return' colspan='6'><a href='#' class='link-page'>вернуть</a></td>");
	$(this).parent().parent().find("td:not(.td-return)").remove();
});


 $('.types-delivery input[type="radio"]').click(function(){
            if($(this).attr("value")=="radio_own"){
                $(".tab-delivery-del").hide();
                $(".tab-delivery-own").fadeIn(200);
            }
            if($(this).attr("value")=="radio_del"){
                $(".tab-delivery-own").hide();
                $(".tab-delivery-del").fadeIn(200);
            }
        });


	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".search-overlay").fadeOut(200);
		$(".search-modal").fadeOut(200);
		$(".sandwich").toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		
	});

	$(".menu-mobile li.menu__haschild > a").click(function() {
		$(this).toggleClass("active");
		$(this).siblings(".menu-dropdown").slideToggle(200);
	});

	$(".btn-like, .btn-main_like").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});

	$(".btn-main_like").click(function(e) {
		e.preventDefault();
		if ($(this).hasClass("active")) {
			$(this).find("span").html("добавлено");
		} else {
			$(this).find("span").html(" В избранное");
		}
	});

	$(".btn-main_basket").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		if ($(this).hasClass("active")) {
			$(this).find("span").html("добавлено");
		} else {
			$(this).find("span").html("В КОРЗИНУ");
		}
	});

	$(".btn-search").click(function(e) {
		e.preventDefault();
			$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
		if ($(".search-modal").is(":visible")) {
			$(".search-overlay").fadeOut(200);
		$(".search-modal").fadeOut(200);
		} else {
			$(".search-overlay").fadeIn(200);
		$(".search-modal").fadeIn(200);
		}
		
	});
	$(".clear-search").click(function(e) {
		e.preventDefault();
		$(".search-top .item-input input").val('');
	});
	$(".close-search").click(function(e) {
		e.preventDefault();
		$(".search-overlay").fadeOut(200);
		$(".search-modal").fadeOut(200);
	});

	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'dHMS'});

	//слайдер

	$('.slider-billbord').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 41L2 21.5L22 1" stroke="white" stroke-width="2"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 41L21 21.5L1 1" stroke="white" stroke-width="2"/></svg><div/>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
			}
		}
		]
	});

	$('.row_slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 41L2 21.5L22 1" stroke="white" stroke-width="2"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 41L21 21.5L1 1" stroke="white" stroke-width="2"/></svg><div/>',
		mobileFirst: true,
		responsive: [
		{
			breakpoint: 768,
			settings: 'unslick'
		}
		]
	});


	$('.row_slider-page').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 41L2 21.5L22 1" stroke="white" stroke-width="2"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 41L21 21.5L1 1" stroke="white" stroke-width="2"/></svg><div/>',
		mobileFirst: true,
		responsive: [
		
		{
			breakpoint: 992,
			settings: 'unslick',
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3
			}
		}
		]
	});

	$('.slider-for').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 41L2 21.5L22 1" stroke="white" stroke-width="2"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 41L21 21.5L1 1" stroke="white" stroke-width="2"/></svg><div/>',
		responsive: [
		{
			breakpoint: 767,
			settings: {
				dots: false,
			}
		}
		]
	});

	$('.slider-nav').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 6,
		verticalSwiping: true,
		vertical: true,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		touchThreshold: 1000,
		focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 41L2 21.5L22 1" stroke="white" stroke-width="2"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 41L21 21.5L1 1" stroke="white" stroke-width="2"/></svg><div/>',
		
	});

	$('.slider-brands').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 41L2 21.5L22 1" stroke="white" stroke-width="2"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 41L21 21.5L1 1" stroke="white" stroke-width="2"/></svg><div/>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			}
		}
		]
	});

	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});




	$('.tabs-main li a:not(.tabs-main__quit)').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().parent().siblings(".tab-container-main").find(".tab-pane-main").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});




	$('.tab-main-btn').click(function(event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$(".tabs-main li:not(.active)").slideToggle(200);
		$(".tabs-main li").addClass("active_mob");
	});

	if ($(window).width() < 768) {
		$('.tabs-main li a:not(.tabs-main__quit)').click(function() {
			if ($(this).parent().hasClass("active_mob")) {
				$(".tabs-main li:not(.active)").slideUp(200);
				$('.tab-main-btn').removeClass("active");
			} else {	
			}		
		});

	}


	$(window).resize(function () {
		if ($(window).width() < 768) {
			$('.row_slider').slick('refresh');

		}
	})


	$(window).resize(function () {
		if ($(window).width() < 992) {
			$('.row_slider-page').slick('refresh');
		}
	})

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

