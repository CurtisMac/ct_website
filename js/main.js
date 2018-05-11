$($(window).scroll(function(){
  if ($(window).scrollTop() > $(window).height()/3){
    $(".dropDwnHeader").slideDown()
  } else {
    $(".dropDwnHeader").slideUp()
  }
}))