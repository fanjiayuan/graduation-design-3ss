<?php
@$pid = $_REQUEST['pid'];
@$table = $_REQUEST['table'];
require('../data/0_init.php');
$sql = "DELETE FROM 3ss_product WHERE pid='$pid'";
mysqli_query($conn,$sql);

$table_n = '3ss_product'.$table;
$sql = "DELETE FROM $table_n WHERE pid='$pid'";
mysqli_query($conn,$sql);

?>