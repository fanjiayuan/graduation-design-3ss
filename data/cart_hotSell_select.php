<?php
header('Content-Type:application/json;charset=UTF-8');
@$pidStr = $_REQUEST['pidStr'] or die('pidStr required');
require('0_init.php');
$output = [];
$pidArr = explode(',',$pidStr);
foreach($pidArr as $pid){
    $sql = "SELECT * FROM 3ss_product WHERE pid='$pid'";
    $result = mysqli_query($conn,$sql);
    $output[] = mysqli_fetch_assoc($result);
}
echo json_encode($output);