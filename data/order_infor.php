<?php
header('Content-Type:application/json;charset=UTF-8');
@$uid = $_REQUEST['uid'] or die();
require('0_init.php');
$sql = "SELECT rcvName,addr,phone FROM 3ss_order_infor WHERE userId='$uid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
if(empty($row)){
    $output['rcvName']='未填写过收货信息';
    $output['addr']='';
    $output['phone']='';
}else{
    $output=$row[0];
}
echo json_encode($output);