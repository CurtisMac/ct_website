$($(window).scroll(function(){
  if ($(window).scrollTop() > $(window).height()/3){
    $("#header").slideDown()
  } else {
    $("#header").slideUp()
  }
}))