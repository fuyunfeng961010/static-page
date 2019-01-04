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
		if(index>150){
			$('#content .kuang .xiangying1').css('display','block')
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},800)
			$('#content .kuang .tu1 img').css({
				'display':'block'
			})
			$('#qiehuan').css('marginTop','100px')
		}
		//内容one 滑上效果
		if(index>500){
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},800)
		}

		// 中部内容动画
		






		//内容saven 滑上效果
		if(index>1760){
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},800)
		}
		//内容eight 滑上效果
		// p左滑动
		if(index>2000){
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>2500){
			$('#content .kuang .eight .eight-xia').css('display','block').animate({
				'marginLeft':'0px'
			},800)
		}
		if(index>3200){
			$('#container #footer .beijing p').fadeIn(2000)
		}

		//滚动一定距离 按钮出现
		if(index>1000){
			$('#container .top').css('display','block')
		}else{
			$('#container .top').css('display','none')
		}

		// 大屏
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
			$('#content .kuang .xiangying1').css('display','block')
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},800)
			$('#content .kuang .tu1 img').css({
				'display':'block'
			})
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},800)
			$('#qiehuan').css('marginTop','100px')
		}
		// 中部内容动画
		







		// //内容saven 滑上效果
		if(index>1300){
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},800)
		}
		// //内容eight 滑上效果
		// p左滑动
		if(index>1450){
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>1600){
			$('#content .kuang .eight .eight-xia').css('marginLeft','0px').fadeIn(2000)
		}
		// 文字淡入
		if(index>2200){
			$('#container #footer .beijing p').fadeIn(2000)
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

//注册input框获取焦点失去焦点

$.each($('#zhuce .kuang input'),function(k,v){
	$('#zhuce .kuang input').eq(k).focus(function(){
		$(this).parent().css('border','2px solid white')
	})
	$('#zhuce .kuang input').blur(function(){
		$('#zhuce .kuang').css('border','2px solid #333')
	})
})
$('#zhuce .message textarea').focus(function(){
	$(this).css('border','2px solid white')
}).blur(function(){
	$(this).css('border','2px solid #616161')
})

$('#lunboyz .inpu input').focus(function(){
	$('#lunboyz .inpu').css('border','2px solid white')
}).blur(function(){
	$('#lunboyz .inpu').css('border','2px solid #616161')
})

//表单验证
var myname=document.myform.myname;
var mypwd=document.myform.mymima;
var mytel=document.myform.mytel;
var myyanzheng=document.myform.myyanzheng;
var myyanzheng2=document.myform.myyanzheng2;

// console.log(myname)
myname.onblur=checkname;
mypwd.onblur=checkmima;
mytel.onblur=checktel;
myyanzheng.onblur=checkyanzheng;
myyanzheng2.onblur=checkyanzheng2;


function checkForm(){
	return checkname()
			&&checkyanzheng()
			// &&checktel()
			// &&checkyanzheng2()
			&&checkmima();
}
function checkall(name,p){
	if(name){
		p.innerHTML='验证成功 下一步';
		p.style.color='green';
		return true
	}
	p.innerHTML='请输入有效格式';
	p.style.color='red';
	return false
}
function checkname(){
	var newname=myname.value;
	var reg=/^[a-zA-Z]\w{5,11}$/;
	var name=newname.match(reg);
	return checkall(name,p1)
}
function checkmima(){
	var newpwd=mypwd.value;
	var reg=/^\w{6,12}$/;
	var pwd=newpwd.match(reg)
	return checkall(pwd,p2);
}
function checkyanzheng(){
	var newyanzheng=myyanzheng.value;
	var reg=/^\w{4}/;
	var yanzheng=newyanzheng.match(reg)
	return checkall(yanzheng,p3)
}
function checktel(){
	var newtel=mytel.value;
	var reg=/^1([358][0-9]|[4][57]|[7][0135678])[0-9]{8}$/;
	var tel=newtel.match(reg)
	return checkall(tel,p4);
}
function checkyanzheng2(){
	var newyanzheng=myyanzheng2.value;
	var reg=/^\d{4}/;
	var yanzheng2=newyanzheng.match(reg)
	return checkall(yanzheng2,p5)
}

//账号 手机登录切换
$('#qiehuan .shouji').click(function(){
	$(this).addClass('active').siblings('input').removeClass('active')
	$('#zhuce #one').css('display','none')
	$('#zhuce .sjdl').css('display','block')
})
$('#qiehuan .zhanghao').click(function(){
	$(this).addClass('active').siblings('input').removeClass('active')
	$('#zhuce #one').css('display','block')
	$('#zhuce .sjdl').css('display','none')
})

//验证码 点击切换
$imglist=$('#lunboyz .lunbo .imglist img')
// console.log($imglist)
var q = 1;
$('#lunboyz .lunbo p').click(function(){
	if(q>=$imglist.length){
		q = 0;
	}
	$('#lunboyz .lunbo .imglist img').eq(q)
									.addClass('active')
									.siblings('img')
									.removeClass('active');
	q++;
})











