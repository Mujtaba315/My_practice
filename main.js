// const { $ } = require("video.js/dist/types/utils/dom");win

// const { hasClass } = require("video.js/dist/types/utils/dom");

var isRTL = ($('html').attr('dir') == "rtl") ? true : false,
  winWidth = $(window).width(),
  winHeight = $(window).height();
    gsap.registerPlugin(ScrollTrigger);
    const match_Media = gsap.matchMedia();

$(function () {
  browserDetect();
});

$(window).on('load', function () {
  setTimeout(function () {
    addVideoPlugin();
  }, 4000);
  if (1 == 2) {
    textAnim();
  }


});

$(window).on('resize orientationchange', function () {
  // Do on resize
  winWidth = $(window).width(),
    winHeight = $(window).height();
  headerLight();
  if ($('.js-initiate-link').length > 0) {
    $('.js-initiate-link.active').click();
  }
  if ($('.js-leadership-tab').length > 0) {
    $('.js-leadership-tab.active').click();
  }
});

$(window).on('scroll', function () {
  //Do on Scroll
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    //Do on ESC press
  }
});

function browserDetect() {
  navigator.sayswho = (function () {
    var ua = navigator.userAgent,
      tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) return tem.slice(1).join('').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
  })();
  $('body').addClass(navigator.sayswho);
}

function addVideoPlugin() {
  if (winWidth > 1024 && $('.js-video').get(0)) {
    var plyrScriptElement = document.createElement("script");
    if (isRTL) {
      plyrScriptElement.setAttribute('src', customVariables.baseURL + '../assets/js/plyr.min.js');
    } else {
      plyrScriptElement.setAttribute('src', customVariables.baseURL + 'assets/js/plyr.min.js');
    }
    plyrScriptElement.setAttribute('async', 'true');
    document.body.appendChild(plyrScriptElement);
  } else {
    jsVideoDirect();
  }
}


// CTA countdown
let timeLeft = 60; // Set initial countdown time in seconds (e.g., 1 minute)

function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    if (!countdownElement) {
      return;
    }

    // console.log('Countdown element found:', countdownElement);

    const interval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        const formattedTime = `Resend in ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        countdownElement.textContent = formattedTime;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(interval);
            countdownElement.textContent = 'Resent';
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
   
    startCountdown();
});

var players = [];

function jsVideo() {
  // Custom player
  if ($('.js-video').length) {
    $('.js-video').each(function (i) {
      var thisParent = $(this).parent();
      players[i] = new Plyr(this, {
        playsinline: true,
      });
      thisParent.find('.plyr').attr('data-video-instance', i);
    });
  }
}

function jsVideoDirect() {
  if ($('.js-video').length) {
    $('.js-video').each(function (i) {
      $(this).attr('data-video-instance', i);
      var videoId = $(this).attr('data-plyr-embed-id');
      $(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoId + '?rel=0&playsinline=1&enablejsapi=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    });
  }
}

// Alila section onclick 
$('.toggle').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
});
function initIsotopes() {
  var qsRegex;
  var buttonFilter;
  var itemsPerPage = 8;
  var currentPage = 1;

  var $grid = $(".gridWrapper").isotope({
    itemSelector: ".element-item",
    originLeft: isRTL ? false : true, // for rtl
    layoutMode: "fitRows",
    filter: function () {
      var $this = $(this);
      var searchMatch = qsRegex ? $this.text().match(qsRegex) : true;
      var buttonMatch = buttonFilter ? $this.is(buttonFilter) : true;
      var pageIndex = $this.index();
      var itemStart = (currentPage - 1) * itemsPerPage;
      var itemEnd = currentPage * itemsPerPage;
      return searchMatch && buttonMatch && pageIndex >= itemStart && pageIndex < itemEnd;
    },
  });

  function updatePagination() {
    var itemCount = qsRegex || buttonFilter
      ? $grid.find(".element-item").filter(function () {
        var $this = $(this);
        var searchMatch = qsRegex ? $this.text().match(qsRegex) : true;
        var buttonMatch = buttonFilter ? $this.is(buttonFilter) : true;
        return searchMatch && buttonMatch;
      }).length
      : $grid.find(".element-item").length;

    var pageCount = Math.ceil(itemCount / itemsPerPage);
    $(".pagination-box11").empty();

    for (var i = 1; i <= pageCount; i++) {
      var $button = "";
      if (pageCount > 1) {
        var btnCSS = "page-num body1";
        if (currentPage == i) {
          btnCSS = "page-num body1 active";
        }
        $button = $("<li class=" + btnCSS + ">" + i + "</li>");
        $button.on("click", function () {
          currentPage = $(this).text();
          $grid.isotope();
        });
        $(".pagination-box11").append($button);
      }
    }
  }

  $(".txt-search").on("input", function () {
    var searchText = $(this).val();
    qsRegex = new RegExp(searchText, "gi");
    currentPage = 1;
    updatePagination();
    $grid.isotope();
  });

  $('.button-group').on('click', 'button', function () {
    buttonFilter = $(this).attr('data-filter');
    currentPage = 1; // Reset to the first page whenever a button filter is applied
    updatePagination();
    $grid.isotope();
  });

  updatePagination();
  $grid.isotope();
}
function initiativeCarousel() {
  var $slider = $('.js-initiative-slider1');
  var $paginationLabel = $('.custom-pagination-label');

  $slider.on('init', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.text((slick.currentSlide + 1) + '/' + totalSlides);
  });
  $slider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  })
    .on("setPosition", function (event, slick) {
      slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
      //ChangeToSvg();
    });

  // Enable custom arrows
  $($slider).parent().find('.custom-arrows.prev').click(function () {
    $slider.slick('slickPrev');
  });

  $($slider).parent().find('.custom-arrows.next').click(function () {
    $slider.slick('slickNext');
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.text((nextSlide + 1) + '/' + totalSlides);
  });
}

//slider class is not in html 
function initiativeCarouselResearch() {
  var $slider = $('.js-initiative-slider-research');
  if (!handleNoSlider($slider, 1)) return;
  var $paginationLabel = $('.custom-pagination-label');

  $slider.on('init', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.text((slick.currentSlide + 1) + '/' + totalSlides);
  });
  $slider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  })
    .on("setPosition", function (event, slick) {
      slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
      //ChangeToSvg();
    });

  $slider.parent().find('.custom-arrows.prev').click(function () {
    $slider.slick('slickPrev');
  });

  $slider.parent().find('.custom-arrows.next').click(function () {
    $slider.slick('slickNext');
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.text((nextSlide + 1) + '/' + totalSlides);
  });
}


function imageCarousel($slider) {
  if (!handleNoSlider($slider, 1)) return;
  var $paginationLabel = $slider.closest('.sec-royal-commission').find('.js-royal-commission-pagination-label');
  var $prevArrow = $slider.closest('.sec-royal-commission').find('.js-royal-commission-arrow .custom-arrows.prev');
  var $nextArrow = $slider.closest('.sec-royal-commission').find('.js-royal-commission-arrow .custom-arrows.next');

  $slider.on('init', function (event, slick) {
    var totalSlides = slick.slideCount;
    var currentSlideNumber = (slick.currentSlide + 1).toString().padStart(2, '0');
    var totalSlidesNumber = totalSlides.toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + currentSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlidesNumber + '</span>');
    // toggleArrowVisibility(slick.currentSlide, totalSlides, $prevArrow, $nextArrow);
    $slider.addClass('animationClass');
  });

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    rtl: isRTL,
    asNavFor: '.js-royal-commission-nav',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  }).on("setPosition", function (event, slick) {
    slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
    //ChangeToSvg();
  });

  // Enable custom arrows
  $prevArrow.click(function () {
    if (isRTL) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });

  $nextArrow.click(function () {
    if (isRTL) {
      $slider.slick('slickPrev');
    } else {
      $slider.slick('slickNext');
    }
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
    var totalSlidesNumber = totalSlides.toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlidesNumber + '</span>');
    // toggleArrowVisibility(nextSlide, totalSlides, $prevArrow, $nextArrow);
    $slider.removeClass('animationClass');
  });

  $slider.on('afterChange', function (event, slick, currentSlide) {
    $slider.addClass('animationClass');
  });


}

function imageCarousel2($slider1) {
  if (!handleNoSlider($slider1, 1)) return;

  $slider1.on('init', function (event, slick) {
    $slider1.find('.slick-slide').removeClass('prevSlide');
    $slider1.find('.slick-active').prev().addClass('prevSlide');
  });

  $slider1.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-royal-commission-main',
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  });

  // Update prevSlide class on beforeChange event
  $slider1.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $slider1.find('.slick-active').prev().addClass('prevSlide');
  });

  // Remove prevSlide class on afterChange event
  $slider1.on('afterChange', function (event, slick, currentSlide) {
    $slider1.find('.slick-slide').removeClass('prevSlide');
  });

}

function isElementInViewport(elem) {
  var $elem = $(elem);
  var docViewTop = $(window).scrollTop() - 20;
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  return elemBottom >= docViewTop && elemTop <= docViewBottom;
}

function headerLight() {
  if ($('.header-light').length > 0) {
    var headerHeight = $('.header').innerHeight();
    // console.log(headerHeight);
    $('.page--wrapper').css("padding-top", headerHeight);
  } else {
    $('.page--wrapper').css("padding-top", headerHeight);
  }
}

$(document).ready(function () {
  // animateWords();
  downloadBtnFormValidation()
  footerNewsletterValidation();
  headerLight();
  if ($(".gridWrapper").length > 0) {
    initIsotopes();
  }
  accordionhoverState();
  bannerSlider();
  onMouseHover();
  if ($(".header").length > 0) {
    showandHideMobileMenu();
  }
  possibilitiesTabs();
  addClassOnUl();
  discoverSlider();
  showMobileMenuDropdown();
  showReportDownloadDiv();
  headerStickyFunctionality();
  dataTrim();
  headerStickyFunctionality();
  scrollTop();
  megaMenuFunction();
  ChangeToSvg();
  natureContentSlider();
  natureBgSlider();
  formValidation();
  maxSectorsSelection();
  fileUploadfunctionality();
  // startCountdown();
  $('.sec-faq-search').each(function () {
    initializeSearchFunctionality($(this));
  });
  const textareas = document.querySelectorAll('textarea[id="message"]');
  const counters = document.querySelectorAll('span.counter');
  textareas.forEach((textarea, index) => {
    updateTextareaCounter(textarea, counters[index]);
  });
  if ($('.map-tabs').length > 0) {
    $('.map-tabs .sec-wrapper .btn-wrapper .tab-button:first-child').addClass("active");
  }

  // headerLight();
  if ($('.horizontal-scroll').length > 0) {
    horizontalScrollDisAlula();
  }

  if ($('.js-modal').length > 0) {
    mapModal();
  }
  paginationNum();
  filterDrawer();
  toggleView();
  smoothScrolling();
  textCharacterTrancut();
  initializeMediaCardsGridView();
  initializeMediaCardsListView();
  handleMobileView();
  audioPlayer();
  filterCounter();
  dropDownIconMove();
  initializeMediaAnnualPdf();
  navActiveToggle();
  eSrvicesSearch();
  ResultSearchFunctionality();
  headerSearchDrawer();
  setupLoadMoreFunctionality();
  textTrancut();
  classToggle();
  setupSearchDrawer();
  cookieBanner();
  
  $('.js-form-button').click(function () {
    $(".js-form-content").removeClass('tab-active');
    $(".js-form-content[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
    $(".js-form-button").removeClass('active');
    $(".js-form-button[data-id='" + $(this).attr('data-id') + "']").addClass("active");
  });

  if ($('#quoteTextValue').length > 0) {
    jttBannerAnim();
  }

  $(document).mouseleave(function () {
    $('body').removeClass('menuOpen');
    $('.menu-link').removeClass('active');
  });

  $(".mega-menu").css("top", $(".header").innerHeight());


  if ($(".js-filter-slider").length > 0) {
    $('.sec-media-resources').each((i, elem) => {
      const $filterSlider = $(elem).find('.js-filter-slider');
      filterSlider($filterSlider, $(elem));
    });
  }

  initializeFirstSlider();

  $('.js-initiate-link').on('shown.bs.tab', function (e) {
    var targetSliderClass = $(e.target).data('slider');
    if ($(targetSliderClass).hasClass('slick-initialized')) {
      $(targetSliderClass).slick('setPosition');
    } else {
      loadInitiativeCarousel($(targetSliderClass));
    }
  });

  if ($(".js-masterplan-slider").length > 0) {
    $('.sec-masterplan').each((i, elem) => {
      const $masterplanCarousel = $(elem).find('.js-masterplan-slider');
      masterplanCarousel($masterplanCarousel, $(elem));
    });
  }

  if ($(".js-sec-images-slider").length > 0) {
    $('.image-slider').each((i, elem) => {
      const $PdfImagesSlider = $(elem).find('.js-sec-images-slider');
      PdfImagesSlider($PdfImagesSlider, $(elem));
    });
  }

  if ($(".js-sec-press-release-post").length > 0) {
    $('.sec-press-release').each((i, elem) => {
      const $initializeSlider = $(elem).find('.js-sec-press-release-post');
      initializeSlider($initializeSlider, '.js-press-release-pagination-label', '.js-press-release-arrows .custom-arrows.prev', '.js-press-release-arrows .custom-arrows.next');
    });
  }

  if ($(".js-nav-slider-items").length > 0) {
    $('.e-services-listing').each((i, elem) => {
      const $navPillSlider = $(elem).find('.js-nav-slider-items');
      navPillSlider($navPillSlider);
    });
  }
  if ($(".js-sec-news-and-press").length > 0) {
    $('.sec-press-release').each((i, elem) => {
      const $newsPressSlider = $(elem).find('.js-sec-news-and-press');
      newsPressSlider($newsPressSlider);
    });
  }
  if ($(".js-e-services").length > 0) {
    $('.sec-e-services').each((i, elem) => {
      const $eServicesSlider = $(elem).find('.js-e-services');
      eServicesSlider($eServicesSlider);
    });
  }
  if ($(".js-portolioSlider").length > 0) {
    $('.portfolio-detail-sec').each((i, elem) => {
      const $portfolioSlider = $(elem).find('.js-portolioSlider');
      portfolioSlider($portfolioSlider);
    });
  }
  if ($(".js-royal-commission-main").length > 0) {
    $('.sec-royal-commission').each((i, elem) => {
      const $imageCarousel = $(elem).find('.js-royal-commission-main');
      imageCarousel($imageCarousel);
    });
  }
  if ($(".js-royal-commission-nav").length > 0) {
    $('.sec-royal-commission').each((i, elem) => {
      const $imageCarousel2 = $(elem).find('.js-royal-commission-nav');
      imageCarousel2($imageCarousel2);
    });
  }
  if ($(".js-rankings-slider-1").length > 0) {
    $('.rankings-awards').each((i, elem) => {
      const $rankingsAwardsSlider = $(elem).find('.js-rankings-slider-1');
      rankingsAwardsSlider($rankingsAwardsSlider);
    });
  }

  $('.slider-expand').click(function () {

    if ($(this).hasClass('accordianactive')) {
      $(this).removeClass('accordianactive');
      $('.sec-alula-map').removeClass('height--modify');
      $('.slide-items').slideUp(300);
      $('.slide-detail').fadeOut();
      $('.slider-arrow-pagination').fadeOut();
      $('.js-slide-arrow').css('display', 'none');
      $('.js-map-slider').slick('slickSetOption', {

        draggable: false,

      }, true);
      $('.js-map-slider').slick('slickSetOption', {

      }, true);

    } else {
      $(this).addClass('accordianactive');
      $('.sec-alula-map').addClass('height--modify');
      $('.slide-items').slideDown(300);
      $('.slide-detail').fadeIn();
      $('.js-slide-arrow').css('display', 'block');
      $('.slider-arrow-pagination').fadeIn();
    }
    
  });


  $(document).on('click', '.nextSlideButton', function () {
    var $contentSlider = $(this).closest('.sec-keyproject').find('.js-keyproject-content-slider');
    $contentSlider.slick('slickNext');
  });
  
  if ($('.js-initiate-link').length > 0) {
    $('.js-initiate-link.active').click();
  }
  if ($('.js-leadership-tab').length > 0) {
    $('.js-leadership-tab.active').click();
  }

  // Check if slide 1 exists in the page than load
  if ($(".js-media-slider-1").length > 0) {
    $('.media-slider-box').each((i, elem) => {
      const $mediaSlider = $(elem).find('.js-media-slider-1');
      mediaSlider($mediaSlider);
    });
  }


  if ($(".single-map").find(".js-map-slider-content-1").length > 0) {
    var mapSliderContent = document.querySelector('.js-map-slider-content-1');
    // Check if the parent div exists
    if (mapSliderContent) {
      // Get all child divs with the class map-content-box
      var childDivs = mapSliderContent.querySelectorAll('.map-content-box');
      if (childDivs.length > 1) {
        mapCarousel(".js-map-slider-content-1", true, 0);

      }
      else {
        mapCarousel(".js-map-slider-content-1", false, 0);
      }

    }
  }

  if ($(".js-keyproject-image-slider").length > 0) {
    $('.sec-keyproject').each((i, elem) => {
      const $contentSlider = $(elem).find('.js-keyproject-content-slider');
      const $imageSlider = $(elem).find('.js-keyproject-image-slider');
      keyprojectCarousel($imageSlider, $contentSlider);
    });
  }

  if ($(".js-leadership-content-slider-1").length > 0) {
    $('.sec-leadership-team').each((i, elem) => {
      const $contentSlider = $(elem).find('.js-leadership-content-slider-1');
      const $imageSlider = $(elem).find('.js-leadership-image-slider-1');
      leadershipCarousel($contentSlider, $imageSlider);
    });
  }

  // Function to check if element is in viewport
  setTimeout(function () {
    if ($(window).scrollTop() === 0) {
      $('.header').addClass('header-animate');
    }

    $('.level1').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate');
      }
    });
    $('.level2').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate2');
      }
    });
    $('.level3').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate3');
      }
    });
    $('.level4').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate4');
      }
    });
    $('.level5').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate5');
      }
    });
    $('.level6').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate6');
      }
    });
    $('.level7').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate7');
      }
    });
    $('.level8').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate8');
      }
    });
    $('.level9').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate9');
      }
    });
    $('.level10').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate10');
      }
    });
    $('.level11').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate11');
      }
    });
    $('.level12').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate12');
      }
    });
    $('.level13').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate13');
      }
    });
    $('.level14').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate14');
      }
    });
    $('.level15').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate15');
      }
    });
  }, 1000);


  // Add class when element is in viewport
  $(window).scroll(function () {
    $('.level1').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate');
      }
    });

    $('.level2').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate2');
      }
    });

    $('.level3').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate3');
      }
    });

    $('.level4').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate4');
      }
    });
    $('.level5').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate5');
      }
    });
    $('.level6').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate6');
      }
    });
    $('.level7').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate7');
      }
    });
    $('.level8').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate8');
      }
    });
    $('.level9').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate9');
      }
    });
    $('.level10').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate10');
      }
    });
    $('.level11').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('sec-animate11');
      }
    });

    $('.header').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('header-animate');
      }
    });

  });

  $('.img-grid').mouseenter(function () {
    $(this).addClass('expand');
    $('.img-grid').not(this).addClass('contract');
  });

  $('.img-grid').mouseleave(function () {
    $(this).removeClass('expand');
    $('.img-grid').not(this).removeClass('contract');
  });

  $(document).keydown(function (event) {
    if (event.key === "Escape") {
      $(".side-popup").animate({ right: '-900px' }, 300);
      $("body").removeClass("popup-open");
      $(".overlay").remove();
    }
  });

  if ($('.card-box').length > 0) {
    $('.card-box').parent().addClass('hover0');
    $('.card-box').first().addClass('active');
  }

  // calling open close view and downcard dropdown function
  openCloseVAndDDropdown();

  // calling cards isotopes function
  cardsIsotopes();

  // calling cards-btn slick slider
  cardSlickSlider();

  // calling handleViewBtnClick 
  // handleViewBtnClick();

  // calling cards sidebar 
  cardsSidebar();

  // Calling handling Filter Btn Click 
  handlingFilterBtnClick ();
});

function intlTelInputInit() {
  const input = document.querySelectorAll(".phone-number-input");
  if (input && input.length > 0) {
    input.forEach((input) => {
      var iti = window.intlTelInput(input, {
        separateDialCode: true,
        initialCountry: "sa",
      });
      window.iti = iti;
    });
  }
}


// flatpickr

$(".datePicker").flatpickr({
  dateFormat: "d-m-Y" ,
});


function jttBannerAnim() {
  const $bg_img = $('.js-anim-bg-img');
  const $bg_img_backdrop = $('.js-anim-bg-backdrop');
  const $bg_img_arch_guy = $('.js-anim-arch-guy-img');
  const $bg_img_leaves = $('.js-anim-leaves-img');
  const $bg_img_light_arc = $('.js-anim-light-arch-img');
  const $textPara = $(".js-anim-para");
  var animationMediaQuery = `(min-width: 991px)`;
  match_Media.add(animationMediaQuery, () => {

    const tl = new TimelineMax({
      paused: true,
    });
    tl.to($bg_img, {
      translateY: '-50vh',
      duration: 2,
      delay: 2
    }).to($bg_img_backdrop, {
      opacity: 0,
      duration: 2,
    }, '<').to($bg_img_arch_guy, {
      translateY: '0',
      duration: 2,
    }, `-=1`).to($bg_img_leaves, {
      translateY: '0',
      duration: 2,
    }, `-=1.7`).to($bg_img_light_arc, {
      scale: 1,
      duration: 1,
      onComplete: () => {
        // Text animation after bg_img_light_arc animation

        if ($("#quoteTextValue").length > 0) {
          animateWords();
        }

      }
    }).to(
      $textPara,
      {
        duration: 1,
        delay: 2,
        // duration: () => Math.random() * maxDuration + minDuration,
        // delay: () => Math.random() * maxDelay,
        ease: "power2.inOut",
        opacity: 1,
        filter: "blur(0px)"
      }, `-=1`).to($bg_img_light_arc, {
        rotateZ: 25,
        duration: 1.5,

      }).to($bg_img_light_arc, {
        rotateZ: -70,
        left: '14.8%',
        duration: 1.9,
        delay: 1,

      })
    document.body.classList.add("loaded");
    tl.play();

    return () => {
      gsap.set([$bg_img, $bg_img_backdrop, $bg_img_arch_guy, $bg_img_leaves, $bg_img_light_arc, $textPara], {
        clearProps: "all",
      });
    };
  });
}


// Function to animate the words
function animateWords() {
  const quoteTxt = document.getElementById("quoteTextValue").textContent.trim();
  // const quoteTxt = document.getElementById("quoteText").getAttribute("data-quote").trim();

  // Split the text into words
  const quoteWords = quoteTxt.split(" ");

  // Get the container element
  const quoteTextContainer = document.getElementById("quoteText");
  const minDuration = 0.5;
  const maxDuration = 0.5;
  const maxDelay = 0;

  const tl = gsap.timeline({ delay: 1, defaults: { ease: "power1.out" } });

  // Animate quote icon into view
  // tl.fromTo(".quote__icon", { opacity: 0 }, { opacity: 0.3, duration: 0.5 });

  // Animate each word
  quoteWords.forEach((word, index) => {
    const space = index === quoteWords.length - 1 ? "" : " ";
    const wordElement = document.createElement("span");
    wordElement.className = `quote-word word-${index}`;
    wordElement.textContent = word + space;
    quoteTextContainer.appendChild(wordElement);

    tl.fromTo(
      wordElement,
      {
        opacity: 0,
        filter: "blur(80px)"
      },
      {
        duration: () => Math.random() * maxDuration + minDuration,
        delay: () => Math.random() * maxDelay,
        ease: "power2.inOut",
        opacity: 1,
        filter: "blur(0px)",
      },
      "-=0.5"
    );
  });
}

// function handleNoSlider
function handleNoSlider($slider, slidesToShow) {

  var totalSlides = $slider?.children().length;

  // if (totalSlides <= slidesToShow) {
  //   $slider.addClass('noSlider');
  //   $slider.parent().find(".arrow-wrap").addClass('noSlider--pagination');
  // } else {
  //   $slider.removeClass('noSlider');
  //   $slider.parent().find(".arrow-wrap").removeClass('noSlider--pagination');
  //   return true; // slider should be initialized
  // }
  if (totalSlides <= slidesToShow) {
    $slider.addClass('noSlider');

    var $arrowWrap = $slider.parent().find(".arrow-wrap");
    if ($arrowWrap.length) {
      $arrowWrap.addClass('noSlider--pagination');
    } else {
      $arrowWrap = $slider.parent().parent().find(".arrow-wrap");
      if ($arrowWrap.length) {
        $arrowWrap.addClass('noSlider--pagination');
      }
    }

    var $secPostContentInfo = $slider.parent().find(".sec-post-content-info");
    if ($secPostContentInfo.length) {
      $secPostContentInfo.css('transform', 'none');
    }

  } else {
    $slider.removeClass('noSlider');

    var $arrowWrap = $slider.parent().find(".arrow-wrap");
    if ($arrowWrap.length) {
      $arrowWrap.removeClass('noSlider--pagination');
    } else {
      $arrowWrap = $slider.parent().parent().find(".arrow-wrap");
      if ($arrowWrap.length) {
        $arrowWrap.removeClass('noSlider--pagination');
      }
    }

    return true; // slider should be initialized
  }
  return false; // slider should not be initialized
}

function leadershipCarousel(contentSlider, imageSlider) {
  var $contentSlider = $(contentSlider);
  var $imageSlider = $(imageSlider);

  if (!handleNoSlider($contentSlider, 1) && !handleNoSlider($imageSlider, 1)) {
    return;
  }

  // Initialize the content slider
  $contentSlider.on('init', function (event, slick) {
    let $paginationLabel1 = $(this).parent().find('.js-leadership-content-slider-pagination-label');
    updatePaginationLabel(1, slick.slideCount, $paginationLabel1);
    toggleArrowVisibility(slick.currentSlide, slick.slideCount, $contentSlider);
  });

  $contentSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    rtl: isRTL,
    asNavFor: imageSlider,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  })
    .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      let $paginationLabel1 = $(this).parent().find('.js-leadership-content-slider-pagination-label');
      updatePaginationLabel(nextSlide + 1, slick.slideCount, $paginationLabel1);
    });

  $imageSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    dots: false,
    infinite: false,
    rtl: isRTL,
    asNavFor: contentSlider,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ],
    customPaging: function (slider, i) {
      // return '<div class="custom-pagination-dot"></div>';
    }
  })
    .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      toggleArrowVisibility(nextSlide, slick.slideCount, $imageSlider);
    });

  $imageSlider.on('init', function (event, slick) {
    toggleArrowVisibility(slick.currentSlide, slick.slideCount, $imageSlider);
  });

  $imageSlider.parent().find('.custom-arrows.prev').click(function () {
    if (isRTL) {
      $imageSlider.slick('slickNext');
    } else {
      $imageSlider.slick('slickPrev');
    }

  });

  $imageSlider.parent().find('.custom-arrows.next').click(function () {
    if (isRTL) {
      $imageSlider.slick('slickPrev');
    } else {
      $imageSlider.slick('slickNext');
    }
  });

  function updatePaginationLabel(current, total, $label) {
    $label.text(current + '/' + total);
  }

}

function keyprojectCarousel(contentSlider, imageSlider) {
  // Content Slider
  var $slider = $(contentSlider);
  if (!handleNoSlider($slider, 1)) return;

  var $paginationLabel = $(contentSlider).parent().find('.js-keyproject-image-slide-pagination-label');

  $slider.on('init', function (event, slick) {
    var totalSlides = slick.slideCount;
    $paginationLabel.text(1 + '/' + totalSlides);
    toggleArrowVisibility(slick.currentSlide, slick.slideCount, $slider);
  });

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    fade: true,
    rtl: isRTL,
    asNavFor: imageSlider,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  })
    .on("setPosition", function (event, slick) {
      slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
      //ChangeToSvg();
    });

  // Enable custom arrows
  $(contentSlider).parent().find('.js-keyproject-image-slide-arrow.prev').click(function () {
    if (isRTL) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });

  $(contentSlider).parent().find('.js-keyproject-image-slide-arrow.next').click(function () {
    if (isRTL) {
      $slider.slick('slickPrev');
    } else {
      $slider.slick('slickNext');
    }
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.text((nextSlide + 1) + '/' + totalSlides);
    toggleArrowVisibility(nextSlide, slick.slideCount, $slider);
  });

  var $slider1 = $(imageSlider);

  $slider1.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    dots: false,
    rtl: isRTL,
    // adaptiveHeight: true,
    asNavFor: contentSlider,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ],
  })

}

function mapCarousel(imageSlider, sliderBool, slideNumber) {
  var $slider1 = $(imageSlider);
  var $paginationLabel = $(imageSlider).parent().find('.custom-pagination-label');
  var $arrowDiv = $(imageSlider).parent().find('.js-slide-arrow');
  var totalSlides = $(imageSlider).find(".map-content-box").length;
  $(".slick-initialized").slick("refresh");
  // Set pagination label text
  $paginationLabel.text(1 + '/' + totalSlides);

  // Initialize Slick slider only if there are two or more slides
  if (totalSlides > 1 && !($(imageSlider).hasClass('slick-initialized'))) {

    $slider1.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      dots: false,
      rtl: isRTL,
      draggable: true,
      adaptiveHeight: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ],
    });

    $slider1.slick('slickGoTo', slideNumber);

    // Enable custom arrows
    $(imageSlider).parent().find('.custom-arrows.prev').click(function () {
      // $slider1.slick('slickPrev');
      if (isRTL) {
        $slider1.slick('slickNext');
      } else {
        $slider1.slick('slickPrev');
      }
    });

    $(imageSlider).parent().find('.custom-arrows.next').click(function () {
      // $slider1.slick('slickNext');
      if (isRTL) {
        $slider1.slick('slickPrev');
      } else {
        $slider1.slick('slickNext');
      }
    });

  }
  if (totalSlides > 1 && jQuery('.slider-expand').hasClass('.accordianactive')) {
    $(imageSlider).parent().find('.js-slide-arrow').css('display', 'block');
    $(imageSlider).parent().find('.slider-arrow-pagination').css('display', 'block');
  }else {
    $arrowDiv.hide();
    $(imageSlider).parent().find('.js-slide-arrow').css('display', 'none');
    $(imageSlider).parent().find('.slider-arrow-pagination').css('display', 'none');
  }

}

$('.js-initiate-link').click(function () {
  var currentSlider = $(this).attr('data-slider');
  var sliderExists = $(currentSlider + '.slick-initialized').length;

  if (sliderExists == 0) {
    setTimeout(function () {
      loadInitiativeCarousel(currentSlider);
    }, 160);
  }
});

$('.js-nav-action-media').click(function () {
  var currentSlider = $(this).attr('data-slider');
  var sliderExists = $(currentSlider + '.slick-initialized').length;

  if (sliderExists == 0) {
    setTimeout(function () {
      mediaSlider(currentSlider);
    }, 160);
  }

});

$('.js-leadership-tab').click(function () {
  var contentSlider = $(this).attr('data-content-slider');
  var imageSlider = $(this).attr('data-image-slider');
  var sliderExists = $(contentSlider + '.slick-initialized').length;

  if (sliderExists == 0) {
    setTimeout(function () {
      leadershipCarousel(contentSlider, imageSlider);
    }, 160);
  }

});

function initializeFirstSlider() {
  if ($(".js-initiative-slider-1").length > 0) {
    const $loadInitiativeCarousel1 = $('.js-initiative-slider-1');
    if ($loadInitiativeCarousel1.length > 0) {
      loadInitiativeCarousel($loadInitiativeCarousel1);
    }
  }
}

function loadInitiativeCarousel($slider) {
  // if (!handleNoSlider($slider, 1)) return;
  let totalSlidesGlobal
  let slidesToShow = 1
  $slider = $($slider);
  if (!$slider.length) {
    console.error("Slider element not found");
    return;
  }
  $slider.on('init', function (event, slick) {
    var totalSlides = slick.slideCount;
    totalSlidesGlobal = totalSlides;
    if (totalSlides > 0) {
      var currentSlideNumber = (slick.currentSlide + 1).toString().padStart(2, '0');
      var $paginationLabel = $slider.closest('.tab-pane').find('.js-initiative-pagination-label');

      if ($paginationLabel.length > 0) {
        $paginationLabel.html('<span class="current-slide">' + currentSlideNumber + '</span><span class="separator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
      }
      toggleArrowVisibility(slick.currentSlide, slick.slideCount, $slider);
      $(slick.$slides.get([2])).addClass('slick-next-slide');
    }
  });

  $slider.slick({
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  })
    .on("setPosition", function (event, slick) {
      slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
    });

  // Enable custom arrows
  $slider.closest('.tab-pane').find('.js-initiative-arrow.prev').click(function () {
    // $slider.slick('slickPrev');
    if (isRTL) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });

  $slider.closest('.tab-pane').find('.js-initiative-arrow.next').click(function () {
    // $slider.slick('slickNext');
    if (isRTL) {
      $slider.slick('slickPrev');
    } else {
      $slider.slick('slickNext');
    }
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
    var $paginationLabel = $slider.closest('.tab-pane').find('.js-initiative-pagination-label');

    $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="separator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    toggleArrowVisibility(nextSlide, slick.slideCount, $slider);
  });

  $slider.on('afterChange', function (event, slick, currentSlide) {
    var totalSlides = slick.slideCount;
    $slider.find(".slick-slide").removeClass('slick-next-slide');
    $slider.find(".slick-active").next().addClass('slick-next-slide');

    if (totalSlides == (currentSlide + 1)) {
      $(slick.$slides.get([0])).addClass('slick-next-slide');
    }
  });

  if (totalSlidesGlobal <= slidesToShow) {
    // $slider.addClass('noSlider');

    var $arrowWrap = $slider.parent().find(".arrow-wrap");
    if ($arrowWrap.length) {
      $arrowWrap.addClass('noSlider--pagination');
    } else {
      $arrowWrap = $slider.parent().parent().find(".arrow-wrap");
      if ($arrowWrap.length) {
        $arrowWrap.addClass('noSlider--pagination');
      }
    }

  } else {
    // $slider.removeClass('noSlider');

    var $arrowWrap = $slider.parent().find(".arrow-wrap");
    if ($arrowWrap.length) {
      $arrowWrap.removeClass('noSlider--pagination');
    } else {
      $arrowWrap = $slider.parent().parent().find(".arrow-wrap");
      if ($arrowWrap.length) {
        $arrowWrap.removeClass('noSlider--pagination');
      }
    }

    // return true; // slider should be initialized
  }
}


function toggleArrowVisibility(currentSlide, slideCount, $slider) {

  var $prevArrow = $slider.parent().find('.custom-arrows.prev');
  var $nextArrow = $slider.parent().find('.custom-arrows.next');

  if (currentSlide === 0) {
    // $prevArrow.addClass('disabled');
    if (isRTL) {
      $nextArrow.addClass('disabled');
    } else {
      $prevArrow.addClass('disabled');
    }
  } else {
    // $prevArrow.removeClass('disabled');
    if (isRTL) {
      $nextArrow.removeClass('disabled');
    } else {
      $prevArrow.removeClass('disabled');
    }
  }

  if (currentSlide === slideCount - 1) {
    // $nextArrow.addClass('disabled');
    if (isRTL) {
      $prevArrow.addClass('disabled');
    } else {
      $nextArrow.addClass('disabled');
    }
  } else {
    // $nextArrow.removeClass('disabled');
    if (isRTL) {
      $prevArrow.removeClass('disabled');
    } else {
      $nextArrow.removeClass('disabled');
    }
  }
}
// function toggleArrowVisibility(currentSlide, totalSlides, prev_Arrow, next_Arrow) {
// if (currentSlide === 0) {
//   $(prev_Arrow).parent().parent().addClass("hidePrevArrow");
//   $(`${prev_Arrow}`).prop('disabled', true).addClass('disabled');
// } else {
//   $(prev_Arrow).parent().parent().removeClass("hidePrevArrow");
//   $(`${prev_Arrow}`).prop('disabled', false).removeClass('disabled');
// }
// if (currentSlide === totalSlides - 1) {
//   $(prev_Arrow).parent().parent().addClass("hideNextArrow");
//   $(`${next_Arrow}`).prop('disabled', true).addClass('disabled');
// } else {
//   $(prev_Arrow).parent().parent().removeClass("hideNextArrow");
//   $(`${next_Arrow}`).prop('disabled', false).removeClass('disabled');
// }
// }

function initializeSlider(sliderSelector, paginationLabelSelector, prevArrowSelector, nextArrowSelector) {
  try {
    var $slider = $(sliderSelector);
    if (!handleNoSlider($slider, 3)) return;

    var $paginationLabel = $slider.closest('.sec-press-release').find(paginationLabelSelector);
    var $prevArrow = $slider.closest('.sec-press-release').find(prevArrowSelector);
    var $nextArrow = $slider.closest('.sec-press-release').find(nextArrowSelector);

    if (!$slider.length || !$paginationLabel.length || !$prevArrow.length || !$nextArrow.length) {
      console.error('One or more required elements not found.');
      return; // Exit the function if any required elements are missing
    }

    $slider.on('init', function (event, slick) {
      try {
        var totalSlides = slick.slideCount;
        $paginationLabel.html('<span class="current-slide">01</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
        var slidesToShow = slick.options.slidesToShow;
        // toggleArrowVisibility(totalSlides, $prevArrow, $nextArrow);

        // Hide arrows if total slides are less than slidesToShow
        if (totalSlides <= slidesToShow) {
          $prevArrow.hide();
          $nextArrow.hide();
          $paginationLabel.hide();
        } else {
          $prevArrow.show();
          $nextArrow.show();
          $paginationLabel.show();
        }
      } catch (error) {
        console.error('Error in slick init event handler:', error);
      }
    });

    $slider.slick({
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      rtl: isRTL,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ],
      customPaging: function (slider, i) {
        return '<div class="custom-pagination-dot"></div>';
      }
    }).on("setPosition", function (event, slick) {
      slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
      //ChangeToSvg();
    });

    // Enable custom arrows
    $prevArrow.click(function () {
      // $slider.slick('slickPrev');
      if (isRTL) {
        $slider.slick('slickNext');
      } else {
        $slider.slick('slickPrev');
      }
    });

    $nextArrow.click(function () {
      // $slider.slick('slickNext');
      if (isRTL) {
        $slider.slick('slickPrev');
      } else {
        $slider.slick('slickNext');
      }
    });

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      try {
        var totalSlides = slick.slideCount;
        var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
        $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
        // toggleArrowVisibility(totalSlides, $prevArrow, $nextArrow);
      } catch (error) {
        console.error('Error in beforeChange event handler:', error);
      }
    });
  } catch (error) {
    console.error('Error in initializeSlider function:', error);
  }
}

function portfolioSlider(sliderName) {
  var $slider = $(sliderName);
  if (!handleNoSlider($slider, 1)) return;
  var $paginationLabel = $('.js-portolioSlider-pagination-label');

  $slider.on('init', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.html('<span class="current-slide">01</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    // toggleArrowVisibility(slick.currentSlide, totalSlides, '.js-portolioSlider-arrow .custom-arrows.prev', '.js-portolioSlider-arrow .custom-arrows.next');
  });
  $slider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: isRTL,
    fade: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  })
    .on("setPosition", function (event, slick) {
      slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
      //ChangeToSvg();
    });

  // Enable custom arrows
  $('.js-portolioSlider-arrow .custom-arrows.prev').click(function () {
    if (isRTL) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });

  $('.js-portolioSlider-arrow .custom-arrows.next').click(function () {
    if (isRTL) {
      $slider.slick('slickPrev');
    } else {
      $slider.slick('slickNext');
    }
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    // toggleArrowVisibility(nextSlide, totalSlides, '.js-portolioSlider-arrow .custom-arrows.prev', '.js-portolioSlider-arrow .custom-arrows.next');
  });

}


function eServicesSlider(sliderName) {
  var $slider = $(sliderName);
  if (!handleNoSlider($slider, 3)) return;
  var $paginationLabel = $('.js-e-services-pagination-label');

  $slider.on('init', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.html('<span class="current-slide">01</span><span class="seperator"> / </div><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    // toggleArrowVisibility(slick.currentSlide, totalSlides, '.js-e-services-arrow .custom-arrows.prev', '.js-e-services-arrow .custom-arrows.next');
  });
  $slider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: isRTL,
    // nextArrow: '.next_caro',
    // prevArrow: '.previous_caro'
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  })
    .on("setPosition", function (event, slick) {
      slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
    });

  // Enable custom arrows
  $('.js-e-services-arrow .custom-arrows.prev').click(function () {
    if (isRTL) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });

  $('.js-e-services-arrow .custom-arrows.next').click(function () {
    if (isRTL) {
      $slider.slick('slickPrev');
    } else {
      $slider.slick('slickNext');
    }
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    // toggleArrowVisibility(nextSlide, totalSlides, '.js-e-services-arrow .custom-arrows.prev', '.js-e-services-arrow .custom-arrows.next');
  });

}

// home banner servises slider on mobile view start //
function bannerSlider() {
  if ($(window).width() <= 991) {
    // Initialize Slick slider only on mobile screens
    $('.js-mobile-vw-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      rtl: isRTL,
      appendDots: $('.custom-bullets'), // Specify the container for dots
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  } else {
    // If not on mobile screens, destroy the Slick slider if it was previously initialized
    if ($('.js-mobile-vw-slider').hasClass('slick-initialized')) {
      $('.js-mobile-vw-slider').slick('unslick');
    }
  }
}

function onMouseHover() {
  $('.img-grid').mouseenter(function () {
    $(this).addClass('expand');
    $('.img-grid').not(this).addClass('contract');
  });
  $('.img-grid').mouseleave(function () {
    $(this).removeClass('expand');
    $('.img-grid').not(this).removeClass('contract');
  });
}


function possibilitiesTabs() {
  $('.card-box').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.video-bg').addClass('active').siblings().removeClass('active');
  });

  // nature&Wildlifr slide btn click
  $('.slide-btn').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  // Remove active class from siblings when hovering over them
  $('.card-box').hover(function () {
    $(this).siblings().removeClass('active');
  });
}


// Add and show classes Start
function addClassOnUl() {

  function megaMenu1() {
    $('[data-mega-menu-1]').hover(function () {
      $('.mega-col-2 .ul-wrapper').removeClass('showCol');
      $($(this).data('mega-menu-1')).addClass('showCol');
    });

    $('.menu-link').hover(function () {
      $('.ul-wrapper').removeClass('showCol');
    });

    $('.no-subitems').hover(function () {
      $('.ul-wrapper').removeClass('showCol');
    });

    $('.has-subitems-1').hover(function () {
      $('.mega-col-3 .ul-wrapper').removeClass('showCol');
    });

    $('.page--wrapper').hover(function () {
      $('.ul-wrapper').removeClass('showCol');
    });
  }
  megaMenu1();

  function megaMenu2() {
    $('[data-mega-menu-2]').hover(function () {
      $($(this).data('mega-menu-2')).addClass('showCol');
    });

    $('.menu-link').hover(function () {
      $('.ul-wrapper').removeClass('showCol');
    });

    $('.page--wrapper').hover(function () {
      $('.mega-col-2 .ul-wrapper').removeClass('showCol');
    });
  }
  megaMenu2();

  function megaMenu3() {
    $('[data-mega-menu-3]').hover(function () {
      $('.mega-col-2 .ul-wrapper').removeClass('showCol');
      $($(this).data('mega-menu-3')).addClass('showCol');
    });

    $('.menu-link').hover(function () {
      $('.ul-wrapper').removeClass('showCol');
    });

    $('.page--wrapper').hover(function () {
      $('.mega-col-2 .ul-wrapper').removeClass('showCol');
    });
  }
  megaMenu3();

  function megaMenu4() {
    $('[data-mega-menu-4]').hover(function () {
      $('.mega-col-2 .ul-wrapper').removeClass('showCol');
      $($(this).data('mega-menu-4')).addClass('showCol');
    });

    $('.menu-link').hover(function () {
      $('.ul-wrapper').removeClass('showCol');
    });

    $('.page--wrapper').hover(function () {
      $('.mega-col-2 .ul-wrapper').removeClass('showCol');
    });
  }
  megaMenu4();

  $(".header .mbl-menu-wrapper").css("top", $(".header").innerHeight());
}
// Add and show classes End

// Function to Show and Hide Menu on Hamburger Click Start 

function showandHideMobileMenu() {
  const HamburgerBtn = document.querySelector(".mbl-menu-wrapper")
  document.querySelector('.ham-open-close').onclick = function () {
    $(HamburgerBtn).toggleClass('active');
    $('body').toggleClass('active');
  }

  const HamOpenBtn = document.querySelector(".hamburger-mobile")
  const HamCloseBtn = document.querySelector(".hamburger-close")
  document.querySelector('.hamburger-mobile').onclick = function () {
    HamOpenBtn.style.display = "none";
    HamCloseBtn.style.display = "block";
  }

  document.querySelector('.hamburger-close').onclick = function () {
    HamCloseBtn.style.display = "none";
    HamOpenBtn.style.display = "block";
  }
}

// Function to Show and Hode Menu on Hamburger Click End 

// Show and Hide Mobile Dropdown Menu Start
function showMobileMenuDropdown() {
  const subDropdownsLink1 = document.querySelectorAll('.has-mbl-dropdown .has-second');
  const subDropdownsLink2 = document.querySelectorAll('.has-mbl-dropdown .has-third');
  const subDropdownsLink3 = document.querySelectorAll('.has-mbl-dropdown .has-fourth');

  $(subDropdownsLink1).click(function () {
    // Remove class from all dropdowns except the clicked one
    $('.mbl-submenu').not($(this).siblings('.mbl-submenu')).removeClass('show-submenu');
    $(this).siblings('.mbl-submenu').toggleClass('show-submenu');
    $('.menu-dropdown-icon').removeClass('rotate');

  });

  $(subDropdownsLink2).click(function () {
    $(this).siblings('.mbl-submenu').toggleClass('show-submenu');
  });

  $(subDropdownsLink3).click(function () {
    $(this).siblings('.mbl-submenu').toggleClass('show-submenu');
  });

  var body3Elements = document.querySelectorAll('.has-mbl-dropdown .body3');
  body3Elements.forEach(function (element) {
    element.addEventListener('click', function () {
      var dropdownIcon = element.querySelector('.menu-dropdown-icon');
      if (dropdownIcon) {
        dropdownIcon.classList.toggle('rotate');
      }
    });
  });


  var menuItems = document.querySelectorAll('.mbl-menu-wrapper .body3');
  $(menuItems).click(function () {
    $(this).toggleClass('active');
  });
  menuItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      menuItems.forEach(function (item) {
        item.classList.remove('black-text');
        item.classList.add('gray');
      });

      if (item.nextElementSibling && item.nextElementSibling.classList.contains('mbl-submenu')) {
        var dropdownItems = item.nextElementSibling.querySelectorAll('.body3');
        dropdownItems.forEach(function (dropdownItem) {
          dropdownItem.classList.remove('gray');
          dropdownItem.classList.add('black-text');
        });
      }
    });
  });

}

// Show and Hide Mobile Dropdown Menu End

// Show download report on click yearwise start

function showReportDownloadDiv() {
  const reportDivs = document.querySelectorAll('.report');
  const reportDownload = document.querySelector('.report-download');
  const banners = document.querySelectorAll('.banner-img');

  reportDivs.forEach(reportDiv => {
    reportDiv.addEventListener('click', function () {
      reportDownload.prepend(this);
      document.querySelectorAll('.report').forEach(div => {
        $(div).removeClass('active');
      });
      $(this).addClass('active');
      document.querySelectorAll('.download-div').forEach(downloadDiv => {
        $(downloadDiv).removeClass('active');
      });
      $(this).find('.download-div').addClass('active');
    });
  });

  reportDivs.forEach(report => {
    report.addEventListener('click', function () {
      const year = this.classList[1].split('-')[1];
      banners.forEach(banner => {
        banner.classList.remove('active-banner');
      });
      document.querySelector(`.banner-${year}`)?.classList.add('active-banner');
    });
  });

}
// Show download report on click yearwise end 

// Show upload file name as a field label start 

function showUploadFieldName() {
  const fileInput = document.getElementById('file-upload-field');
  const fileUploadWrapper = document.querySelector('.file-upload-wrapper');

  fileInput.addEventListener('change', function () {
    if (this.files.length > 0) {
      const fileName = this.files[0].name;
      fileUploadWrapper.setAttribute('data-text', fileName);
    } else {
      fileUploadWrapper.setAttribute('data-text', 'Upload Resume');
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var containers = document.querySelectorAll('.has-submenu');

  containers.forEach(function (container) {
    container.addEventListener('click', function () {
      // Check if the clicked container already has the 'show' class
      var isAlreadyShown = container.classList.contains('show');

      // Toggle 'show--options' class for the clicked container's UL element
      var ulElement = container.querySelector('.submenu');
      if (ulElement) {
        ulElement.classList.toggle('show--options');
      }

      // Add or remove 'show' class based on current state
      if (isAlreadyShown) {
        container.classList.remove('show');
      } else {
        container.classList.add('show');
      }

      // Remove 'show' class and 'show--options' class from all other containers
      containers.forEach(function (item) {
        if (item !== container) {
          item.classList.remove('show');
          var otherUlElement = item.querySelector('.submenu');
          if (otherUlElement) {
            otherUlElement.classList.remove('show--options');
          }
        }
      });
    });

    // Prevent event propagation when clicking on the submenu
    var submenu = container.querySelector('.submenu');
    if (submenu) {
      submenu.addEventListener('click', function (event) {
        event.stopPropagation();
      });
    }
  });
});





// sec - about - discovering - alula Start
function discoverSlider() {
  if ($(window).width() <= 600) {
    $('.js-ada-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      rtl: isRTL,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,

    });
  }
  else {
    // If not on mobile screens, destroy the Slick slider if it was previously initialized
    if ($('.js-ada-slider').hasClass('slick-initialized')) {
      $('.js-ada-slider').slick('unslick');
    }
  }
}
// sec - about - discovering - alula End

function masterplanCarousel($sliderMasterplan, $container) {
  if (!handleNoSlider($sliderMasterplan, 1)) return;
  var $paginationLabel = $container.find('.custom-pagination-label');

  $sliderMasterplan.on('init', function (event, slick) {
    var totalSlides = slick.slideCount;
    var currentSlideNumber = (slick.currentSlide + 1).toString().padStart(2, '0');
    var totalSlidesNumber = totalSlides.toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + currentSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlidesNumber + '</span>');
    toggleArrowVisibility(slick.currentSlide, slick.slideCount, $sliderMasterplan);
    $(slick.$slides.get([2])).addClass('slick-next-slide');
  });

  $sliderMasterplan.slick({
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        }
      },
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  });

  $container.find('.custom-arrows.prev').click(function () {
    // $sliderMasterplan.slick('slickPrev');
    if (isRTL) {
      $sliderMasterplan.slick('slickNext');
    } else {
      $sliderMasterplan.slick('slickPrev');
    }
  });

  $container.find('.custom-arrows.next').click(function () {
    // $sliderMasterplan.slick('slickNext');
    if (isRTL) {
      $sliderMasterplan.slick('slickPrev');
    } else {
      $sliderMasterplan.slick('slickNext');
    }
  });

  $sliderMasterplan.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
    var totalSlidesNumber = totalSlides.toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlidesNumber + '</span>');
    toggleArrowVisibility(nextSlide, slick.slideCount, $sliderMasterplan);
  });

  $container.find('.js-slider-title').click(function () {
    var slideIndex = $(this).data('slide-index');
    // Remove 'active-slide' class from all buttons within the same container
    $container.find('.js-slider-title').removeClass('active-slide');
    // Add 'active-slide' class to the clicked button
    $(this).addClass('active-slide');
    // Move to the corresponding slide
    $sliderMasterplan.slick('slickGoTo', slideIndex);
  });

  $sliderMasterplan.on('afterChange', function (event, slick, currentSlide) {
    var totalSlides = slick.slideCount;
    $container.find(".slick-slide").removeClass('slick-next-slide');
    $container.find(".slick-active").next().addClass('slick-next-slide');

    if (totalSlides == (currentSlide + 1)) {
      $(slick.$slides.get([0])).addClass('slick-next-slide');
    }
  });
}

function dataTrim() {
  var ellipsis = "...";
  $("[data-trim]").each(function () {
    var text = $(this).html();
    var charLimit = parseInt($(this).attr("data-trim"));
    $(this).html(TrimLength(text, charLimit));
    $(this).addClass("is--trimmed");
  });

  function TrimLength(text, maxLength) {
    text = $.trim(text);
    if (text.length > maxLength) {
      text = text.substring(0, maxLength - ellipsis.length);
      return text.substring(0, text.lastIndexOf(" ")) + ellipsis;
    } else return text;
  }
}


$('.dropdown').on('click', function () {
  if ($('.dropdown-menu').hasClass('current')) {
    $('.dropdown-menu').removeClass('current');
  } else {
    $('.dropdown-menu').addClass('current');
  }
});
$('#dropdown').val('selectedvalue');
$('.dropdown-item').on('click', function () {
  var selectedValue = $(this).text();
  $('.last-item').text(selectedValue);
});


// media gallery slider Start
function mediaSlider(sliderName) {
  var $slider = $(sliderName);
  if (!handleNoSlider($slider, 4)) return;

  var $paginationLabel = $(sliderName).parent().find('.js-media-slider-pagination-label');
  $slider.on('init', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.html('<span class="current-slide">01</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    // toggleArrowVisibility(slick.currentSlide, totalSlides, '.js-media-slider-arrow .custom-arrows.prev', '.js-media-slider-arrow .custom-arrows.next');
  });

  $slider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: isRTL,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  }).on("setPosition", function (event, slick) {
    slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
    //ChangeToSvg();
  });

  // Enable custom arrows
  $(sliderName).parent().find('.js-media-slider-arrow .custom-arrows.prev').click(function () {
    if (isRTL) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });
  $(sliderName).parent().find('.js-media-slider-arrow .custom-arrows.next').click(function () {
    if (isRTL) {
      $slider.slick('slickPrev');
    } else {
      $slider.slick('slickNext');
    }
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    // toggleArrowVisibility(nextSlide, totalSlides, '.js-media-slider-arrow .custom-arrows.prev', '.js-media-slider-arrow .custom-arrows.next');
  });
}

// media gallery slider End

// Header sticky start 
function headerStickyFunctionality() {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      $(header).addClass('header-scrolled');
    } else {
      $(header).removeClass('header-scrolled');
    }
  });

  $(document).ready(function () {
    $('.js-select2').select2();
  });
}
// Header sticky end

function scrollTop() {

  var lastScrollTop = 0;
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $('body').removeClass('menuOpen');
      $('.menu-link').removeClass('active');
      $('.sub-menu .sub-list').removeClass('show--menu');
      $('.sub-menu').removeClass('show');
      $('.sub-menu .sub-menu-link').removeClass('active');
      $('.sub-menu .additional-menu').removeClass('show--menu');
    } else {
      $('body').addClass('scrollTop');
      $('body').removeClass('bodyScrolled');
    }
    if (st === 0) {
      $('body').removeClass('scrollTop');
      $('body').removeClass('bodyScrolled');
    }
    lastScrollTop = st;
  });
}

function megaMenuFunction() {
  if (winWidth > 1201) {
    $('.has-dropdown').click(function () {
      if ($(this).hasClass('active')) {
        // If the clicked element already has 'active' class
        $(this).removeClass('active');
        $('body').removeClass('menuOpen');
      } else {
        // If the clicked element doesn't have 'active' class
        $('.menu-link').removeClass('active'); // Remove 'active' class from all menu-links
        $(this).addClass('active'); // Add 'active' class to the clicked menu-link
        $('.sub-menu').addClass('show');
        $('body').addClass('menuOpen');
        $('.sub-menu .additional-menu').removeClass('show--menu');
        $('.sub-menu .sub-menu-link').removeClass('active');
      }
    });

    $('.main-menu .has-dropdown').on('mouseenter', function () {

      $('.main-menu .menu-link').removeClass('active');
      $(this).addClass('active');
      $('body').addClass('menuOpen');
      $('.mega-menu').addClass('hide');
      var dataSubMenu = $(this).data('sub-menu');

      if (dataSubMenu) {
        $('.mega-menu').each(function (i, sub) {
          if (sub.id === dataSubMenu) {
            $(sub).addClass('show--menu');
          } else {
            $(sub).removeClass('show--menu');
          }
        });
      } else {
        $('.sub-menu .sub-list').each(function (i, sub) {
          $(sub).removeClass('show--menu');
        });
      }

    });

    $('.sub-list-items .sub-menu-link.has--additionalMenu').each(function () {
      $(this).mouseenter(function () {
        $(this).addClass('active');
        $('.additional-menu').addClass('show--menu');
      });
    });
  }


  $('.page--wrapper,.no-dropdown').hover(function () {
    $('body').removeClass('menuOpen');
    $('.menu-link').removeClass('active');
  });

  $('.header').hover(
    function () {
    },
    function () {
      $('body').removeClass('menuOpen');
      $('.menu-link').removeClass('active');
    }
  );

  $('.has-subitems-1').hover(
    function () {
      $(this).addClass('active');
      $(".mega-col-1 li a").css("opacity", 0.6);
      $(this).find('a').css("opacity", 1);
    },
  );
  $('.no-subitems').hover(
    function () {
      $('.has-subitems-1').removeClass('active');
      $(".mega-col-1 li a").css("opacity", 1);
    },
  );
  $('.has-subitems-2').hover(
    function () {
      $(this).addClass('active');
      $(".mega-col-2 li a").css("opacity", 0.6);
      $('.has-subitems-2 a').css("opacity", 1);
    },
  );
  $('.mega-col-1 li:not(:first-child),.mega-col-2 li:not(:first-child)').hover(
    function () {
      $('.has-subitems-2').removeClass('active');
      $('.has-subitems-3').removeClass('active');
      $(".mega-col-2 li a").css("opacity", 1);
    },
  );
  $('.has-subitems-3').hover(
    function () {
      $(this).addClass('active');
    },
  );

  $('.has-dropdown').hover(
    function () {
      $(".has-subitems-1").removeClass('active');
      $(".mega-col-1 li a").css("opacity", 1);
    },
  );

}

function ChangeToSvg() {
  $("img.js-tosvg").each(function () {
    var $img = $(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " insvg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (
          !$svg.attr("viewBox") &&
          $svg.attr("height") &&
          $svg.attr("width")
        ) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }
        $img.replaceWith($svg);
      },
      "xml"
    );
  });
}

function natureContentSlider() {
  var $slider = $('.js-nature-content-slider');
  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-nature-bg-slider',
    dots: true,
    draggable: false,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          draggable: false,
        }
      }
    ],
    customPaging: function (slider, i) {
      return $('.custom-dot[data-index="' + i + '"]').html();
    }
  })
  $('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.js-nature-content-slider').slick('slickGoTo', slideno - 1);
  });
}

function natureBgSlider() {
  var $slider1 = $('.js-nature-bg-slider');
  $slider1.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-nature-content-slider',
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    draggable: false,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  })

}



(function ($) {
  // Define an array of class names for which you want to apply custom scrollbar
  var scrollOver600 = [".content-slider-wrap"];
  var scrollUnder600 = [".js-slide-content"];
  var scrollItems = [".js-slide-items"];
  var className = [".content-slider-wrap"]

  // Function to initialize or destroy custom scrollbar based on window width
  function initializeCustomScrollbar() {
    // Loop through each class name
    if ($('.content-slider-wrap').length > 0) {
      scrollOver600.forEach(function (className) {
        if ($(window).width() > 600) {
          // Initialize custom scrollbar if window width is greater than 600 pixels
          $(className).mCustomScrollbar({
            axis: "y"
          });
        } else {
          // Destroy custom scrollbar if window width is 600 pixels or less
          $(className).mCustomScrollbar("destroy");
        }
      },
      );
    }

    if ($('.js-slide-content').length > 0) {
      scrollUnder600.forEach(function (className) {
        if ($(window).width() < 600) {
          // Initialize custom scrollbar if window width is greater than 600 pixels
          $(className).mCustomScrollbar({
            axis: "y"
          });
        } else {
          // Destroy custom scrollbar if window width is 600 pixels or less
          $(className).mCustomScrollbar("destroy");
        }
      }
      );
    }

    if ($('.js-slide-items').length > 0) {
      scrollItems.forEach(function (className) {
        $(className).mCustomScrollbar({
          axis: "y"
        });
      }
      );
    }else {
      // Destroy custom scrollbar if window width is 600 pixels or less
      $(className).mCustomScrollbar("destroy");
    }
  }

  // Call the function when window is resized
  $(window).ready(initializeCustomScrollbar);
})(jQuery);


function formValidation() {
  const submitBtn = document.querySelectorAll(".Formsubmit");

  submitBtn.forEach(function (button) {

    button.addEventListener('click', function (event) {
      event.preventDefault();
      var form = event.target.closest('form');
      var isValid = true;

      $(form).find(".form-row-dropdown, .form-fields-row").each(function () {
        var $select = $(this).find("select");
        var $errorMessage = $(this).find(".error");
        var $select2Container = $(this).find(".select2-container");

        if ($select.val() == null || $select.val() == "1") {
          isValid = false;
          $errorMessage.show();
        } else {
          $errorMessage.hide();
        }
      });

      $(form).find(".required").each(function () {
        var fieldType = $(this).attr('type');
        var fieldVal = $(this).val().trim();
        if (fieldVal === "") {
          isValid = false;
          $(this).siblings('.invalid-email-error').hide();
          $(this).siblings('.invalid-number-error').hide();
          $(this).siblings('.error').show();
        } else if (fieldType === "email" && !isValidEmail(fieldVal)) {
          isValid = false;
          $(this).siblings('.error').hide();
          $(this).siblings('.invalid-email-error').show();
        } else if ($(this).hasClass('number-input') && !isValidNumber(fieldVal)) {
          isValid = false;
          $(this).siblings('.error').hide();
          $(this).siblings('.invalid-number-error').show();
        } else {
          $(this).siblings('.error').hide();
          $(this).siblings('.invalid-email-error').hide();
          $(this).siblings('.invalid-number-error').hide();
        }
      });

      // var email = document?.getElementById('email').value.trim();
      // var confirmEmail = document.getElementById('confirm-email').value.trim();
      // if (email !== confirmEmail) {
      //   isValid = false;
      //   document.querySelector('.email-mismatch-error').style.display = 'block';
      //   document.getElementById('confirm-email').nextElementSibling.nextElementSibling.style.display = 'none';
      // } else {
      //   document.querySelector('.email-mismatch-error').style.display = 'none';
      // }

      var emailElement = document.getElementById('email');
      var confirmEmailElement = document.getElementById('confirm-email');

      if (emailElement && confirmEmailElement) {
        var email = emailElement.value.trim();
        var confirmEmail = confirmEmailElement.value.trim();
        if (email !== confirmEmail) {
          isValid = false;
          document.querySelector('.email-mismatch-error').style.display = 'block';
          // confirmEmailElement.nextElementSibling.nextElementSibling.style.display = 'none';
        } else {
          document.querySelector('.email-mismatch-error').style.display = 'none';
        }
      }
      // Password confirmation
      // var password = document?.getElementById('password').value;
      // var confirmPassword = document.getElementById('confirm-password').value;
      // if (password !== confirmPassword) {
      //   isValid = false;
      //   document.querySelector('.password-mismatch-error').style.display = 'block';
      // } else {
      //   document.querySelector('.password-mismatch-error').style.display = 'none';
      // }

      var passwordElement = document.getElementById('password');
      var confirmPasswordElement = document.getElementById('confirm-password');

      if (passwordElement && confirmPasswordElement) {
        var password = passwordElement.value;
        var confirmPassword = confirmPasswordElement.value;

        if (password !== confirmPassword) {
          isValid = false;
          document.querySelector('.password-mismatch-error').style.display = 'block';
        } else {
          document.querySelector('.password-mismatch-error').style.display = 'none';
        }
      }

      if (!isValid) {
        event.preventDefault();
      }
    });
  });

  var togglePasswordIcons = document.querySelectorAll('.eye-icon');
  var togglePasswordSlashIcons = document.querySelectorAll('.eye-slash-icon');

  togglePasswordIcons.forEach(function (icon) {
    icon.addEventListener('click', function () {
      togglePasswordVisibility(icon);
    });
  });

  togglePasswordSlashIcons.forEach(function (Slashicon) {
    Slashicon.addEventListener('click', function () {
      togglePasswordVisibility(Slashicon);
    });
  });

  function togglePasswordVisibility(clickedIcon) {
    var passwordField = clickedIcon.parentNode.querySelector('.password-field');
    var relatedIcon = clickedIcon.classList.contains('eye-icon') ?
      clickedIcon.nextElementSibling :
      clickedIcon.previousElementSibling;

    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      clickedIcon.style.display = 'none';
      relatedIcon.style.display = 'block';
    } else {
      passwordField.type = 'password';
      clickedIcon.style.display = 'none';
      relatedIcon.style.display = 'block';
    }
  }

  var passwordField = document.getElementById('password');

  passwordField?.addEventListener('input', function () {
    validatePassword(passwordField);
  });

  function validatePassword(field) {
    var password = field.value;
    var lengthValidation = document.getElementById('length-validation');
    var maxLengthValidation = document.getElementById('max-length-validation');
    var caseValidation = document.getElementById('case-validation');
    var numberValidation = document.getElementById('number-validation');
    var spaceValidation = document.getElementById('space-validation');

    // Validate length
    if (password.length >= 8) {
      lengthValidation.classList.add('valid');
      lengthValidation.classList.remove('not-valid');
    } else {
      lengthValidation.classList.add('not-valid');
      lengthValidation.classList.remove('valid');
    }

    // Validate max length
    if (password.length <= 18) {
      maxLengthValidation.classList.add('valid');
      maxLengthValidation.classList.remove('not-valid');
    } else {
      maxLengthValidation.classList.add('not-valid');
      maxLengthValidation.classList.remove('valid');
    }

    // Validate case
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
      caseValidation.classList.add('valid');
      caseValidation.classList.remove('not-valid');
    } else {
      caseValidation.classList.add('not-valid');
      caseValidation.classList.remove('valid');
    }

    // Validate number/punctuation
    if (/[0-9]/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      numberValidation.classList.add('valid');
      numberValidation.classList.remove('not-valid');
    } else {
      numberValidation.classList.add('not-valid');
      numberValidation.classList.remove('valid');
    }

    // Validate space/unicode
    if (!/\s/.test(password) && !/[^\x00-\x7F]/.test(password)) {
      spaceValidation.classList.add('valid');
      spaceValidation.classList.remove('not-valid');
    } else {
      spaceValidation.classList.add('not-valid');
      spaceValidation.classList.remove('valid');
    }
  }
}

function maxSectorsSelection() {
  const maxSelection = 5;
  const errorElement = document.querySelector('.error-message');
  const checkboxes = document.querySelectorAll('.checkbox-options input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      const checkedCheckboxes = document.querySelectorAll('.checkbox-options input[type="checkbox"]:checked');
      if (checkedCheckboxes.length > maxSelection) {
        errorElement.textContent = `Please select a maximum of ${maxSelection} sectors.`;
      } else {
        errorElement.textContent = ''; // Clear error message
      }
    });
  });
}
// Form Field Validation End

// Add file upload file name on data text start
function fileUploadfunctionality() {
  const fileInputs = document.querySelectorAll('.js-file-upload-field');

  fileInputs.forEach((fileInput) => {
    const fileUploadWrapper = fileInput.closest('.file-upload-wrapper');
    const maxSize = parseInt(fileInput.getAttribute('data-file-size'), 10) * 1024 * 1024; // Convert MB to bytes
    const allowedTypes = fileInput.getAttribute('data-allow-type')?.split(', ').map(type => {
      switch (type.trim()) {
        case '.pdf': return 'application/pdf';
        case '.doc': return 'application/msword';
        case '.docx': return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        case '.txt': return 'text/plain';
        case '.png': return 'image/png';
        case '.jpg': return 'image/jpeg';
        case '.jpeg': return 'image/jpeg';
        case '.xls': return 'application/vnd.ms-excel';
        case '.xlsx': return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        default: return type;
      }
    });

    fileInput.addEventListener('change', function () {
      const errorMessage = fileUploadWrapper.querySelector('.error');
      const errorFileType = fileUploadWrapper.querySelector('.invalid-file-type-error');
      const errorFileSize = fileUploadWrapper.querySelector('.invalid-file-size-error');
      errorMessage.style.display = 'none'; // Hide error message initially
      errorFileType.style.display = 'none'; // Hide error message initially
      errorFileSize.style.display = 'none'; // Hide error message initially

      if (this.files.length > 0) {
        const file = this.files[0];
        const fileName = file.name;
        const fileType = file.type;
        const fileSize = file.size;

        if (!allowedTypes.includes(fileType)) {
          // errorMessage.textContent = 'Invalid file type. Please upload a PDF or Word document.';
          // errorMessage.style.display = 'block';
          errorFileType.style.display = 'block';
          fileInput.value = ''; // Clear the input
          fileUploadWrapper.setAttribute('data-text', 'Upload File');
          return;
        }

        if (fileSize > maxSize) {
          // errorMessage.textContent = 'File size exceeds the limit.';
          // errorMessage.style.display = 'block';
          errorFileSize.style.display = 'block';
          fileInput.value = ''; // Clear the input
          fileUploadWrapper.setAttribute('data-text', 'Upload File');
          return;
        }

        fileUploadWrapper.setAttribute('data-text', fileName);
      } else {
        fileUploadWrapper.setAttribute('data-text', 'Upload File');
      }
    });
  });
}
// Add file upload file name on data text end

// Form onblur Validation start
function downloadBtnFormValidation() {
  // Function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Select the input fields
  const textInput = document.querySelector('.download-form input[type="text"]');
  const emailInput = document.querySelector('.download-form input[type="email"]');

  // Select the error message elements
  const textError = textInput?.nextElementSibling;
  const emailError = emailInput?.nextElementSibling;
  const invalidEmailError = emailError?.nextElementSibling;

  // Add onblur event listener for text input
  textInput?.addEventListener('blur', function () {
    if (textInput.value.trim() === '') {
      textError.style.display = 'block';
    } else {
      textError.style.display = 'none';
    }
  });

  // Add onblur event listener for email input
  emailInput?.addEventListener('blur', function () {
    if (emailInput.value.trim() === '') {
      emailError.style.display = 'block';
      invalidEmailError.style.display = 'none';
    } else if (!validateEmail(emailInput.value)) {
      emailError.style.display = 'none';
      invalidEmailError.style.display = 'block';
    } else {
      emailError.style.display = 'none';
      invalidEmailError.style.display = 'none';
    }
  });
}
// Form onblur Validation end

// Update counter on textarea start 
function updateTextareaCounter(textarea, counter) {
  const maxChars = 100;
  let charCount = 0;

  const updateCounter = () => {
    const inputText = textarea.value;
    const inputLength = inputText.length;

    if (inputLength <= maxChars) {
      charCount = inputLength;
      counter.textContent = charCount;
    } else {
      textarea.value = inputText.slice(0, maxChars); // Truncate if more than 100 characters
    }
  };

  textarea.addEventListener('input', updateCounter);
  textarea.addEventListener('keydown', (event) => {
    if (event.key !== 'Backspace' && textarea.value.length >= maxChars && event.key.length === 1) {
      event.preventDefault();
    }
  });
}
// Update counter on textarea end 

// Gsap for images marque 
function horizontalScrollDisAlula() {
  // Check if there are elements with the class .horizontal-scroll
  var horizontalSection = $('.horizontal');

  // Exit the function if no elements with the class .horizontal-scroll are found
  if (horizontalSection.length === 0) {
    return;
  }

  var direction = $('html').attr('dir') || 'ltr'; // Get document direction or default to 'ltr'

  // Function to check if the device is a mobile device
  function isMobileDevice() {
    return window.innerWidth <= 600; // Adjust the width as needed for your definition of a mobile device
  }

  if (!isMobileDevice()) {
    // Determine the scroll direction based on document direction
    var scrollDirection = direction === 'rtl' ? 1 : -1;
    var scrollWidth = (scrollDirection * horizontalSection[0].scrollWidth) / 1.5;
    var secWidth = $('.horizontal').width();
    const xPer = scrollDirection === 1 ? -100 : 100;

    // Initialize ScrollTrigger only if it's not a mobile device
    gsap.to(horizontalSection, {
      x: scrollWidth,
      xPercent: xPer,
      scrollTrigger: {
        trigger: horizontalSection[0],
        start: 'center center',
        pin: '.horizontal-scroll',
        scrub: 1,
        invalidateOnRefresh: true,
        markers: false,
        duration: { min: 0.2, max: 5 },
        delay: 0.3,
        end: `+=${secWidth}`,
      }
    });
  }
}

// Alila section onclick 
function paginationNum() {

  // pagination
  $('.page-num').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
}

function openModal(modalId) {
  var modals = document.querySelectorAll('.js-modal');
  // Close all modals
  modals.forEach(function (modal) {
    $(modal).removeClass('active-modal'); // Remove active class from all modals
    $(modal).css('display', ''); 
  });
  // Open specific modal
  var modal = document.getElementById(modalId);
  $(modal).addClass('active-modal'); // Add active class to the opened modal
  var idNo = modalId.split("");
  var lastCh = idNo[idNo.length - 1]
  console.log([lastCh])
  $(".js-map-slider-content-" + lastCh).parent().find('.slider-expand').addClass('accordianactive');
  $(".js-map-slider-content-" + lastCh).find('.slide-detail').css('display', 'block');
  mapCarousel(".js-map-slider-content-" + lastCh, true, 0);

}
function mapModal() {
  document.querySelectorAll('.marker').forEach(function (marker) {
    marker.addEventListener('click', function () {
      var locationId = this.getAttribute('data-location');
      var modalId = 'modal' + locationId;
      var slideNumber = this.getAttribute('data-slide');
     
      openModal(modalId);
      $('.slide-items').slideDown();
      // Add active class to the clicked marker
      document.querySelectorAll('.marker').forEach(function (marker) {
        $(marker).removeClass('active');
      });
      $(this).addClass('active');
      $(".js-map-slider-content-" + locationId).parent().find('.slider-expand').addClass('accordianactive');
      $(".js-map-slider-content-" + locationId).find('.slide-detail').css('display', 'block');
      mapCarousel(".js-map-slider-content-" + locationId, true, slideNumber);

    });
  });

}
// Define the openTab function
function openTab(evt, tabName, isLoad = false) {

  var i, modalcontent, tablinks;
  // Hide all tab content
  modalcontent = document.getElementsByClassName("js-map-tabs");
  for (i = 0; i < modalcontent.length; i++) {
    modalcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    if (isLoad && tabName == 'tab1') {
      tablinks[0].classList.toggle("active");
    } else {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  if (tabName === 'tab2') {
    $('#map').addClass('markers-visible');
    $('.tab-button').parent().addClass('color--modify');
    $('.heading2').addClass('color--modify');
  } else {
    $('#map').removeClass('markers-visible');
    $('.tab-button').parent().removeClass('color--modify');
    $('.heading2').removeClass('color--modify');
  }
  switch (tabName) {
    case 'tab1':
      openModalByIndex(0);
      break;
    case 'tab2':
      openModal('modal1');
      mapCarousel(".js-map-slider-content-1", true, 0);
      break;
    case 'tab3':
      openLastModal();
      break;
  }
}
function openTab2(evt, tabName1, isLoad1 = false, activeModal) {

  var j, modalcontent1, tablinks1;
  // Hide all tab content
  modalcontent1 = document.getElementsByClassName("js-map-tabs-new");
  for (j = 0; j < modalcontent1.length; j++) {
    modalcontent1[j].style.display = "none";
  }
  tablinks1 = document.getElementsByClassName("js-tab-button");
  for (j = 0; j < tablinks1.length; j++) {
    if (isLoad1 && tabName1 == 'overviewtab1') {
      tablinks1[0].classList.add("active");
    } else {
      tablinks1[j].className = tablinks1[j].className.replace(" active", "");
    }
  }
  document.getElementById(tabName1).style.display = "block";
  evt.currentTarget.className += " active";

  if (tabName1 === 'overviewtab1') {
    $('.map-slider-wrap').removeClass('markers-visible');
    $('.map-slider-wrap.marker-set1').addClass('markers-visible');
  } else if (tabName1 === 'overviewtab2') {
    $('.map-slider-wrap').removeClass('markers-visible');
    $('.map-slider-wrap.marker-set2').addClass('markers-visible');
  } else if (tabName1 === 'overviewtab3') {
    $('.map-slider-wrap').removeClass('markers-visible');
    $('.map-slider-wrap.marker-set3').addClass('markers-visible');
  } else {
    $('#map').removeClass('markers-visible');
  }
  switch (tabName1) {
    case 'overviewtab1':
      if(activeModal){
        openModalByIndex(activeModal);
        openModal(activeModal);

      } else{

        openModalByIndex(0);
        openModal('modal1')
      }
      mapCarousel(".js-map-slider-content-1", true, 0);
      break;
    case 'overviewtab2':
      openModal('modal8');
      mapCarousel(".js-map-slider-content-1", true, 0);
      break;
    case 'overviewtab3':
      openModal('modal11');
      mapCarousel(".js-map-slider-content-1", true, 0);
      break;
  }
}

// Call openTab with 'tab1' to open it by default
window.onload = function () {
  if ($('.js-map-tabs').length > 0) {
    openTab(event, 'tab1', true);
  }
  if ($('.js-map-tabs-new').length > 0) {
    openTab2(event, 'overviewtab1', true);
  }
};
function openModalByIndex(index) {
  var modals = document.getElementsByClassName("js-modal");
  modals[index].style.display = "block";
}

function openAllModalsExceptLast() {
  var modals = document.getElementsByClassName("js-modal");
  for (var i = 0; i < modals.length - 1; i++) {
    modals[i].style.display = "block";
  }
}

function openLastModal() {
  var modals = document.getElementsByClassName("js-modal");
  var lastIndex = modals.length - 1;
  modals[lastIndex].style.display = "block";
}
function openModalByClass(className) {
  var modals = document.getElementsByClassName(className);
  var lastModal = modals[modals.length - 1];
  lastModal.style.display = "block";
}

// CUSTOM LIGHTBOX STARTS
function initializeMediaCards() {
  let $modal = $("#myModal");
  let $modalImg = $("#modalImg");
  let $modalVideo = $("#modalVideo");
  let $mediaTitle = $("#media-title");
  let $mediaDescription = $("#media-description");
  let $downloadBtn = $("#downloadBtn");
  let $listItems = $(".list-items");
  let currentIndex = 0;
  let mediaItems = [];
  let selectedCategory = "all"; // Default to display all categories

  // Populate mediaItems array
  $listItems.each(function () {
    let mediaType = $(this).data("type");
    let mediaSource = $(this).data("source");
    let mediaTitle = $(this).data("title");
    let mediaDescription = $(this).data("description");
    mediaItems.push({
      type: mediaType,
      source: mediaSource,
      title: mediaTitle,
      description: mediaDescription,
    });
  });

  // Trigger click event on the "All" tab button by default
  $(".js-tab[data-filter='all']").click();

  // Event listener for list items
  $listItems.on("click", function () {
    let mediaItem = mediaItems[$(this).index()];

    if (mediaItem.type !== "podcast") {
      currentIndex = $(this).index();
      displayMedia(currentIndex);
      $modal.fadeIn(300); // Display modal
    } else {
      let podcastLink = $(this).data("source");
      window.open(podcastLink, "_blank"); // Redirect to the podcast page in a new tab
    }
  });

  // Event listener for close button
  $(".close").on("click", function () {
    $modal.fadeOut(300); // Hide modal
  });

  // Event listener for previous button
  $(".prev").on("click", function () {
    let prevIndex =
      (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    let prevItem = getMediaItem(prevIndex);

    // Check if the previous media item is of the same type as the current one
    if (
      prevItem &&
      (selectedCategory === "all" || prevItem.type === selectedCategory)
    ) {
      currentIndex = prevIndex;
      displayMedia(currentIndex);
    }
  });

  // Event listener for next button
  $(".next").on("click", function () {
    let nextIndex = (currentIndex + 1) % mediaItems.length;
    let nextItem = getMediaItem(nextIndex);

    // Check if the next media item is of the same type as the current one
    if (
      nextItem &&
      (selectedCategory === "all" || nextItem.type === selectedCategory)
    ) {
      currentIndex = nextIndex;
      displayMedia(currentIndex);
    }
  });

  // Function to retrieve the media item at a given index
  function getMediaItem(index) {
    return mediaItems[index];
  }

  // Function to display media based on currentIndex
  function displayMedia(index) {
    let mediaItem = mediaItems[index];

    if (mediaItem.type === "image") {
      $modalImg.attr("src", mediaItem.source);
      $modalImg.fadeIn(200);
      $modalVideo.hide();
    } else if (mediaItem.type === "video") {
      $modalVideo.attr("src", mediaItem.source);
      $modalVideo.fadeIn(200);
      $modalImg.hide();
    }

    $mediaTitle.text(mediaItem.title);
    $mediaDescription.text(mediaItem.description);
    $downloadBtn.attr("href", mediaItem.source);
  }

  // Event listener for podcast links
  $(".podcast-item").on("click", function (event) {
    let podcastLink = $(this).data("source");
    window.open(podcastLink, "_blank"); // Redirect to the podcast page in a new tab
    event.preventDefault(); // Prevent default behavior (opening modal or navigating to "#")
  });
}
function lightboxSlideCounter() {
  // Initialize slide counter variables
  var currentSlide = 1;
  var totalSlides = 30; // Update this value with your actual total number of slides

  // Update the initial slide counter text
  updateSlideCounter();

  // Function to update the slide counter text
  function updateSlideCounter() {
    $('.dynamic-value').text(padNumber(currentSlide) + ' / ' + totalSlides);
  }

  // Function to pad single-digit numbers with leading zeros (e.g., 01 instead of 1)
  function padNumber(number) {
    return number < 10 ? '0' + number : number;
  }

  // Click event handler for the next button
  $('.next').click(function () {
    if (currentSlide < totalSlides) {
      currentSlide++; // Increment the current slide number
      updateSlideCounter(); // Update the slide counter text
      // Add logic to change to the next slide in your lightbox modal
    }
  });

  // Click event handler for the previous button
  $('.prev').click(function () {
    if (currentSlide > 1) {
      currentSlide--; // Decrement the current slide number
      updateSlideCounter(); // Update the slide counter text
      // Add logic to change to the previous slide in your lightbox modal
    }
  });
}
// CUSTOM LIGHTBOX ENDS

// smoth scroll
function smoothScrolling() {
  $(".js-btn-list .body3").on('click', function (event) {
    // Prevent default link behavior
    event.preventDefault();

    // Remove active class from all siblings
    $(this).closest('.js-btn-list').find('.body3').removeClass('active');

    // Add active class to clicked link
    $(this).addClass('active');

    // Smooth scroll to the target section
    var hash = this.hash;
    var offset = 220; // Change this value to set the desired top offset
    $('html, body').animate({
      scrollTop: $(hash).offset().top - offset
    }, 800, function () {
      // Add hash to URL after scrolling
      window.location.hash = hash;
    });
  });
}


// View type grid and list start
function toggleView() {
  $(".js-view-type .grid-view-action").on('click', function (event) {
    // Prevent default link behavior
    event.preventDefault();
    activeClassOnlyAll("media-gallery");
    // Remove active class from all siblings
    $(this).closest('.js-view-type').find('.grid-view-action').addClass('active');
    $(this).closest('.js-view-type').find('.list-view-action').removeClass('active');

    // Add appropriate class to media listing
    $('.media-listing').removeClass('list-view-listing').addClass('grid-view-listing');
    initIsotopes();
  });

  $(".js-view-type .list-view-action").on('click', function (event) {
    // Prevent default link behavior
    event.preventDefault();
    activeClassOnlyAll("media-gallery");
    // Remove active class from all siblings
    $(this).closest('.js-view-type').find('.list-view-action').addClass('active');
    $(this).closest('.js-view-type').find('.grid-view-action').removeClass('active');

    // Add appropriate class to media listing
    $('.media-listing').removeClass('grid-view-listing').addClass('list-view-listing');
    initIsotopes();
  });
}
function activeClassOnlyAll(check) {
  check === "media-gallery" &&
    navLinks.forEach((navLink, index) => {
      if (index === 0) {
        // Add 'active' class to the first element
        navLink.classList.add("active");
      } else {
        // Remove 'active' class from other elements
        navLink.classList.remove("active");
      }
    });
}
// View type grid and list End

// filter drawer 
function filterDrawer() {
  $(".js-filter-drawer, .js-filter-drawer-eServises ").click(function () {
    $('body').addClass("no-scroll");
  });
  $(".filter-close, .filter-btn").click(function () {
    $('body').removeClass("no-scroll");
  });

  // filter counter Function to update counter Start
}

function filterCounter() {
  function updateCounter() {
    var checkedCount = $('.tag-btn input[type="checkbox"]:checked').length;
    var allChecked = document.getElementById("option1")?.checked;
    var optionAll = document.getElementById("option1");
    const typeId = optionAll?.getAttribute('data-option');

    if (allChecked && typeId == 'all') {
      // If the first checkbox is checked and its type is 'all', treat it as the "select all" checkbox
      $('.tag-btn input[type="checkbox"]').prop("checked", true);
      checkedCount = $('.tag-btn input[type="checkbox"]:checked').length - 1;
      $(".counter-no").text("(" + checkedCount + ")");
    } else {
      // Treat the first checkbox as a normal checkbox if its type is not 'all'
      var allCheckbox = $('.tag-btn input[type="checkbox"]').first();
      var checkboxes = $('.tag-btn input[type="checkbox"]');

      if (typeId == 'all') {
        var allChecked = true;

        checkboxes.each(function () {
          if (!$(this).prop("checked")) {
            allChecked = false;
            return false;
          }
        });

        if (allChecked) {
          allCheckbox.prop("checked", true);
          checkboxes.prop("disabled", true);
        } else {
          allCheckbox.prop("checked", false);
          checkboxes.prop("disabled", false);
        }
      }

      var checkedCount = checkboxes.filter(":checked").length;
      $(".counter-no").text("(" + checkedCount + ")");
    }
  }
  updateCounter();

  // Update counter when checkbox state changes
  $('.tag-btn input[type="checkbox"]').change(function () {
    updateCounter();
  });

  // Function to reset content to 0
  function resetContent() {
    $('.tag-btn input[type="checkbox"]').prop('checked', false);
    updateCounter();
  }

  // Reset content when clear button is clicked
  $('.clear-btn').click(function () {
    resetContent();
  });
}

function rankingsAwardsSlider(sliderName) {

  var $slider = $(sliderName);
  if (!handleNoSlider($slider, 4)) return;

  var $paginationLabel = $(sliderName).parent().find('.js-rankings-slider-pagination-label');
  // var totalSlides = $(sliderName + " .slide").length;
  $slider.on('init', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.html('<span class="current-slide">01</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    // toggleArrowVisibility(slick.currentSlide, totalSlides, '.js-rankings-slider-arrow .custom-arrows.prev', '.js-rankings-slider-arrow .custom-arrows.next');
  });

  $slider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  })
    .on("setPosition", function (event, slick) {
      slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");

      //ChangeToSvg();
    });

  // Enable custom arrows
  $(sliderName).parent().find('.js-rankings-slider-arrow .custom-arrows.prev').click(function () {
    if (isRTL) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });

  $(sliderName).parent().find('.js-rankings-slider-arrow .custom-arrows.next').click(function () {
    if (isRTL) {
      $slider.slick('slickPrev');
    } else {
      $slider.slick('slickNext');
    }
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    // toggleArrowVisibility(nextSlide, totalSlides, '.js-rankings-slider-arrow .custom-arrows.prev', '.js-rankings-slider-arrow .custom-arrows.next');
  });
}

$('.js-rank-slider').click(function () {
  var currentSlider = $(this).attr('data-slider');
  var sliderExists = $(currentSlider + '.slick-initialized').length;

  if (sliderExists == 0) {
    setTimeout(function () {
      rankingsAwardsSlider(currentSlider);
    }, 160);
  }
});

function newsPressSlider(sliderName) {
  var $slider = $(sliderName);
  if (!handleNoSlider($slider, 4)) return;

  var $paginationLabel = $('.js-news-and-press-pagination-label');

  $slider.on('init', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.html('<span class="current-slide">01</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    // toggleArrowVisibility(slick.currentSlide, totalSlides, '.js-news-and-press-arrow .custom-arrows.prev', '.js-news-and-press-arrow .custom-arrows.next');
  });
  $slider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  })
    .on("setPosition", function (event, slick) {
      slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
      //ChangeToSvg();
    });

  // Enable custom arrows
  $('.js-news-and-press-arrow .custom-arrows.prev').click(function () {
    if (isRTL) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });

  $('.js-news-and-press-arrow .custom-arrows.next').click(function () {
    if (isRTL) {
      $slider.slick('slickPrev');
    } else {
      $slider.slick('slickNext');
    }
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
    // toggleArrowVisibility(nextSlide, totalSlides, '.js-news-and-press-arrow .custom-arrows.prev', '.js-news-and-press-arrow .custom-arrows.next');
  });

}


//listing card text Character trancut
function textCharacterTrancut() {
  var maxLength = 80;
  var $heading = $('.list-view-item .heading3');

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'; // Truncate and append ellipsis
    }
    return text;
  }

  var originalText = $heading.text();

  $heading.text(truncateText(originalText, maxLength));
}

function mapSlider(sliderName) {
  var $slider = $(sliderName);
  var $paginationLabel = $(sliderName).parent().find('.custom-pagination-label');
  var totalSlides = $(sliderName).find(".carousel-items").length;
  $paginationLabel.text(1 + '/' + totalSlides);

  $slider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: isRTL,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  }).on("setPosition", function (event, slick) {
    slick.$slideTrack.css("height", slick.$slideTrack.height() + "px");
    //ChangeToSvg();
  });

  // Enable custom arrows
  $(sliderName).parent().find('.custom-arrows.prev').click(function () {
    if (isRTL) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });
  $(sliderName).parent().find('.custom-arrows.next').click(function () {
    if (isRTL) {
      $slider.slick('slickPrev');
    } else {
      $slider.slick('slickNext');
    }
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    $paginationLabel.text(nextSlide + 1 + '/' + totalSlides);
  });
}

// CUSTOM LIGHTBOX STARTS
function initializeMediaCardsGridView() {
  $(document).ready(function () {
    const cards = $(".js-grid-view-item");
    const lightbox = $("#myModal");
    const lightboxImg = $("#modalImg");
    const lightboxVideo = $("#modalVideo");
    const prevBtn = $("#prevBtn");
    const nextBtn = $("#nextBtn");
    const downloadBtn = $("#downloadBtn");
    const closeBtn = $("#closeBtn");
    const counter = $("#counter-modal");
    const modalOpenBtns = $(".open-modal-btn");
    let currentIndex = 0;

    // Update media items counter
    function updateCounter() {
      counter.text(`${currentIndex + 1} / ${cards.length}`);
    }

    // Event listeners for cards
    cards.each(function (index, card) {
      $(card).on("click", function (event) {
        if (!$(event.target).hasClass("open-modal-btn")) {
          return; // Ignore click if not on the modal open button
        }
        currentIndex = index;
        LightboxContent();
        updateCounter();
        // lightbox.css("display", "flex");
        lightbox.fadeIn(500); // Fade in the modal
      });
    });

    // Event listener for previous button
    prevBtn.on("click", function () {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      LightboxContent();
      // updateCounter();
    });

    // Event listener for next button
    nextBtn.on("click", function () {
      currentIndex = (currentIndex + 1) % cards.length;
      LightboxContent();
      // updateCounter();
    });

    // Event listener for download button
    downloadBtn.on("click", function () {
      const type = $(cards[currentIndex]).data("type");
      const source = $(cards[currentIndex]).data("source");
      if (type === "image" || type === "video") {
        fetch(source)
          .then(res => res.blob())
          .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = $("<a></a>").attr({
              href: url,
              download: type === "image" ? "image.jpg" : "video.mp4",
              target: "_blank"
            });
            $("body").append(a);
            a[0].click();
            a.remove();
            URL.revokeObjectURL(url);
          })
          .catch(error => console.error("Error downloading media:", error));
      }
    });

    // Event listener for close button
    closeBtn.on("click", function () {
      lightbox.fadeOut(500);
    });

    //  lightbox content based on currentIndex
    function LightboxContent() {
      const type = $(cards[currentIndex]).data("type");
      const source = $(cards[currentIndex]).data("source");
      const title = $(cards[currentIndex]).data("title");
      const description = $(cards[currentIndex]).data("description");

      if (type === "image") {
        lightboxImg.css("display", "block");
        lightboxVideo.css("display", "none");
        lightboxImg.attr("src", source);
        lightboxVideo.attr("src", "");
      } else if (type === "video") {
        lightboxImg.css("display", "none");
        lightboxVideo.css("display", "block");
        lightboxVideo.attr("src", source);
        lightboxImg.attr("src", "");
      }

      // Title and description in the lightbox
      $("#media-title").text(title);
      $("#media-description").text(description);
    }

    // Initial update of lightbox content and counter
    LightboxContent();
    updateCounter();
  });
}
function initializeMediaCardsListView() {
  $(document).ready(function () {
    const cards = $(".js-list-view-item");
    const lightbox = $("#myModal");
    const lightboxImg = $("#modalImg");
    const lightboxVideo = $("#modalVideo");
    const prevBtn = $("#prevBtn");
    const nextBtn = $("#nextBtn");
    const downloadBtn = $("#downloadBtn");
    const closeBtn = $("#closeBtn");
    const counter = $("#counter-modal");
    const modalOpenBtns = $(".open-modal-btn");
    let currentIndex = 0;

    // Update media items counter
    function updateCounter() {
      counter.text(`${currentIndex + 1} / ${cards.length}`);
    }

    // Event listeners for cards
    cards.each(function (index, card) {
      $(card).on("click", function (event) {
        if (!$(event.target).hasClass("open-modal-btn")) {
          return; // Ignore click if not on the modal open button
        }
        currentIndex = index;
        LightboxContent();
        updateCounter();
        lightbox.css("display", "flex");
      });
    });

    // Event listener for previous button
    prevBtn.on("click", function () {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      LightboxContent();
      // updateCounter();
    });

    // Event listener for next button
    nextBtn.on("click", function () {
      currentIndex = (currentIndex + 1) % cards.length;
      LightboxContent();
      // updateCounter();
    });

    // Event listener for download button
    downloadBtn.on("click", function () {
      const type = $(cards[currentIndex]).data("type");
      const source = $(cards[currentIndex]).data("source");
      if (type === "image" || type === "video") {
        fetch(source)
          .then(res => res.blob())
          .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = $("<a></a>").attr({
              href: url,
              download: type === "image" ? "image.jpg" : "video.mp4",
              target: "_blank"
            });
            $("body").append(a);
            a[0].click();
            a.remove();
            URL.revokeObjectURL(url);
          })
          .catch(error => console.error("Error downloading media:", error));
      }
    });

    // Event listener for close button
    closeBtn.on("click", function () {
      lightbox.css("display", "none");
    });

    // Update lightbox content based on currentIndex
    function LightboxContent() {
      const type = $(cards[currentIndex]).data("type");
      const source = $(cards[currentIndex]).data("source");
      const title = $(cards[currentIndex]).data("title");
      const description = $(cards[currentIndex]).data("description");

      if (type === "image") {
        lightboxImg.css("display", "block");
        lightboxVideo.css("display", "none");
        lightboxImg.attr("src", source);
        lightboxVideo.attr("src", "");
      } else if (type === "video") {
        lightboxImg.css("display", "none");
        lightboxVideo.css("display", "block");
        lightboxVideo.attr("src", source);
        lightboxImg.attr("src", "");
      }

      // Update title and description in the lightbox
      $("#media-title").text(title);
      $("#media-description").text(description);
    }

    // Initial update of lightbox content and counter
    LightboxContent();
    updateCounter();
  });

}
// PDF light box
// function initializeMediaAnnualPdf() {
//   $(document).ready(function () {
//     const cards = $(".js-annual-pdf");
//     const lightbox = $("#myModal");
//     const lightboxImg = $("#modalImg");
//     const lightboxVideo = $("#modalVideo");
//     const prevBtn = $("#prevBtn");
//     const nextBtn = $("#nextBtn");
//     const downloadBtn = $("#downloadBtn");
//     const closeBtn = $("#closeBtn");
//     const counter = $("#counter-modal");
//     const modalOpenBtns = $(".open-modal-btn");
//     let currentIndex = 0;

//     // Update media items counter
//     function updateCounter() {
//       counter.text(`${currentIndex + 1} / ${cards.length}`);
//     }

//     // Event listeners for cards
//     cards.each(function (index, card) {
//       $(card).on("click", function (event) {
//         if (!$(event.target).hasClass("open-modal-btn")) {
//           return; // Ignore click if not on the modal open button
//         }
//         currentIndex = index;
//         LightboxContent();
//         updateCounter();
//         // lightbox.css("display", "flex");
//         lightbox.fadeIn(500); // Fade in the modal
//       });
//     });

//     // Event listener for previous button
//     prevBtn.on("click", function () {
//       currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//       LightboxContent();
//       // updateCounter();
//     });

//     // Event listener for next button
//     nextBtn.on("click", function () {
//       currentIndex = (currentIndex + 1) % cards.length;
//       LightboxContent();
//       // updateCounter();
//     });

//     // Event listener for download button
//     downloadBtn.on("click", function () {
//       const type = $(cards[currentIndex]).data("type");
//       const source = $(cards[currentIndex]).data("source");
//       if (type === "image" || type === "video") {
//         fetch(source)
//           .then(res => res.blob())
//           .then(blob => {
//             const url = URL.createObjectURL(blob);
//             const a = $("<a></a>").attr({
//               href: url,
//               download: type === "image" ? "image.jpg" : "video.mp4",
//               target: "_blank"
//             });
//             $("body").append(a);
//             a[0].click();
//             a.remove();
//             URL.revokeObjectURL(url);
//           })
//           .catch(error => console.error("Error downloading media:", error));
//       }
//     });

//     // Event listener for close button
//     closeBtn.on("click", function () {
//       lightbox.fadeOut(500);
//     });

//     //  lightbox content based on currentIndex
//     function LightboxContent() {
//       const type = $(cards[currentIndex]).data("type");
//       const source = $(cards[currentIndex]).data("source");
//       const title = $(cards[currentIndex]).data("title");
//       const description = $(cards[currentIndex]).data("description");
//       const file = $(cards[currentIndex]).data("file");
//       const date = $(cards[currentIndex]).data("date");
//       const topic = $(cards[currentIndex]).data("topic");

//       if (type === "image") {
//         lightboxImg.css("display", "block");
//         lightboxVideo.css("display", "none");
//         lightboxImg.attr("src", source);
//         lightboxVideo.attr("src", "");
//       } else if (type === "video") {
//         lightboxImg.css("display", "none");
//         lightboxVideo.css("display", "block");
//         lightboxVideo.attr("src", source);
//         lightboxImg.attr("src", "");
//       }

//       // Title and description in the lightbox
//       $("#media-title").text(title);
//       $("#media-description").text(description);
//       $("#media-file").text(file);
//       $("#media-date").text(date);
//       $("#media-topic").text(topic);
//     }

//     // Initial update of lightbox content and counter
//     LightboxContent();
//     updateCounter();
//   });
// }
function initializeMediaAnnualPdf() {
  $(document).ready(function () {
    const cards = $(".js-annual-pdf");
    const lightbox = $("#myModal");
    const lightboxImg = $("#modalImg");
    const lightboxVideo = $("#modalVideo");
    const prevBtn = $("#prevBtn");
    const nextBtn = $("#nextBtn");
    const downloadBtn = $("#downloadBtn");
    const closeBtn = $("#closeBtn");
    const counter = $("#counter-modal");
    const modalOpenBtns = $(".open-modal-btn");
    let currentIndex = 0;

    // Update media items counter
    function updateCounter() {
      // counter.text(`${currentIndex + 1} / ${cards.length}`);
      counter.html('<span class="current-slide">' + `${(currentIndex + 1).toString().padStart(2, '0')}` + '</span><span class="seperator"> / </span><span class="total-slides">' + `${(cards.length).toString().padStart(2, '0')}` + '</span>');;
    }

    // Event listeners for cards
    cards.each(function (index, card) {
      $(card).on("click", function (event) {
        if (!$(event.target).hasClass("open-modal-btn")) {
          return; // Ignore click if not on the modal open button
        }
        currentIndex = index;
        LightboxContent();
        updateCounter();
        lightbox.fadeIn(500); // Fade in the modal
      });
    });

    // Event listener for previous button
    prevBtn.on("click", function () {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      LightboxContent();
      updateCounter();
    });

    // Event listener for next button
    nextBtn.on("click", function () {
      currentIndex = (currentIndex + 1) % cards.length;
      LightboxContent();
      updateCounter();
    });

    // Event listener for download button
    downloadBtn.on("click", function () {
      const type = $(cards[currentIndex]).data("type");
      const source = $(cards[currentIndex]).data("source");
      if (type === "image" || type === "video") {
        fetch(source)
          .then(res => res.blob())
          .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = $("<a></a>").attr({
              href: url,
              download: type === "image" ? "image.jpg" : "video.mp4",
              target: "_blank"
            });
            $("body").append(a);
            a[0].click();
            a.remove();
            URL.revokeObjectURL(url);
          })
          .catch(error => console.error("Error downloading media:", error));
      }
    });

    // Event listener for close button
    closeBtn.on("click", function () {
      lightbox.fadeOut(500);
    });

    // Lightbox content based on currentIndex
    function LightboxContent() {
      const type = $(cards[currentIndex]).data("type");
      const source = $(cards[currentIndex]).data("source");
      const title = $(cards[currentIndex]).data("title");
      const description = $(cards[currentIndex]).data("description");
      const file = $(cards[currentIndex]).data("file");
      const date = $(cards[currentIndex]).data("date");
      const topic = $(cards[currentIndex]).data("topic");

      if (type === "image") {
        lightboxImg.css("display", "block");
        lightboxVideo.css("display", "none");
        lightboxImg.attr("src", source);
        lightboxVideo.attr("src", "");
      } else if (type === "video") {
        lightboxImg.css("display", "none");
        lightboxVideo.css("display", "block");
        lightboxVideo.attr("src", source);
        lightboxImg.attr("src", "");
      }

      // Title and description in the lightbox
      $("#media-title").text(title);
      $("#media-description").text(description);
      $("#media-file").text(file);
      $("#media-date").text(date);
      $("#media-topic").text(topic);
    }

    // Initial update of lightbox content and counter
    LightboxContent();
    updateCounter();
  });
}
// CUSTOM LIGHTBOX ENDS

// LUGHTBOX HANDLE MOBILE VIEW STARTS
function handleMobileView() {
  $(document).ready(function () {
    $('.mobile-view').hide();

    $('.for-mbl-submit').click(function (event) {
      event.preventDefault();
      $('.mobile-view').show();
      $('.for-mbl-submit').hide();
    });

    $('.back-btn').click(function (event) {
      event.preventDefault();
      $('.mobile-view').hide();
      $('.for-mbl-submit').show();
    });
  });
}
// LUGHTBOX HANDLE MOBILE VIEW ENDS

//Podcast Audio Function Start
function audioPlayer() {
  const waveformElement = document.getElementById('waveform');
  const audioElement = document.querySelector('.audio');
  if (!waveformElement || !audioElement) {
    return; // Exit the function if either #waveform or .audio element is not found
  }

  function podcastPlayer(audioUrl) {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#F9F7F3',
      progressColor: '#E5E0D0',
      url: audioUrl,
      barWidth: 6,
      responsive: true,
      height: 90,
      barRadius: 4,
    });

    const playBtn = document.querySelector('.playBtn');
    const pauseBtn = document.querySelector('.pauseBtn');

    playBtn.addEventListener('click', () => {
      wavesurfer.playPause();
      pauseBtn.style.display = 'block';
      playBtn.style.display = 'none';
    });

    pauseBtn.addEventListener('click', () => {
      wavesurfer.playPause();
      pauseBtn.style.display = 'none';
      playBtn.style.display = 'block';
    });

    wavesurfer.on('finish', function () {
      wavesurfer.stop();
      playBtn.style.display = 'block';
      pauseBtn.style.display = 'none';
    });
  }

  const audioUrl = audioElement.src;
  podcastPlayer(audioUrl);
}
//Podcast Audio Function End


$(".js-logo-grid").click(function () {
  $(".side-popup").animate({ right: '0' }, 300);
  $("body").addClass("popup-open");
  $("body").append('<div class="overlay"></div>');
  $(".overlay").fadeIn();
  var slideIndex = $(this).data('slide-index');
  navigateToSlide(slideIndex);

});

$(".close-popup").click(function () {
  $(".side-popup").animate({ right: '-900px' }, 300);
  $("body").removeClass("popup-open");
  $(".overlay").remove();
});
function navigateToSlide(slideIndex) {
  $('.js-portolioSlider').slick('slickGoTo', slideIndex);
}

// form arrow icon move 
function dropDownIconMove() {
  $('.js-select2').select2();

  $('.js-select2').on('select2:open', function (e) {
    $('.dropdown-icon').addClass('rotate');
  });

  $('.js-select2').on('select2:close', function (e) {
    $('.dropdown-icon').removeClass('rotate');
  });
}

// Show highlights description on click start 
// var iconWrappers = document.querySelectorAll('.icons-wrapper');
// iconWrappers.forEach(function (iconWrapper) {
//   iconWrapper.addEventListener('click', function () {
//     var highlightBox = this.closest('.highlight-box');
//     if (highlightBox) {
//       $(highlightBox).toggleClass('expand');
//     }
//   });
// });

var iconWrappers = document.querySelectorAll('.icons-wrapper');

iconWrappers.forEach(function (iconWrapper) {
  iconWrapper.addEventListener('click', function () {
    var highlightBox = this.closest('.highlight-box');

    if (highlightBox) {
      // Remove 'expand' class from all highlight boxes
      document.querySelectorAll('.highlight-box').forEach(function (box) {
        if (box !== highlightBox) {
          box.classList.remove('expand');
          box.classList.add('contract');
        }
      });

      // Toggle 'expand' class on the clicked highlight box
      if (highlightBox.classList.contains('expand')) {
        highlightBox.classList.remove('expand');
        highlightBox.classList.add('contract');
      } else {
        highlightBox.classList.remove('contract');
        highlightBox.classList.add('expand');
      }
    }
  });
});
// Show highlights description on click end


// E-services nav convert to slider// 
function navPillSlider(sliderName) {

  var totalNavItemsWidth = 0;
  $('.js-nav-slider-items .nav-item').each(function () {
    totalNavItemsWidth += $(this).outerWidth(true);
  });

  var breakpoint = 678; // define your breakpoint value
  var viewportWidth = $(window).width();

  if (totalNavItemsWidth > breakpoint && viewportWidth >= 600) {
    var slickOptions = {
      slidesToShow: 4, // adjust this value as needed
      slidesToScroll: 1,
      infinite: false,
      rtl: isRTL,
      prevArrow: isRTL ? $('.custom-arrows.next') : $('.custom-arrows.prev'),
      nextArrow: isRTL ? $('.custom-arrows.prev') : $('.custom-arrows.next'),
    };

    var $slider = $(sliderName); // Define $slider before initializing slick
    if (!handleNoSlider($slider, 4)) return;

    $slider.on('init', function (event, slick) {
      updateArrows(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
      updateArrows(slick);
    });

    $slider.slick(slickOptions); // Initialize slick on $slider

    function updateArrows(slick) {
      var $nextArrow = isRTL ? $('.custom-arrows.prev') : $('.custom-arrows.next');
      var $prevArrow = isRTL ? $('.custom-arrows.next') : $('.custom-arrows.prev');

      // If slider is at the first slide, hide prev arrow
      if (slick.currentSlide === 0) {
        $prevArrow.css('opacity', 0);
      } else {
        $prevArrow.css('opacity', 1);
      }

      // If slider is at the last slide, hide next arrow
      if (slick.currentSlide === slick.slideCount - slick.options.slidesToShow) {
        $nextArrow.css('opacity', 0);
      } else {
        $nextArrow.css('opacity', 1);
      }
    }
  }
}

// Scroll Top

$(document).ready(function () {
  $(window).scroll(function () {
    var currentPosition = $(this).scrollTop();

    // Loop through each section
    $('section').each(function () {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();

      // Check if the current position is within the bounds of this section
      if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
        var currentSection = $(this).attr('id');

        if ($(currentSection + 200).addClass('active')) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }
      } else {
        $(this).removeClass('active')
      }
    });
  });
});

function textAnim() {
  if (!isRTL) {
    var textWrappers = document.querySelectorAll('.headingAnimate .wordAnimateWrap');
    textWrappers.forEach(textWrapper => {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='wordAnimate'>$&</span>");

      var animationTriggered = false;

      function triggerAnimation(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animationTriggered) {
            anime.timeline({ loop: false })
              .add({
                targets: textWrapper.querySelectorAll('.wordAnimate'),
                translateY: ["1.1em", 0],
                translateX: ["0.55em", 0],
                translateZ: 0,
                rotateZ: [180, 0],
                duration: 850,
                easing: "easeOutExpo",
                delay: (el, i) => 50 * i
              }).add({
                targets: '.headingAnimate',
                // opacity: 0,
                duration: 2000,
                easing: "easeOutExpo",
                delay: 10000
              });
            animationTriggered = true; // Set flag to true after animation triggers
            observer.unobserve(entry.target); // Stop observing once animation has triggered
          }
        });
      }

      // Setting up the observer for each textWrapper
      var observer = new IntersectionObserver(triggerAnimation, { threshold: 0.5 });
      observer.observe(textWrapper);
    });

  }
}

// E-services search functionality
function eSrvicesSearch() {
  $('.txt-search').on('keyup', function () {
    var searchTerm = $(this).val().toLowerCase();

    // Iterate through each list item
    $('.list-item').each(function () {
      var itemText = $(this).text().toLowerCase();

      // Check if the search term is present in the item text
      if (itemText.includes(searchTerm)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
}

// E-services nav active class toogle
function navActiveToggle() {
  $('.js-nav-slider-items .nav-item').click(function () {
    $('.js-nav-slider-items .nav-link').removeClass('active');

    $(this).find('.js-nav-slider-items .nav-link').addClass('active');
  });
}

const navLinks = document.querySelectorAll('.js-navLinks');

// Function to remove 'active' class from all nav-links
function removeActiveClass() {
  navLinks.forEach(navLink => {
    navLink.classList.remove('active');
  });
}

// Add click event listener to each nav-link
navLinks.forEach(navLink => {
  navLink.addEventListener('click', function () {
    // Remove 'active' class from all nav-links
    removeActiveClass();
    // Add 'active' class to the clicked nav-link
    this.classList.add('active');
  });
});
// Header Search drawer
function headerSearchDrawer() {
  $(".js-header-search-drawer").click(function () {
    $('body').toggleClass("header-search-overlay"); // Toggle header-search-overlay class
    if (!$('body').hasClass("header-light")) {
      $('body').addClass("header-light");
    }
    HeaderSearchFunctionality();
  });

  // Esc key press handler
  $(document).keydown(function (event) {
    if (event.keyCode === 27) { // 27 is the keycode for the 'esc' key
      $('body').removeClass("header-search-overlay");
    }
  });

  // Click handler for inner elements
  $(".filter-close, .filter-btn").click(function (event) {
    event.stopPropagation(); // Stop event propagation
    $('body').removeClass("header-search-overlay");
  });
}



// header search input
function HeaderSearchFunctionality() {
  // Input event handler for text input
  $('.txt-search').on('input', function () {
    var inputText = $(this).val().trim();
    if (inputText !== '') {
      $('.cancel-icon').show();
      $('.search-icon').hide();
    } else {
      $('.cancel-icon').hide();
      $('.search-icon').show();
    }
  });

  // Click event handler for the cancel icon
  $('.cancel-icon').on('click', function () {
    $('.txt-search').val('').focus();
    $('.cancel-icon').hide();
    $('.search-icon').show();
  });

}
// header search input for result page
function ResultSearchFunctionality() {
  // Input event handler for text input
  $('.js-resualt-search').on('input', function () {
    var inputText = $(this).val().trim();
    if (inputText !== '') {
      $('.cancel-icon').show();
      $('.search-icon').hide();
    } else {
      $('.cancel-icon').hide();
      $('.search-icon').show();
    }
  });

  // Click event handler for the cancel icon
  $('.cancel-icon').on('click', function () {
    $('.js-resualt-search').val('').focus();
    $('.cancel-icon').hide();
    $('.search-icon').show();
  });
}

// Search result page load more 
function setupLoadMoreFunctionality() {
  var itemsPerPage = 4;

  // Function to handle load more button click
  function handleLoadMore($gridItems, $loadMoreBtn) {
    var totalItems = $gridItems.length;
    var visibleItems = itemsPerPage;

    // Hide extra items initially
    $gridItems.slice(itemsPerPage).hide();

    // Show load more button if there are more items
    if (totalItems > itemsPerPage) {
      $loadMoreBtn.show();
    } else {
      $loadMoreBtn.hide();
    }

    // Load more button click event
    $loadMoreBtn.on('click', function () {
      $gridItems.filter(':hidden').slice(0, itemsPerPage).show();
      visibleItems += itemsPerPage;

      // Hide load more button if no more items to show
      if (visibleItems >= totalItems) {
        $loadMoreBtn.hide();
      }
    });
  }

  // Loop through each grid item and set up load more functionality
  for (var i = 1; i <= 8; i++) {
    var $gridItems = $('#searchItem' + i + ' .search-result-grid');
    var $loadMoreBtn = $('#searchItem' + i + ' .js-loadMoreBtn');
    handleLoadMore($gridItems, $loadMoreBtn);
  }
}


//Search result card text Character trancut
function textTrancut() {
  var maxLengthHeading = 55;
  var maxLengthBody = 160;

  var $heading = $('.heading-para-box .heading5');
  var $body = $('.heading-para-box .body3');

  // Function to truncate text
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'; // Truncate and append ellipsis
    }
    return text;
  }

  // Truncate heading5 text
  $heading.each(function () {
    var originalText = $(this).text();
    $(this).text(truncateText(originalText, maxLengthHeading));
  });

  // Truncate body3 text
  $body.each(function () {
    var originalText = $(this).text();
    $(this).text(truncateText(originalText, maxLengthBody));
  });
}

// Search result nav active add class toggle and smooth scroll
function classToggle() {
  $('.js-btn-toggle .title-text').click(function () {
    $('.js-btn-toggle .body3').removeClass('active');

    $(this).find('.body3').toggleClass('active');
  });

  $('.js-btn-toggle .body3').click(function (event) {
    event.preventDefault();

    var targetId = $(this).attr('href');

    if ($(targetId).length) {
      var targetOffset = $(targetId).offset().top - 260;

      $('html, body').animate({
        scrollTop: targetOffset
      }, 1000);
    }
  });
}

// Search result page input
function setupSearchDrawer() {
  $('.result-tex').show();
  $('.cancel-btn').show(); // Show the cancel button by default

  $('.input-field').on('input', function () {
    var value = $(this).val().trim().toLowerCase();
    var searchBtn = $('.search-btn');
    var cancelBtn = $('.cancel-btn');
    var resultTex = $('.result-tex');

    if (value === 'sustainability') {
      resultTex.show();
    } else {
      resultTex.hide();
    }

    if (value.length > 0) {
      searchBtn.hide();
      cancelBtn.show();
    } else {
      searchBtn.show();
      cancelBtn.hide();
    }
  });

  $('.cancel-btn').on('click', function () {
    $('.input-field').val('').focus();
    $(this).hide();
    $('.search-btn').show();
    $('.result-tex').hide();
  });

  $('.tab').on('click', function () {
    var tabText = $(this).text();
    $('.input-field').val(tabText); // Insert tab's text into search field
    $('.input-field').trigger('input'); // Trigger input event to perform search
  });
}


// PDF Images Slider 

function PdfImagesSlider($slider, $container) {
  var $paginationLabel = $container.find('.js-image-slider-pagination-label');
  if (!handleNoSlider($slider, 1)) return;

  $slider.on('init', function (event, slick) {
    var totalSlides = slick.slideCount;
    $paginationLabel.html('<span class="current-slide">01</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
  });

  $slider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  });

  // Enable custom arrows
  $container.find('.custom-arrows.prev').click(function () {
    if (isRTL) {
      $slider.slick('slickNext');
    } else {
      $slider.slick('slickPrev');
    }
  });

  $container.find('.custom-arrows.next').click(function () {
    if (isRTL) {
      $slider.slick('slickPrev');
    } else {
      $slider.slick('slickNext');
    }
  });

  // Update pagination label on beforeChange event
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="seperator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
  });
}

// Search resualt page tab sticky toggleStickyClass add Start
function toggleStickyClass() {
  var scroll = $(window).scrollTop();
  var $element = $(".search-tabs-sticky");

  if (scroll >= 200) {
    $element.addClass("sticky");
  } else {
    $element.removeClass("sticky");
  }
}

$(window).scroll(function () {
  toggleStickyClass();
});
// Search resualt page tab sticky toggleStickyClass add End


// Show Logo after document loaded 

$(window).on('load', function () {
  var logo = document.querySelector(".header-logo");
  setTimeout(function () {
    $(logo).addClass("show");
  }, 50);
});


function cookieBanner() {
  $(document).ready(function () {
    var banner = $('.js-cookie-banner');
    var acceptButton = $('.js-cookie-accept');
    var rejectButton = $('.js-cookie-reject');

    // Check if the user has accepted or rejected cookies
    if (localStorage.getItem('cookieAccepted') === 'true') {
      banner.hide();
    } else if (localStorage.getItem('cookieRejected') === 'true') {
      banner.hide();
      // Perform actions for rejected cookies
    } else {
      banner.show();
    }

    // Event listener for accepting cookies
    acceptButton.on('click', function () {
      banner.slideUp(300);
      console.log("Cookies accepted");
      localStorage.setItem('cookieAccepted', 'true');
    });

    // Event listener for rejecting cookies
    rejectButton.on('click', function () {
      banner.slideUp(300);
      console.log("Cookies rejected");
      localStorage.setItem('cookieRejected', 'true');
      // Additional actions for rejected cookies can be added here
    });
  });

}

if ($('.c-sec-map').length > 0) {
  // var markers = [],
  //   mainMap;

  // function initMapLogic(lat, lng, zoom) {
  //   // Init Map
  //   mainMap = new google.maps.Map(document.getElementById('festival-map'), {
  //     zoom: zoom,
  //     center: { lat: lat, lng: lng },
  //     disableDefaultUI: true,
  //     styles: [
  //       { featureType: "water", stylers: [{ "color": "blue" }] },
  //       {
  //         "featureType": "road",
  //         "elementType": "geometry",
  //         "stylers": [{ "color": "#DED4C1" }]
  //       },
  //       {
  //         "elementType": "labels.text.fill",
  //         "stylers": [{ "color": "#AC956C" }]
  //       },
  //       {
  //         "elementType": "labels.icon",
  //         "stylers": [{ "visibility": "off", }]
  //       },
  //     ],
  //   });


  //   for (var i = markers.length - 1; i >= 0; i--) {
  //     if (markers[i] !== undefined && markers[i] !== null) {
  //       markers[i].map = mainMap;
  //       markers[i].init();
  //     } else {
  //       // console.error(`Marker at index ${i} is undefined or null.`);
  //     }
  //   }

  //   // Class for Info Window
  //   google.maps.event.addListenerOnce(mainMap, 'idle', function () {
  //     $('.gm-style iframe').prev().addClass('c-info-window');
  //   });
  // }

  // // Custom Marker Constructor
  // var markersInoWin = [];
  // var markersLength = 0;

  // function marker(map, lat, lng, iconSrc, imgSrc, title, markerClass) {
  //   var self = this;
  //   this.map = map;
  //   this.lat = lat;
  //   this.lng = lng;
  //   this.iconSrc = iconSrc;
  //   this.imgSrc = imgSrc;
  //   this.title = title;
  //   this.markerClass = markerClass;
  //   this.activeIconSrc = iconSrc.replace('.png', '-active.png'); // Active icon path

  //   if (winWidth < 768) {
  //     var markerSize = 30;
  //   } else {
  //     var markerSize = 80;
  //   }

  //   this.iconSrc = {
  //     url: iconSrc,
  //     scaledSize: new google.maps.Size(markerSize, markerSize)
  //   }

  //   this.activeIconSrc = {
  //     url: this.activeIconSrc,
  //     scaledSize: new google.maps.Size(markerSize, markerSize)
  //   }

  //   this.openInfo = function () {
  //     // Reset all markers to default icon
  //     markers.forEach(function (marker) {
  //       if (marker.marker !== undefined) {
  //         marker.marker.setIcon(marker.iconSrc);
  //       }
  //     });

  //     // Set the current marker to the active icon
  //     self.marker.setIcon(self.activeIconSrc);

  //     // Fadeout info
  //     $('.c-info-window').removeClass('this-show');
  //     setTimeout(function () {
  //       // Close all info windows
  //       for (var i = markersInoWin.length - 1; i >= 0; i--) {
  //         markersInoWin[i].close();
  //       }
  //       // Open info window
  //       self.infowindow.open(this.map, self.marker);
  //       setTimeout(function () {
  //         $('.c-info-window').addClass('this-show');
  //       }, 10);
  //       // Remove close event
  //       setTimeout(function () {
  //         var element = $('.gm-style-iw').next()[0];
  //         $('.gm-style-iw').prev().addClass('gm-style-iw_prev');
  //         $('.gm-style-iw').parent().addClass('gm-style-iw_parent');
  //         element.outerHTML = element.outerHTML;
  //         if (winWidth < 1300) {
  //           $("html, body").animate({ scrollTop: 0 }, 500);
  //         }
  //         $('.gm-style-iw').next().click(function () {
  //           $('.c-info-window').removeClass('this-show');
  //           setTimeout(function () {
  //             for (var i = markersInoWin.length - 1; i >= 0; i--) {
  //               markersInoWin[i].close();
  //             }
  //           }, 250);
  //         });
  //       }, 100);
  //     }, 250);
  //   };

  //   this.init = function () {
  //     // Assign Marker
  //     this.marker = new google.maps.Marker({
  //       position: { lat: this.lat, lng: this.lng },
  //       map: this.map,
  //       icon: this.iconSrc
  //     });

  //     // Assign InfoWin
  //     this.infowindow = new google.maps.InfoWindow({
  //       content: "<div style='text-align:center'><img src='" + this.imgSrc + "'> <div style='font-size:13px;font-weight:500;line-height:1.2em;margin-top:10px;text-align:left;padding-left:3px;'>" + this.title + "</div></div>"
  //     });

  //     // Keep ref for all infoWindow
  //     markersInoWin[markersLength] = this.infowindow;
  //     markersLength++;

  //     // Marker Click
  //     this.marker.addListener('click', function () {
  //       self.openInfo();
  //       var temp = self.title;
  //       openModal(temp);
  //     });

  //     google.maps.event.addListener(this.infowindow, 'domready', function () { customInfoWindow(this); });
  //   };
  // }

  // // Focus Marker
  // function focusMarker(thisMarker) {
  //   mainMap.panTo(new google.maps.LatLng(thisMarker.lat, thisMarker.lng));
  //   $('html, body').stop().animate({
  //     scrollTop: $('#festival-map').offset().top - 175
  //   }, 100);
  //   setTimeout(function () {
  //     thisMarker.openInfo();
  //   }, 100);
  // }

  var markers = [],
    mainMap,
    activeMarker = null; // Track the currently active marker

  function initMapLogic(lat, lng, zoom) {
    // Init Map
    mainMap = new google.maps.Map(document.getElementById('festival-map'), {
      zoom: zoom,
      center: { lat: lat, lng: lng },
      disableDefaultUI: true,
      styles: [
        { featureType: "water", stylers: [{ "color": "blue" }] },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{ "color": "#DED4C1" }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#AC956C" }]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{ "visibility": "off", }]
        },
      ],
    });


    for (var i = markers.length - 1; i >= 0; i--) {
      if (markers[i] !== undefined && markers[i] !== null) {
        markers[i].map = mainMap;
        markers[i].init();
      } else {
        // console.error(`Marker at index ${i} is undefined or null.`);
      }
    }

    // Class for Info Window
    google.maps.event.addListenerOnce(mainMap, 'idle', function () {
      $('.gm-style iframe').prev().addClass('c-info-window');
    });
  }

  // Custom Marker Constructor
  var markersInoWin = [];
  var markersLength = 0;


  function marker(map, lat, lng, iconSrc, imgSrc, title, markerClass) {
    var self = this;
    this.map = map;
    this.lat = lat;
    this.lng = lng;
    this.iconSrc = iconSrc;
    this.imgSrc = imgSrc;
    this.title = title;
    this.markerClass = markerClass;
    this.activeIconSrc = iconSrc.replace('.png', '-active.png'); // Active icon path

    if (winWidth < 768) {
      var markerSize = 30;
    } else {
      // console.error(Marker at index ${i} is undefined or null.);
    }
  }

  // Class for Info Window
  google.maps.event.addListenerOnce(mainMap, 'idle', function () {
    $('.gm-style iframe').prev().addClass('c-info-window');
  });
}

// Custom Marker Constructor
var markersInoWin = [];
var markersLength = 0;

function marker(map, lat, lng, iconSrc, imgSrc, title, markerClass) {
  var self = this;
  this.map = map;
  this.lat = lat;
  this.lng = lng;
  this.iconSrc = iconSrc;
  this.imgSrc = imgSrc;
  this.title = title;
  this.markerClass = markerClass;
  this.activeIconSrc = iconSrc.replace('.png', '-active.png'); // Active icon path

  if (winWidth < 768) {
    var markerSize = 30;
  } else {
    var markerSize = 80;
  }

  this.iconSrc = {
    url: iconSrc,
    scaledSize: new google.maps.Size(markerSize, markerSize)
  }

  this.activeIconSrc = {
    url: this.activeIconSrc,
    scaledSize: new google.maps.Size(markerSize, markerSize)
  }

  this.openInfo = function () {
    // Deactivate the previously active marker
    if (activeMarker !== null && activeMarker !== self) {
      activeMarker.marker.setIcon(activeMarker.iconSrc);
    }

    // Set the current marker to the active icon
    self.marker.setIcon(self.activeIconSrc);
    activeMarker = self; // Update the active marker

    // Fadeout info
    $('.c-info-window').removeClass('this-show');
    setTimeout(function () {
      // Close all info windows
      for (var i = markersInoWin.length - 1; i >= 0; i--) {
        markersInoWin[i].close();
      }
      // Open info window
      self.infowindow.open(this.map, self.marker);
      setTimeout(function () {
        $('.c-info-window').addClass('this-show');
      }, 10);
      // Remove close event
      setTimeout(function () {
        var element = $('.gm-style-iw').next()[0];
        $('.gm-style-iw').prev().addClass('gm-style-iw_prev');
        $('.gm-style-iw').parent().addClass('gm-style-iw_parent');
        element.outerHTML = element.outerHTML;
        if (winWidth < 1300) {
          $("html, body").animate({ scrollTop: 0 }, 500);
        }
        $('.gm-style-iw').next().click(function () {
          $('.c-info-window').removeClass('this-show');
          setTimeout(function () {
            for (var i = markersInoWin.length - 1; i >= 0; i--) {
              markersInoWin[i].close();
            }
          }, 250);
        });
      }, 100);
    }, 250);
  };

  this.init = function () {
    // Assign Marker
    this.marker = new google.maps.Marker({
      position: { lat: this.lat, lng: this.lng },
      map: this.map,
      icon: this.iconSrc
    });

    // Assign InfoWin
    this.infowindow = new google.maps.InfoWindow({
      content: "<div style='text-align:center'><img src='" + this.imgSrc + "'> <div style='font-size:13px;font-weight:500;line-height:1.2em;margin-top:10px;text-align:left;padding-left:3px;'>" + this.title + "</div></div>"
    });

    // Keep ref for all infoWindow
    markersInoWin[markersLength] = this.infowindow;
    markersLength++;

    // Marker Click
    this.marker.addListener('click', function () {
      self.openInfo();
      var temp = self.title;
      openModal(temp);
    });

    google.maps.event.addListener(this.infowindow, 'domready', function () { customInfoWindow(this); });
  };
}

function customInfoWindow(target) {
  // Reference to the DIV that wraps the bottom of infowindow
  var iwOuter = $('.gm-style-iw');
  var iwBackground = iwOuter.prev();

  // Removes background shadow DIV
  iwBackground.children(':nth-child(2)').css({ 'display': 'none' });
  // Removes white background DIV
  iwBackground.children(':nth-child(4)').css({ 'display': 'none' });
  // Moves the infowindow 115px to the right.
  iwOuter.parent().css({ 'width': 0, 'height': 0 })
  iwOuter.parent().parent().css({ left: '-5px', top: '25px' });
  // Moves the shadow of the arrow 76px to the left margin.
  iwBackground.children(':nth-child(1)').attr('style', function (i, s) { return s + 'left: 73px !important;' });
  // Moves the arrow 76px to the left margin.
  iwBackground.children(':nth-child(3)').attr('style', function (i, s) { return s + 'left: 73px !important;' });
  // Changes the desired tail shadow color.
  iwOuter.parent().find('> div:first-child > div:first-child').css('display', 'none');
  iwBackground.children(':nth-child(3)').find('div').children().css({ 'box-shadow': '0 1px 6px rgba(178, 178, 178, 0.6)', 'z-index': '1', 'width': '20px' });
  iwBackground.children(':nth-child(3)').find('div:nth-child(1)').children().css({ 'transform': 'skewX(55deg)' });
  iwBackground.children(':nth-child(3)').find('div:nth-child(2)').children().css({ 'transform': 'skewX(-55deg)' });
  iwBackground.children(':nth-child(3)').children().css({ 'width': '26px', 'height': '20px' });
  iwBackground.children(':nth-child(3)').children(':nth-child(1)').css({ 'left': '-11px' });
  iwBackground.children(':nth-child(3)').children(':nth-child(2)').css({ 'left': '15px' });

  var iwCloseBtn = iwOuter.next();
  iwCloseBtn.css({
    'border-radius': '999px',
    'overflow': 'hidden',
    'opacity': '1',
    'box-shadow': 'rgba(0, 0, 0, 0.2) 0px 0px 5px',
    'background': '#fff',
    'border': '5px solid rgb(255, 255, 255)',
    'width': '23px',
    'height': '23px',
    'top': '-3px',
    'right': '3px'
  });

  // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
  if ($('.iw-content').height() < 140) {
    $('.iw-bottom-gradient').css({ display: 'none' });
  }
}

function accordionhoverState() {
  $(".card-box").mouseenter(function () {
    var itemNo = $(this).index();
    $(".card-box").removeClass("active");
    $(this).addClass("active");
    $(this).parent().removeClass("hover0");
    $(this).parent().removeClass("hover1");
    $(this).parent().removeClass("hover2");
    $(this).parent().addClass("hover" + itemNo);
  });

}
var modal = document.getElementById("myModal");
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.style.display = "none";
  }
});

jQuery(document).ready(function () {
  // Determine the number of steps dynamically
  var totalSteps = $('.wizard-fieldset').length;
  $('.form-wizard-next-btn').on('click', function () {
    var currentStep = $('.wizard-fieldset.active').data('content');
    if (currentStep == totalSteps) {
      $(this).closest('form').submit();
    }
  });
});

jQuery(document).ready(function () {
  jQuery('.form-wizard-next-btn').click(function () {
    var parentFieldset = jQuery(this).parents('.wizard-fieldset');
    // console.log('parentFieldset-->', parentFieldset);
    var currentActiveStep = jQuery(this).parents('.wrapper').find('.form-wizard-steps .active');
    // console.log('currentActiveStep-->', currentActiveStep);
    var next = jQuery(this);
    var nextWizardStep = true;

    // Regex patterns
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;
    var numberRegex = /^\d+$/;
    var urlRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

    // Custom error messages
    var errorMessages = {
      empty: "This field is required.",
      invalidEmail: "Please enter a valid email address.",
      invalidPhone: "Please enter a valid 10-digit phone number.",
      invalidNumber: "Please enter a valid number.",
      invalidUrl: "Please enter a valid Url."
    };

    // Check if all fields on the current page are filled and valid
    parentFieldset.find('.wizard-required').each(function () {
      var thisValue = jQuery(this).val();
      var thisField = jQuery(this);
      var thisType = thisField.attr('type');
      var isValid = true;
      var errorMessage = errorMessages.empty;

      if (thisValue === "") {
        isValid = false;
      } else {
        if (thisField.hasClass('email')) {
          isValid = emailRegex.test(thisValue);
          if (!isValid) errorMessage = errorMessages.invalidEmail;
        } else if (thisField.hasClass('telephone')) {
          isValid = phoneRegex.test(thisValue);
          if (!isValid) errorMessage = errorMessages.invalidPhone;
        } else if (thisField.hasClass('number')) {
          isValid = numberRegex.test(thisValue);
          if (!isValid) errorMessage = errorMessages.invalidNumber;
        } else if (thisField.hasClass('webUrl')) {
          isValid = urlRegex.test(thisValue);
          if (!isValid) errorMessage = errorMessages.invalidUrl;
        }
      }

      if (!isValid) {
        thisField.siblings(".error").text(errorMessage).slideDown();
        nextWizardStep = false;
      } else {
        thisField.siblings(".error").slideUp();
      }
    });

    // Check if checkboxes are selected
    var checkboxes = parentFieldset.find('.contact-rcu-form input[type="checkbox"]');
    if (checkboxes.length > 0 && !checkboxes.is(':checked')) {
      let errorDiv = parentFieldset.find('#errorRadio');
      let errorDivCheckbox = parentFieldset.find('#error');
      errorDiv.removeClass('error').addClass('custom-error').text("Please select at least one checkbox.");
      errorDivCheckbox.removeClass('error').addClass('custom-error').text("Please select at least one checkbox.");
      nextWizardStep = false;
    } else {
      parentFieldset.find('#errorRadio').removeClass('custom-error').addClass('error').text("");
    }

    // Check if radio buttons are selected
    var radioButtons = parentFieldset.find('.incentive-radios input[type="radio"]');
    if (radioButtons.length > 0 && !radioButtons.is(':checked')) {
      let errorDiv = parentFieldset.find('#errorRadio1');
      errorDiv.removeClass('error').addClass('custom-error').text("Please select an option.");
      nextWizardStep = false;
    } else {
      parentFieldset.find('#errorRadio1').removeClass('custom-error').addClass('error').text("");
    }

    // Check if location radios are selected
    var locationRadioButtons = parentFieldset.find('.location-radios input[type="radio"]');
    if (locationRadioButtons.length > 0 && !locationRadioButtons.is(':checked')) {
      let errorDiv = parentFieldset.find('#errorRadioLocation');
      errorDiv.removeClass('error').addClass('custom-error').text("Please select a location.");
      nextWizardStep = false;
    } else {
      parentFieldset.find('#errorRadioLocation').removeClass('custom-error').addClass('error').text("");
    }

    // Proceed to the next step if all conditions are met
    if (nextWizardStep) {
      parentFieldset.removeClass("active 400");
      currentActiveStep.removeClass('active').addClass('activated').removeClass('disabled')
        .next().addClass('active 400');
      parentFieldset.next('.wizard-fieldset').addClass("active 400");
      // Update step indicators
      // jQuery(document).find('.wizard-fieldset.active').each(function () {
      //   var formAtrr = jQuery(this).attr('data-content');
      //   console.log("formAtrr--->",formAtrr)
      //   console.log("jQuery(this--->",jQuery(this))
      //   console.log("data-attr--->",jQuery(this).attr('data-attr'))

      //   jQuery(document).find('.form-wizard-steps').each(function () {
      //     if (jQuery(this).attr('data-attr') === formAtrr) {
      //       console.log("data-attr == formAtrr",)
      //       jQuery(this).addClass('active');
      //       var innerWidth = jQuery(this).innerWidth();
      //       var position = jQuery(this).position();
      //       jQuery(document).find('.form-wizard-step-move').css({ "left": position.left, "width": innerWidth });
      //     } else {
      //       console.log("data-attr !== formAtrr",)
      //       jQuery(this).removeClass('active');
      //     }
      //   });
      // });
    }

  });

  //not working
  // Click on previous button
  // jQuery('.form-wizard-previous-btn').click(function () {
  //   var counter = parseInt(jQuery(".wizard-counter").text());
  //   var prev = jQuery(this);
  //   var currentActiveStep = jQuery(this).parents('.wrapper').find('.form-wizard-steps .active');
  //   prev.parents('.wizard-fieldset').removeClass("active", "400");
  //   prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("active", "400");
  //   currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active', "400");
  //   jQuery(document).find('.wizard-fieldset').each(function () {
  //     if (jQuery(this).hasClass('active')) {
  //       var formAtrr = jQuery(this).attr('data-tab-content');
  //       jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function () {
  //         if (jQuery(this).attr('data-attr') == formAtrr) {
  //           jQuery(this).addClass('active');
  //           var innerWidth = jQuery(this).innerWidth();
  //           var position = jQuery(this).position();
  //           jQuery(document).find('.form-wizard-step-move').css({ "left": position.left, "width": innerWidth });
  //         } else {
  //           jQuery(this).removeClass('active');
  //         }
  //       });
  //     }
  //   });
  // });

  // Click on form submit button
  // jQuery(document).on("click", ".form-wizard .form-wizard-submit", function () {
  //   var parentFieldset = jQuery(this).parents('.wizard-fieldset');
  //   var currentActiveStep = jQuery(this).parents('.wrapper').find('.form-wizard-steps .active');
  //   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   var phoneRegex = /^\d{10}$/;
  //   var numberRegex = /^\d+$/;

  //   var errorMessages = {
  //     empty: "This field is required.",
  //     invalidEmail: "Please enter a valid email address.",
  //     invalidPhone: "Please enter a valid 10-digit phone number.",
  //     invalidNumber: "Please enter a valid number."
  //   };

  //   parentFieldset.find('.wizard-required').each(function () {
  //     var thisValue = jQuery(this).val();
  //     var thisField = jQuery(this);
  //     var isValid = true;
  //     var errorMessage = errorMessages.empty;

  //     if (thisValue === "") {
  //       isValid = false;
  //     } else {
  //       if (thisField.hasClass('email')) {
  //         isValid = emailRegex.test(thisValue);
  //         if (!isValid) errorMessage = errorMessages.invalidEmail;
  //       } else if (thisField.hasClass('telephone')) {
  //         isValid = phoneRegex.test(thisValue);
  //         if (!isValid) errorMessage = errorMessages.invalidPhone;
  //       } else if (thisField.hasClass('number')) {
  //         isValid = numberRegex.test(thisValue);
  //         if (!isValid) errorMessage = errorMessages.invalidNumber;
  //       }
  //     }

  //     if (!isValid) {
  //       thisField.siblings(".invalid--error").removeClass('error').text(errorMessage).slideDown();
  //     } else {
  //       thisField.siblings(".invalid--error").slideUp();
  //     }
  //   });
  // });

  // Focus on input field check empty or not
  jQuery(".form-control").on('focus', function () {
    var tmpThis = jQuery(this).val();
    if (tmpThis == '') {
      jQuery(this).parent().addClass("focus-input");
    } else if (tmpThis != '') {
      jQuery(this).parent().addClass("focus-input");
    }
  }).on('blur', function () {
    var tmpThis = jQuery(this).val();
    if (tmpThis == '') {
      jQuery(this).parent().removeClass("focus-input");
      jQuery(this).siblings('.error').text("This field is required.").slideDown("3000");
    } else if (tmpThis != '') {
      jQuery(this).parent().addClass("focus-input");
      jQuery(this).siblings('.error').slideUp("3000");
    }
  });
});
``


jQuery(document).ready(function () {
  const tabs = document.querySelectorAll('.js-form-tab');
  const contents = document.querySelectorAll('.js-form-content');

  // Activate the first tab by default
  tabs[0]?.classList?.add('active');
  contents[0]?.classList?.add('active');

  // Disable tabs after the first one
  for (let i = 1; i < tabs.length; i++) {
    if (!tabs[i].classList.contains('activated')) {
      tabs[i].classList.add('disabled');
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab');

      // Remove active class from all tabs and contents
      tabs.forEach(tab => tab.classList.remove('active', 'disabled'));
      contents.forEach(content => content.classList.remove('active'));

      // Add active class to the clicked tab and corresponding content
      this.classList.add('active');
      document.querySelector(`.js-form-content[data-content="${tabId}"]`).classList.add('active');

      // Disable tabs after the active one
      for (let i = index + 1; i < tabs.length; i++) {
        if (!tabs[i].classList.contains('activated')) {
          tabs[i].classList.add('disabled');
        }
      }
    });
  });
});

$(document).ready(function () {
  // Check if a div has the class 'ktc-file-component-wrapper'
  $('div.ktc-file-component-wrapper').each(function () {
    // Add the class 'file-upload-wrapper' if the condition is met
    $(this).addClass('file-upload-wrapper');
  });
});

function initializeSearchFunctionality(faqContainer) {
  var resultCount = 0;

  // Hide the cancel icon by default
  faqContainer.find('.cancel-icon').hide();

  faqContainer.find('.txt-search').on('input', function () {
    resultCount = 0;
    var inputText = $(this).val().trim();
    if (inputText !== '') {
      faqContainer.find('.cancel-icon').show();
      faqContainer.find('.search-icon').hide();
    } else {
      faqContainer.find('.cancel-icon').hide();
      faqContainer.find('.search-icon').show();
    }

    var searchText = inputText.toLowerCase();
    faqContainer.find('.heading-box').hide();
    faqContainer.find('.title-text').hide();
    const allTitleText = faqContainer[0].querySelectorAll('.button-list .title-text');

    // Iterate over each card
    faqContainer.find('.card').each(function () {
      var cardText = $(this).text().toLowerCase();
      var headingBox = $(this).closest('.accordion').find('.heading-box');

      if (cardText.includes(searchText)) {
        resultCount++;
        $(this).show();
        $(this).parent().find('.heading-box .wrapper-heading .heading2').addClass('sec-animate');
        headingBox.show();

        const searchAccordion = $(this).closest('.accordion').attr("data-accordion-id");
        $(allTitleText[searchAccordion - 1]).show();
      } else {
        $(this).hide();
      }
    });

    updateNoResultsVisibility(faqContainer);
    updateSearchResultMessage(searchText, faqContainer);

    cancelIconButtonFunctionality(faqContainer);
  });

  function updateSearchResultMessage(searchText, faqContainer) {
    faqContainer.find('.result-count').text(resultCount);
    faqContainer.find('.search-text').text(searchText);
    if (resultCount === 0 || searchText === '') {
      faqContainer.find('.searchResults').hide();
    } else {
      faqContainer.find('.searchResults').show();
    }
  }

  function updateNoResultsVisibility(faqContainer) {
    if (faqContainer.find('.card:visible').length === 0) { // Changed .accordion to .card
      faqContainer.find('.no-results').show();
    } else {
      faqContainer.find('.no-results').hide();
    }
  }

  function cancelIconButtonFunctionality(faqContainer) {
    faqContainer.find('.btn-search .cancel-icon').click(function () {
      faqContainer.find('.txt-search').val('');
      faqContainer.find('.cancel-icon').hide();
      faqContainer.find('.search-icon').show();
      faqContainer.find('.accordion .card').show();
      faqContainer.find('.title-text').show();
      faqContainer.find('.heading-box').show();
      faqContainer.find('.searchResults').hide();
      updateNoResultsVisibility(faqContainer);
    });
  }

}

//all the above code is estable
function filterSlider($FilterSlider, $container) {
  var $paginationLabel = $container.find('.custom-pagination-label');
  var $prevArrow = $container.find('.custom-arrows.prev');
  var totalSlides = $FilterSlider.children().length;
  let slidesToShow = 4
  $FilterSlider.on('init', function (event, slick) {
    var totalSlides = slick.slideCount;
    $paginationLabel.html('<span class="current-slide">01</span><span class="separator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
  });

  $FilterSlider.slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: isRTL,
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ],
    customPaging: function (slider, i) {
      return '<div class="custom-pagination-dot"></div>';
    }
  });

  $container.find('.custom-arrows.prev').click(function () {
    // $FilterSlider.slick('slickPrev');
    if (isRTL) {
      $FilterSlider.slick('slickNext');
    } else {
      $FilterSlider.slick('slickPrev');
    }
  });

  $container.find('.custom-arrows.next').click(function () {
    // $FilterSlider.slick('slickNext');
    if (isRTL) {
      $FilterSlider.slick('slickPrev');
    } else {
      $FilterSlider.slick('slickNext');
    }
  });

  $FilterSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalSlides = slick.slideCount;
    var nextSlideNumber = (nextSlide + 1).toString().padStart(2, '0');
    $paginationLabel.html('<span class="current-slide">' + nextSlideNumber + '</span><span class="separator"> / </span><span class="total-slides">' + totalSlides.toString().padStart(2, '0') + '</span>');
  });

  // Handle filter click
  $container.find(".filter .nav-link").on('click', function () {
    var filterValue = $(this).data('filter');
    $FilterSlider.slick('slickUnfilter');

    if (filterValue == '.category-tab1') {
      $FilterSlider.slick('slickFilter', '.category-tab1');
    }
    else if (filterValue == '.category-tab2') {
      $FilterSlider.slick('slickFilter', '.category-tab2');
    }
    else if (filterValue == '.category-tab3') {
      $FilterSlider.slick('slickFilter', '.category-tab3');
    }
    else if (filterValue == '*') {
      $FilterSlider.slick('slickUnfilter');
    }

    var visibleItemsCount = $FilterSlider.find(".listingWrapper:visible").length;

    if (visibleItemsCount < 4) {
      // $FilterSlider.addClass('noSlider');
      $container.find(".arrow-wrap").addClass('noSlider--pagination ');
    } else {
      // $FilterSlider.removeClass('noSlider');
      $container.find(".arrow-wrap").removeClass('noSlider--pagination ');
      // filterSlider($FilterSlider, $container);
    }

  });

  $(window).resize(function () {
    $container.find(".filter .nav-link.active").trigger('click');
  });
  if (totalSlides <= slidesToShow) {
    $FilterSlider.addClass('noSlider');
    $FilterSlider.parent().find(".slider-arrow-pagination").addClass('noSlider--pagination');
    $container.find(".arrow-wrap").addClass('noSlider--pagination');
  } else {
    $FilterSlider.removeClass('noSlider');
    $FilterSlider.parent().find(".slider-arrow-pagination").removeClass('noSlider--pagination');
    return true; // slider should be initialized
  }
}


function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
function isValidNumber(number) {
  return !isNaN(number);
}

function footerNewsletterValidation() {

  $('.news-letter-submit-btn').on('click', function (e) {
    e.preventDefault(); // Prevent form submission
    var inputVal = $('.news-letter-input').val();
    if (inputVal === '') {
      $('.error').show();
      $('.invalid-email-error').hide();
    } else if (!isValidEmail(inputVal)) {
      $('.invalid-email-error').show();
      $('.error').hide();
    } else {
      $('.error').hide();
      $('.invalid-email-error').hide();
    }
  });

  $('.news-letter-input').on('input', function () {
    if ($(this).val() !== '') {
      $('.error').hide(); // Hide the required field error message if input is not empty
    }
    if (isValidEmail($(this).val())) {
      $('.invalid-email-error').hide(); // Hide invalid email error if input is valid email
    }
  });
}

// open / close view and download card dropdown

function openCloseVAndDDropdown() {
  $('.js-v-and-d-download-btn').click(function(e){
    e.stopPropagation();
    if ($(this).next().hasClass('v-and-d-dropdown-active')){
      $(this).next().removeClass('v-and-d-dropdown-active').css('height', '0');
    } else {
      $('.js-v-and-d-dropdown-menu').removeClass('v-and-d-dropdown-active').css('height', '0');
      $(this).next().addClass('v-and-d-dropdown-active');
      let v_and_d_dropdown_menu_height = ($(this).next().prop('scrollHeight'));
      $(this).next().css('height', v_and_d_dropdown_menu_height + 'px');
    }
  });

  // Closing dropdown on click on dropdown item

  $('.js-v-and-d-dropdown-menu ul li a').click(function() {
    $('.js-v-and-d-dropdown-menu').removeClass('v-and-d-dropdown-active').css('height', '0');
  });

  // Closing dropdown on screen resize

  $(window).bind("resize", function () {
    $('.js-v-and-d-dropdown-menu').removeClass('v-and-d-dropdown-active').css('height', '0');
  });

  // Closing dropdown on click anywhere except itself

  $(document).click(function(){
    $('.js-v-and-d-dropdown-menu').removeClass('v-and-d-dropdown-active').css('height', '0');
  });

  $('.js-v-and-d-dropdown-menu').click(function (e) {
    e.stopPropagation();
  });
}

// cards isotopes
let $grid1;
function cardsIsotopes() {
  
  // init Isotope
  var $grid = $('.js-data-library .grid').isotope({
  itemSelector: '.view-and-download-card-wrapper',
  layoutMode: 'masonry',
  // percentPosition: true,
  // fitRows: {
  //   // gutter: 20
  //   equalheight: true
  // },
  masonry: {
    columnWidth: '.view-and-download-card-wrapper' 
  }
  });

  $grid1 = $grid;

  //$grid.isotope({ filter: '*' });

  // Ensure correct initial layout and equalize heights
  function initLayout() {
    $grid.isotope('layout');
    equalizeHeights();
  }

  // Equalize heights
  function equalizeHeights() {
    if ( $(window).width() > 600 ) {
      
      var $items = $('.js-data-library .view-and-download-card-wrapper');

      // Reset height
      $items.height('auto');

      // Calculate the max height
      var maxHeight = 0;
      $items.each(function() {
        var itemHeight = $(this).outerHeight();
        if (itemHeight > maxHeight) {
          maxHeight = itemHeight;
        }

      });

      // Set all items to max height
      $items.height(maxHeight);
      $('.view-and-download-card').height('inherit');
    } else {
      $('.js-data-library .view-and-download-card-wrapper').height('auto');
      $('.view-and-download-card').height('inherit');
    }
  }

  // Call equalizeHeights after Isotope layout is complete
  // $grid.on('layoutComplete', function() {
  //   equalizeHeights();
  //   // Ensure layout is correct when the page loads
  //   $(document).ready(function() {
  //     initLayout();
  //   });
  // });

  // Trigger initial layout
  initLayout();

  $('.js-data-library .filter-button-group').on('click', 'button', function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // Re-layout on window resize
  $(window).on('resize', function() {
    // Ensure layout is correct when the page loads
    $(document).ready(function() {
      initLayout();
    });
    $grid.isotope('layout');
    equalizeHeights();
    
  });

  //equalizeHeights();
  
  // Ensure layout is correct when the page loads
  $(document).ready(function() {
    initLayout();
  });

  // Handling click on view btns

  $('.js-data-library .js-view-btn').click(function (){
    $('.js-data-library .js-view-btn').removeClass('active-view-btn');
    $(this).addClass('active-view-btn');

    if ( $(this).hasClass('grid-view') ) {
      $('.js-data-library .js-view-and-download-cards').removeClass('list-view-active');
      $(document).ready(function() {
        initLayout();
      });
    } else {
      $('.js-data-library .js-view-and-download-cards').addClass('list-view-active');
      $(document).ready(function() {
        initLayout();
      });
    }
  });
}

// Cards category btns slider

function cardSlickSlider () {
  let settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6
        }
      }
      // {
      //   breakpoint: 601,
      //   settings: {
      //     slidesToShow: 1
      //   }
      // }
    ]
  };
  $('.js-data-library .js-btns-wrapper').slick(settings);

  
  $('.js-data-library .js-btns-wrapper .js-category-btn').click(function () {
    $('.js-data-library .js-btns-wrapper .js-category-btn').removeClass('active-category-btn');
    $(this).addClass('active-category-btn');
  });

  $('.js-prev-btn').click(function () {
    $('.js-btns-wrapper').slick("slickPrev");
  });
  
  $('.js-next-btn').click(function () {
    $('.js-btns-wrapper').slick("slickNext");
  });
  
  $(".js-prev-btn").addClass("prev-btn-disable");
  
  $(".js-data-library .js-btns-wrapper").on("afterChange", function () {
    if ($(".js-data-library .slick-prev").hasClass("slick-disabled")) {
      $(".js-prev-btn").addClass("prev-btn-disable");
    } else {
      $(".js-prev-btn").removeClass("prev-btn-disable");
    }
    if ($(".js-data-library .slick-next").hasClass("slick-disabled")) {
      $(".js-next-btn").addClass("next-btn-disable");
    } else {
      $(".js-next-btn").removeClass("next-btn-disable");
    }
  });

  if ($(window).width() < 601) { 
    if ($('.js-data-library .js-btns-wrapper').hasClass('slick-initialized')) {
      $('.js-data-library .js-btns-wrapper').slick('unslick');
    }
  } else {
    if (!$('.js-data-library .js-btns-wrapper').hasClass('slick-initialized')) {
      $('.js-data-library .js-btns-wrapper').slick(settings);
    }
  }

  $(window).on('resize', function() {
    if ($(window).width() < 601) { 
      if ($('.js-data-library .js-btns-wrapper').hasClass('slick-initialized')) {
        $('.js-data-library .js-btns-wrapper').slick('unslick');
      }
    } else {
      if (!$('.js-data-library .js-btns-wrapper').hasClass('slick-initialized')) {
        $('.js-data-library .js-btns-wrapper').slick(settings);
      }
    }
  });  
}

// Handling click on view btns

// function handleViewBtnClick () {
  // $('.js-data-library .js-view-btn').click(function (){
  //   $('.js-data-library .js-view-btn').removeClass('active-view-btn');
  //   $(this).addClass('active-view-btn');

  //   if ( $(this).hasClass('grid-view') ) {
  //     $('.js-data-library .js-view-and-download-cards').removeClass('list-view-active');
  //   } else {
  //     $('.js-data-library .js-view-and-download-cards').addClass('list-view-active');
  //   }
  // });

    // if ( $(this).hasClass('grid-view') ) {
    //   if ( $(window).width() > 991 ){
    //     $('.js-data-library .view-and-download-card-wrapper').css('width', 'calc(33.333% - 1.25rem)');
    //   } else if ( $(window).width() > 600 ) {
    //     $('.js-data-library .view-and-download-card-wrapper').css('width', 'calc(50% - 1.25rem)');
    //   } else if ( $(window).width() < 601 ) {
    //     $('.js-data-library .view-and-download-card-wrapper').css('width', 'calc(100% - 1.25rem)');
    //   } 
    // } else {
    //   $('.js-data-library .view-and-download-card-wrapper').css('width', 'calc(100% - 1.25rem)');
    // }
  

  // $(window).on('resize', function() {
  //   if ( $(window).width() > 991 ){
  //     $('.js-data-library .view-and-download-card-wrapper').css('width', 'calc(33.333% - 1.25rem)');
  //   } else if ( $(window).width() > 600 ) {
  //     $('.js-data-library .view-and-download-card-wrapper').css('width', 'calc(50% - 1.25rem)');
  //   } else if ( $(window).width() < 601 ) {
  //     $('.js-data-library .view-and-download-card-wrapper').css('width', 'calc(100% - 1.25rem)');
  //   } 
  // });
// }

// card sidebar

function cardsSidebar () {

  // giving top to sidebar on scroll
  let topp;
  window.onscroll = function () {
    topp = $(window).scrollTop();
    $('.js-cards-filter-sidebar').css('top', topp);
  };
  
  // opening sidebar
  $('.js-data-library .js-filter').click(function (e) {
    e.stopPropagation();
    $('.js-cards-filter-sidebar').addClass('filter-sidebar-active');
  });

  // Closing sidebar on click anywhere except itself
  $(document).click(function(){
    $('.js-cards-filter-sidebar').removeClass('filter-sidebar-active');
    $('.js-cards-filter-sidebar .js-filter-btn').removeClass('active-filter-btn');
    $('.js-cards-filter-sidebar .js-no-of-selected-filter').html( $('.js-cards-filter-sidebar .active-filter-btn').length );
    activeFilters = "";
  });

  $('.js-cards-filter-sidebar').click(function (e) {
    e.stopPropagation();
  });

  // Closing sidebar on pressing escape key
  $(document).keydown(function (e) {
    if (e.keyCode === 27){
      $('.js-cards-filter-sidebar').removeClass('filter-sidebar-active');
      $('.js-cards-filter-sidebar .js-filter-btn').removeClass('active-filter-btn');
      $('.js-cards-filter-sidebar .js-no-of-selected-filter').html( $('.js-cards-filter-sidebar .active-filter-btn').length );
      activeFilters = "";
    }
  });

  // Closing sidebar on clicking cross 
  $('.js-cards-filter-sidebar .js-sidebar-cross').click(function () {
    $('.js-cards-filter-sidebar').removeClass('filter-sidebar-active');
    $('.js-cards-filter-sidebar .js-filter-btn').removeClass('active-filter-btn');
    $('.js-cards-filter-sidebar .js-no-of-selected-filter').html( $('.js-cards-filter-sidebar .active-filter-btn').length );
    activeFilters = "";
  });
}

// Handling click on filter sidebar, filter categories buttons

let activeFilters = "";

function handlingFilterBtnClick () {

  // Filters buttons click
  $('.js-cards-filter-sidebar .js-filter-btn').click(function () {
    $(this).addClass('active-filter-btn');
    activeFilters += $(this).attr('data-filter') + ', ';
    $('.js-cards-filter-sidebar .js-no-of-selected-filter').html( $('.js-cards-filter-sidebar .active-filter-btn').length );
  });

  // Clear filter button click
  $('.js-cards-filter-sidebar .js-clear-filter-btn').click(function () {
    $('.js-cards-filter-sidebar .js-filter-btn').removeClass('active-filter-btn');
    $('.js-cards-filter-sidebar .js-no-of-selected-filter').html( $('.js-cards-filter-sidebar .active-filter-btn').length );
    activeFilters = "";
  });

  // Apply filters button click
  let activeCategoryBtns;
  $('.js-cards-filter-sidebar .js-apply-filter-btn').click(function () {
    if (activeFilters[activeFilters.length-2] === ',') { 
      activeFilters = activeFilters.slice(0, activeFilters.length-2);
    }
    // console.log(activeFilters);
    activeCategoryBtns = activeFilters.split(',');
    for (let i = 0; i < activeCategoryBtns.length; i++){
      activeCategoryBtns[i] = activeCategoryBtns[i].trimStart();
    }
    console.log(activeCategoryBtns);
    $grid1.isotope({ filter: activeFilters});
    activeFilters = "";
    $('.js-cards-filter-sidebar .js-filter-btn').removeClass('active-filter-btn');
    $('.js-cards-filter-sidebar .js-no-of-selected-filter').html( $('.js-cards-filter-sidebar .active-filter-btn').length );
    $('.js-cards-filter-sidebar').removeClass('filter-sidebar-active');
    $('.js-data-library .js-btns-wrapper .js-category-btn').removeClass('active-category-btn');
    $('.js-data-library .js-btns-wrapper .js-category-btn').each(function(){
      if ( activeCategoryBtns.includes($(this).attr('data-filter'))) {
        $(this).addClass('active-category-btn');
      }
    });
  });
}