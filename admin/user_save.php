<?php
@$uid = $_REQUEST['uid'];
@$uname = $_REQUEST['uname'];
@$upwd = $_REQUEST['upwd'];

require('../data/0_init.php');

$upwd = md5($upwd);

$sql = "UPDATE 3ss_user SET uname='$uname',upwd='$upwd' WHERE uid='$uid'";
mysqli_query($conn,$sql);
?>