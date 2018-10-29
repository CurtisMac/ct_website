$(
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() / 3) {
      $(".dropDwnHeader").slideDown()
    } else {
      $(".dropDwnHeader").slideUp()
    }
  }),

  $("#submit").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    //reset any pervious errors
    $(".contact__input").css("border", "1.5px solid rgb(20,171,155)")

    if (name == "" || email == "" || message == "") {
      $("#contact_message").html("<p>Error! Please fill in all fields!</p>")
      $(".contact__input").css("border", "1.5px solid rgb(230, 0, 0)")
    } else {
      $.post("contact-form.php", {
        name,
        email,
        message,
      })
    }
  })
)