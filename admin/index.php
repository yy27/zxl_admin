<!DOCTYPE html>
<?php 
session_start();

?>
<html>
<head>
	<title>Login</title>
		<meta charset="utf-8">
		<link href="css/style.css" rel='stylesheet' type='text/css' />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="js/admin.js"></script>
		<?php 
		if(isset($_SESSION['login']) && $_SESSION['login'] == md5('success')){
			echo '<script LANGUAGE="javascript">'; 
			echo "location.href='main.php'"; 
			echo "</script>"; 
		}
		?>
</head>
<body>
	 <!-----start-main---->
	 <div class="main">
		<div class="login-form">
			<h1>后台登录</h1>
				<div class="head">
					<img src="images/user.png" alt=""/>
				</div>
				<form>
					<input type="text" class="text" id="name" value="" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" >
					<input type="password" value="" id="password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}">
					<div class="submit">
						<input type="button" id="login" value="登	录" >
					</div>
					<p id="msg" style="color:#f00;"></p>
				</form>
			</div>
			
		</div>

</body>
</html>