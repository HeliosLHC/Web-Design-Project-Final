$(document).load(function(){
				    $("#seigaiha").click(function(){
					        $("body").css( 'background-image',"url('patterns/seigaiha.png')");
					        $("#header-dragon").css( 'opacity',"0.7")
					        $("#header-dragon").attr('src', function(i, src) {return src.replace( 'ancient-chinese-building-scale2.png', 'chinese-dragon.png' );
						}); 
					});	
				    $("#seigaiha-dark").click(function(){
					        $("body").css( 'background-image',"url('patterns/seigaiha-styled.png')");
					        $("#header-dragon").css( 'opacity',"0.7")
					        $("#header-dragon").attr('src', function(i, src) {return src.replace( 'ancient-chinese-building-scale2.png', 'chinese-dragon.png' );
						}); 
					});
				    $("#golden-swirl").click(function(){
					       $("body").css( 'background-image',"url('patterns/golden-swirls2.png')");
					       $("#header-dragon").css( 'opacity',"1")
					       $("#header-dragon").attr('src', function(i, src) {return src.replace( 'chinese-dragon.png', 'ancient-chinese-building-scale2.png' );
						}); 
					});	
				});