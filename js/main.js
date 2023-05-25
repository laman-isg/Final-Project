new WOW().init();

$(function(){
  
    const $body = $('body');
    
    $('.js-hambergur-btn').on('click',function(){
      
      if($body.hasClass('is-active')){
        $body.addClass('is-close');
      }
      
      // transitionの動きを検知して、transitionが終了後、関数の処理を行う。
      $body.on('transitionend',function(){
        $body.removeClass('is-close'); 
      });
      
      $body.toggleClass('is-active');
      
      return false;
    });
    
  });