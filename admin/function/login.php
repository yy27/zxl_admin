<?php
require('conn.php');
$result = mysql_query("SELECT * FROM admin_user WHERE name='".$_POST['name']."'");
if(mysql_num_rows($result)){
	while($row = mysql_fetch_array($result)){
		if(md5($_POST['password']) == $row['password']){
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