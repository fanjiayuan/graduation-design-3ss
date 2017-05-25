<?php
@$uid = $_REQUEST['uid'];
require('../data/0_init.php');
$sql = "DELETE FROM 3ss_user WHERE uid='$uid'";
mysqli_query($conn,$sql);
?>