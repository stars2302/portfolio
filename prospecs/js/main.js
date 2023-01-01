$(function(){

  //header stiky
  $(window).scroll(function(){
    if($(this).scrollTop()>=1000 && $(this).scrollTop()<2705){
      $(".header_wrap").addClass("black");
      $("header #logo img").attr("src","img/logo.png");
      $("#join .icon:nth-child(1) img").eq(0).attr("src","img/icon_search.png");
      $("#join .icon:nth-child(2) img").eq(0).attr("src","img/icon_user.png");
    }else if($(this).scrollTop()>2706 && $(this).scrollTop()<3649){
      $(".header_wrap").removeClass("black");
      $("header #logo img").attr("src","img/logo_white.png");
      $("#join .icon:nth-child(1) img").eq(0).attr("src","img/icon_search_white.png");
      $("#join .icon:nth-child(2) img").eq(0).attr("src","img/icon_user_white.png");
    }else if($(this).scrollTop()>3650){
      $(".header_wrap").addClass("black");
      $("header #logo img").attr("src","img/logo.png");
      $("#join .icon:nth-child(1) img").eq(0).attr("src","img/icon_search.png");
      $("#join .icon:nth-child(2) img").eq(0).attr("src","img/icon_user.png");
    }else{
      $(".header_wrap").removeClass("black");
      $("header #logo img").attr("src","img/logo_white.png");
      $("#join .icon:nth-child(1) img").eq(0).attr("src","img/icon_search_white.png");
      $("#join .icon:nth-child(2) img").eq(0).attr("src","img/icon_user_white.png");
    }
  });


  
  // ---------------- section1 slide ----------------
  var $sec1Slide = $('.section1 .slides');
  $sec1Slide.slick({
    autoplay: true,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: $sec1Slide.parent().find('.prev_button'),
    nextArrow: $sec1Slide.parent().find('.next_button')
  });

  $sec1Slide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //section1 slide pager
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.slide_pager').text(i + ' / ' + 3);
  });
  $sec1Slide.trigger('afterChange');


  // ---------------- section2 slide-----------------
  var $sec2Slide = $('.section2 .section2_slide');
  $sec2Slide.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $sec2Slide.parent().find('.prev_button'),
    nextArrow: $sec2Slide.parent().find('.next_button'),
    variableWidth: true
  });

  // -------------- section2 content hover ----------------
  $(".section2 .content img").mouseover(function(){
    var $index = $(this).parents(".content").index()+1;
    console.log($index);
    $(this).find("img").css("opacity","0").stop().attr("src","img/article"+$index+"_hover.png").animate({opacity:1},300);
  });
  $("#section2 .article .img_cover").mouseout(function(){
    var $index = $(this).parents(".article").index()+1;
    $(this).find("img").css("opacity","0").stop().attr("src","img/article"+$index+".png").animate({opacity:1},200);
  });

  

})//document