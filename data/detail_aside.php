<?php
header('Content-Type:application/json;charset=UTF-8');
@$action = $_REQUEST['action'];
@$aid1 = intval($_REQUEST['pd-side1']);
@$aid2 = intval($_REQUEST['pd-side2']);
@$aid3 = intval($_REQUEST['pd-side3']);
require('0_init.php');
$recordCount = 0;
$sql = "SELECT COUNT(*) FROM 3ss_detail_aside";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
$recordCount = intval($row[0]);
$start = 0;
$num = 3;
if($action === 'next'){
    if($aid3 === $recordCount){
        $aid3 = 0;
    }
    $start = $aid3++;
}else if($action === 'prev'){
    if($aid1 === 1){
        $aid1 = $recordCount+1;
    }
    $start = $aid1-4;
}
$sql = "SELECT * FROM 3ss_detail_aside LIMIT $start,$num";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($row);