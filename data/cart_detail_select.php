<?php
header('Content-Type:application/json;charset=UTF-8');
@$uid = $_REQUEST['uid'];
require('0_init.php');
$sql = "SELECT cid FROM 3ss_cart WHERE userId='$uid'";
$result = mysqli_query($conn,$sql);
$cid = mysqli_fetch_row($result)[0];
$sql = "SELECT pid,pname,price,pic1,did,count,checkchk FROM 3ss_product,3ss_cart_detail WHERE pid=productId AND cartId='$cid'";
$result = mysqli_query($conn,$sql);
$output = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($output);