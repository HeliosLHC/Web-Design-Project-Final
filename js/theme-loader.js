$(document).ready( function() {
  /* THEME LOADER */
  $(".theme-menu").click (function () {
    // Clear current value
    var curVal = $.cookie('style');
    $("body").removeClass("style-"+curVal);
    // Update value
    var val = $(this).html();
    $("body").addClass("style-"+val);
    $.cookie('style', val, { expires: 1000000, path: '/' });
    if ( $("body").hasClass("style-Royal")) {
                                $("#header-dragon").attr('src', function(i, src) {return src.replace( 'chinese-dragon.png', 'ancient-chinese-building-scale2.png' );
                        })
                                $("#header-dragon").css( 'opacity',"1")
                }
    if ( !$("body").hasClass("style-Royal")) {
                                $("#header-dragon").attr('src', function(i, src) {return src.replace( 'ancient-chinese-building-scale2.png', 'chinese-dragon.png' );
                        })
                                $("#header-dragon").css( 'opacity',"0.7")
                }
  });
  if (document.cookie.length > 0) {
    sCookies = document.cookie;
    aCookies = sCookies.split("; ");
    for (i = 0; i < aCookies.length; i++) {
      aThisCookie = aCookies[i].split('=');
      if (aThisCookie[0] == "style") {
        document.body.className = "style-"+aThisCookie[1];
        break;
      }
    }
  }
}); 
