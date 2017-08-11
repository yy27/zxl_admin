<?php
session_start();
if(isset($_SESSION['login'])){
	unset($_SESSION['login']);
	if(isset($_SESSION['name'])){
		unset($_SESSION['name']);
		echo 1;
	} else {
		echo -1;
	}
} else {
	echo -1;
}

?>