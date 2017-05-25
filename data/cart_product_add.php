<?php
header('Content-Type:application/json;charset=UTF-8');
@$uid = $_REQUEST['uid'] or die('{"code":2,"msg":"请先登录账号！"}');
@$pid = $_REQUEST['pid'] or die('{"code":3,"msg":"pid required"}');
require('0_init.php');
$sql = "SELECT cid FROM 3ss_cart WHERE userId='$uid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row !== null){
    $cid = $row[0];
}else{
    $sql = "INSERT INTO 3ss_cart VALUES(null,'$uid')";
    $result = mysqli_query($conn,$sql);
    $cid = mysqli_insert_id($conn);
}
$sql = "SELECT * FROM 3ss_cart_detail WHERE cartId='$cid' AND productId='$pid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row !== null){
//    $did = $row['did'];
//    $count = intval($row['count'])+1;
//    $sql = "UPDATE 3ss_cart_detail SET count='$count' WHERE did='$did'";
//    mysqli_query($conn,$sql);
      die('{"code":4,"msg":"该商品已在购物车！"}');
}else{
    $sql = "INSERT INTO 3ss_cart_detail VALUES(null,'$cid','$pid',1,1)";
    mysqli_query($conn,$sql);
    $count = 1;
    $did = mysqli_insert_id($conn);
}
$output = [
    'code' => 1,
    'did' => $did,
    'count' => $count
];
echo json_encode($output);