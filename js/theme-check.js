$(document).ready(function() {
                        if ( $("body").hasClass("style-Royal")) {
                                $("#header-dragon").attr('src', function(i, src) {return src.replace( 'chinese-dragon.png', 'ancient-chinese-building-scale2.png' );
                        })
                                $("#header-dragon").css( 'opacity',"1")
                }
        })
$(document).ready(function() {
if ( !$("body").hasClass("style-Royal")) {
                                $("#header-dragon").attr('src', function(i, src) {return src.replace( 'ancient-chinese-building-scale2.png', 'chinese-dragon.png' );
                        })
                                $("#header-dragon").css( 'opacity',"0.7")
                }
        })