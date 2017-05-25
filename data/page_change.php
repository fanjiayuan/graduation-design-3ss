<?php
header('Content-Type:application/json;charset=UTF-8');
@$kw = $_REQUEST['kw'] or die('{"code":3,"msg":"kw required"}');
require('0_init.php');
$sql = "SELECT productId FROM 3ss_detail WHERE pname like '%$kw%'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row === null){
    die('{"code":2,"msg":"不存在该商品的网页！"}');
}
$output = [
    'code' => 1,
    'pid' => $row[0]
];
echo json_encode($output);