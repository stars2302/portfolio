$(function(){
  var skillChart = $('.section2 .article3 .skill_chart');
  var excuted = false;
  
  
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();
    var chartOST = $('.section2 .article3').offset().top - 450;

    if(windowScroll > chartOST) { //about skill chart animation
      if(excuted == false){
        numberWrite();
        excuted = true;
      }
    } else {
      excuted = false;
    }
    
  });

  function numberWrite (){
    skillChart.each(function(){
      var numBowl = $(this).find('span');
      var dataNum = numBowl.attr('data-num');
      var circle = $(this).find('svg');
      
      //chart span에 변화하는 숫자 쓰기
      $({late:0}).animate({late:dataNum},{
        duration: 2000,
        progress: function(){
          var now = this.late;
          console.log(now);
          numBowl.text(Math.floor(now) + '%');
          
          //chart line 채우기
          var chartLine = 455 - (455*now/100);
          circle.css({strokeDashoffset:chartLine});
        }

      });

    });//skillChart.each
  }//function numberWrite
  
  
  
}); //document