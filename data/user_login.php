<?php
header('Content-Type:application/json;charset=UTF-8');
@$uname = $_REQUEST['uname'] or die('{"code":3,"msg":"请输入用户名！"}');
@$upwd = $_REQUEST['upwd'] or die('{"code":4,"msg":"请输入密码！"}');
require('0_init.php');

$upwd = md5($upwd);

$sql = "SELECT * FROM 3ss_admin";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
foreach($row as $p){
    if($p['aname'] == $uname && ($p['apwd'] == $upwd)){
        die('{"code":5,"msg":"此为管理员账号"}');
    }
}

$sql = "SELECT * FROM 3ss_user WHERE uname='$uname' AND upwd='$upwd'";
$result = mysqli_query($conn,$sql);
$data = mysqli_fetch_assoc($result);
if($data === null){
    $output = [
        'code' => 2,
        'msg' => '用户名或密码错误！'
    ];
}else{
    $output = [
        'code' => 1,
        'uid' => $data['uid'],
        'uname' => $data['uname']
    ];
}
echo json_encode($output);