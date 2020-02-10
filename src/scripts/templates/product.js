import {load} from '@shopify/theme-sections';
import '../sections/product';
import $ from "jquery";
import * as slick from 'slick-carousel';

load('*');


// Product quantity 
$( document ).ready(function() {
    const $incrementButton = $('#quantity-increment');
    const $decrementButton = $('#quantity-decrement');
    const $quantityInput =  $('#Quantity');
    const $quantityAmount = $('#quantity-amount');

    $incrementButton.on('click', (e) => {
        e.preventDefault();

        $quantityInput.val((i, currentValue) => {
            const newValue = parseInt(currentValue) + 1;
            setQuantityAmount(newValue)
            return newValue;
        })
    })

    $decrementButton.on('click', (e) => {
        e.preventDefault();

        $quantityInput.val((i, currentValue) => {
            const attemptedNewValue = parseInt(currentValue) - 1;
            
            if(attemptedNewValue <= 1) {
                setQuantityAmount(1);
                return 1;
            }
            setQuantityAmount(attemptedNewValue);
            return attemptedNewValue;
        })
    })

    function setQuantityAmount(val) {
        $quantityAmount.text(val)
    }
});


$( document ).ready(function() {
    
    var allPanels = $('.accordion > dd').hide();
    var $chevrons = $('.chevron');
      
    $('.accordion > dt > a').click(function() {

      if($(this).parent().next().is(':visible')){
        allPanels.slideUp();
        $chevrons.removeClass('top').addClass('bottom');
        return false;
      }

      allPanels.slideUp();
      $chevrons.removeClass('top').addClass('bottom');
      $(this).parent().next().slideDown();
      $(this).find('.chevron').removeClass('bottom').addClass('top');
      return false;
    });

    
    let $readMoreButtons = $('.read-more');

    $readMoreButtons.click(function(e) {
        e.preventDefault();
        let $contentContainer = $(this).prev('.acc-content-container');
        $contentContainer.addClass('expanded');
    });
});


$( document ).ready(function() {
    const $gallery = $('.slick-product-image-gallery');
    const $allDesktopThumbnailItems = $(".thumbnails-desktop ul li");
    const $allDesktopThumbnailLinks = $('.thumbnails-desktop ul li a');

    const $allMobileThumbnailItems = $(".thumbnails-mobile ul li");
    const $allMobileThumbnailLinks = $('.thumbnails-mobile ul li a');
    const activeClass = 'active-thumbnail';

    $gallery.slick({
        adaptiveHeight: true,
        infinite: true,
        nextArrow: '<button type="button" class="gallery-button gallery-next"><span class="chevron right"></button>',
        prevArrow: '<button type="button" class="gallery-button gallery-prev"><span class="chevron left"></button>',
        responsive: [
            {
              breakpoint: 900,
              settings: {
                adaptiveHeight: true,
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
                centerPadding: '60px',
              }
            },
        ],
    }); 


    $gallery.on(
        'beforeChange', 
        function(event, slick, currentSlide, nextSlide){
            $allDesktopThumbnailLinks.removeClass(activeClass)
            $allDesktopThumbnailItems.eq(nextSlide).find('a').addClass(activeClass)

            $allMobileThumbnailLinks.removeClass(activeClass)
            $allMobileThumbnailItems.eq(nextSlide).find('a').addClass(activeClass)
      }
    );


    $allDesktopThumbnailItems.click(function(e){
        e.preventDefault();
        let slideIndex = $(this).index();
        $gallery.slick('slickGoTo', slideIndex);
    });

    $allMobileThumbnailItems.click(function(e){
        e.preventDefault();
        let slideIndex = $(this).index();
        $gallery.slick('slickGoTo', slideIndex);
    });
});
