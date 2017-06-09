<?php

@$val = $_REQUEST['val'];

require('../data/0_init.php');

$val = md5($val);

$sql = "UPDATE 3ss_admin SET apwd='$val' WHERE aname='admin'";
mysqli_query($conn,$sql);

?>