<?php
$did = $_REQUEST['did'];
$isC = $_REQUEST['isChecked'];
require('0_init.php');
$sql = "UPDATE 3ss_cart_detail SET checkchk='$isC' WHERE did='$did'";
mysqli_query($conn,$sql);