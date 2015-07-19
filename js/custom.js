$(document).ready(function(){
  $(".main").onepage_scroll({
      pagination: false,
      updateURL: false,
      loop: false
  });
  $('.movedown').click(function(e){
    $('.main').moveDown();
  });
  $('.topHome').click(function(e){
    $('.main').moveTo(1);
  });
});
