<?php
    date_default_timezone_set('America/Vancouver');
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

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
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        if(mail('cmacguitar@live.ca', $subject, $txt, $headers)) {
            echo '<p>Success! I\'ll be in touch shortly<p>';
        } else {
            echo '<p>Sorry, we encountered a server error!<p>';
        };
    } else {
        echo '<p>Please enter a valid email<p>';
    };
?>