$(function(){

  //header stiky
  $(window).scroll(function(){
    if($(this).scrollTop()>=1000 && $(this).scrollTop()<2705){
      $("#header_wrap").addClass("black");
      $("header #logo img").attr("src","img/logo.png");
      $("#join .icon:nth-child(1) img").eq(0).attr("src","img/icon_search.png");
      $("#join .icon:nth-child(2) img").eq(0).attr("src","img/icon_user.png");
    }else if($(this).scrollTop()>2706 && $(this).scrollTop()<3649){
      $("#header_wrap").removeClass("black");
      $("header #logo img").attr("src","img/logo_white.png");
      $("#join .icon:nth-child(1) img").eq(0).attr("src","img/icon_search_white.png");
      $("#join .icon:nth-child(2) img").eq(0).attr("src","img/icon_user_white.png");
    }else if($(this).scrollTop()>3650){
      $("#header_wrap").addClass("black");
      $("header #logo img").attr("src","img/logo.png");
      $("#join .icon:nth-child(1) img").eq(0).attr("src","img/icon_search.png");
      $("#join .icon:nth-child(2) img").eq(0).attr("src","img/icon_user.png");
    }else{
      $("#header_wrap").removeClass("black");
      $("header #logo img").attr("src","img/logo_white.png");
      $("#join .icon:nth-child(1) img").eq(0).attr("src","img/icon_search_white.png");
      $("#join .icon:nth-child(2) img").eq(0).attr("src","img/icon_user_white.png");
    }
  });

  //section1 slide
  $("#section1 .slides").bxSlider({
    auto: true,
    pager: true,
    pagerType: 'short',
    touchEnabled : false,
  });


  //section2 slide
  $("#section2 #article_wrap ul").draggable({
    axis:"x",
    // containment: 'parent'
  });

  
  $("#section2 .article .img_cover").mouseover(function(){
    var $index = $(this).parents(".article").index()+1;
    console.log($index);
    $(this).find("img").css("opacity","0").stop().attr("src","img/article"+$index+"_hover.png").animate({opacity:1},300);
  });
  $("#section2 .article .img_cover").mouseout(function(){
    var $index = $(this).parents(".article").index()+1;
    $(this).find("img").css("opacity","0").stop().attr("src","img/article"+$index+".png").animate({opacity:1},200);
  });

  

})//document