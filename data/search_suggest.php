<?php
header('Content-type:application/json;charset=UTF-8');
@$kw = $_REQUEST['kw'];
require('0_init.php');
$sql = "SELECT pname FROM 3ss_product WHERE pname like '%$kw%'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
if(count($row) === 0){
    die('{"code":2,"msg":"未搜索到相关商品"}');
}
$output = [
    'code' => 1,
    'list' => $row
];
echo json_encode($output);