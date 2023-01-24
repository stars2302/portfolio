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




});//document ready