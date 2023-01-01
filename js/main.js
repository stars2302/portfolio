$(function(){
  var skillChart = $('.section2 .article3 .skill_chart');
  var excuted = false;
  

  //---------------- item animation ----------------
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop(),
        item1 = $('.wrap .deco_item1'),
        item2 = item1.siblings('.deco_item2');
    console.log(windowScroll);

    var sec2OST = $('.section2').offset().top - 150,
        sec3OST = $('.section3').offset().top - 150,
        sec4OST = $('.section4').offset().top - 500;

    //section1 animtaion
    if(windowScroll >= 0 && windowScroll <= sec2OST ){
      item1.hide();
      item2.hide();
    }

    //section2 animtaion
    if(windowScroll > sec2OST && windowScroll <= sec3OST ){
      item1.fadeIn(300);
      item1.find('img').attr('src','img/about_item1.svg');
      item1.addClass('sec2_item');
      
      item2.fadeIn(300);
      item2.find('img').attr('src','img/about_item2.svg');
      item2.addClass('sec2_item');

    } else {
      item1.removeClass('sec2_item');
      item2.removeClass('sec2_item');
    }

    //section3 animtaion
    if(windowScroll > sec3OST && windowScroll <= sec4OST ){
      item1.fadeIn(300);
      item1.find('img').attr('src','img/site_item1.svg');
      item1.addClass('sec3_item');
      
      item2.fadeIn(300);
      item2.find('img').eq(0).attr('src','img/site_item2.svg');
      item2.find('img').eq(1).attr('src','img/site_item3.svg');
      item2.addClass('sec3_item');
    
    } else {
      item1.removeClass('sec3_item');
      item2.removeClass('sec3_item');
      item2.find('img').eq(1).attr('src','');
    }

    //section4 animtaion
    if(windowScroll > sec4OST && windowScroll <= 5700){
      item1.fadeIn(300);
      item1.find('img').attr('src','img/design_item1.svg');
      item1.addClass('sec4_item');
      
      item2.fadeIn(300);
      item2.find('img').eq(0).attr('src','img/design_item2.svg');
      item2.find('img').eq(1).attr('src','img/design_item3.svg');
      item2.addClass('sec4_item');
    
    } else {
      item1.removeClass('sec4_item');
      item2.removeClass('sec4_item');
    }

    //section5, footer(animation none)
    if(windowScroll >= 5700) {
      item1.addClass('none');
      item2.addClass('none');
    } else {
      item1.removeClass('none');
      item2.removeClass('none');
    }

  });
  $(window).trigger('scroll');
  //---------------- item animation ----------------
  

  //---------------- tab click 이동 ----------------
  var tab = $('.header li');
  
  //tab click
  tab.click(function(e){
    var idx = $(this).index();
    var section = $('section').eq(idx);
    var sectionOST = section.offset().top - 149;
    $('html,body').stop().animate({scrollTop:sectionOST});
  });

  // tab font color change
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();

    $('section').each(function(){
      if($(this).offset().top - 150 <= windowScroll) {
        var idx = $(this).index();
        tab.removeClass('on');
        tab.eq(idx).addClass('on');
      }
    });
  });
  //---------------- tab click 이동 ----------------


  
  //-------- section2 article3 chart animation --------
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();
    var chartOST = $('.section2 .article3').offset().top - 450;

    //about skill chart animation
    if(windowScroll > chartOST) { 
      if(excuted == false){
        numberWrite();
        excuted = true;
      }
    } else {
      excuted = false;
    }
  });//window.scroll

  function numberWrite (){
    skillChart.each(function(){
      var numBowl = $(this).find('span');
      var dataNum = numBowl.attr('data-num');
      var circle = $(this).find('svg');
      var circleWidth = circle.outerWidth();
      
      //chart span에 변화하는 숫자 쓰기
      $({late:0}).animate({late:dataNum},{
        duration: 2000,
        progress: function(){
          var now = this.late;
          numBowl.text(Math.floor(now) + '%');
          
          //chart line 채우기
          // var chartLine = 455 - (455*now/100);
          // circle.css({strokeDashoffset:chartLine});


          // var circleR = circle.find('circle').attr('r').replace('%','');
          // circleR = Number(circleR)/100; //string -> number 변환
          // var per = dataNum * Math.PI * (circleWidth * circleR) * 2;
          // console.log($(this).outerWidth);
          // var chartLine = per - (per*now/100);
          // circle.css({strokeDashoffset:chartLine});

          //circleR 구하기 (반지름)
          var circleR = circle.find('circle').attr('r').replace('%','');//45%
          circleR = circleWidth * Number(circleR)/100; //circleWidth * .45
          //per 구하기 (원의 둘레)
          var per = Math.PI * circleR * 2;
          var chartLine = per - (per * now/100);
          circle.css({strokeDashoffset:chartLine});
        }

      });

    });//skillChart.each
  }//function numberWrite
  //-------- section2 article3 chart animation --------
  
  
  
}); //document