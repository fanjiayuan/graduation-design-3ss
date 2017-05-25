<?php
header('Content-Type:image/png');
//在服务器生成一张随机验证码图片
$w = 80;
$h = 30;
$img = imagecreatetruecolor($w,$h);
//为图片生成随机背景色
$c = imagecolorallocate($img,rand(180,240),rand(180,240),rand(180,240));
imagefilledrectangle($img,0,0,$w,$h,$c);
//绘制四个随机的字符
$str = 'ABCEFGHJKLMNPQRSTWXY23456789';
$vcode = '';
for($i = 0 ; $i < 4 ; $i++){
    $s = $str[rand(0,strlen($str)-1)];
    $vcode .=$s;
    $size = rand(14,24);
    $angle = rand(-45,45);
    $x = $i*20+5;
    $y = rand(18,30);
    $color = imagecolorallocate($img,rand(80,180),rand(80,180),rand(80,180));
    $font = '../fonts/simhei.ttf';
    imagettftext($img,$size,$angle,$x,$y,$color,$font,$s);
}
session_start();
$_SESSION['vcode_in_server'] = $vcode;
//绘制5条随机干扰线
for($i = 0;$i<5;$i++){
    $c = imagecolorallocate($img,rand(20,240),rand(20,240),rand(20,240));
    imageline($img,rand(0,$w),rand(0,$h),rand(0,$w),rand(0,$h),$c);
}
imagepng($img);
imagedestroy($img);