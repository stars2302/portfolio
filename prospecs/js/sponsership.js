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


  //section animation add/remove class
  var $sec1 = $('.section1');
  var sec1OST = $sec1.offset().top - 500;
  var $content = $('.section2 .con');

  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();


    //section1 animation addClass 'active'
    if(windowScroll >= sec1OST) {
      $sec1.addClass('active');
    } else {
      $sec1.removeClass('active');
    }

    //section2 content animation addClass 'active'
    $content.each(function(){
      var conOST = $(this).offset().top - 500;

      if(windowScroll >= conOST) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });



});//document ready