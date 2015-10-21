;
(function() {

var pageIndex = 1,
	pageTotal = $('.page').length,
	towards = { up:1, right:2, down:3, left:4},
	isAnimating = false;

var width = window.innerWidth;
if (width <= 320) {
    $("#page_animateImg").css("left", '-4%');
} else if (width > 320) {
    $("#page_animateImg").css("left", '8%');
}
//禁用手机默认的触屏滚动行为
document.addEventListener('touchmove',function(event) {
	event.preventDefault(); 
},false);

$(document).swipeUp(function() {
	if (isAnimating) return;
	if (pageIndex < pageTotal) { 
		pageIndex += 1; 
	}else{
		return;
	};
	pageMove(towards.up);
});

$(document).swipeDown(function() {
	if (isAnimating) return;
	if (pageIndex > 1) { 
		pageIndex -= 1; 
	}else{
		return;
	};
	pageMove(towards.down);	
});

function page1In() {
	// 第一页进入效果
	$('#page_animateImg').addClass('animateImgIn');
	// $('#page_animateImg').removeClass('animateImgOut');
	// $('#page_main_text').removeClass('animateMainTextOut');
	$('#page_main_text').addClass('animateMainTextIn');
}

function page1Out() {
	// 第一页淡出效果
	$('#page_animateImg').removeClass('animateImgIn');
	$('#page_animateImg').addClass('animateImgOut');
	setTimeout(function() {
		$('#page_animateImg').removeClass('animateImgOut');
	}, 600);
	$('#page_main_text').removeClass('animateMainTextIn');
	$('#page_main_text').addClass('animateMainTextOut');
	setTimeout(function() {
		$('#page_main_text').removeClass('animateMainTextOut');
	}, 600);
}

function page2In() {
	// 第二页进入效果
	// $('#page_function2_animateImg2').removeClass('animateFunction22Out');
	// $('#page_function2_animateImg3').removeClass('animateFunction23Out');
	$('#page_function2_animateImg2').addClass('animateFunction22In');
	$('#page_function2_animateImg3').addClass('animateFunction23In');
	setTimeout(function() {
		// $('#page_function2_animateImg1').removeClass('animateFunction21Out');
		$('#page_function2_animateImg1').addClass('animateFunction21In');
	}, 200);
	setTimeout(function() {
		// $('#page_function2_text').removeClass('animateFunctionTextOut');
		$('#page_function2_text').addClass('animateFunctionTextIn');
		// $('#page_function2_text_sub').removeClass('animateFunctionTextOut');
		$('#page_function2_text_sub').addClass('animateFunctionTextIn');
	}, 800);
}

function page2Out() {
	// 第二页淡出效果
	$('#page_function2_animateImg1').removeClass('animateFunction21In');
	$('#page_function2_animateImg1').addClass('animateFunction21Out');
	setTimeout(function() {
		$('#page_function2_animateImg1').removeClass('animateFunction21Out');
	}, 600);

	$('#page_function2_animateImg2').removeClass('animateFunction22In');
	$('#page_function2_animateImg2').addClass('animateFunction22Out');
	setTimeout(function() {
		$('#page_function2_animateImg2').removeClass('animateFunction22Out');
	}, 600);

	$('#page_function2_animateImg3').removeClass('animateFunction23In');
	$('#page_function2_animateImg3').addClass('animateFunction23Out');
	setTimeout(function() {
		$('#page_function2_animateImg3').removeClass('animateFunction23Out');
	}, 600);
	$('#page_function2_text').removeClass('animateFunctionTextIn');
	$('#page_function2_text').addClass('animateFunctionTextOut');
	setTimeout(function() {
		$('#page_function2_text').removeClass('animateFunctionTextOut');
	}, 600);
	$('#page_function2_text_sub').removeClass('animateFunctionTextIn');
	$('#page_function2_text_sub').addClass('animateFunctionTextOut');
	setTimeout(function() {
		$('#page_function2_text_sub').removeClass('animateFunctionTextOut');
	}, 600);
}

function page3In() {
	// 第三页进入效果
	$('#page_function3_animateImg1').addClass('animateFunctionScaleIn');
	setTimeout(function() {
		$('#page_function3_animateImg2').addClass('animateFunctionScaleIn');
		$('#page_function3_animateImg3').addClass('animateFunctionScaleIn');
	}, 350);
	setTimeout(function() {
		// $('#page_function3_animateImg4').removeClass('animateFunctionScaleOut');
		// $('#page_function3_animateImg5').removeClass('animateFunctionScaleOut');
		$('#page_function3_animateImg4').addClass('animateFunctionScaleIn');
		$('#page_function3_animateImg5').addClass('animateFunctionScaleIn');
	}, 550);
	setTimeout(function() {
		// $('#page_function3_animateImg6').removeClass('animateFunctionScaleOut');
		// $('#page_function3_animateImg7').removeClass('animateFunctionScaleOut');
		$('#page_function3_animateImg6').addClass('animateFunctionScaleIn');
		$('#page_function3_animateImg7').addClass('animateFunctionScaleIn');
	}, 750);
	setTimeout(function() {
		// $('#page_function3_text').removeClass('animateFunctionTextOut');
		$('#page_function3_text').addClass('animateFunctionTextIn');
		// $('#page_function3_text_sub').removeClass('animateFunctionTextOut')
		$('#page_function3_text_sub').addClass('animateFunctionTextIn');
	}, 950);
}

function page3Out() {
	// 第三页淡出效果
	$('#page_function3_animateImg1').removeClass('animateFunctionScaleIn')
	$('#page_function3_animateImg1').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function3_animateImg1').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function3_animateImg2').removeClass('animateFunctionScaleIn')
	$('#page_function3_animateImg2').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function3_animateImg2').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function3_animateImg3').removeClass('animateFunctionScaleIn')
	$('#page_function3_animateImg3').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function3_animateImg3').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function3_animateImg4').removeClass('animateFunctionScaleIn')
	$('#page_function3_animateImg4').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function3_animateImg4').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function3_animateImg5').removeClass('animateFunctionScaleIn')
	$('#page_function3_animateImg5').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function3_animateImg5').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function3_animateImg6').removeClass('animateFunctionScaleIn')
	$('#page_function3_animateImg6').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function3_animateImg6').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function3_animateImg7').removeClass('animateFunctionScaleIn')
	$('#page_function3_animateImg7').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function3_animateImg7').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function3_text').removeClass('animateFunctionTextIn');
	$('#page_function3_text').addClass('animateFunctionTextOut');
	setTimeout(function() {
		$('#page_function3_text').removeClass('animateFunctionTextOut');
	}, 600);
	$('#page_function3_text_sub').removeClass('animateFunctionTextIn');
	$('#page_function3_text_sub').addClass('animateFunctionTextOut');
	setTimeout(function() {
		$('#page_function3_text_sub').removeClass('animateFunctionTextOut');
	}, 600);
}

function page4In() {
	// 第四页进入效果
	// $('#page_function4_animateImg1').removeClass('animateFunctionScaleOut');
	// $('#page_function4_text1').removeClass('animateFunctionScaleOut');
	$('#page_function4_animateImg1').addClass('animateFunctionScaleIn');
	$('#page_function4_text1').addClass('animateFunctionScaleIn');
	setTimeout(function() {
		// $('#page_function4_animateImg2').removeClass('animateFunctionScaleOut');
		// $('#page_function4_text2').removeClass('animateFunctionScaleOut');
		$('#page_function4_animateImg2').addClass('animateFunctionScaleIn');
		$('#page_function4_text2').addClass('animateFunctionScaleIn');
	}, 200);
	setTimeout(function() {
		// $('#page_function4_animateImg3').removeClass('animateFunctionScaleOut');
		// $('#page_function4_text3').removeClass('animateFunctionScaleOut');
		$('#page_function4_animateImg3').addClass('animateFunctionScaleIn');
		$('#page_function4_text3').addClass('animateFunctionScaleIn');
	}, 400);
	setTimeout(function() {
		// $('#page_function4_animateImg4').removeClass('animateFunctionScaleOut');
		// $('#page_function4_text4').removeClass('animateFunctionScaleOut');
		$('#page_function4_animateImg4').addClass('animateFunctionScaleIn');
		$('#page_function4_text4').addClass('animateFunctionScaleIn');
	}, 600);
	setTimeout(function() {
		// $('#page_function4_animateImg5').removeClass('animateFunctionScaleOut');
		// $('#page_function4_text5').removeClass('animateFunctionScaleOut');
		$('#page_function4_animateImg5').addClass('animateFunctionScaleIn');
		$('#page_function4_text5').addClass('animateFunctionScaleIn');
	}, 800);
	setTimeout(function() {
		// $('#page_function4_text').removeClass('animateFunctionTextOut');
		$('#page_function4_text').addClass('animateFunctionTextIn');
		// $('#page_function4_text_sub').removeClass('animateFunctionTextOut') 
		$('#page_function4_text_sub').addClass('animateFunctionTextIn');
	}, 1000);
}

function page4Out() {
	// 第4页淡出效果
	$('#page_function4_animateImg1').removeClass('animateFunctionScaleIn');
	$('#page_function4_animateImg1').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function4_animateImg1').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function4_text1').removeClass('animateFunctionScaleIn');
	$('#page_function4_text1').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function4_text1').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function4_animateImg2').removeClass('animateFunctionScaleIn');
	$('#page_function4_animateImg2').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function4_animateImg2').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function4_text2').removeClass('animateFunctionScaleIn');
	$('#page_function4_text2').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function4_text2').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function4_animateImg3').removeClass('animateFunctionScaleIn');
	$('#page_function4_animateImg3').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function4_animateImg3').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function4_text3').removeClass('animateFunctionScaleIn');
	$('#page_function4_text3').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function4_text3').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function4_animateImg4').removeClass('animateFunctionScaleIn');
	$('#page_function4_animateImg4').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function4_animateImg4').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function4_text4').removeClass('animateFunctionScaleIn');
	$('#page_function4_text4').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function4_text4').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function4_animateImg5').removeClass('animateFunctionScaleIn');
	$('#page_function4_animateImg5').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function4_animateImg5').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function4_text5').removeClass('animateFunctionScaleIn');
	$('#page_function4_text5').addClass('animateFunctionScaleOut');
	setTimeout(function() {
		$('#page_function4_text5').removeClass('animateFunctionScaleOut');
	}, 600);
	$('#page_function4_text').removeClass('animateFunctionTextIn');
	$('#page_function4_text').addClass('animateFunctionTextOut');
	setTimeout(function() {
		$('#page_function4_text').removeClass('animateFunctionTextOut');
	}, 600);
	$('#page_function4_text_sub').removeClass('animateFunctionTextIn')
	$('#page_function4_text_sub').addClass('animateFunctionTextOut');
	setTimeout(function() {
		$('#page_function4_text_sub').removeClass('animateFunctionTextOut');
	}, 600);
}

function page5In() {
	// 第5页出现效果
	$('#page_function5_animateImg').addClass('animateFunction5');
	setTimeout(function() {
		// $('#page_function2_text').removeClass('animateFunctionTextOut');
		// $('#page_function5_text').removeClass('animateFunctionTextOut');
		// $('#page_function5_text_sub').removeClass('animateFunctionTextOut');
		$('#page_function5_text').addClass('animateFunctionTextIn');
		$('#page_function5_text_sub').addClass('animateFunctionTextIn');
	}, 500);
}

function page5Out() {
	// 第五页淡出效果
	$('#page_function5_text').removeClass('animateFunctionTextIn');
	$('#page_function5_text').addClass('animateFunctionTextOut');
	setTimeout(function() {
		$('#page_function5_text').removeClass('animateFunctionTextOut');
	}, 600);
	$('#page_function5_text_sub').removeClass('animateFunctionTextIn');
	$('#page_function5_text_sub').addClass('animateFunctionTextOut');
	setTimeout(function() {
		$('#page_function5_text_sub').removeClass('animateFunctionTextOut');
	}, 600);
}


function pageMove(tw) {
	var lastPage;

	// 向下翻页
	if(tw == '1') {
		console.log('pageindex' + pageIndex);
		if(pageIndex == 1) {
			console.log('pagetotal' + pageTotal);
			lastPage = ".page-" + pageTotal;
		} else {
			lastPage = ".page-" + (pageIndex - 1);
		}

		if (pageIndex == 1) {
			return;
		}
		if (pageIndex == 2) {
			// 第一页淡出效果
			page1Out();	
			// 第二页进入效果
			page2In();
		}
		if (pageIndex == 3) {
			// 第二页淡出效果
			page2Out();
			// 第三页进入效果
			page3In();
		}
		if (pageIndex == 4) {
			// 第三页淡出效果
			page3Out();
			// 第四页进入效果
			page4In();
		}
		if (pageIndex == 5) {
			// 最后页禁用三角
			$('#page-hd').css('display', 'none');
			// 第4页淡出效果
			page4Out();

			// 第5页出现效果
			page5In();
		}
	} else if(tw == '3') { // 向上翻页
		console.log('pageIndex'+pageIndex);
		if (pageIndex === 1) {
			// 第一页进入效果
			page1In();
			// 第二页淡出效果
			page2Out();
		}
		if (pageIndex === 2) {
			// 第三页淡出效果
			page3Out();
			// 第二页进入效果
			page2In();
		}
		if (pageIndex === 3) {
			// 第四页淡出效果
			page4Out();
			// 第三页进入效果
			page3In();
		}
		if (pageIndex === 4) {
			// 第四页进入效果
			page4In();
			
			$('#page-hd').css('display', 'block');
			// 第五页淡出效果
			page5Out();
		}
		if(pageIndex == 5) {
			console.log('pageTotal' + pageTotal);
			lastPage = ".page-1";
			// return;
		} else {
			lastPage = ".page-" + (pageIndex + 1);
		}
	}

	var nowPage = ".page-" + pageIndex;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function() {
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		// $(nowPage).removeClass("hide");
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},600);
}

})();