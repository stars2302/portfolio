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



  //scroll animation
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();
    var $article = $('section article');


    //각각 article animation
    $article.each(function(){
      var articleOST = $(this).offset().top - 500;

      if(windowScroll >= articleOST) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });//article each

    //section4 p animation
    var target = $('.section4 p');
    var targetOST = target.offset().top - 500;

    if(windowScroll >= targetOST){
      target.addClass('active');
    }else{
      target.removeClass('active');
    }
  });//scroll
  $(window).trigger('scroll');



  //section addClass 'margin'
  $(window).resize(function(){
    var windowWidth = $(this).outerWidth();

    if(windowWidth <= 900){
      $('section').addClass('margin');
    }else {
      $('section').removeClass('margin');
    }
  });
  $(window).trigger('resize');


  
}); //documend ready