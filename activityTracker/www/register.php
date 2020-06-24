<!DOCTYPE html>
<html lang="en">
<head>
	<title>Activity tracker - Sign up</title>
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

	<link rel="stylesheet" type="text/css" href="css/main.css">
    <script src="js/main.js"></script>
</head>
<body>
	
<div class="container">

    <div class="row center-div mt-5">
        <div class="">
            <h1 class="border border-primary rounded text-center">Activity tracker</h1>
            <form method="POST" action="db/register.php" class=" p-5 border border-primary rounded">
                <h4 class="border border-primary text-center"> Sign up </h4>
                
                <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" placeholder="john@doe.com" require >
                </div>
                <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" require>
                </div>
                <div class="form-group">
                <label for="cpassword">Confirm password</label>
                <input type="password" class="form-control" name="cpassword" oninput="check(this)" require>
                </div>
                <div class="form-group text-center">
                    <button type="submit" name="submit" class="btn btn-primary">Sign up</button>
                </div>
                <div class="form-group text-center">
                    Already a member? <a href="index.php">Sign in from here</a> 
                </div>
            </form>
        </div>
    </div>
    <!--/row-->
</div>
<!--/container-->
</body>
</html>