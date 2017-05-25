<?php
header('Content-Type:application/json;charset=utf-8');

require('../data/0_init.php');

$sql = "SELECT * FROM 3ss_user";
$result = mysqli_query($conn,$sql);
$arr = mysqli_fetch_all($result,MYSQLI_ASSOC);

$output = [];
foreach($arr as $row){
    $uid = $row['uid'];
    $sql = "SELECT COUNT(*) FROM 3ss_order WHERE userId='$uid'";
    $result = mysqli_query($conn,$sql);
    $order_num = mysqli_fetch_row($result)[0];
    $row['orderNum'] = $order_num;
    $output[] = $row;
}

echo json_encode($output);

?>