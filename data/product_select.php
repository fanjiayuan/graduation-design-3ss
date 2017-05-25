<?php
header('Content-type:application/json;charset=UTF-8');
@$tableNum = $_REQUEST['tableNum'];
$output = [
    'data' => null
];
require('0_init.php');
$table = '3ss_product';
$table = $table.$tableNum;
$sql = "SELECT * FROM $table";
$result = mysqli_query($conn,$sql);
$output['data'] = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($output);