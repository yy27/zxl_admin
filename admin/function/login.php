<?php
require('conn.php');
session_start();
$result = mysql_query("SELECT * FROM admin_user WHERE name='".$_POST['name']."'");
if(mysql_num_rows($result)){
	while($row = mysql_fetch_array($result)){
		if(md5($_POST['password']) == $row['password']){
			$_SESSION['login']=md5('success');
			$_SESSION['name']=$_POST['name'];
			echo json_encode(array('result' => 1, 'Message' => '匹配成功'));
		} else {
			echo json_encode(array('result' => 0, 'Message' => '密码不对'));
		}
	}
} else {
	echo json_encode(array('result' => -1, 'Message' => '用户名不存在'));
}
mysql_close($con);
?>