<?php
@$oid = $_REQUEST['oid'] or die();
@$cid = $_REQUEST['cid'] or die();
require('0_init.php');
$sql = "SELECT productId,count FROM 3ss_cart_detail WHERE checkchk='1' AND cartId='$cid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
foreach($row as $r){
    $pid = $r['productId'];
    $count = $r['count'];
    $sql = "INSERT INTO 3ss_order_detail VALUES(NULL,'$oid','$pid','$count')";
    mysqli_query($conn,$sql);
}