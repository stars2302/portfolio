$(function(){

  //a태그 top방지
  $("a").click(function(e){
    e.preventDefault();
  });

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

  //slide
  $(".main_slide .bxslide").bxSlider({
    auto: true,
    pager: true,
    pagerType: 'short',
    touchEnabled : false,
  });

  $(".section2_slide").bxSlider({
    auto: true,
    pager: true,
    pagerType: 'short',
    touchEnabled: false
  })

  $(".section4_slide").bxSlider({
    auto: true,
    pager: true,
    pagerType: 'short',
    touchEnabled: false
  })

  //section1, section3 scroll animation
  $(window).scroll(function(){
    //section1 scroll animation
    var windowScroll = $(this).scrollTop();
    var textBoxOffset = $('.section1 .text_box').offset().top - 600;
    var con1Offset = $('.section1 .con1').offset().top - 500;
    var con2Offset = $('.section1 .con2').offset().top - 400;
    var con3Offset = $('.section1 .con3').offset().top - 700;

    if(windowScroll > con3Offset){ //section1 con3 animation
      $('.section1 .con3').addClass('active');
      
    } else if(windowScroll > con2Offset){ //section1 con2 animation
      $('.section1 .con2').addClass('active');

    } else if(windowScroll > con1Offset){ //section1 con1 animation
      $('.section1 .con1').addClass('active');

    } else if(windowScroll > textBoxOffset){ //section1 textBox animation
      $('.section1 .text_box').addClass('active');

    } else {
      $('.section1 .text_box').removeClass('active');
      $('.section1 .con1').removeClass('active');
      $('.section1 .con2').removeClass('active');
      $('.section1 .con3').removeClass('active');
    }

    //section3 scroll animation
    var section4Offset = $('.section3').offset().top - 700;

    if(windowScroll > section4Offset) {
      $('.section3').addClass('active');
    } else {
      $('.section3').removeClass('active');
    }
  });

  //section1 screen width 1200px img change, section3 class 'margin' add/remove
  $(window).resize(function(){
    var windowWidth = $(this).outerWidth();
    if(windowWidth < 1201) {//screen width ~1200px
      $('.section1 .con2 .offer_img img').attr('src','img/offers2_1300.jpg');
      $('.section3').removeClass('margin');
    }else {//screen width 1200px~
      $('.section1 .con2 .offer_img img').attr('src','img/offers2.jpg');
      $('.section3').addClass('margin');
    }
  });
  $(window).trigger('resize');
});//document