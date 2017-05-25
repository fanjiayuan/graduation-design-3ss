<?php

@$table = $_REQUEST['table'];
@$pname = $_REQUEST['pname'];
@$price = $_REQUEST['price'];

require('../data/0_init.php');

$table_new = '3ss_product'.$table;

$sql = "INSERT INTO $table_new VALUES (NULL,'$price','$pname','admin/images/noimages.jpg','admin/images/noimages.jpg')";
$result = mysqli_query($conn,$sql);
$pid = mysqli_insert_id($conn);

$sql = "INSERT INTO 3ss_product VALUES ('$pid','$price','$pname','admin/images/noimages.jpg','admin/images/noimages.jpg')";
mysqli_query($conn,$sql);

?>