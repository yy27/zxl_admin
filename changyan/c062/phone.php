<?php

	//连接数据库msyy 表phones

	$con = mysql_connect("localhost","root","oneinstack");

    if (!$con){

      die('Could not connect: ' . mysql_error());

    }
    //插入表单数据
    mysql_select_db("zxl_z", $con);

    $_time = date('y-m-d h:i:s',time());

	$_phone = $_POST['phone'];

	$sql="INSERT INTO c062_phone (phone, time)

		VALUES

		('$_phone','$_time')";



		if (!mysql_query($sql,$con))

		  {

		  	echo -1;

		  die('Error: ' . mysql_error());

		  }

	echo 1;

	//操作完毕，关闭数据库

	mysql_close($con);

?>