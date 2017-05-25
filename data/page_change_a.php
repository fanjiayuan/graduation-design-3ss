<?php
header('Content-Type:application/json;charset=UTF-8');
@$pid = $_REQUEST['pid'];
require('0_init.php');
$sql = "SELECT * FROM 3ss_detail WHERE productId='$pid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if(is_null($row)){
    die('{"code":2}');
}
die('{"code":1}');
?>