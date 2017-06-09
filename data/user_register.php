<?php
header('Content-Type:application/json;charset=UTF-8');
@$uname = $_REQUEST['uname'] or die('{"code":2,"msg":"请填写用户名！"}');
@$upwd = $_REQUEST['upwd'] or die('{"code":3,"msg":"请输入密码！"}');
@$vcode = $_REQUEST['vcode'];
$vcode = strtoupper($vcode);

session_start();
$vs = $_SESSION['vcode_in_server'];
$vs = strtoupper($vs);

if($vcode !== $vs){
    die('{"code":4,"msg":"验证码错误！"}');
}

require('0_init.php');

$sql = "SELECT * FROM 3ss_admin WHERE aname='$uname'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row[0] !== null) {
    die('{"code":5,"msg":"该用户名已注册！"}');
}

$sql = "SELECT * FROM 3ss_user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row[0] !== null) {
    die('{"code":5,"msg":"该用户名已注册！"}');
}

//加密密码
$upwd = md5($upwd);

$sql = "INSERT INTO 3ss_user VALUES(null,'$uname','$upwd')";
mysqli_query($conn,$sql);
$uid = mysqli_insert_id($conn);
$sql = "SELECT * FROM 3ss_user WHERE uid='$uid'";
$result = mysqli_query($conn,$sql);
$u = mysqli_fetch_assoc($result);
$output = [
    'code' => 1,
    'uname' => $u['uname'],
    'upwd' => $u['upwd'],
    'uid' => $uid
];
echo json_encode($output);