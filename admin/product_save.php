<?php
header('Content-Type:application/json;charset=utf-8');
$pid = $_REQUEST['pid'];
$pic1 = $_REQUEST['pic1'];
$pic2 = $_REQUEST['pic2'];
$pname = $_REQUEST['pname'];
$price = $_REQUEST['price'];
$table = $_REQUEST['table'];

$str = "3ss_product";
$table = $str.$table;

require('../data/0_init.php');
$sql1 = "UPDATE $table SET pic1='$pic1',pic2='$pic2',pname='$pname',price='$price' WHERE pid='$pid'";
mysqli_query($conn,$sql1);

$sql2 = "UPDATE 3ss_product SET pic1='$pic1',pic2='$pic2',pname='$pname',price='$price' WHERE pid='$pid'";
mysqli_query($conn,$sql2);

?>