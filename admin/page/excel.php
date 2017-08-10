<?php 
header("Content-type:application/vnd.ms-excel"); 
header("Content-Disposition:filename={$_GET['chartname']}.xls");
require('../function/conn.php');
$result = mysql_query("SELECT * FROM {$_GET['chartname']} where mytime>={$_GET['start']} AND mytime<{$_GET['end']}");
while($row = mysql_fetch_array($result)){

  echo "{$row['id']}\t";

  echo "{$row['phone']}\t";

  echo "{$row['time']}\t\n";

}
?> 