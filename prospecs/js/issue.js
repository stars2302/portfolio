$(function(){

  //header add class 'shadow'
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();

    //스크롤 시 header_wrap에 addClass
    if(windowScroll >= 50){
      $('.header_wrap').addClass('shadow');
      
    //스크롤 가장 상단 header_wrap에 removeClass
    } else{
      $('.header_wrap').removeClass('shadow');
    }
  });



  //more button click
  $('.more_button').click(function(){
    $(this).hide();
    $('.section3').show();
  });


  //scroll animation
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();
    var section1OST = $('.section1').offset().top - 300;
    
    //section1 fadeIn animation
    if(windowScroll >= section1OST) {
      $('.section1').addClass('active');
    }

    //section2, 3 content animation
    $('section .con').each(function(){
      var conOST = $(this).offset().top - 500;

      if(windowScroll >= conOST) {
        $(this).addClass('active');
      } else{
        $(this).removeClass('active');
      }
    });
  });
  $(window).trigger('scroll');




});//document ready