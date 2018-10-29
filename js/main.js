$(
  $(window).scroll(function(){
    if ($(window).scrollTop() > $(window).height()/3){
      $(".dropDwnHeader").slideDown()
    } else {
      $(".dropDwnHeader").slideUp()
    }
  }),

  $("#submit").click(function(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    $("#contact_message").html("<p>Success! I'll be in touch soon!</em></p>")
    console.log("hi", name, email, message)
  })
)