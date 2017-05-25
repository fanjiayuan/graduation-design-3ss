<?php
header('Content-Type:application/json;charset=UTF-8');
@$did = $_REQUEST['did'] or die('{"code":3,"msg":"did required"}');
require('0_init.php');
$sql = "DELETE FROM 3ss_cart_detail WHERE did='$did'";
$result = mysqli_query($conn,$sql);
if($result === false){
	$output = ['code' => 2,'msg' => "删除失败！"];
}else{
	$output = ['code' => 1,'msg' => "删除成功！"];
}
echo json_encode($output);