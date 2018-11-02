$(
  //Dropdown header functionality
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() / 3) {
      $(".dropDwnHeader").slideDown()
    } else {
      $(".dropDwnHeader").slideUp()
    }
  }),
  //Menu functionality
  $(".dropDwnHeader__mobile-menu--img").click(function () {
    $(".dropDwnHeader__mobile-menu").slideToggle()
  }),

  $(".dropDwnHeader__mobile-menu--a").click(function () {
    $(".dropDwnHeader__mobile-menu").slideToggle()
  }),
  //Contact form functionality
  $("#submit").click(function () {
    let name = $("#name").val();
    let email = $("#email").val();
    let email2 = $("#email2").val();
    let message = $("#message").val();
    let recaptcha = $("#g-recaptcha-response").val();
    $(".contact__input").css("border", "1.5px solid rgb(20,171,155)")
    $(".contact_notification").html("<p>Send me a message!</p>")

    if (name === "" || email === "" || email2 === "" || message === "") {
      $(".contact_notification").html("<p>Error! Please fill in all fields!</p>")
      $(".contact__input").css("border", "1.5px solid rgb(230, 0, 0)")
    } else if (email !== email2) {
      $(".contact_notification").html("<p>Error! Email addresses do not match!</p>")
      $(".contact__input").css("border", "1.5px solid rgb(230, 0, 0)")
    } else {
      $(".contact__loader").css("display", "inline-block")
      $(".contact_notification").html("<p>Sending...</p>")
      $.post("contact-form.php", {
        name,
        email,
        message,
        recaptcha,
      }, function (data) {
        $(".contact_notification").html(data)
        $(".contact__loader").css("display", "none")
        if (data === "<p>Success! I'll be in touch shortly</p>") {
          $(".contact__form")[0].reset()
        } else {
          $(".contact__input").css("border", "1.5px solid rgb(230, 0, 0)")
        }
      })
    }
  }),
  //Smooth Scrolling
  $("a").click(function () {
    if (this.hash !== "") {
      let hash = this.hash
      event.preventDefault()
      $('html, body').animate({
        scrollTop: $(hash).offset().top 
      }, 800, function () {
        window.location.hash = hash
      }
)
    }
  })
)
 
