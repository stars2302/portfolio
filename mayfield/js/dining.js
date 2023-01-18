$(function(){

  //header scroll하면 변화
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $(".header_wrap").addClass('top');
    }else{
      $(".header_wrap").removeClass('top');
    }
  });



  //menu(nav) show
  $(".header_btns .menu_btn").click(function(){
    $("body").css("overflow","hidden");
    $(".menu_wrap").slideDown(500);
    $(".header_wrap").css("z-index",0);
  });

  //menu(nav) hide
  $(".menu_wrap .menu_header .close_btn").click(function(){
    $(".menu_wrap").slideUp(500);
    $("body").css({"overflox-x":"hidden","overflow-y":"auto"});
    $(".header_wrap").css("z-index",9999);
  });



  // reservation modal show
  $(".header .header_btns .reservation_btn").click(function(){
    $(".reservation_modal_wrap").fadeIn(500);
    $(".reservation_modal_wrap").css("z-index","100000");
    $("body").css("overflow-y","hidden");
  });

  // reservation modal hide
  $(".reservation_modal_wrap .close_btn").click(function(){
    $(".reservation_modal_wrap").fadeOut();
    $("body").css("overflow-y","auto");
  });



  
  //dining main slide
  $('.dining .section1 .dining_slide').bxSlider({
    pager: false,
    auto: true,
    pause: 5000
  });

  //dining menu slide
  $('.dining .section3 .dining_mene_slide').bxSlider({
    pager: false,
    auto: true,
    pause: 5000
  });


  
  //dining title menu btn 클릭하면.
  var a = 0;
  var b = 0;
  var $menuBtn = $('.dining_title_wrap button img');

  $menuBtn.click(function(){
    a++;
    b = a % 2; 
    if(b == 1){//홀수 클릭
      $(".dining_menu").stop().slideDown();
      $(this).attr("src","img/up_btn.png");

    }else{//짝수 클릭
      $(".dining_menu").stop().slideUp();
      $(this).attr("src","img/down_btn.png");
    }
  });



  //dining shop title 클릭하면.
  var diningShop = $('.dining_title_wrap .dining_menu li');
  var diningTitle = $('.dining_title_wrap .dining_title h2');
  var shopTitle = diningShop.attr('data-title');

  diningShop.find('a').each(function(){
    $(this).click(function(){
      var title = $(this).parent().attr('data-title');

      //텍스트 바꾸고
      diningTitle.text(title);
      //해당 타이틀 layout 적용
      $(this).parent().addClass('active').siblings().removeClass('active');
    });

  });


  //예약 modal
  $('.dining > .button').click(function(){
    $('.form_wrap').fadeIn();
  });

  $('.form_wrap .modal_btns button').eq(1).click(function(){
    $('.form_wrap').fadeOut();
  });

  function diningModalSubmit(){
    $('.form_wrap').hide();
    alert('예약이 완료 되었습니다.')
  }  
}); //documend ready