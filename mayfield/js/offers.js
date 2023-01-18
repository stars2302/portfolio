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



  //offers content animation
  var offerContent = $('.offers_contents section .con');

  $(window).scroll(function(){
    windowScroll = $(this).scrollTop();
    
    //각각 content offset에 맞춰서
    offerContent.each(function(){
      var contentOST = $(this).offset().top - 500;

      //'active' class 추가/삭제해 animation 넣기
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
  var section = $('.offers_contents > div');

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

  //page버튼 클릭하면
  nextBtn.click(function(){
    $(window).scrollTop(0);
    if(section.hasClass('show')){
      

      if(index == 1) { //다시 1번 page로 돌아오기
        index = 0;
        pageBtn.eq(index).addClass('active').siblings().removeClass('active');
        page.eq(index).addClass('show').siblings().removeClass('show');

      } else { //클릭할 때 마다 page 번호 더하기
        index++;
        pageBtn.eq(index).addClass('active').siblings().removeClass('active');
        page.eq(index).addClass('show').siblings().removeClass('show');
      }
    }

    console.log(index);
  });// next button click
  nextBtn.trigger('click')


}); //documend ready