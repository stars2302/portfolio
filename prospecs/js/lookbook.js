$(function(){
  
  //header add class 'shadow'
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();

    if(windowScroll >= 50){
      $('.header_wrap').addClass('shadow');
    } else{
      $('.header_wrap').removeClass('shadow');
    }
  });


  //content slick slide로 페이지 이동하기
  $('.contents').slick({
    arrows: true,
    prevArrow: $('.contents').parent().find('.prev_button'),
    nextArrow: $('.contents').parent().find('.next_button')
  });


  //video 버튼 누르면 모달 띄우기
  var playBtn = $('.video .video_play_btn');
  var $modal = $('.lookbook_modal_wrap');
  

  //con1 video button click
  $('.con1').find(playBtn).click(function(){
    console.log($(this));
    $modal.fadeIn();
    $modal.find('iframe').eq(0).show().siblings().hide();
  });

  //con2 video button click
  $('.con2').find(playBtn).click(function(){
    console.log($(this));
    $modal.fadeIn();
    $modal.find('iframe').eq(1).show().siblings().hide();
  });

  //con3 video button click
  $('.con3').find(playBtn).click(function(){
    console.log($(this));
    $modal.fadeIn();
    $modal.find('iframe').eq(2).show().siblings().hide();
  });

  $modal.click(function(){
    $(this).fadeOut();
    $(this).find('iframe').attr("src","https://www.youtube.com/embed/H92vIy0O2Pc?&mute=1");
    $(this).find('iframe').hide();
  });

});//document ready