<?php
  date_default_timezone_set('America/Vancouver');
  #Get variables from client POST reqest  
  $name = test_input($_POST["name"]);
  $email = $_POST['email'];
  $message = test_input($_POST["message"]);
  $recaptch = $_POST['recaptcha'];

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

    $mailTo = 'email@example.com'
    $subject = "A message from comfortingtouch.ca";
    $txt = 
        'Name: '. $name . "\r\n" . "\r\n" .
        'Email: '. $email . "\r\n" . "\r\n" .
        'Date: '. date('l jS \of F Y h:i:s A') . "\r\n" . "\r\n" .
        'Message: '. wordwrap($message, 70);
    $headers = 
        'From: '. $email . "\r\n" .
        'Reply-To: '. $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
 
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      # Check recaptcha 
        $data = array(
          'secret' => '6LfMk3cUAAAAALG_IWlo6rGOzwbvy0wiU8-661y5',
          'response' => $recaptch
        );
        # Create a connection
        $url = "https://www.google.com/recaptcha/api/siteverify";
        $ch = curl_init($url);
        # Form data string
        $postString = http_build_query($data, '', '&');
        # Setting our options
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        # Get the response
        $response = curl_exec($ch);
        curl_close($ch);
        $re_result = json_decode($response);
      # Send email
      if($re_result->success){
        if(mail($mailTo, $subject, $txt, $headers)) {
            echo '<p>Success! I\'ll be in touch shortly</p>';
        } else {
            echo '<p>Sorry, we encountered a server error!</p>';
        };
      } else {
        echo '<p>Please complete the reCAPTCHA</p>';
      };
    } else {
      echo '<p>Please enter a valid email</p>';
    };
?>