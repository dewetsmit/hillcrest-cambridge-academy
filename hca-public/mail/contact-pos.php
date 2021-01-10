 <?php 
$post_data = file_get_contents("php://input");
$data = json_decode($post_data);


$to = "admin@hillcrestacademy.co.za";
$from = $data->email ; 
$user = $data->user;
$message = $data->message;
$contactNumber = $data->contactNumber;


 $headers = "MIME-Version: 1.0" . "\r\n";
 $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
 $headers .= 'From: $from' . "\r\n" ; 
 $headers =  'CC: ' . "\r\n";
 $subject = "Web Contact Data"; 
 
 $body .= "Good day \n\n";
 $body .= "Your website received the following information from a visitor on the contact page:\n\n";
 $body .= "Name: \t".$user."\n";
 $body .= "Email: \t".$from."\n\n";
 $body .= "ContactNumber: \t".$contactNumber."\n";
 $body .= "Message: \t".$message."\n";
 
 $headers2 = "From: noreply@hillcrestacademy.co.za"; 
 $subject2 = "Thank you for contacting Hillcrest Cambridge Academy"; 
 $autoreply = "Dear ".$user.". \n\n"; 
 $autoreply .= "Thank you for contacting Hillcrest Cambridge Academy. We will get back to you as soon as possible. \n\n";
 $autoreply .= "If you have any more questions, please consult our website at www.hillcrestacademy.co.za \n\n";
 $autoreply .= "Regards \n\n";
 $autoreply .= "Management | Hillcrest Cambridge Academy";
 
 $send = mail($to, $subject, $body, $headers); 
 $send2 = mail($from, $subject2, $autoreply, $headers2); 
 
 if($send) 
{
   echo "Name and Surname : ".$user."\n";
   echo "ContactNumber : ".$contactNumber."\n";
   echo "Email : ".$from."\n";
   echo "Message : ".$message."\n";
} 
 else 
{
   echo "Failed to send. Please check connection.";
} 


?>
