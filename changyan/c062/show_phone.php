<!DOCTYPE html>

<html lang="en">

<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <meta name="viewport" content="minimal-ui,width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

    <meta content="yes" name="apple-mobile-web-app-capable" />

    <meta content="black" name="apple-mobile-web-app-status-bar-style" />

    <meta content="telephone=no" name="format-detection" />

    <title>51健康益生菌</title>

    <link rel="stylesheet" href="css/css2.css" type="text/css" />

    

</head>

<body>

<style type="text/css">

table.hovertable {

	font-family: verdana,arial,sans-serif;

	font-size:11px;

	color:#333333;

	border-width: 1px;

	border-color: #999999;

	border-collapse: collapse;

	width: 80%;

    margin: 0 auto;

}

table.hovertable th {

	background-color:#c3dde0;

	border-width: 1px;

	padding: 8px;

	border-style: solid;

	border-color: #a9c6c9;

}

table.hovertable tr {

	background-color:#d4e3e5;

}

table.hovertable td {

	border-width: 1px;

	padding: 8px;

	border-style: solid;

	border-color: #a9c6c9;

}

h2{

	text-align: center;

	padding: 20px 0;

}
/*css digg style www.divcss5.com */
div.digg {
padding-right: 3px;height: 55px; overflow: hidden; padding-left: 3px; padding-bottom: 3px; margin: 3px; padding-top: 30px; text-align: center
}
div.digg a {
border-right: #aaaadd 1px solid; padding-right: 5px; border-top: #aaaadd 1px solid; padding-left: 5px; padding-bottom: 2px; margin: 2px; border-left: #aaaadd 1px solid; color: #000099; padding-top: 2px; border-bottom: #aaaadd 1px solid; text-decoration: none
}
div.digg a:hover {
border-right: #000099 1px solid; border-top: #000099 1px solid; border-left: #000099 1px solid; color: #000; border-bottom: #000099 1px solid
}
div.digg a:active {
border-right: #000099 1px solid; border-top: #000099 1px solid; border-left: #000099 1px solid; color: #000; border-bottom: #000099 1px solid
}
div.digg span.current{
border-right: #000099 1px solid; padding-right: 5px; border-top: #000099 1px solid; padding-left: 5px; font-weight: bold; padding-bottom: 2px; margin: 2px; border-left: #000099 1px solid; color: #fff; padding-top: 2px; border-bottom: #000099 1px solid; background-color: #000099
}
div.digg span.disabled{
border-right: #eee 1px solid; padding-right: 5px; border-top: #eee 1px solid; padding-left: 5px; padding-bottom: 2px; margin: 2px; border-left: #eee 1px solid; color: #ddd; padding-top: 2px; border-bottom: #eee 1px solid
}
</style>
<script type="text/javascript">
	
</script>
<h2>用户留言信息表</h2>

<?php

	    $con = mysql_connect("localhost","root","oneinstack");

	    if (!$con){

	      echo -1;

	      die('Could not connect: ' . mysql_error());

	    }

	    $db_name_php = 'zxl_z';

	    mysql_select_db($db_name_php,$con);
	    $phoneall = mysql_query("SELECT * FROM c062_phone");
	    $num = mysql_num_rows($phoneall);
	    $pagecount = 30;//每页展示几条数据
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
	    $countfrom = ($nowpage-1)*$pagecount;
	    $countto = $nowpage*$pagecount;
	    $result = mysql_query("SELECT * FROM phones LIMIT $countfrom , $countto");

		echo "<table class='hovertable'>

		<tr>

		<th>序号</th>

		<th>电话号码</th>

		<th>留言时间</th>

		</tr>";

while($row = mysql_fetch_array($result))

  {

  echo "<tr onmouseover=\"this.style.backgroundColor='#ffff66';\" onmouseout=\"this.style.backgroundColor='#d4e3e5';\">";

  echo "<td>" . $row['id'] . "</td>";

  echo "<td>" . $row['phone'] . "</td>";

  echo "<td>" . $row['time'] . "</td>";

  echo "</tr>";

  }

  echo "</table>";

require('page.php');
getPageHtml($nowpage,$pagenum,'show_phone.php');

	?>

</body>

</html>