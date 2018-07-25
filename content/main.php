<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Andrew Depotter</title>
	<link href="../css/bootstrap.css" rel="stylesheet">
	<link href="../styles.css" rel="stylesheet" type="text/css">
	
</head>

<body onload="buttonSelector();shrinkHeader();">

<div class="pagewrap">
	
	    <div id="lightbox" class="hiddenbox" onclick="lightBoxSwitch();" >
	  
  	    </div>
  	    
  	    <div id="picturebox" class="hiddenbox">
     	
     	</div>
     	
     	
		<script src="../js/jquery-1.11.3.min.js"></script><!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
    	
    	<script src="../js/bootstrap.js"></script>
    	
		<header id="heading" class="largebackground">	
			
			<div id="logo">
				<img src="../media/logo/logo.jpg" id="logoimage" class="fullsize">
			</div><!--closes logo-->
			
			<nav id="navigationmenu" class="hiddennav">
		  
		  	<div id="links">
			    <ul>
		  	       <li><a href="../index.html">One</a></li>
			  	   <li><a href="about.html">Two</a></li>
			  	   <li><a href="volunteerism.html">Three</a></li>
			  	   <li><a href="contact.html">Four</a></li>
			  	</ul>
			  </div><!--end of links div-->
			  
			  <script src="../js/changeNavClass.js"></script><!--enables nav to be hidden/visible on click-->	
			  
 	  	  	  <!--scripts for gallery buttons-->
	  	  	  <script src="../js/toggleGroupOne.js"></script>
	  	  	  <script src="../js/toggleGroupTwo.js"></script>
		  	  <script src="../js/toggleGroupThree.js"></script>
		  	  <script src="../js/toggleGroupFour.js"></script>
			  		 	  
			</nav><!--closes nav-->
			
			<div id="navbutton" class="threelinebox" onclick="changeNavClass();">
               <ul>
			      <li><div id="lineone" class="lineone"></div></li>
		          <li><div id="linetwo" class="linetwo"></div></li>
			      <li><div id="linethree" class="linethree"></div></li>
		       </ul>
        	</div><!--closes navbutton-->
        	
        	  <!--buttons for gallery filter toggle-->
        	<div id="gallerybuttons">
		  		<button id="category1button" class="gallerybutton inactivefilter" onclick="toggleGroupOne();">Group One</button>
		  		<button id="category2button" class="gallerybutton inactivefilter" onclick="toggleGroupTwo();">Group Two</button>
		  		<button id="category3button"class="gallerybutton inactivefilter" onclick="toggleGroupThree();">Group Three</button>
		    	<button id="category4button"class="gallerybutton inactivefilter" onclick="toggleGroupFour();">Group Four</button>
   			</div><!--closes gallerybuttons-->
		</header><!--closes header-->
		
		<div id="contents">
		  <div id="gallerycontainer">
		  
		   
		  <div id="groupone" class="hidden gallerydiv">
		  
<?php
$category1_folder_path = '../media/category1/'; //images folder path
$category1_text_folder_path = '../media/category1/category1text/';//text folder path

$num_category1_files = glob($category1_folder_path . "*.{JPG,jpg,gif,png,bmp}", GLOB_BRACE);//grabs all the images in the directory
$num_category1_text_files = glob($category1_text_folder_path . "*.{txt}", GLOB_BRACE);//grabs all the images in the directory

$category1_folder = opendir($category1_folder_path);//opens the directory
$category1_text_folder = opendir($category1_text_folder_path);//opens the text directory

if($num_category1_files > 0)//if there is more than zero files
{
 while(false !== ($category1_file = readdir($category1_folder)) && ($category1_text_file = readdir($category1_text_folder))) //reads directories to get file names
 {
  $category1_file_path = $category1_folder_path.$category1_file;// get an image
  $category1_text_file_path = $category1_text_folder_path.$category1_text_file;//get some text
  $category1_extension = strtolower(pathinfo($category1_file_path ,PATHINFO_EXTENSION));//returns only the extension
  if($category1_extension=='jpg' || $category1_extension =='png' || $category1_extension == 'gif' || $category1_extension == 'bmp') //if there is an image of any of these types......
  {
   ?>
           
           <!--output statement -->
            <div class="gallerypictures">
            <a href="*"><img src="<?php echo $category1_file_path;?>" onclick="lightBoxSwitch();" class="gallery"/></a>
            <p class="picturetext"> <?php echo file_get_contents($category1_text_file_path);?></p>
			</div>
            <?php
  } 
 }
}
else//if there are no files in the folder
{
 echo "the folder was empty !";
}
closedir($category1_folder);
?>
	   		</div><!--closes category1 div-->
	   		
	   		 <div id="grouptwo" class="hidden gallerydiv">
		  
<?php
$category2_folder_path = '../media/category2/'; //images folder path
$category2_text_folder_path = '../media/category2/category2text/';//text folder path

$num_category2_files = glob($category2_folder_path . "*.{JPG,jpg,gif,png,bmp}", GLOB_BRACE);//grabs all the images in the directory
$num_category2_text_files = glob($category2_text_folder_path . "*.{txt}", GLOB_BRACE);//grabs all the images in the directory

$category2_folder = opendir($category2_folder_path);//opens the directory
$category2_text_folder = opendir($category2_text_folder_path);//opens the text directory

if($num_category2_files > 0)
{
 while(false !== ($category2_file = readdir($category2_folder)) && ($category2_text_file = readdir($category2_text_folder))) //reads directories to get file names
 {
  $category2_file_path = $category2_folder_path.$category2_file;// get an image
  $category2_text_file_path = $category2_text_folder_path.$category2_text_file;//get some text
  $category2_extension = strtolower(pathinfo($category2_file_path ,PATHINFO_EXTENSION));//returns only the extension
  if($category2_extension=='jpg' || $category2_extension =='png' || $category2_extension == 'gif' || $category2_extension == 'bmp') //if there is an image of any of these types......
  {
   ?>
           
           <!--output statement -->
            <div class="gallerypictures">
            <a href="*"><img src="<?php echo $category2_file_path;?>" onclick="lightBoxSwitch();" class="gallery"/></a>
            <p class="picturetext"><?php echo file_get_contents($category2_text_file_path);?></p>
			</div>
            <?php
  } 
 }
}
else
{
 echo "the folder was empty !";
}
closedir($category2_folder);
?>
	   		</div><!--closes group2 div-->
	   		
	   		 <div id="groupthree" class="hidden gallerydiv">
		  
<?php
$category3_folder_path = '../media/category3/'; // images folder path
$category3_text_folder_path = '../media/category3/category3text/';// text folder path

$num_category3_files = glob($category3_folder_path . "*.{JPG,jpg,gif,png,bmp}", GLOB_BRACE);//grabs all the images in the directory
$num_category3_text_files = glob($category3_text_folder_path . "*.{txt}", GLOB_BRACE);//grabs all the text files in the directory

$category3_folder = opendir($category3_folder_path);//opens the directory
$category3_text_folder = opendir($category3_text_folder_path);//opens the text directory

if($num_category3_files > 0)
{
 while(false !== ($category3_file = readdir($category3_folder)) && ($category3_text_file = readdir($category3_text_folder))) 
 {
  $category3_file_path = $category3_folder_path.$category3_file;// get an image file name
  $category3_text_file_path = $category3_text_folder_path.$category3_text_file;//get some text files name
  $category3_extension = strtolower(pathinfo($category3_file_path ,PATHINFO_EXTENSION));//returns only the extension in lowercase
  if($category3_extension=='jpg' || $category3_extension =='png' || $category3_extension == 'gif' || $category3_extension == 'bmp') //if there is an image of any of these types......
  {
   ?>
           
           <!--output statement -->
            <div class="gallerypictures">
            <a href="*"><img src="<?php echo $category3_file_path;?>" onclick="lightBoxSwitch();" class="gallery"/></a>
            <p class="picturetext"><?php echo file_get_contents($category3_text_file_path);?></p>
            </div>
            <?php
  } 
 }
}
else
{
 echo "the folder was empty !";
}
closedir($category3_folder);
?>
	   		</div><!--closes category3 div-->
	   		
	   		 <div id="groupfour" class="hidden gallerydiv">
		  
<?php
$category4_folder_path = '../media/category4/'; //category1ing images folder path
$category4_text_folder_path = '../media/category4/category4text/';//category1ing text folder path

$num_category4_files = glob($category4_folder_path . "*.{JPG,jpg,gif,png,bmp}", GLOB_BRACE);//grabs all the images in the directory
$num_category4_text_files = glob($category4_text_folder_path . "*.{txt}", GLOB_BRACE);//grabs all the text files in the directory

$category4_folder = opendir($category4_folder_path);//opens the directory
$category4_text_folder = opendir($category4_text_folder_path);//opens the text directory

if($num_category4_files > 0)
{
 while(false !== ($category4_file = readdir($category4_folder)) && ($category4_text_file = readdir($category4_text_folder))) 
 {
  $category4_file_path = $category4_folder_path.$category4_file;// get an image file name
  $category4_text_file_path = $category4_text_folder_path.$category4_text_file;//get some text files name
  $category4_extension = strtolower(pathinfo($category4_file_path ,PATHINFO_EXTENSION));//returns only the extension in lowercase
  if($category4_extension=='jpg' || $category4_extension =='png' || $category4_extension == 'gif' || $category4_extension == 'bmp') //if there is an image of any of these types......
  {
   ?>
           
           <!--output statement -->
            <div class="gallerypictures">
            <a href="*"><img src="<?php echo $category4_file_path;?>" onclick="lightBoxSwitch();" class="gallery"/></a>
            <p class="picturetext"><?php echo file_get_contents($category4_text_file_path);?></p>
			</div>
            <?php
  } 
 }
}
else
{
 echo "the folder was empty !";
}
closedir($category4_folder);
?>
	   		</div><!--closes category3 div-->
	   		
	   		
	   		
		   </div><!--closes gallerycontainer-->
		</div><!--closes contents-->
		
		<footer>
			
		</footer><!--closes footer-->
	
	<script src="../js/lightBoxSwitch.js"></script>
  	<script src="../js/lightBoxPicture.js"></script>
  	
	</div><!-- closes wrapper-->
	<script src="js/shrinkHeader.js"></script>

</body>
</html>