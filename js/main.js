$(function(){
  
  //---------------- item animation ----------------
  var sec2OST = $('.section2').offset().top - 150,
      sec3OST = $('.section3').offset().top - 150,
      sec4OST = $('.section4').offset().top - 150,
      sec5OST = $(document).height() - $(window).height(),
      item1 = $('.wrap .deco_item1'),
      item2 = item1.siblings('.deco_item2');


  
  $(window).resize(function(){
    var windowWidth = $(this).outerWidth();

    // ---------- screen PC animation ----------
    if(windowWidth > 1450){
      /// 해상도 바뀜에 따라 Class 초기화
      item1.removeClass('mobile');
      item2.removeClass('mobile');


      $(window).scroll(function(){
      var windowScroll = $(this).scrollTop();

      //section1 animtaion -- (PC)
      if(windowScroll >= 0 && windowScroll <= sec2OST ){
        item1.hide();
        item2.hide();
      }

      //section2 animtaion -- (PC)
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

      //section3 animtaion -- (PC)
      if(windowScroll > sec3OST && windowScroll <= sec4OST ){
        item1.fadeIn(300);
        item1.find('img').attr('src','img/site_item1.svg');
        item1.addClass('sec3_item');
        
        item2.fadeIn(300);
        item2.find('img').eq(0).attr('src','img/site_item2.svg');
        item2.find('img').eq(1).attr('src','img/site_item3.svg');
        item2.addClass('sec3_item');
        console.log('sec3입니당')
      
      } else {
        item1.removeClass('sec3_item');
        item2.removeClass('sec3_item');
        item2.find('img').eq(1).attr('src','');
      }

      //section4 animtaion -- (PC)
      if(windowScroll > sec4OST && windowScroll <= sec5OST){
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

      //section5, footer(animation none) -- (PC)
      if(windowScroll >= sec5OST) {
        item1.addClass('none');
        item2.addClass('none');
      } else {
        item1.removeClass('none');
        item2.removeClass('none');
      }
      });
      $(window).trigger('scroll');
    }// ---------- screen PC animation ---------- 

    // ------- screen moblie animation -------
    if(windowWidth <= 1450){
      
      $(window).scroll(function(){
        var windowScroll = $(this).scrollTop();
            // sec4OST = $('.section4').offset().top - 300;
        // console.log(windowScroll);

        /// 해상도 바뀌면 pc이미지 나오는 오류 해결
        item2.find('img').attr('src','img/deco_item_1450.svg');
        item2.find('img').eq(1).attr('src','');

        // section1 -- (moblie)
        if(windowScroll >= 0 && windowScroll <= sec2OST){
          item1.hide();
          item2.hide();
        }

        //section2 animtaion -- (moblie)
        if(windowScroll > sec2OST && windowScroll <= sec3OST ){
          item1.fadeIn(300);
          item1.find('img').attr('src','img/about_item1_1450.svg');
          item1.removeClass('sec2_item');
          item1.addClass('mobile');
          
          item2.fadeIn(300);
          item2.removeClass('sec2_item');
          item2.addClass('mobile');

        } else {
        }

        //section3 animtaion -- (moblie)
        if(windowScroll > sec3OST && windowScroll <= sec4OST ){
          item1.fadeIn(300);
          item1.find('img').attr('src','img/site_item1_1450.svg');
          item1.removeClass('sec3_item');
          item1.addClass('mobile');
          
          item2.fadeIn(300);
          item2.removeClass('sec3_item');
          item2.addClass('mobile');

        } else {
        }

        //section4 animtaion -- (moblie)
        if(windowScroll > sec4OST && windowScroll <= sec5OST){
          item1.fadeIn(300);
          item1.find('img').attr('src','img/design_item1_1450.svg');
          item1.removeClass('sec4_item');
          item1.addClass('mobile');
          
          item2.fadeIn(300);
          item2.removeClass('sec4_item');
          item2.addClass('mobile');
        } else {
        }

        //section5, footer(animation none) -- (moblie)
        if(windowScroll >= sec5OST) {
          item1.hide();
          item2.hide();
        } else {
        }

      });
      $(window).trigger('scroll');
    }
  });//window resize
  $(window).trigger('scroll');
  $(window).trigger('resize');

  //---------------- item animation ----------------




  //---------------- tab click 이동 ----------------
  var tab = $('.header li');
  
  //tab click
  tab.click(function(e){
    var idx = $(this).index();
    var section = $('section').eq(idx);
    var sectionOST = section.offset().top - 100;
    $('html,body').stop().animate({scrollTop:sectionOST});
  });

  // tab font color change
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();
    var scrollHeight = $(document).height() - $(window).height();

    $('section').each(function(){
      if($(this).offset().top - 150 <= windowScroll) {
        var idx = $(this).index();
        tab.removeClass('on');
        tab.eq(idx).addClass('on');
      }
    });

    // 마지막 section5는 offset.top이 안닿음..오류
    if(windowScroll >= scrollHeight) {
      tab.removeClass('on');
      tab.eq(4).addClass('on');
    }
  });
  //---------------- tab click 이동 ----------------




  // ---------------- section2, 3, 4 animation ----------------
  var sec2Content = $('.section2 article'),
      sec3Content = $('.section3 .site_items .site_item'),
      sec4Content = $('.section4 .design_items');


  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();

    // section2 animation
    sec2Content.each(function(){
      var contentOST = $(this).offset().top - 500;

      if(windowScroll >= contentOST) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    // section3 animation
    sec3Content.each(function(){
      var contentOST = $(this).offset().top - 600;

      if(windowScroll >= contentOST) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    // section4 animation
    if(windowScroll >= sec4OST) {
      sec4Content.addClass('active');
    } else {
      sec4Content.removeClass('active');
    }
  }); //scroll
  // -----  section2, 3, 4 animation -----





  //-------- section2  차트 animation --------
  var skillChart = $('.section2 .article3 .skill_chart');
  var excuted = false;

  // scroll하면 chart animation 실행 
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

          //chart 원 채우기
          //circleR 구하기 (반지름)
          var circleR = circle.find('circle').attr('r').replace('%','');//45%
          circleR = circleWidth * Number(circleR)/100; //circleWidth * .45
          //per 구하기 (원의 둘레)
          var per = Math.PI * circleR * 2;
          var chartLine = per - (per * now/100);
          circle.css({strokeDashoffset:chartLine});
        } //progress

      });// animate

    });//skillChart.each
  }//function numberWrite


  // 해상도에 따른 svg 크키 변환
  $(window).resize(function(){
    var windowWidth = $(this).outerWidth();

    /* 1450초과 svg */
    if(windowWidth > 1450){
      skillChart.find('circle').attr('cx','5vw');
      skillChart.find('circle').attr('cy','5vw');
      skillChart.find('circle').attr('r','45%');
    }

    /* 1450이하 svg */
    if(windowWidth <= 1450){
      skillChart.find('circle').attr('cx','6vw');
      skillChart.find('circle').attr('cy','6vw');
      skillChart.find('circle').attr('r','43%');
    }
    
    /* 1000이하 svg */
    if(windowWidth <= 1000){/* 1450이하 svg */
      skillChart.find('circle').attr('cx','13vw');
      skillChart.find('circle').attr('cy','13vw');
      skillChart.find('circle').attr('r','46%');
    }
  });
  //-------- section2 article3 chart animation --------
  



  //-------------- section4 modal --------------
  var $sec4Item = $('.section4 .design_items .design_item');
  var $sec4Modal = $('.section4 .modal');

  //sec4 design_item 클릭하면
  $sec4Item.click(function(){
    var imgIDX = $(this).index() + 1;
    
    //modal 나타나기
    $sec4Modal.show();

    //deco_item, header - z-index 숨기기
    $('.deco_item,.header_wrap').hide();
    $('body,html').css({'overflow-y':'hidden'});

    //modal img 경로바꿔 해당 사진 띄우기
    $sec4Modal.find('img').attr('src','img/design'+imgIDX+'_modal.jpg');
  });

  //modal 클릭하면
  $sec4Modal.click(function(){
    //modal 숨기기
    $(this).hide();

    //deco_item, header - z-index 나타나기
    $('.deco_item,.header_wrap').show();
    $('body,html').css({'overflow-y':'auto'});
  });


  //-------------- section4 modal --------------
  $(window).trigger('scroll');
  $(window).trigger('resize');
}); //document