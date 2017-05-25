<?php
header('Content-Type:application/json;charset=UTF-8');
@$did = $_REQUEST['did'] or die('{"code":2,"msg":"did required"}');
@$count = $_REQUEST['count'] or die('{"code":3,"msg":"count required"}');
require('0_init.php');
$sql = "UPDATE 3ss_cart_detail SET count='$count' WHERE did='$did'";
mysqli_query($conn,$sql);
$sql = "SELECT count FROM 3ss_cart_detail WHERE did='$did'";
$result = mysqli_query($conn,$sql);
$count = mysqli_fetch_row($result)[0];
$output = [
	'code' => 1,
	'count' =>$count
];
echo json_encode($output);