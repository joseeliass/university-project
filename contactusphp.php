<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .error {
            color: red;
        }
        body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button, .btn {
  background-color: #017592;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover, .btn:hover {
  background-color: #45a049;
}
.box{
    display:flex;
    flex-direction:row;
    gap:5px;
}
.btn{
    width:auto;
    padding:auto;
}
.buttons{
    display:flex;
    flex-direction:row; 
    gap: 5px;
}
    </style>
</head>
<body>

<?php

$fname = $lname = $email = $password = $retypepassword = "";
$fnameErr = $lnameErr = $emailErr = $passwordErr = $retypepasswordErr = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    if (empty($_POST["fname"])) {
        $fnameErr = "First name is required";
    } else {
        $fname = test_input($_POST["fname"]);
        
        if (!preg_match("/^[a-zA-Z ]*$/", $fname)) {
            $fnameErr = "Only letters and white space allowed";
        }
    }

    if (empty($_POST["lname"])) {
        $lnameErr = "last name is required";
    } else {
        $lname = test_input($_POST["lname"]);
        
        if (!preg_match("/^[a-zA-Z ]*$/", $lname)) {
            $lnameErr = "Only letters and white space allowed";
        }
    }

    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
    
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }


    if (empty($_POST["password"])) {
        $passwordErr = "Password is required";
    } else {
        $password = test_input($_POST["password"]);
  
    }

    if (empty($_POST["retypepassword"])) {
        $retypepasswordErr = "Password is required";
    } elseif($_POST["retypepassword"]!=$password){
        $retypepasswordErr = "Passwords should match";
    }
    else {
        $retypepassword = test_input($_POST["retypepassword"]);
  
    }

}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <h1>WELCOME!</h1>
    First mame:
    <div class="box">
     <input type="text" name="fname" value="<?php echo $fname;?>">
    <span class="error">* <?php echo $fnameErr;?></span>
    <br><br>
    </div>

    Last name:
    <div class="box">
     <input type="text" name="lname" value="<?php echo $lname;?>">
    <span class="error">* <?php echo $lnameErr;?></span>
    <br><br>
    </div>
    
    Email:
    <div class="box">
    <input type="text" name="email" value="<?php echo $email;?>">
    <span class="error">* <?php echo $emailErr;?></span>
    <br><br>
    </div>

    Password: 
    <div class="box">
    <input type="password" name="password" value="<?php echo $password;?>">
    <span class="error">* <?php echo $passwordErr;?></span>
    <br><br>
    </div>

    Retype password: 
    <div class="box">
    <input type="password" name="retypepassword" value="<?php echo $retypepassword;?>">
    <span class="error">* <?php echo $retypepasswordErr;?></span>
    <br><br>
    </div>

    <div class="buttons">
    <input type="submit" name="submit" value="Submit" class = "btn">
    <input type="reset" value="Reset" class = "btn">
    </div>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST" && empty($fnameErr) && empty($lnameErr) && empty($emailErr) && empty($passwordErr) && empty($retypepasswordErr)) {
        echo "<h2>WELCOM " . $_POST["fname"] . " " .  $_POST["lname"] . "</h2>";
        
}
?>
</form>



</body>
</html>