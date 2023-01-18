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

  

  var $roomSection = $('.room_section');
  var roomSec1OST = $roomSection.eq(0).offset().top - 500;
  var roomSec2Article = $roomSection.eq(1).find('article');
  var roomSec3OST = $roomSection.eq(2).offset().top - 500;

  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();

    //room section1 animation
    if(windowScroll >= roomSec1OST){
      $roomSection.eq(0).addClass('active');
    }else{
      $roomSection.eq(0).removeClass('active');
    }

    //room section2 animation
    roomSec2Article.each(function(){
      var articleOST = $(this).offset().top - 400;

      if(windowScroll >= articleOST){
        $(this).addClass('active');
      }else{
        $(this).removeClass('active');
      }
    });//sec2 article each

    //room section3 animation
    if(windowScroll >= roomSec3OST){
      $roomSection.eq(2).addClass('active');
    }else{
      $roomSection.eq(2).removeClass('active');
    }
  });


  //반응형
  $(window).resize(function(){
    var windowWidth = $(this).outerWidth();

    if(windowWidth <= 1200){//screen width 1200 이하

      //section2 클릭하면 modal 띄우기
      roomSec2Article.click(function(){
        $('.header_wrap').hide();
        $(this).parent('.section2').addClass('back');
        $(this).find('.text_box').show();
      });

      roomSec2Article.find('.text_box').click(function(){
        $(this).parent('.section2').removeClass('back');
        $('.header_wrap').show();
        roomSec2Article.find('.text_box').hide();
      });
    } else {
      roomSec2Article.off('click');
      roomSec2Article.find('.text_box').off('click')
    }
  });
  $(window).trigger('resize');

}); //documend ready