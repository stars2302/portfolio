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


  //menu li click -> addClass 'active'
  $('.menu_two li').click(function(){
    $('.menu_two li').removeClass('active');
    $(this).addClass('active');
  });



  //.con layout(height)
  $(window).resize(function(){
    //.con height 구하기(.main_img의 height값의 0.5배)
    var mainHeight = $('.main_img').css('height');
    var conHeight = parseInt(mainHeight) / 2;
    $('.con').css({height:conHeight});

    //.con .text_box height 구하기!...
    var conImgHeight = $('.con .img_wrap img').css('height');
    console.log(conImgHeight)
    var textBoxHeight = conHeight - parseInt(conImgHeight);
    $('.con .text_box').css({height:textBoxHeight});
  });
  $(window).trigger('resize');



  //pager click event
  var pager = $('.pager');
  var prevBtn = pager.find('.prev_btn');
  var nextBtn = pager.find('.next_btn');
  var pagerNum = pager.find('li');
  var section = $('.section_wrap').find('section');
  var sectionOST = section.offset().top - 200;
  var a = 0;

  //nextBtn click
  nextBtn.click(function(){
    if(a >= 2) {
      a = 2;
    } else {
      a += 1;
      $(window).scrollTop(sectionOST);
      pagerNum.eq(a).addClass('active').siblings().removeClass('active');
      section.eq(a).show().siblings().hide();
    }
  });

  //prevBtn click
  prevBtn.click(function(){
    if(a == 0) {
      a = 0;
    } else {
      a -= 1;
      $(window).scrollTop(sectionOST);
      pagerNum.eq(a).addClass('active').siblings().removeClass('active');
      section.eq(a).show().siblings().hide();
    }
  });

  pagerNum.click(function(){
    $(this).each(function(){
      var IDX = $(this).index();

      $(window).scrollTop(sectionOST);
      pagerNum.eq(IDX).addClass('active').siblings().removeClass('active');
      section.eq(IDX).show().siblings().hide();
    });
  });


});//document ready