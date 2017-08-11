<!doctype html>
<html lang="en">

<head>
	<title>添加表</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<!-- VENDOR CSS -->
	<link rel="stylesheet" href="../assets/vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="../assets/vendor/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="../assets/vendor/linearicons/style.css">
	<link rel="stylesheet" href="../assets/vendor/chartist/css/chartist-custom.css">
	<!-- MAIN CSS -->
	<link rel="stylesheet" href="../assets/css/main.css">
	<!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
	<link rel="stylesheet" href="../assets/css/demo.css">
	<!-- GOOGLE FONTS -->
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
	<!-- ICONS -->
	<link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="../assets/img/favicon.png">
	<style type="text/css">
	.panel{
		margin-top:100px;
		width: 60%;
	}
	.row{
		display: flex;
		padding-top: 40px;
	}
.col-md-6{
	width: 50%;
}
	</style>
</head>

<body>
<div class="panel">
	<div class="panel-heading">
		<h3 class="panel-title">添加表</h3>
	</div>
	<div class="panel-body">
		<input type="text" class="form-control" id="table_name" placeholder="输入您的表名">
		<div class="row">
			<div class="col-md-6">
				<button type="button" class="btn btn-primary btn-block" id="add_phone">确定</button>
			</div>
			<div class="col-md-6">
				<button type="button" id="cancel" class="btn btn-warning btn-block">取消</button>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="../assets/jquery/jquery-1.8.3.min.js" charset="UTF-8"></script>
<script type="text/javascript">
	$(function(){
		$('#add_phone').click(function(){
			var table = $('#table_name').val();
			if(table.length>0){
				$.ajax({
					type:'POST',
					url:'add_phone_mysql.php',
					data:{'table':table},
					dataType:'json',
					success:function(data){
						if(data>0){
							parent.location.href = '../main.php';
						} else{
							alert('创建失败！');
						}
					},
					error:function(err){
						console.log(err);
					}
				})
			}
		});
		$('#cancel').click(function(){
			parent.location.href = '../main.php';
		})
	});
</script>
</body>
</html>