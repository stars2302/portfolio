$(function(){
  //header scroll
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $(".header_wrap").addClass('top');
    }else{
      $(".header_wrap").removeClass('top');
    }
  });

  //menu(nav) show/hide
  $(".header_btns .menu_btn").click(function(){
    $("body").css("overflow","hidden");
    $(".menu_wrap").slideDown(500);
    $(".header_wrap").css("z-index",0);
  });
  $(".menu_wrap .menu_header .close_btn").click(function(){
    $(".menu_wrap").slideUp(500);
    $("body").css({"overflox-x":"hidden","overflow-y":"auto"});
    $(".header_wrap").css("z-index",9999);
  });

  // reservation modal show/hide
  $(".header .header_btns .reservation_btn").click(function(){
    $(".reservation_modal_wrap").fadeIn(500);
    $(".reservation_modal_wrap").css("z-index","100000");
    $("body").css("overflow-y","hidden");
  });
  $(".reservation_modal_wrap .close_btn").click(function(){
    $(".reservation_modal_wrap").fadeOut();
    $("body").css("overflow-y","auto");
  });

  var a = 0;
  var b = 0;
  $(".date .day td").click(function(){
    a++;
    b = a % 2;
    if(b == 1){
      $(this).addClass("choice");
    }else{
      $(this).removeClass("choice");
    }
  });

  /* ---------------------------- offers ----------------------------- */
  //offers content animation
  var offerContent = $('.contents section .con');

  $(window).scroll(function(){
    windowScroll = $(this).scrollTop();
    
    offerContent.each(function(){
      var contentOST = $(this).offset().top - 500;

      if(windowScroll >= contentOST) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
  $(window).trigger('scroll')



  //offers title button click
  var offersBtn = $('.offers_title').find('button');
  var section = $('.contents > div');

  offersBtn.click(function(){
    var index = $(this).index() -1;
    
    //sub title 글자 변환
    $(this).addClass('active').siblings().removeClass('active');

    //sub title에 맞는 content 변환
    section.eq(index).addClass('show').siblings().removeClass('show');
    index = 0;
  });



  //offers page button click
  var pageBtn = $('.page_btns > ul > li');
  var prevBtn = $('.page_btns > .prev_btn');
  var nextBtn = $('.page_btns > .next_btn');
  var index = 0;

  var page = section.find('section');
  console.log(page)

  nextBtn.click(function(){
    $(window).scrollTop(0);
    if(section.hasClass('show')){
      
      if(index == 1) {
        index = 0;
        pageBtn.eq(index).addClass('active').siblings().removeClass('active');
        page.eq(index).addClass('show').siblings().removeClass('show');
      } else {
        index++;
        pageBtn.eq(index).addClass('active').siblings().removeClass('active');
        page.eq(index).addClass('show').siblings().removeClass('show');
      }
    }

    console.log(index);
  });// next button click
  nextBtn.trigger('click')

  /* ---------------------------- offers ----------------------------- */



  //dining_menu
  var a = 0;
  var b = 0;
  $(".dining_title_top button").click(function(){
    a++;
    b = a % 2; 
    if(b == 1){
      $(".dining_menu_top").stop().slideDown();
      $(this).children("img").attr("src","img/up_btn.png");
    }else{
      $(".dining_menu_top").stop().slideUp();
      $(this).children("img").attr("src","img/down_btn.png");
    }
  });

  $(".dining_title_bottom button").click(function(){
    a++;
    b = a % 2; 
    if(b == 1){
      $(".dining_menu_bottom").stop().slideDown();
      $(this).children("img").attr("src","img/up_btn.png");
    }else{
      $(".dining_menu_bottom").stop().slideUp();
      $(this).children("img").attr("src","img/down_btn.png");
    }
  });

  //dining_menu
  $(".dining_menu li").eq(0).click(function(){
    $(".dining_title .dining").text("NAKWON");
    $(".dining_menu").find("button").removeClass("active");
    $(this).children("button").addClass("active");
  });

  $(".dining_menu li").eq(1).click(function(){
    $(".dining_title .dining").text("BONGRAEHEON");
    $(".dining_menu").find("button").removeClass("active");
    $(this).children("button").addClass("active");
  });

  $(".dining_menu li").eq(2).click(function(){
    $(".dining_title .dining").text("CASTLE TERRACE");
    $(".dining_menu").find("button").removeClass("active");
    $(this).children("button").addClass("active");
  });

  $(".dining_menu li").eq(3).click(function(){
    $(".dining_title .dining").text("LA FESTA");
    $(".dining_menu").find("button").removeClass("active");
    $(this).children("button").addClass("active");
  });

  $(".dining_menu li").eq(4).click(function(){
    $(".dining_title .dining").text("ROYAL MILE");
    $(".dining_menu").find("button").removeClass("active");
    $(this).children("button").addClass("active");
  });

  $(".dining_menu li").eq(5).click(function(){
    $(".dining_title .dining").text("DELICE");
    $(".dining_menu").find("button").removeClass("active");
    $(this).children("button").addClass("active");
  });

  $(".dining_menu li").eq(6).click(function(){
    $(".dining_title .dining").text("YI YUAN");
    $(".dining_menu").find("button").removeClass("active");
    $(this).children("button").addClass("active");
  });

  //dining_slide_main
  $(".dining_main_slide").bxSlider({
    auto: true,
    pager: true,
    pagerType : 'short',
    touchEnabled : false
  });

  //dining_menu_slide
  $(".dining_menu_slide").bxSlider({
    auto: true,
    pager: true,
    pagerType : 'short',
    touchEnabled : false
  });

  //slide
  $(".wedding_slide").bxSlider({
    auto: true,
    pager: true,
    pagerType: 'short',
    touchEnabled: false
  });

  


});//document
