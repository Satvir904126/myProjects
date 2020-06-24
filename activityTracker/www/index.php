<!DOCTYPE html>
<html lang="en">
<head>
	<title>Activity tracker - Sign in</title>
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <link rel="stylesheet" type="text/css" href="css/main.css">

</head>
<body>
	
<div class="container">

    <div class="row center-div mt-5">
        <div class="">
            <h1 class="border border-primary rounded text-center">Activity tracker</h1>
            <form method="POST" action="db/login.php" class=" p-5 border border-primary rounded">
                <h4 class="border border-primary text-center"> Sign in</h4>
                
                <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" placeholder="john@doe.com" require>
                </div>
                <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" require>
                </div>
                <div class="form-group text-center">
                    <button type="submit" name="submit" class="btn btn-primary">Sign in</button>
                </div>
                <div class="form-group text-center">
                    Not registered yet? <a href="register.php">Sign up from here</a> 
                </div>
            </form>
        </div>
    </div>
    <!--/row-->
</div>
<!--/container-->
<script>
    history.pushState(null, null, null);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, null);
    });
</script>
</body>
</html>