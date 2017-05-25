<?php
@$cid = $_REQUEST['cid'] or die();
require('0_init.php');
$sql = "DELETE FROM 3ss_cart_detail WHERE cartId='$cid' AND checkchk='1'";
mysqli_query($conn,$sql);