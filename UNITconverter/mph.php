    <?php
    	$server_name="localhost";
    	$user_Name="root";
    	$password="";
    	$db_name="logins"; 
    	$connection = new mysqli($server_name,$user_Name,$password,$db_name) or die("Connect failed: %s\n". $connection -> error);
    	
    	$First_name=  $_REQUEST['First_name'];
            
            $Family_Name = $First_name."  ". $_REQUEST['last_name'];
            
            $email = $_REQUEST['email'];

    $sql = "INSERT INTO userdata  VALUES ('$First_name',
                '$Family_Name','$email')";
             
           if(mysqli_query($connection, $sql)){
              
                echo "ERROR $sql. "
                    . mysqli_error($connection);
            }
             
            // Close connection
            mysqli_close($connection);

            
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            	$emailErr = "Invalid email format";
            }
    ?>