<?php
function errorHandler($errno, $errstr, $errfile, $errline) {
   header('Location: http://pacannim.com/contact.php?success=false');
}
 
set_error_handler("errorHandler");


$name = $_POST['name']; 
$success = true;
$filelocation = "No Attachments";
if(empty($_FILES["uploadFile"]["name"][0]))
{
 //checking whether a single file uploaded or not
  //if enters here means no file uploaded
}else{
//creating directory if not exists
date_default_timezone_set('Asia/Kolkata');
if (!file_exists('uploads/' . date("d-m-Y H-i-s") . "/" . $name ."/")) {
    mkdir('uploads/' . date("d-m-Y H-i-s") . "/" . $name ."/", 0777, true);
}

$target_dir = "uploads/" . date("d-m-Y H-i-s") . "/" . $name ."/";

// Check if file already exists
for($i=0;$i<count($_FILES["uploadFile"]["name"]);$i++) 
{
$target_dir = $target_dir . basename($_FILES["uploadFile"]["name"][$i]);
$uploadOk=1;
if (file_exists($target_dir . $_FILES["uploadFile"]["name"][$i])) {
    $uploadOk = 0;
}
if (move_uploaded_file($_FILES["uploadFile"]["tmp_name"][$i], $target_dir)) {
    } else {
	   $success = false;
 }
$target_dir = "uploads/" . date("d-m-Y H-i-s") . "/" . $name ."/";
$filelocation = $target_dir;
}
}
//connecting to the database
define('DB_HOST', 'localhost'); 
define('DB_NAME', 'pacannim'); 
define('DB_USER','Naveen_Pacannim'); 
define('DB_PASSWORD','naveen@NNK21'); 

$con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die("Failed to connect to MySQL: " . mysql_error()); 
$db=mysql_select_db(DB_NAME,$con) or die("Failed to connect to MySQL: " . mysql_error()); 

//inserting Record to the database 
$email = $_POST['email'];
$phone = $_POST['phone'];
$budget = $_POST['budget'];
$comments = $_POST['comments'];
$requirements = $_POST['requirements']; 
$query = "INSERT INTO contact(Name,EMAIL,PHONE,File_location,Budget,Comments,Requirements)VALUES('$name','$email','$phone','$filelocation','$budget','$comments','$requirements')"; 
$result = mysql_query($query); 
if($result) { 
	} else { 
	$success = false;
	die('Error: '.mysql_error($con)); 
	}
 	mysql_close($con); 
if(isset($_POST['submit'])){
    $to = "naveeninstant@gmail.com"; // this is your Email address
    $from = $email; // this is the sender's Email address
    $type = $requirements;
	$budget = $budget;
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following:";
    $message2 = "Here is a copy of your message " . $name;
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
}
if($success)
{
	header('Location: http://pacannim.com/contact.php?success=true');
}else{
	header('Location: http://pacannim.com/contact.php?success=false');
}
//if(isset($_POST['submit'])){
//    $to = "naveenkumar.nnk21@gmail.com"; // this is your Email address
//    $from = $_POST['email']; // this is the sender's Email address
//    $name = $_POST['name'];
//    $type = $_POST['type'];
//	$budget = $_POST['budget'];
//    $subject = "Form submission";
//    $subject2 = "Copy of your form submission";
//    $message = $name . " wrote the following:";
//    $message2 = "Here is a copy of your message " . $name;
//
//    $headers = "From:" . $from;
//    $headers2 = "From:" . $to;
//    mail($to,$subject,$message,$headers);
//    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
//    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
//    // You can also use header('Location: thank_you.php'); to redirect to another page.
//    // You cannot use header and echo together. It's one or the other.
//    }
?>