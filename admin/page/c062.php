<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>c062</title>
	
	<link rel="stylesheet" href="../assets/vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="../assets/vendor/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="../assets/vendor/linearicons/style.css">
	<link rel="stylesheet" href="../assets/vendor/chartist/css/chartist-custom.css">
	<link href="../assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="../css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
	<!-- MAIN CSS -->
	<link rel="stylesheet" href="../assets/css/main.css">
	<!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
	<link rel="stylesheet" href="../assets/css/demo.css">
	<!-- GOOGLE FONTS -->
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
	<!-- ICONS -->
	<link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="../assets/img/favicon.png">
	<link rel="stylesheet" type="text/css" href="../css/main.css">
	<style type="text/css">
div.digg {
padding-right: 3px;height: 55px; overflow: hidden; padding-left: 3px; padding-bottom: 3px; margin: 3px; padding-top: 30px; text-align: center
}
div.digg a {
border-right: #5BC0DE 1px solid; padding-right: 5px; border-top: #5BC0DE 1px solid; padding-left: 5px; padding-bottom: 2px; margin: 2px; border-left: #5BC0DE 1px solid; color: #5BC0DE; padding-top: 2px; border-bottom: #5BC0DE 1px solid; text-decoration: none
}
div.digg a:hover {
border-right: #5BC0DE 1px solid; border-top: #5BC0DE 1px solid; border-left: #5BC0DE 1px solid; color: #000; border-bottom: #5BC0DE 1px solid
}
div.digg a:active {
border-right: #5BC0DE 1px solid; border-top: #5BC0DE 1px solid; border-left: #5BC0DE 1px solid; color: #000; border-bottom: #5BC0DE 1px solid
}
div.digg span.current{
border-right: #5BC0DE 1px solid; padding-right: 5px; border-top: #5BC0DE 1px solid; padding-left: 5px; font-weight: bold; padding-bottom: 2px; margin: 2px; border-left: #5BC0DE 1px solid; color: #fff; padding-top: 2px; border-bottom: #5BC0DE 1px solid; background-color: #5BC0DE
}
div.digg span.disabled{
border-right: #eee 1px solid; padding-right: 5px; border-top: #eee 1px solid; padding-left: 5px; padding-bottom: 2px; margin: 2px; border-left: #eee 1px solid; color: #ddd; padding-top: 2px; border-bottom: #eee 1px solid
}
.choose{
	width: 100%;
	overflow: hidden;
	position: relative;
}
.choose .btn-lg{
	/*width: 100%;*/
}
.form-group{
	padding-top: 20px;
	width: 100%;
}
.panel{
	position: relative;
}
#download{
	position: absolute;
	right: 20px;
	top: 20px;
	z-index: 100;
}
</style>
<script type="text/javascript" src="../assets/jquery/jquery-1.8.3.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="../assets/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
<script type="text/javascript" src="../js/locales/bootstrap-datetimepicker.fr.js" charset="UTF-8"></script>
<script type="text/javascript" src="../js/changeDate.js" charset="UTF-8"></script>
</head>
<body>
<!-- <div class="panel panel-headline"> -->
<div class="choose">
	<div class="form-group">
	    <label for="dtp_input1" class="col-md-2 control-label">开始时间</label>
	    <div class="input-group date start_datetime col-md-5" data-date="1979-09-16" data-date-format="dd MM yyyy" data-link-field="dtp_input1">
	        <input class="form-control" size="16" type="text" value="<?php echo isset($_GET['start'])?date('Y-m-d',$_GET['start']):''; ?>" id="start_data" readonly>
	        <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
			<span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
	    </div>
		<input type="hidden" id="dtp_input1" value="" /><br/>
	</div>
	<div class="form-group">
	    <label for="dtp_input1" class="col-md-2 control-label">结束时间</label>
	    <div class="input-group date end_datetime col-md-5" data-date="1979-09-16" data-date-format="dd MM yyyy" data-link-field="dtp_input1">
	        <input class="form-control" size="16" id="end_data" type="text" value="<?php echo isset($_GET['end'])?date('Y-m-d',$_GET['end']):''; ?>" readonly>
	        <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
			<span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
	    </div>
		<input type="hidden" id="dtp_input1" value="" /><br/>
	</div>
	<a id="data_s"><button type="button" class="btn btn-primary btn-lg">查	 询</button></a>
</div>
	<div class="panel">
	<?php
	if(isset($_GET['start']) && isset($_GET['end'])){
		echo '<a type="button" class="btn btn-success" id="download">下载 excel</a>';
	}
	?>
		
		<div class="panel-heading">
			<h3 class="panel-title">c062联系方式信息表</h3>
		</div>
		<div class="panel-body">
			<table class="table table-hover">
				<thead>
					<tr>
						<th width="20%">序号</th>
						<th width="50%">联系方式</th>
						<th width="30%">时间</th>
					</tr>
				</thead>
				<tbody>

<?php

	    $con = mysql_connect("localhost","root","oneinstack");

	    if (!$con){

	      echo -1;

	      die('Could not connect: ' . mysql_error());

	    }

	    $db_name_php = 'zxl_z';

	    if(isset($_GET['start']) && isset($_GET['end'])){
	    	$sql = "SELECT * FROM c062_phone where mytime>={$_GET['start']} AND mytime<{$_GET['end']}";
	    }else{
	    	$sql = "SELECT * FROM c062_phone";
	    }
	    
	    mysql_select_db($db_name_php,$con);
	    $phoneall = mysql_query($sql);
	    $num = mysql_num_rows($phoneall);
	    if($num == 0){
	    	echo '<tr><td colspan="4" style="text-align:center;padding-top:50px;">一条数据都没有</td></tr>';
	    	echo "</tbody>";
  			echo "</table>";
	    } else {
	    $pagecount = 1;//每页展示几条数据
	    $pagenum = ceil($num/$pagecount);
	    $nowpage = '';
	    if(isset($_GET['page'])){
	    	if($_GET['page'] > $pagenum){
		    	$nowpage = $pagenum;
		    } else {
		    	$nowpage = $_GET['page'];
		    }
	    } else{
	    	$nowpage = 1;
	    }
	    $countfrom = $nowpage-1;
	    if(isset($_GET['start']) && isset($_GET['end'])){
	    	$result = mysql_query("SELECT * FROM c062_phone where mytime>={$_GET['start']} AND mytime<{$_GET['end']} LIMIT $countfrom , $pagecount");
	    } else {
	    	$result = mysql_query("SELECT * FROM c062_phone LIMIT $countfrom , $pagecount");
	    }
	    

while($row = mysql_fetch_array($result)){

  echo "<tr>";

  echo "<td>" . $row['id'] . "</td>";

  echo "<td>" . $row['phone'] . "</td>";

  echo "<td>" . $row['time'] . "</td>";

  echo "</tr>";

}
echo "</tbody>";
  echo "</table>";

require('../function/page.php');
if(isset($_GET['start']) && isset($_GET['end'])){
	getPageHtml($nowpage,$pagenum,"c062.php?start=".$_GET['start']."&end=".$_GET['end']."&");
} else {
	getPageHtml($nowpage,$pagenum,'c062.php?');
}
}

	?>
			</tbody>
		</table>
	</div>
<script type="text/javascript">
    $(".start_datetime").datetimepicker({
        format: "yyyy-mm-dd",
        minView: "month",//设置只显示到月份
        autoclose: true,
        todayHighlight: 1,
        todayBtn: true,
        startDate:'2017-7-1',
        minuteStep: 10,
        language:  'zh-CN',
    });
    $(".end_datetime").datetimepicker({
        format: "yyyy-mm-dd",
        minView: "month",//设置只显示到月份
        autoclose: true,
        todayBtn: true,
        todayHighlight: 1,
        startDate:'2017-7-1',
        minuteStep: 10
    });
    $('#data_s').click(function(){
    	var s = $('#start_data').val();
    	var e = $('#end_data').val();
    	if(s.length>0 && e.length>0){
    		self.location.href='c062.php?start='+$.myTime.DateToUnix(s)+'&end='+($.myTime.DateToUnix(e)+86399);
    	} else {
    		alert('查询日期已飞走！');
    	}
    	
    });
    $('#download').click(function(){
    	var s = $('#start_data').val();
    	var e = $('#end_data').val();
    	self.location.href='excel.php?chartname=c062_phone&start='+$.myTime.DateToUnix(s)+'&end='+($.myTime.DateToUnix(e)+86399);
    });
    
</script>
</body>
</html>