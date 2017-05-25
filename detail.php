<?php
header('Content-Type:text/html;charset=UTF-8');
$pid = $_REQUEST['pid'];
require('data/0_init.php');
$sql = "SELECT * FROM 3ss_detail WHERE productId='$pid'";
$result = mysqli_query($conn,$sql);
$p = mysqli_fetch_assoc($result);
$mdpic2 = $p['mdpic2'];
$smpic1 = $p['smpic1'];
$smpic2 = $p['smpic2'];
$smpic3 = $p['smpic3'];
$smpic4 = $p['smpic4'];
$dname = $p['dname'];
$oldprice = $p['oldprice'];
$nowprice = $p['nowprice'];
$transprice = $p['transprice'];
$activity = $p['activity'];
$place = $p['place'];
?>

<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>三只松鼠——小贱爆米花</title>
        <link href="css/detail.css" rel="stylesheet">
    </head>
    <body>
        <header id="header"></header>
        <section id="section">
            <div class="container">
                <!--左边的图片部分-->
                <div class="img-booth">
                    <!--放大镜-->
                    <div id="md-img">
                        <?php
                        echo "<img src='$mdpic2'>";
                        ?>
                        <div id="mask"></div>
                        <div id="superMask"></div>
                    </div>
                    <!--小图片切换-->
                    <ul id="sm-img">
                        <?php
                        echo "<li><img src='$smpic1'/></li>";
                        echo "<li class='active'><img src='$smpic2'/></li>";
                        echo "<li><img src='$smpic3'/></li>";
                        echo "<li><img src='$smpic4'/></li>";
                        echo "<li><img src='$smpic1'/></li>";
                        ?>
                    </ul>
                    <div id="bg-img"></div>
                </div>
                <!--商品配置信息-->
                <div class="pd-detail">
                    <h2>
                        <?php
                        echo "$dname";
                        ?>
                    </h2>
                    <h3>奇妙圣诞宴 300款零食 低至3折起</h3>
                    <!--特殊背景色部分-->
                    <div class="detail-fcs">
                        <dl>
                            <dt><img style="height:16px" src="Images/detail/TB1okcBKVXXXXbBXVXXXXXXXXXX-116-32.png"/></dt>
                            <dd>全天猫实物商品通用</dd>
                        </dl>
                        <dl><dt>价格：</dt><dd><s>¥<?php echo "$oldprice";?></s></dd></dl>
                        <dl class="promotion-price">
                            <dt>促销价：</dt>
                            <dd>¥<b><?php echo "$nowprice";?></b></dd>
                        </dl>
                        <dl class="postage">
                            <dt>本店活动：</dt>
                            <dd><?php echo "$activity";?></dd>
                        </dl>
                    </div>
                    <dl>
                        <dt>运费：</dt>
                        <dd><?php echo "$place";?>至 <a href="#">杭州</a> 快递: ¥<?php echo "$transprice";?></dd>
                    </dl>
                    <ul class="pt-about">
                        <li>月销量<span>130870</span></li>
                        <li>累计评价<span>657831</span></li>
                        <li>送天猫积分<span>5</span></li>
                    </ul>
                    <dl class="pt-taste">
                        <dt>口味：</dt>
                        <dd class="active"><a href="#">焦糖口味</a></dd>
                        <dd><a href="#">奶油口味</a></dd>
                        <dd><a href="#">椒麻口味</a></dd>
                    </dl>
                    <dl class="pt-number">
                        <dt>数量：</dt>
                        <dd id="ptn-control">
                            <a href="#">-</a>
                            <input type="text" value="1"/><a href="#">+</a> 件
                        </dd>
                        <dd>库存88037件</dd>
                    </dl>
                    <dl class="user_handle">
                        <dt></dt>
                        <dd id="buy_it">立即购买</dd>
                        <dd id="add_cart">加入购物车</dd>
                    </dl>
                    <dl class="pd-promise">
                        <dt>服务承诺：</dt>
                        <dd>正品保证</dd>
                        <dd>极速退款</dd>
                        <dd>七天无理由退换</dd>
                    </dl>
                    <dl class="pt-rest">
                        <dd><a href="#">分享</a></dd>
                        <dd><a href="#">收藏商品(64930人气)</a></dd>
                        <dd><a href="#">举报</a></dd>
                    </dl>
                </div>
                <!--右侧其他商品-->
                <div class="pd-aside">
                    <h4>看了又看</h4>
                    <form id="pd-aside-form"></form>
                    <ul id="pd-aside-items"></ul>
                    <h2 id="pd-aside-control">
                        <a href="prev">︿</a>
                        <a href="next">﹀</a>
                    </h2>
                </div>
                <div class="last_img"><img src="Images/detail/TB2tV02mXXXXXcoXXXXXXXXXXXX-880734502.jpg"/></div>
            </div>
        </section>
        <footer id="footer"></footer>
        <aside id="aside"></aside>
        <div id="form"></div>
        <script src="js/jquery-1.11.3.js"></script>
        <script src="js/aside.js"></script>
        <script src="js/header.js"></script>
        <script src="js/detail.js"></script>
    </body>
</html>