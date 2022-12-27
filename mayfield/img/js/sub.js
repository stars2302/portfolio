$(function(){
  //header sticky
  $(window).scroll(function(){
    if($(this).scrollTop()>900){
      $(".main_header_wrap").addClass('sticky');
    }else{
      $(".main_header_wrap").removeClass('sticky');
    }
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>0){
      $(".header_wrap").addClass('top');
    }else{
      $(".header_wrap").removeClass('top');
    }
  });

  // reservation modal
  $(".reservation_btn").click(function(){
    $(".modal_wrap").css("z-index","100000");
    $(".header").hide();
    $("body").css("overflow","hidden");
    $(".modal_wrap").fadeIn();
    
  });
  $(".modal_wrap .close_btn button").click(function(){
    $(".header").show();
    $("body").css({"overflox-x":"hidden","overflow-y":"auto"});
    $(".main_slide .slide .slide_btns").css("z-index","10");
    $(".modal_wrap").fadeOut();
  });

  var a = 0;
  $(".date .day td").click(function(){
    a++;
    if(a % 2 == 1){
      $(this).addClass("choice");
    }else{
      $(this).removeClass("choice");
    }
    a++;
  });

  //menu
  $(".header_btns .menu_btn").click(function(){
    $(".header_wrap").hide();
    $("body").css("overflow","hidden");
    $(".menu").css("padding-top","10px");
    $(".menu").slideDown();
  });
  $(".menu .menu_up .close_btn").click(function(){
    $("body").css({"overflox-x":"hidden","overflow-y":"auto"});
    $("body").css("padding-top","0");
    $(".menu").hide();
    $(".header_wrap").show();
  });

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
