<?php
$con = mysql_connect("localhost","root","oneinstack");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("zxl_z", $con);
?>