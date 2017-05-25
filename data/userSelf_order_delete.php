<?php
@$oid = $_REQUEST['oid'] or die();
require('0_init.php');
$sql = "DELETE FROM 3ss_order WHERE oid='$oid'";
mysqli_query($conn,$sql);