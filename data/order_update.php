<?php
header('Content-Type:application/json;charset=UTF-8');
@$rcvName = $_REQUEST['rcvName'];
@$addr = $_REQUEST['addr'];
@$phone= $_REQUEST['phone'];
@$price = $_REQUEST['price'];
@$payway = $_REQUEST['payway'];
@$transway = $_REQUEST['transway'];
@$uid = $_REQUEST['uid'];
require('0_init.php');
$sql = "INSERT INTO 3ss_order VALUES(NULL,'$rcvName','$addr','$phone','$price','$payway','$transway','$uid')";
$result = mysqli_query($conn,$sql);
$oid = mysqli_insert_id($conn);
$sql = "SELECT * FROM 3ss_order_infor WHERE userId='$uid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result)[0];
if($row===null){
    $sql = "INSERT INTO 3ss_order_infor VALUES(NULL,'$uid','$rcvName','$addr','$phone')";
    mysqli_query($conn,$sql);
}else{
    $sql = "UPDATE 3ss_order_infor SET rcvName='$rcvName',addr='$addr',phone='$phone' WHERE userId='$uid'";
    mysqli_query($conn,$sql);
}
$output = ['oid' => $oid];
echo json_encode($output);