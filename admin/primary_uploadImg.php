<?php
function doAction(){
    if(array_key_exists('pic1',$_FILES)){
        $file = $_FILES['pic1'];
        $pic = 'pic1';
    }else if(array_key_exists('pic2',$_FILES)){
        $file = $_FILES['pic2'];
        $pic = 'pic2';
    }

    $filename = $file['name'];
    $type = $file['type'];
    $tmp_name = $file['tmp_name'];
    $size = $file['size'];
    $error = $file['error'];
    $now_name = 'uploads/'.$filename;
    move_uploaded_file($tmp_name,$now_name);

    echo "<script>";
    echo "var pid = sessionStorage['pid'];";
    echo "sessionStorage['pid'+pid] = 1;";
    echo "sessionStorage['pic'+pid] = '$pic';";
    echo "sessionStorage['src'+pid] = '$now_name';";
    echo "sessionStorage['imgModify'] = 1;";
    echo "location.href='../admin.html';";
    echo "</script>";

}

if(!empty($_FILES)){
    doAction();
}

?>