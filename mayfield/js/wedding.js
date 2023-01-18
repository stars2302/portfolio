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



  //section2 slide
  $('.wedding_slide').bxSlider({
    auto: true,
    pager: false,
  });
  
}); //documend ready