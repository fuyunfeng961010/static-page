// 页面头部  导航+标题
// 三级导航 出现 箭头旋转
$('#container .container .daohang .yiji .erji').mouseenter(function(){
	// $('#container .container .daohang .yiji .erji ul').css('display','block')
	$('#container .container .daohang .yiji .erji ul').finish().slideDown(200);
	$('#container .container .daohang .yiji ul .jiantou').css({
		'transform':'rotatez(180deg)',
		'transition':'all 0.5s ease'

	})
}).mouseleave(function(){
	$('#container .container .daohang .yiji .erji ul').finish().slideUp(200);
	$('#container .container .daohang .yiji ul .jiantou').css({
		'transform':'rotatez(360deg)',
		'transition':'all 0.5s ease'
	})
})

// 点击按钮 导航滑出
var index = 0;
var $anniu=$('#container .container #daohang');
$('#container .container .anniu').click(function(){
	if(index == 0){
		var tihuan=$(this).attr('tihuan')
		$anniu.attr('class',tihuan);
		$(this).css({
		'transform':'rotatez(270deg)',
		'transition':'all 1s ease'
		})
		$('#container .container .daohang').css('display','block').animate({
		'width':'300px'
	},400,function(){
		index = 1;
	})
	}else{
		var clas=$(this).attr('tihuan2')
		$anniu.attr('class',clas);
		$(this).css({
		'transform':'rotatez(360deg)',
		'transition':'all 1s ease'
		})
		$('#container .container .daohang').animate({
			'width':'0px'
		},400,function(){
			$('#container .container .daohang').css('display','none');
			index = 0;
		});
	}
})


// 标题滑下效果
setTimeout(function(){
		$('#container .container .logo').animate({
			'top':'120px'
		},1000);
},500)

// h1,h2淡出效果
setTimeout(function(){
	$('#container .container .biaoti').fadeIn(1000);
},1000)

//主体内容 动画
//小屏+大屏
var kuan = $(window).outerWidth();
$(window).resize(function(){
	kuan =$(this).width();
})
$(window).scroll(function(){
	var index=$(this).scrollTop();
	console.log(index);
	// 小屏
	if(kuan < 768){
		//标题上 + 下
		if(index<=0){
			$('#container .container .logo').finish().animate({
				'top':'120px'
			},1000);
		}
		if(index>=100){
			$('#container .container .logo').finish().animate({
				'top':'0px'
			},1000);
			// 导航固定定位
			$('#daohang2').css({
				'position':'fixed',
				'top':'0',
				'background':'#181818',
			})
		}
		if(index>300){
			$('#content .kuang .tu1 img').css({
				'display':'block'
			})
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},600)
			
		}
		//内容one 滑上效果
		if(index>500){
			$('#content .kuang .one').css('display','block')
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},500)
		}

		// 中部内容动画
		if(index>1200){
			$('#content .kuang .three1').fadeIn(500);
			$('#content .kuang .three1 img').animate({
				'paddingTop':'0px'
			},500)
		}
		if(index>1800){
			$('#content .kuang .four1').fadeIn(500);
			$('#content .kuang .four1 img').animate({
				'paddingTop':'0px'
			},500)
		}
		if(index>2400){
			$('#content .kuang .five1').fadeIn(500);
			$('#content .kuang .five1 img').animate({
				'paddingTop':'0px'
			},500)
		}
		if(index>3000){
			$('#content .kuang .sex1').fadeIn(500);
			$('#content .kuang .sex1 img').animate({
				'paddingTop':'0px'
			},500)
		}
		if(index>3700){
			$('#content .kuang .three2').fadeIn(500);
			$('#content .kuang .three2 img').animate({
				'paddingTop':'0px'
			},500)
		}
		if(index>4400){
			$('#content .kuang .four2').fadeIn(500);
			$('#content .kuang .four2 img').animate({
				'paddingTop':'0px'
			},500)
		}
		if(index>5100){
			$('#content .kuang .five2').fadeIn(500);
			$('#content .kuang .five2 img').animate({
				'paddingTop':'0px'
			},500)
		}
		if(index>5800){
			$('#content .kuang .sex2').fadeIn(500);
			$('#content .kuang .sex2 img').animate({
				'paddingTop':'0px'
			},500)
		}

		//轮播
		if(index>6400){
			$('#lunbo').animate({
				'marginTop':'50px'
			},800)
		}

		//内容saven 滑上效果
		if(index>7000){
			$('#content .kuang .saven').fadeIn(1000);
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},600)
		}

		//内容eight 滑上效果
		// p左滑动
		if(index>7500){
			$('#content .kuang .eight').fadeIn(1000);
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>7800){
			$('#content .kuang .eight .eight-xia').animate({
				'marginLeft':'0px'
			},600)
		}
		if(index>8300){
			$('#container #footer').fadeIn(1500);
			$('#container #footer .beijing p').fadeIn(1500)
		}
		if(index>8700){
			$('#container #dibu').fadeIn(1000);
		}

		//滚动一定距离 按钮出现
		if(index>1000){
			$('#container .top').css('display','block')
		}else{
			$('#container .top').css('display','none')
		}

		// 中屏
	}else if(kuan < 992){
		//标题上 + 下
		if(index<=0){
			$('#container .container .logo').finish().animate({
				'top':'120px'
			},1000);
		}
		if(index>=100){
			$('#container .container .logo').finish().animate({
				'top':'0px'
			},1000);
			// 导航显示隐藏
			$('#daohang2').css({
				'position':'fixed',
				'top':'0',
				'background':'#191919'
			})
		}else{
			$('#daohang2').css({
				'position':'absolute',
				'top': '20px',
				'background':''
			})	
		}
		if(index>300){
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},800)
			$('#content .kuang .tu1 img').css({
				'display':'block'
			})
		}

		if(index>650){
			$('#content .kuang .one').css('display','block')
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},800)
		}
		// 中部内容动画
		if(index>1200){
			$('#content .kuang .three1').fadeIn(1000);
			$('#content .kuang .three1 img').animate({
				'paddingTop':'0px'
			},600)
			$('#content .kuang .four1').fadeIn(1000);
			$('#content .kuang .four1 img').animate({
				'paddingTop':'200px'
			},600)
		}
		if(index>1700){
			$('#content .kuang .five1').css('marginTop','-150px')
			$('#content .kuang .five1').fadeIn(1000);
			$('#content .kuang .five1 img').animate({
				'paddingTop':'0px'
			},600)
			$('#content .kuang .sex1').css('marginTop','0px')
			$('#content .kuang .sex1').fadeIn(1000);
			$('#content .kuang .sex1 img').animate({
				'paddingTop':'50px'
			},600)
		}
		if(index>2200){
			$('#content .kuang .three2').css('marginTop','-150px')
			$('#content .kuang .three2').fadeIn(1000);
			$('#content .kuang .three2 img').animate({
				'paddingTop':'0px'
			},600)
			$('#content .kuang .four2').css('marginTop','0px')
			$('#content .kuang .four2').fadeIn(1000);
			$('#content .kuang .four2 img').animate({
				'paddingTop':'50px'
			},600)
		}
		if(index>2700){
			$('#content .kuang .five2').css('marginTop','-150px')
			$('#content .kuang .five2').fadeIn(1000);
			$('#content .kuang .five2 img').animate({
				'paddingTop':'0px'
			},600)
			$('#content .kuang .sex2').css('marginTop','0px')
			$('#content .kuang .sex2').fadeIn(1000);
			$('#content .kuang .sex2 img').animate({
				'paddingTop':'50px'
			},600)
		}

		// 轮播
		if(index>3200){
			$('#lunbo').animate({
				'marginTop':'50px'
			},800)
		}
		
		// //内容saven 滑上效果
		if(index>3800){
			$('#content .kuang .saven').css('marginTop','200px')
			$('#content .kuang .saven').fadeIn(1000);
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},800)
		}
		// //内容eight 滑上效果
		// p左滑动
		if(index>4300){
			$('#content .kuang .eight').fadeIn(1000);
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>4700){
			$('#content .kuang .eight .eight-xia').animate({
				'marginLeft':'0px'
			},800)
		}
		// 文字淡入
		if(index>5200){
			$('#container #footer').fadeIn(1200);
			$('#container #footer .beijing p').fadeIn(1200)
		}
		if(index>5600){
			$('#container #dibu').fadeIn(800);
		}
		//滚动一定距离 按钮出现
		if(index>500){
			$('#container .top').css('display','block')
		}else{
			$('#container .top').css('display','none')
		}

		//大屏++
	}else{
		//标题上 + 下
		if(index<=0){
			$('#container .container .logo').finish().animate({
				'top':'120px'
			},1000);
		}
		if(index>=100){
			$('#container .container .logo').finish().animate({
				'top':'0px'
			},1000);
			// 导航显示隐藏
			$('#daohang2').css({
				'position':'fixed',
				'top':'0',
				'background':'#191919'
			})
		}else{
			$('#daohang2').css({
				'position':'absolute',
				'top': '20px',
				'background':''
			})	
		}
		if(index>300){
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},600)
			$('#content .kuang .tu1 img').css({
				'display':'block'
			})
			$('#content .kuang .one').css('display','block')
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},600)
		}

		
		// 中部内容动画
		if(index>600){
			$('#content .kuang .three1').fadeIn(1000);
			$('#content .kuang .three1 img').animate({
				'paddingTop':'0px'
			},600)
			$('#content .kuang .four1').fadeIn(1000);
			$('#content .kuang .four1 img').animate({
				'paddingTop':'200px'
			},600)
			$('#content .kuang .five1').css('marginTop','50px')
			$('#content .kuang .five1').fadeIn(1000);
			$('#content .kuang .five1 img').animate({
				'paddingTop':'0px'
			},600)
			$('#content .kuang .sex1').css('marginTop','50px')
			$('#content .kuang .sex1').fadeIn(1000);
			$('#content .kuang .sex1 img').animate({
				'paddingTop':'200px'
			},600)
		}
		if(index>1200){
			$('#content .kuang .three2').css('marginTop','-150px')
			$('#content .kuang .three2').fadeIn(1000);
			$('#content .kuang .three2 img').animate({
				'paddingTop':'0px'
			},600)
			$('#content .kuang .four2').css('marginTop','0px')
			$('#content .kuang .four2').fadeIn(1000);
			$('#content .kuang .four2 img').animate({
				'paddingTop':'50px'
			},600)
			$('#content .kuang .five2').css('marginTop','-150px')
			$('#content .kuang .five2').fadeIn(1000);
			$('#content .kuang .five2 img').animate({
				'paddingTop':'0px'
			},600)
			$('#content .kuang .sex2').css('marginTop','0px')
			$('#content .kuang .sex2').fadeIn(1000);
			$('#content .kuang .sex2 img').animate({
				'paddingTop':'50px'
			},600)
		}
		
		// 轮播
		if(index>1800){
			$('#lunbo').animate({
				'marginTop':'50px'
			},800)
		}

		// //内容saven 滑上效果
		if(index>2400){
			$('#content .kuang .saven').css('marginTop','200px')
			$('#content .kuang .saven').fadeIn(1000);
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},600)
		}
		// //内容eight 滑上效果
		// p左滑动
		if(index>2700){
			$('#content .kuang .eight').fadeIn(1000);
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},600)
			$('#content .kuang .eight .eight-xia').animate({
				'marginLeft':'0px'
			},600).fadeIn();
		}
		// 文字淡入
		if(index>3400){
			$('#container #footer').fadeIn(1500);
			$('#container #footer .beijing p').fadeIn(1500)
		}
		if(index>3700){
			$('#container #dibu').fadeIn(1000);
		}
		//滚动一定距离 按钮出现
		if(index>500){
			$('#container .top').css('display','block')
		}else{
			$('#container .top').css('display','none')
		}
	}
})

// 回到顶部
$('#container .top').click(function(){
	$('html,body').animate({
		'scrollTop':'0px'
	},300)
})

// 导航li划过隐藏div显示
$('#daohang2 .yiji2 .shang li.erji2').mouseenter(function(){
	$('#daohang2 .yiji2 .shang li.erji2 .yincang').finish().fadeIn(500);
}).mouseleave(function(){
	$('#daohang2 .yiji2 .shang li.erji2 .yincang').finish().fadeOut(500);
})


// 轮播
var autoLb = false;          //autoLb=true为开启自动轮播
var autoLbtime = 1;         //autoLbtime为轮播间隔时间（单位秒）
var touch = true;           //touch=true为开启触摸滑动
var slideBt = true;         //slideBt=true为开启滚动按钮


var slideNub;               //轮播图片数量

//窗口大小改变时改变轮播图宽高
$(window).resize(function(){
   $(".slide").height($(".slide").width()*0.56);
});


$(function(){
    $(".slide").height($(".slide").width()*0.56);
    slideNub = $(".slide .img").size();             //获取轮播图片数量
    for(i=0;i<slideNub;i++){
        $(".slide .img:eq("+i+")").attr("data-slide-imgId",i);
    }


    //根据轮播图片数量设定图片位置对应的class
    if(slideNub==1){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img3");
        }
    }
    if(slideNub==2){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img"+(i+3));
        }
    }
    if(slideNub==3){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img"+(i+2));
        }
    }
    if(slideNub>3&&slideNub<6){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img"+(i+1));
        }
    }
    if(slideNub>=6){
        for(i=0;i<slideNub;i++){
            if(i<5){
               $(".slide .img:eq("+i+")").addClass("img"+(i+1)); 
            }else{
                $(".slide .img:eq("+i+")").addClass("img5"); 
            }
        }
    }


    //根据轮播图片数量设定轮播图按钮数量
    if(slideBt){
        for(i=1;i<=slideNub;i++){
            $(".slide-bt").append("<span data-slide-bt='"+i+"' onclick='tz("+i+")'></span>");
        }
        $(".slide-bt").width(slideNub*34);
        $(".slide-bt").css("margin-left","-"+slideNub*17+"px");
    }


    //自动轮播
    if(autoLb){
        setInterval(function(){
       		right();
   		}, autoLbtime*1000);
    }


    if(touch){
        k_touch();
    }
    slideLi();
    imgClickFy();
})


//右滑动
function right(){
    var fy = new Array();
    for(i=0;i<slideNub;i++){
        fy[i]=$(".slide .img[data-slide-imgId="+i+"]").attr("class");
    }
    for(i=0;i<slideNub;i++){
        if(i==0){
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[slideNub-1]);
        }else{
           $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[i-1]); 
        }
    }
    imgClickFy();
    slideLi();
}


//左滑动
function left(){
    var fy = new Array();
    for(i=0;i<slideNub;i++){
        fy[i]=$(".slide .img[data-slide-imgId="+i+"]").attr("class");
    }
    for(i=0;i<slideNub;i++){
        if(i==(slideNub-1)){
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[0]);
        }else{
           $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[i+1]); 
        }
    }
    imgClickFy();
    slideLi();
}


//轮播图片左右图片点击翻页
function imgClickFy(){
    $(".slide .img").removeAttr("onclick");
    $(".slide .img2").attr("onclick","left()");
    $(".slide .img4").attr("onclick","right()");
}


//修改当前最中间图片对应按钮选中状态
function slideLi(){
    var slideList = parseInt($(".slide .img3").attr("data-slide-imgId")) + 1;
    $(".slide-bt span").removeClass("on");
    $(".slide-bt span[data-slide-bt="+slideList+"]").addClass("on");
}


//轮播按钮点击翻页
function tz(id){
    var tzcs = id - (parseInt($(".slide .img3").attr("data-slide-imgId")) + 1);
    if(tzcs>0){
        for(i=0;i<tzcs;i++){
            setTimeout(function(){
              right();  
            },1);
        }
    }
    if(tzcs<0){
        tzcs=(-tzcs);
        for(i=0;i<tzcs;i++){
            setTimeout(function(){
              left();  
            },1);
        }
    }
    slideLi();
}


//触摸滑动模块
function k_touch() {
    var _start = 0, _end = 0, _content = document.getElementById("slide");
    _content.addEventListener("touchstart", touchStart, false);
    _content.addEventListener("touchmove", touchMove, false);
    _content.addEventListener("touchend", touchEnd, false);
    function touchStart(event) {
        var touch = event.targetTouches[0];
        _start = touch.pageX;
    }
    function touchMove(event) {
        var touch = event.targetTouches[0];
        _end = (_start - touch.pageX);
    }

    function touchEnd(event) {
        if (_end < -100) {
            left();
            _end=0;
        }else if(_end > 100){
            right();
            _end=0;
        }
    }
}









