<?php
header('Content-Type:application/json;charset=UTF-8');
@$uid = $_REQUEST['uid'] or die();
@$start = $_REQUEST['start'];
require('0_init.php');
if(!$start){
    $start=0;
}
$count=5;
$sql = "SELECT * FROM 3ss_order WHERE userId='$uid' order by oid desc LIMIT $start,$count";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
$output = [];
foreach($row as $r){
    $oid = $r['oid'];
    $sql = "SELECT pic1 FROM 3ss_order_detail,3ss_product WHERE orderId='$oid' AND productId=pid";
    $result = mysqli_query($conn,$sql);
    $img = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $output[]=[
        'row'=>$r,
        'imgs'=>$img
    ];
}
echo json_encode($output);