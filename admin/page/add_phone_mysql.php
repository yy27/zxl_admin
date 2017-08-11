<?php
require('../function/conn.php');
$resule = mysql_query("INSERT INTO chart_page (page,url) VALUES ('{$_POST['table']}','page/show_phone.php?table={$_POST['table']}_phone')");
$sql = "CREATE TABLE {$_POST['table']}_phone (
		   id INT NOT NULL AUTO_INCREMENT,
		   phone VARCHAR(100),
		   time DATETIME,
		   mytime INT,
		   PRIMARY KEY ( id )
		)";
if(mysql_query($sql,$con)){
	echo 1;
} else {
	echo -1;
}

mysql_close($con);
?>