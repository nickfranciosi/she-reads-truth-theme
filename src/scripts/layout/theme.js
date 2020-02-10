import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';

import $ from "jquery";
import * as mmenu from "mmenu-js";

// Common a11y fixes
focusHash();
bindInPageLinks();

// Apply a specific class to the html element for browser support of cookies.
// if (cookiesEnabled()) {
//   document.documentElement.className = document.documentElement.className.replace(
//     'supports-no-cookies',
//     'supports-cookies',
//   );
// }

if (window.navigator.cookieEnabled) {
  document.documentElement.className = document.documentElement.className.replace(
    'supports-no-cookies',
    'supports-cookies',
  );
}

$( document ).ready(function(){
    $("#mobile-menu-trigger").on('click', function(e){
        e.preventDefault();
        $('#mobile-menu').toggleClass('open');
        $('body').toggleClass('mobile-menu-open');
    })

    $('.mobile-menu-mask').on('click', function(e){
      e.preventDefault();
      $('#mobile-menu').removeClass('open');
      $('body').removeClass('mobile-menu-open');
    })

    $('.has-submenu').on('click', function(e){
      e.preventDefault();
      const menuToShow = $(this).data('ref');
      $(`[data-menu='${menuToShow}']`).addClass('is-active');
    })


    $('.mobile-back').on('click', function(e){
      e.preventDefault();
      $(this).closest('.mobile-menu-panel').removeClass('is-active');
    })
});

