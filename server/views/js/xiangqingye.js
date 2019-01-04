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
		// 中部内容动画
		if(index>200){
			$('#content .kuang .tu1').css('display','block')
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},800)
		}
		
		if(index>600){
			$('#content .kuang .one').css('display','block')
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},800)
		}

		
		if(index>900){
			$('#zhongbu').fadeIn(800);
			$('#zhongbu #yi .wenzi').fadeIn(500).animate({
				'paddingTop':'0px'
			},800)
			
		}
		if(index>1100){
			$('#zhongbu #er .wenzi').fadeIn(500).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>1300){
			$('#zhongbu #san .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>1500){
			$('#zhongbu #si .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>1700){
			$('#zhongbu #wu .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>1900){
			$('#zhongbu #liu .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>2100){
			$('#zhongbu #qi .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}

		//内容saven 滑上效果
		if(index>2300){
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},800)
		}
		//内容eight 滑上效果
		// p左滑动
		if(index>2500){
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>2900){
			$('#content .kuang .eight .eight-xia').animate({
				'marginLeft':'0px'
			},800)
		}
		if(index>3500){
			$('#container #footer .beijing p').fadeIn(2000)
		}

		//滚动一定距离 按钮出现
		if(index>1000){
			$('#container .top').css('display','block')
		}else{
			$('#container .top').css('display','none')
		}

		
	}else if(kuan<992){
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
		// 中部内容动画
		if(index>300){
			$('#content .kuang .tu1').css('display','block')
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},800)
		}
		
		if(index>700){
			$('#content .kuang .one').css('display','block')
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},800)
		}

		
		if(index>1200){
			$('#zhongbu').fadeIn(800);
			$('#zhongbu #yi .wenzi').fadeIn(500).animate({
				'paddingTop':'0px'
			},800)
			
		}
		if(index>1400){
			$('#zhongbu #er .wenzi').fadeIn(500).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>1600){
			$('#zhongbu #san .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>2000){
			$('#zhongbu #si .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>2200){
			$('#zhongbu #wu .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>2400){
			$('#zhongbu #liu .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>2600){
			$('#zhongbu #qi .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}

		//内容saven 滑上效果
		if(index>3085){
			$('#content .kuang .saven').css('display','block')
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},800)
		}
		//内容eight 滑上效果
		// p左滑动
		if(index>3685){
			$('#content .kuang .eight').css('display','block')
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>4185){
			$('#content .kuang .eight .eight-xia').animate({
				'marginLeft':'0px'
			},800)
		}
		if(index>4500){
			$('#container #footer').fadeIn(2000);
			$('#container #footer .beijing p').fadeIn(2000)
		}
		if(index>5200){
			$('#container #dibu').fadeIn(1000);
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
		// 中部内容动画
		if(index>300){
			$('#content .kuang .tu1').css('display','block')
			$('#content .kuang .tu1 img').animate({
				'paddingRight':'0px'
			},800)
			$('#content .kuang .tu1 img').css({
				'display':'block'
			})
			$('#content .kuang .one').css('display','block')
			$('#content .kuang .one h3').animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>800){
			$('#zhongbu').fadeIn(800);
			$('#zhongbu #yi .wenzi').fadeIn(500).animate({
				'paddingTop':'0px'
			},800)
			
		}
		if(index>1000){
			$('#zhongbu #er .wenzi').fadeIn(500).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>1200){
			$('#zhongbu #san .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>1400){
			$('#zhongbu #si .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>1600){
			$('#zhongbu #wu .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>1800){
			$('#zhongbu #liu .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}
		if(index>2000){
			$('#zhongbu #qi .wenzi').fadeIn(300).animate({
				'paddingTop':'0px'
			},800)
		}





		// //内容saven 滑上效果
		if(index>2200){
			$('#content .kuang .saven').css('display','block');
			$('#content .kuang .saven h3').animate({
				'paddingTop':'0px'
			},800)
			$('#pubu').fadeIn(1500)
		}
		// //内容eight 滑上效果
		// p左滑动
		if(index>2300){
			$('#content .kuang .eight .eight-shang img').css('display','block')
			$('#content .kuang .eight .eight-shang img').animate({
				'paddingTop':'0px'
			},800)
			$('#content .kuang .eight .eight-xia').animate({
				'marginLeft':'0px'
			},800)
			$('#content .kuang .eight .eight-xia').fadeIn(1000)
		}
		// 文字淡入
		if(index>3200){
			$('#container #footer').fadeIn(1000)
			$('#container #footer .beijing p').fadeIn(1000)
		}
		if(index>3525){
			$('#container #dibu').fadeIn(1000)
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

// 瀑布
var waterfallCanvas = function(c, cw, ch) {

		var _this = this;
		this.c = c;
		this.ctx = c.getContext('2d');
		this.cw = cw;
		this.ch = ch;

		this.particles = [];
		this.particleRate = 6;
		this.gravity = .15;

		this.init = function() {
			this.loop();
		};

		this.reset = function() {
			this.ctx.clearRect(0, 0, this.cw, this.ch);
			this.particles = [];
		};

		this.rand = function(rMi, rMa) {
			return ~~((Math.random() * (rMa - rMi + 1)) + rMi);
		};

		this.Particle = function() {
			var newWidth = _this.rand(1, 20);
			var newHeight = _this.rand(1, 45);
			this.x = _this.rand(10 + (newWidth / 2), _this.cw - 10 - (newWidth / 2));
			this.y = -newHeight;
			this.vx = 0;
			this.vy = 0;
			this.width = newWidth;
			this.height = newHeight;
			this.hue = _this.rand(200, 220);
			this.saturation = _this.rand(30, 60);
			this.lightness = _this.rand(30, 60);
		};

		this.Particle.prototype.update = function(i) {
			this.vx += this.vx;
			this.vy += _this.gravity;
			this.x += this.vx;
			this.y += this.vy;
		};

		this.Particle.prototype.render = function() {
			_this.ctx.strokeStyle = 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, .05)';
			_this.ctx.beginPath();
			_this.ctx.moveTo(this.x, this.y);
			_this.ctx.lineTo(this.x, this.y + this.height);
			_this.ctx.lineWidth = this.width / 2;
			_this.ctx.lineCap = 'round';
			_this.ctx.stroke();
		};

		this.Particle.prototype.renderBubble = function() {
			_this.ctx.fillStyle = 'hsla(' + this.hue + ', 40%, 40%, 1)';
			_this.ctx.fillStyle = 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, .3)';
			_this.ctx.beginPath();
			_this.ctx.arc(this.x + this.width / 2, _this.ch - 20 - _this.rand(0, 10), _this.rand(1, 8), 0, Math.PI * 2, false);
			_this.ctx.fill();
		};

		this.createParticles = function() {
			var i = this.particleRate;
			while(i--) {
				this.particles.push(new this.Particle());
			}
		};

		this.removeParticles = function() {
			var i = this.particleRate;
			while(i--) {
				var p = this.particles[i];
				if(p.y > _this.ch - 20 - p.height) {
					p.renderBubble();
					_this.particles.splice(i, 1);
				}
			}
		};

		this.updateParticles = function() {
			var i = this.particles.length;
			while(i--) {
				var p = this.particles[i];
				p.update(i);
			};
		};

		this.renderParticles = function() {
			var i = this.particles.length;
			while(i--) {
				var p = this.particles[i];
				p.render();
			};
		};

		this.clearCanvas = function() {
			this.ctx.globalCompositeOperation = 'destination-out';
			this.ctx.fillStyle = 'rgba(255,255,255,.06)';
			this.ctx.fillRect(0, 0, this.cw, this.ch);
			this.ctx.globalCompositeOperation = 'lighter';
		};

		this.loop = function() {
			var loopIt = function() {
				requestAnimationFrame(loopIt, _this.c);
				_this.clearCanvas();
				_this.createParticles();
				_this.updateParticles();
				_this.renderParticles();
				_this.removeParticles();
			};
			loopIt();
		};

	};

	var isCanvasSupported = function() {
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	};

	var setupRAF = function() {
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
		};

		if(!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() {
					callback(currTime + timeToCall);
				}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		};

		if(!window.cancelAnimationFrame) {
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};
		};
	};

	if(isCanvasSupported()) {
		var c = document.getElementById('waterfall');
		var cw = c.width = 100;
		var ch = c.height = 140;
		var waterfall = new waterfallCanvas(c, cw, ch);
		setupRAF();
		waterfall.init();
	}










