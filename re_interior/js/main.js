var mainMenu = $('.main_menu > li');
var mainSlides = $('.section1 .slide_container');
var portfolioContent = $('.section2 .portfolio_imgs li');

// a tag event delete
$('body').click(function(a){
  a.preventDefault();
});

//top button  
$(window).scroll(function(){ //가장 위에선 버튼 숨기기
  var nowScroll = $(this).scrollTop();
  if(nowScroll > 50){
    $('.top_button').show();
  } else {
    $('.top_button').hide();
  }
});

$('.top_button').click(function(){//클릭하면 가장 위로
  $('boty,html').stop().animate({scrollTop:0},{
    duration: 1000
  });
});

//pc, mobile header
$(window).resize(function(){
  var WindowWidth = $(window).innerWidth();
  var menuButton = $('.header .menu_btn');
  var clickCount = 0;
  if(WindowWidth > 1300) { //해상도 1300부터~
    // PC header -- submenu, submenu_background fadeIn/out
    $('.main_menu > li').mouseover(function(){
      $(this).siblings('.nav_back').stop().fadeIn(200);
      $(this).find('li').stop().fadeIn(200);
      $('.container').css({'z-index':-1});
    });
    
    $('.main_menu > li').mouseout(function(){
      $(this).siblings('.nav_back').stop().fadeOut(200);
      $(this).find('li').stop().fadeOut(200);
      $('.container').css({'z-index':0});
    });

    //Mobile -> pc로 해상도 바꿨을 때 생기는 오류
    menuButton.off('click');
    $('.header .nav').show();

  } else { // 해상도 ~1300까지
    $('.main_menu > li').off('mouseover mouseout');

    //Mobile header click
    menuButton.click(function(){
      clickCount++;
      if(clickCount % 2 == 1){//홀수 클릭
        $('body').css({'overflow-y':'hidden'});
        $('.header .nav').slideDown(500);
      } else{//짝수 클릭
        $('body').css({'overflow-y':'auto'});
        $('.header .nav').slideUp(500);
      }
    });//click event
  } //resize in if
});

// section1 -- mainSlide (bxslider)
mainSlides.bxSlider({
  auto: true,
  pager: true,
  pagerType: 'short',
  pause: 5000,
  touchEnabled: false
});

// section2 -- content hover (pc hover, mobile hover none)
$(window).resize(function(){
  var WindowWidth = $(window).innerWidth();
  if(WindowWidth > 1300) { //pc hover
    portfolioContent.mouseover(function(){
      portfolioContent.addClass('inactive');
      $(this).removeClass('inactive');
      $(this).addClass('active');
    });
    
    portfolioContent.mouseout(function(){
      portfolioContent.removeClass('inactive');
      portfolioContent.removeClass('active');
    });
  } else { //mobile hover none
    portfolioContent.off('mouseover mouseout');
  } //if
}); //resize
$(window).trigger('resize');


//section4 -- scroll animation
var section2 = $('.section2'),
    section2OffsetTop = section2.offset().top - 700;
var section4 = $('.section4'),
    section4Title = section4.find('.recommend_sample_title'),
    section4Content = section4.find('.recommend_samples'),
    section4OffsetTop = section4.offset().top - 700;

$(window).scroll(function(){
  if($(this).scrollTop() > section2OffsetTop){
    section2.addClass('active');
  } else {
    section2.removeClass('active');
  }
  if($(this).scrollTop() > section4OffsetTop){
    section4Title.addClass('active');
    section4Content.addClass('active');
  } else {
    section4Title.removeClass('active');
    section4Content.removeClass('active');
  }
});

