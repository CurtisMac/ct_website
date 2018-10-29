<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $mailTo = "cmacguitar@live.ca";
  $subject = "A message from comfortingtouch.ca";
  $txt = "Someone sent you a message from your website!";
    $headers = 'From: '.$email . "\n" .
    'Reply-To: '.$email . "\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($mailTo, $subject, $message, $headers);
}
?>