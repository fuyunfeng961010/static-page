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
var kuan = $(window).width();
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
		if(index>200){
			$('#content .kuang .xiangying1').css('display','block')
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},800)
		}
		//内容one 滑上效果
		if(index>500){
			$('#content .kuang .one').css('display','block')
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},600)
		}
		//内容two 滑上效果 
		if(index>1000){
			$('#content .kuang .two').css('display','block')
			$('#content .kuang .two h3').animate({
				'paddingTop':'0px'
			},600)
		}
		// 内容three four five sex滑上效果
		if(index>1500){
			$('#content .kuang .three').css('display','block')
			$('#content .kuang .three img').animate({
				'paddingTop':'0px'
			},500)
		}
		if(index>2200){
			$('#content .kuang .four').css('display','block')
			$('#content .kuang .four img').animate({
				'paddingTop':'0px'
			},500)
		}
		if(index>2800){
			$('#content .kuang .five').css('display','block')
			$('#content .kuang .five img').animate({
				'paddingTop':'0px'
			},500)
		}
		if(index>3500){
			$('#content .kuang .sex').css('display','block')
			$('#content .kuang .sex img').animate({
				'paddingTop':'0px'
			},500)
		}
		//内容saven 滑上效果
		if(index>3900){
			$('#content .kuang .saven').css('display','block')
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},600)
		}
		//内容eight 滑上效果
		// p左滑动
		if(index>4400){
			$('#content .kuang .eight').css('display','block')
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>4800){
			$('#content .kuang .eight .eight-xia').animate({
				'marginLeft':'0px'
			},600)
		}
		//轮播 上+下
		if(index>5200){
			$('#content .kuang .lunbo .lunbo-shang').css('display','block')
			$('#content .kuang .lunbo .lunbo-shang .shang1 h3').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>5700){
			$('#content .kuang .lunbo .lunbo-xia').css('display','block')
			$('#content .kuang .lunbo .lunbo-xia').animate({
				'marginTop':'60px'
			},600)
		}

		if(index>6030){
			$('#content .kuang .nine').css('display','block')
			$('#content .kuang .nine h3').animate({
				'paddingTop':'0px'
			},600)
		}	
		//美食  4+
		if(index>6500){
			$('#content .kuang .meione').css('display','block')
			$('#content .kuang .meishi1 .meishi1shang img.img1').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>7350){
			$('#content .kuang .meitwo').css('display','block')
			$('#content .kuang .meishi1 .meishi1shang img.img2').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>8100){
			$('#content .kuang .meithree').css('display','block')
			$('#content .kuang .meishi1 .meishi1shang img.img3').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>8600){
			$('#footer').fadeIn(1500)
			$('#container #footer .beijing p').fadeIn(1500)
		}
		if(index>9100){
			$('#dibu').fadeIn(1500)
		}

		//滚动一定距离 按钮出现
		if(index>1000){
			$('#container .top').css('display','block')
		}else{
			$('#container .top').css('display','none')
		}
		// 768-992
	}else if(kuan<992){
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
				'background':'#191919'
			})
		}else{
			$('#daohang2').css({
				'position':'absolute',
				'top': '20px',
				'background':''
			})	
		}
		//主体内容
		if(index>300){
			$('#content .kuang .xiangying1').css('display','block')
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},600)
		}
		// //内容one 滑上效果
		if(index>800){
			$('#content .kuang .one').css('display','block')
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},600)
		}
		//内容two 滑上效果 
		if(index>1100){
			$('#content .kuang .two').css('display','block')
			$('#content .kuang .two h3').animate({
				'paddingTop':'0px'
			},600)
		}
		// 内容three four five sex滑上效果
		if(index>1500){
			$('#content .kuang .three').fadeIn(80,function(){
				$('#content .kuang .three img').animate({
					'paddingTop':'0px'
				},300,function(){
					$('#content .kuang .four').fadeIn(80,function(){
						$('#content .kuang .four img').animate({
								'paddingTop':'0px'
						},300)
					})
				})
			})
		}
		if(index>2100){
			$('#content .kuang .five').fadeIn(80,function(){
				$('#content .kuang .five img').animate({
					'paddingTop':'0px'
				},300,function(){
					$('#content .kuang .sex').fadeIn(80,function(){
						$('#content .kuang .sex img').animate({
								'paddingTop':'0px'
						},300)
					})
				})
			})
		}
		//内容saven 滑上效果
		if(index>2400){
			$('#content .kuang .saven').css('display','block')
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},600)
		}
		//内容eight 滑上效果
		// p左滑动
		if(index>2900){
			$('#content .kuang .eight').css('display','block')
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>3500){
			$('#content .kuang .eight .eight-xia').animate({
				'marginLeft':'0px'
			},600)
		}
		//轮播 上+下
		if(index>3800){
			$('#content .kuang .lunbo .lunbo-shang').css('display','block')
			$('#content .kuang .lunbo .lunbo-shang .shang1 h3').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>4300){
			$('#content .kuang .lunbo .lunbo-xia').css('display','block')
			$('#content .kuang .lunbo .lunbo-xia').animate({
				'marginTop':'60px'
			},600)
		}

		if(index>4700){
			$('#content .kuang .nine').css('display','block')
			$('#content .kuang .nine h3').animate({
				'paddingTop':'0px'
			},600)
		}	
		//美食  4+
		if(index>5300){
			$('#content .kuang .meione').css('display','block')
			$('#content .kuang .meishi1 .meishi1shang img.img1').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>6000){
			$('#content .kuang .meitwo').css('display','block')
			$('#content .kuang .meishi1 .meishi1shang img.img2').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>6800){
			$('#content .kuang .meithree').css('display','block')
			$('#content .kuang .meishi1 .meishi1shang img.img3').animate({
				'paddingTop':'0px'
			},600)
		}
		if(index>7600){
			$('#footer').fadeIn(1500)
			$('#container #footer .beijing p').fadeIn(1500)
		}
		if(index>8100){
			$('#dibu').fadeIn(1500)
		}

		//滚动一定距离 按钮出现
		if(index>1000){
			$('#container .top').css('display','block')
		}else{
			$('#container .top').css('display','none')
		}




		// 大屏
	}else{
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
			$('#content .kuang .xiangying1').css('display','block')
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},600)
			$('#content .kuang .one').css('display','block')
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},600)
		}
		//内容two 滑上效果 
		if(index>400){
			$('#content .kuang .two').css('display','block')
			$('#content .kuang .two h3').animate({
				'paddingTop':'0px'
			},600)
		}
		// 内容three four five sex滑上效果
		if(index>800){
			$('#content .kuang .three').fadeIn(80,function(){
				$('#content .kuang .three img').animate({
					'paddingTop':'0px'
				},200,function(){
					$('#content .kuang .four').fadeIn(80,function(){
						$('#content .kuang .four img').animate({
								'paddingTop':'0px'
						},200,function(){
							$('#content .kuang .five').fadeIn(80,function(){
								$('#content .kuang .five img').animate({
									'paddingTop':'0px'
								},200,function(){
									$('#content .kuang .sex').fadeIn(80,function(){
										$('#content .kuang .sex img').animate({
												'paddingTop':'0px'
										},200)
									})
								})
							})
						})
					})
				})
			})
		}
		//内容saven 滑上效果
		if(index>1300){
			$('#content .kuang .saven').css('display','block')
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},600)
		}
		//内容eight 滑上效果
		// p左滑动
		if(index>1700){
			$('#content .kuang .eight').css('display','block')
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},600)
			$('#content .kuang .eight .eight-xia').animate({
				'marginLeft':'0px'
			},600)
		}
		//轮播 上+下
		if(index>2200){
			$('#content .kuang .lunbo .lunbo-shang').css('display','block')
			$('#content .kuang .lunbo .lunbo-shang .shang1 h3').animate({
				'paddingTop':'0px'
			},600,function(){
				$('#content .kuang .lunbo .lunbo-xia').fadeIn(80)
				$('#content .kuang .lunbo .lunbo-xia').animate({
				'marginTop':'60px'
				},300)
			})
		}

		if(index>2478){
			$('#content .kuang .nine').css('display','block')
			$('#content .kuang .nine h3').animate({
				'paddingTop':'0px'
			},600)
		}	
		//美食  3+
		if(index>2978){
			$('#content .kuang .meione').fadeIn(80,function(){
				$('#content .kuang .meishi1 .meishi1shang img.img1').animate({
					'paddingTop':'0px'
				},200,function(){
					$('#content .kuang .meitwo').fadeIn(80,function(){
						$('#content .kuang .meishi1 .meishi1shang img.img2').animate({
							'paddingTop':'0px'
						},200,function(){
							$('#content .kuang .meithree').fadeIn(80,function(){
								$('#content .kuang .meishi1 .meishi1shang img.img3').animate({
									'paddingTop':'0px'
								},200)
							})
						})
					})
				})
			})
		}
		if(index>3478){
			$('#footer').fadeIn(1500)
			$('#container #footer .beijing p').fadeIn(1500)
		}
		if(index>3978){
			$('#dibu').fadeIn(1500)
		}

		//滚动一定距离 按钮出现
		if(index>1000){
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










