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



  //main .text_box height
  var imgHeight = $('.main_img_wrap img').css('height');
  console.log(imgHeight);
  $('.main .right').css({height:imgHeight});

  $(window).resize(function(){
    $('.main .right').css({height:imgHeight});
  });
  $(window).trigger('resize');


  //li click event
  $('li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });


});//document ready