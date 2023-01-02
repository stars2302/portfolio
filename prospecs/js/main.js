$(function(){

  // ---------------- header style change ----------------
  var $header = $('.header_wrap'),
      $headerLogo = $header.find('.logo img'),
      $searchIcon = $header.find('.header_btns li').eq(0).find('img'),
      $userIcon = $header.find('.header_btns li').eq(1).find('img');

  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop(),
        sec1OST = $('.section1').offset().top -300,
        sec3OST = $('.section3').offset().top -50,
        sec4OST = $('.section4').offset().top -200;
        // console.log(windowScroll);

    //section2 - section3 header
    if(windowScroll >= sec1OST && windowScroll < sec3OST){
      $header.addClass("black");
      $headerLogo.attr("src","img/logo.png");
      $searchIcon.attr("src","img/icon_search.png");
      $userIcon.attr("src","img/icon_user.png");

    //section4 header
    }else if(windowScroll >= sec3OST && windowScroll < sec4OST){
      $header.removeClass("black");
      $headerLogo.attr("src","img/logo_white.png");
      $searchIcon.attr("src","img/icon_search_white.png");
      $userIcon.attr("src","img/icon_user_white.png");
    
    //section5 header
    }else if(windowScroll >= sec4OST){
      $header.addClass("black");
      $headerLogo.attr("src","img/logo.png");
      $searchIcon.attr("src","img/icon_search.png");
      $userIcon.attr("src","img/icon_user.png");
    
    // original header
    }else{
      $header.removeClass("black");
      $headerLogo.attr("src","img/logo_white.png");
      $searchIcon.attr("src","img/icon_search_white.png");
      $userIcon.attr("src","img/icon_user_white.png");
    }
  }); //window scroll - header animation


  // ---------------- scroll animation ----------------
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop(),
        sec1OST = $('.section1').offset().top -500,
        sec2OST = $('.section2').offset().top - 400,
        sec3OST = $('.section3').offset().top -50,
        sec4OST = $('.section4').offset().top -500;
        console.log(windowScroll);

    //section1 animation
    if(windowScroll >= sec1OST){
      $('.section1').addClass('active');
    } else {
      $('.section1').removeClass('active');
    }

    //section2 animation
    if(windowScroll >= sec2OST){
      $('.section2').addClass('active');
    } else {
      $('.section2').removeClass('active');
    }

    //section3 animation
    if(windowScroll >= sec3OST){
      sec3TextAnimation();
      $('.section3').addClass('active');
    }

    //section4 animation
    if(windowScroll >= sec4OST){
      $('.section4').addClass('active');
    } else {
      $('.section4').removeClass('active');
    }
  }); //window scroll - scroll animation

  
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


  // -------------- section3 text animation ----------------
  var typingBool = false; 
  var typingIdx = 0; 
  var $sec3TextSRC = $('.section3 .text_box h2').eq(0);
  var $sec3Text = $('.section3 .text_box h2');

  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $sec3TextSRC.text(); 
  
  typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
  
  function sec3TextAnimation(){
    // 한번만 실행될 수 있도록
    if(typingBool == false){ 
      var tyInt = setInterval(typing,150); // 반복동작
      typingBool = true;     
    } 
  }
      
  function typing(){ 
    if(typingIdx < typingTxt.length){// 타이핑될 텍스트 길이만큼 반복 
      // 한글자씩 이어준다.
      $sec3Text.append(typingTxt[typingIdx]); 
      typingIdx++; 

    } else{ //끝나면 반복종료 
      clearInterval(tyInt); 
    } 
  }  
  

})//document