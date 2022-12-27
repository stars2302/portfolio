$(function(){
  
  /***********************issue************************/
  //more button
  $(".issue_more_button").click(function(){
    $(".issue_more_button").hide();
    $("#section3").show();
    $("footer").css("top","200px");
  });

  //img hover
  $(".issue #section1 .content .text_box").mouseover(function(){
    $(this).parent(".content").prev(".main_img").find('img'
    ).addClass('hover');
  });
  $(".issue #section1 .content .text_box").mouseout(function(){
    $(this).parent(".content").prev(".main_img").find('img'
    ).removeClass('hover');
  });

  /************************lookbook *********************/
  //modal--video1
  $(".lookbook #cons #con1 .video button").click(function(){
    $("#lookbook_modal_wrap").fadeIn();
    $("#modal iframe").hide();
    $("#modal iframe").eq(0).show().attr("src","https://www.youtube.com/embed/H92vIy0O2Pc");
    // $("body").css("overflow","hidden");
  });

  $("#lookbook_modal_wrap").click(function(){
    $(this).fadeOut();
    $("body").css("overflowY","auto");
    $("#modal iframe").eq(0).attr("src","https://www.youtube.com/embed/H92vIy0O2Pc?&mute=1");
  });

  //modal--video2
  $(".lookbook #cons #con2 .video button").click(function(){
    $("#lookbook_modal_wrap").fadeIn();
    $("#modal iframe").hide();
    $("#modal iframe").eq(1).show().attr("src","https://www.youtube.com/embed/tku0vTmTQKM");
    // $("body").css("overflow","hidden");
  });

  $("#lookbook_modal_wrap").click(function(){
    $(this).fadeOut();
    $("body").css("overflowY","auto");
    $("#modal iframe").eq(1).attr("src","https://www.youtube.com/embed/tku0vTmTQKM?&mute=1");
  });

  //modal--video3
  $(".lookbook #cons #con3 .video button").click(function(){
    $("#lookbook_modal_wrap").fadeIn();
    $("#modal iframe").hide();
    $("#modal iframe").eq(2).show().attr("src","https://www.youtube.com/embed/YVLpJ6Jzul8");
    // $("body").css("overflow","hidden");
  });

  $("#lookbook_modal_wrap").click(function(){
    $(this).fadeOut();
    $("body").css("overflowY","auto");
    $("#modal iframe").eq(2).attr("src","https://www.youtube.com/embed/YVLpJ6Jzul8?&mute=1");
  });

  //slide
  $(".lookbook #cons").bxSlider({
    pager: false,
    touchEnabled: false
  });

  

  /*************************product***********************/

  //active
  $(".product #section1 .color_select li").click(function(){
    $(".product #section1 .color_select li").removeClass('active');
    $(this).addClass('active');
  });

  var a=0;
  var b=0;
  $(".product #section1 .icons .icon").eq(0).click(function(){
    a++;
    b = a%2;
    if(b == 1){
      $(this).find('img').attr("src","img/heart_black_icon.png");
    }else{
      $(this).find('img').attr("src","img/heart_icon.png");
    }
  });

  $(".product #section1 .size_select li").click(function(){
    $(".product #section1 .size_select li").removeClass('active');
    $(this).addClass('active');
  });

  $(".product #section2 .title li").click(function(){
    $(".product #section2 .title li").removeClass('active');
    $(this).addClass('active');
  });

  /*************************shop***************************/

  /*menu */
  $(".shop .menu_wrap .menu_one>li").click(function(){
    var $text = $(this).children('a').text();
    $(".shop #title").text($text);
  });

  $(".shop .menu_wrap .menu_two>li").click(function(){
    $(".shop .menu_wrap .menu_two>li").removeClass('active');
    $(this).addClass('active');
  });

  /*cheak box */
  $(".shop .con_title .check_box li").click(function(){
    $(".shop .check_box li .circle").removeClass('active');
    $(this).find('.circle').addClass('active');
  });

  var $section = $(".shop .section_wrap section");
  var $con_img_wrap = $(".shop .section_wrap section .con .img_wrap");

  /*img_hover */
  $con_img_wrap.mouseover(function(){
    $(this).find('img.hover').stop().fadeIn(300);
  });
  $con_img_wrap.mouseout(function(){
    $(this).find('img.hover').stop().fadeOut(300);
  });

  /*pager */
  var $btn_index =0;
  var $section_index = 0;
  
  $(".shop #pager .prev_btn").click(function(){
    if($btn_index == -2){
      $btn_index = 0;
      $(this).next().find('li').removeClass('active');
      $(this).next().find('li').eq($btn_index).addClass('active');
    }else{
      $btn_index--;
      $(this).next().find('li').removeClass('active');
      $(this).next().find('li').eq($btn_index).addClass('active');
    }
  });

  $(".shop #pager .next_btn").click(function(){
    $(window).scrollTop(800);
    if($btn_index == 2){
      //button
      $btn_index = 0;
      $(this).prev('.num').find('li').removeClass('active');
      $(this).prev('.num').find('li').eq($btn_index).addClass('active');

      //section
      $section_index = 0;
      $section.hide();
      $(this).parent("#pager").prev(".section_wrap").children("section").eq($section_index).show();
    }else{
      //button
      $btn_index++;
      $(this).prev('.num').find('li').removeClass('active');
      $(this).prev('.num').find('li').eq($btn_index).addClass('active');

      //section
      $section_index++;
      $section.hide();
      $(this).parent("#pager").prev(".section_wrap").children("section").eq($section_index).show();
    }
  });

  $(".shop #pager .num li").click(function(){
    $(window).scrollTop(800);
    var $index = $(this).index();
    $section.hide();
    $section.eq($index).show();

    $(".shop #pager li").removeClass('active');
    $(this).addClass("active");
  });


}); //document