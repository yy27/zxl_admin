<?php
require('conn.php');
$t1=$_GET['start'];//开始时间
$t2=$_GET['end'];//结束时间
$sql="SELECT * FROM c062_phone WHERE mytime>=$t1 AND mytime<=$t2";
$result=mysql_query($sql);
$search = '';
while($row=mysql_fetch_array($result)){
	$search.="<tr>
	<td>{$row['id']}</td>
	<td>{$row['phone']}</td>
	<td>{$row['time']}</td>
	</tr>";
}
echo $search;
?>