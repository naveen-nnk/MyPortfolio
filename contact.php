<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="icon" href="favicon1.ico" type="image/x-icon"/>
<title>Contact Us</title>
<script src="assets/js/jquery-2.0.3.js"></script>
<link href="assets/styles/styles.css" rel="stylesheet" type="text/css" />
<link href="assets/styles/contact.css" rel="stylesheet" type="text/css" />
<script src="assets/js/script.js" type="text/javascript"></script>
</head>
<body>

<div id="nonPCContent">
<div id="nonPcWarning"></div>
</div>

<div id="pcContent">

<header>
<div id ="headerContent">

<a href="index.html"><div id="logo"></div></a>

<div id="navrect"></div>

<span class="largefont navigationtext">Navigator</span>

<div id="navIcons">
<a href='index.html'><span class="icons home"></span><span class="images homeimage"><p>HOME</p></span></a>
<a href='#'><span class="icons contact clickpage"></span><span class="images contactimage samepage"><p>CONTACT</p></span></a>
<a href='portfolio.html'><span class="icons portfolio"></span><span class="images portfolioimage"><p>PORTFOLIO</p></span></a>
<a href='tutorial.html'><span class="icons tutorial"></span><span class="images tutorialimage"><p>TUTORIAL</p></span></a>
<a href='info.html'><span class="icons info"></span><span class="images infoimage"><p>INFO</p></span></a>
</div>

<div id="themeSelector">
<span class="headertext colors">Color Mode :<span class="modeBox box1"></span><span class="modeBox box2"></span><br/>
Colors :<span class="colorBox box1"></span><span class="colorBox box2"></span><span class="colorBox box3"></span><span class="colorBox box4"></span><span class="colorBox box5"></span></span>
</div>

</div>
</header>
<div id="contactform">
<?php
$success = "";
if(isset($_GET["success"])){
$success = $_GET["success"];
}
if(strlen($success)>2){
?>
<input type="hidden" value="true" id="hiddenval"/>
<?php
}
if($success == 'true'){
?>
<form method="POST" action="redirect.php">
<span class="formsuccess">Thanks for contacting us. Our Analysis and Estimation will reach you shortly.</span><br/><br/><br/><br/><br/>
<input type="submit" name="submit" class="contactelements submit reqhide" value="<< BACK TO CONTACT FORM"/>
</form>
<?php
}elseif($success == 'false'){
?>
<form method="POST" action="redirect.php">
<span class="formfail">Something went wrong. Please try again</span><br/><br/>
<input type="submit" name="submit" class="contactelements submit reqhide" value="<<TRY AGAIN>>"/>
</form>
<?php
}else{
?>
<form method="POST" onSubmit="return validateContactForm()" action="send_details.php" enctype="multipart/form-data">
	<span class="mandatory reqhide">*</span>
    <input type="text" id="name" name="name" maxlength="200"  class="contactelements textbox reqhide firstelement" placeholder="NAME/ORGANIZATION">
    <span class="mandatory reqhide">*</span>
    <input type="text" id="email" name="email" maxlength="200"  class="contactelements textbox reqhide" placeholder="EMAIL">
    <input type="text" name="phone" maxlength="15" class="contactelements textbox reqhide" placeholder="PHONE NUMBER">
    <span class="mandatory">*</span>
    <textarea id="contacttextarea" class="textarea" name="requirements" readonly placeholder="YOUR REQUIREMENTS" style="line-height:20px;"></textarea>
   		 <div id="contactButtons" class="checkboxtopics" style="margin-bottom:40px;">
				<span id="cwebtab" class="contacttab tab1">WEB</span><span id="cbrandtab" class="contacttab tab2 selected">BRANDING</span>			                <span id="capptab" class="contacttab tab3">APPLICATIONS</span>
		</div>
        <div id="contactcontent" class="checkboxtopics nondefault">
        <ul class="categoryListing">
        <li><input type="checkbox" class="checkboxcategory" name="type" value="SimpleWebApp">Simple Web App</li>
    	<li><input type="checkbox" class="checkboxcategory" name="type" value="WebDesignOnly">Web Design Only</li>
   	    <li><input type="checkbox" class="checkboxcategory" name="type" value="EnterpriseWebApp">Enterprise Web App</li>
		<li><input type="checkbox" class="checkboxcategory" name="type" value="PaymentGateway">Payment gateway</li>
        <li><input type="checkbox" class="checkboxcategory" name="type" value="Others/Custom[Web]">Others/Custom</li>
        </ul>
        </div>
        <div id="contactcontent2" class="checkboxtopics">
        <ul class="categoryListing brand">
        <li><input type="checkbox" class="checkboxcategory" name="type" value="Logo">Logo</li>
    	<li><input type="checkbox" class="checkboxcategory" name="type" value="BusinessCard">Business Card</li>
   	    <li><input type="checkbox" class="checkboxcategory" name="type" value="Flyer">Flyer</li>
        <li><input type="checkbox" class="checkboxcategory" name="type" value="Banner">Banner</li>
        <li><input type="checkbox" class="checkboxcategory" name="type" value="Infographic">Infographic</li>
    	<li><input type="checkbox" class="checkboxcategory" name="type" value="Brochure">Brochure</li>
   	    <li><input type="checkbox" class="checkboxcategory" name="type" value="Illustration">Illustration</li>
        <li><input type="checkbox" class="checkboxcategory" name="type" value="Email">Email</li>
        <li><input type="checkbox" class="checkboxcategory" name="type" value="Others/Custom[Brand]">Others/Custom</li>
        </ul>
        </div>
        <div id="contactcontent3" class="checkboxtopics nondefault">
        <ul class="categoryListing">
        <li><input type="checkbox" class="checkboxcategory" name="type" value="CustomWebTool">Custom Web Tool</li>
    	<li><input type="checkbox" class="checkboxcategory" name="type" value="DesktopApp">Desktop App</li>
   	    <li><input type="checkbox" class="checkboxcategory" name="type" value="WebServices">Web Services</li>
        <li><input type="checkbox" class="checkboxcategory" name="type" value="Others/Custom[App]">Others/Custom</li>
        </ul>
        </div>
        <div class="reqbot">
    <label class="checkboxtopics">Attachments : </label>
  		<input type="file" name="uploadFile[]"  multiple class="checkboxtopics">
    <textarea id="commentstextarea" name="comments" class="textbox checkboxtopics" placeholder="HAVE MORE CONTENT?"></textarea>
    <button class="reqdone checkboxtopics contactelements submit" type="button">I'M DONE - GO BACK</button>
    </div>
   <select name="budget"  class="contactelements textbox reqhide" style="line-height:50px">
        <option value="none">Select your Budget</option>
        <option value="50">Less than $50</option>
        <option value="200">$50-200</option>
        <option value="500">$201-500</option>
        <option value="2000">$501-2000</option>
        <option value="5000">$2001-5000</option>
        <option value="5001">More than $5000</option>
    </select>
    <input type="submit" name="submit" class="contactelements submit reqhide" value="GET A QUOTE"></span>
</form>
<?php
}
?>
</div>
<footer></footer>
</div>
</body>
</html>
