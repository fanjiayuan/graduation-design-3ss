$("#header").load("data/header.php");
$("#footer").load("data/footer.php");
$("#aside").load("data/aside.php",function(){
    //获取通过sessionStorage传递的值
    if(sessionStorage['UserId']) {
        var str = `<span>${sessionStorage['UserName']}</span>主人您回来啦<br>
                                <a id="react-login" href="#">注销</a>`;
        loginUid = sessionStorage['UserId'];
        loginUname = sessionStorage['UserName'];
        productId = sessionStorage['ProductId'];
        $("#welcome").html(str);
        headNum();//更新页头中的购物车商品数量
        asideNum();
    }
});


//移入小图片改变上方中图片
$("#sm-img").on("mouseenter", "li", function () {
    $(this).addClass("active").siblings(".active").removeClass("active");
    var src = $(this).children().attr("src");
    var n = src.indexOf(".");
    var str = src.substring(n - 2, n);
    var num = sessionStorage['ProductId'];
    $("#md-img").html(`<img src="Images/detail/${num}/md${str}.jpg"><div id="mask"></div><div id="superMask"></div>`);
    update_mask();
});



update_mask();
//放大镜功能
function update_mask() {
    $("#superMask").mousemove(function (e) {
        var mask_x = parseFloat($("#mask").css("width")) - 2;
        var mask_y = parseFloat($("#mask").css("height")) - 2;
        var x = e.offsetX - mask_x / 2;
        var y = e.offsetY - mask_y / 2;
        var maxX = parseFloat($("#md-img").css("width")) - 2 - mask_x;
        var maxY = parseFloat($("#md-img").css("height")) - 2 - mask_y;
        x < 0 && (x = 0);
        x > maxX && (x = maxX);
        y < 0 && (y = 0);
        y > maxY && (y = maxY);
        $("#mask").css({left: x + "px", top: y + "px"});
        var bx = (-2) * x;
        var by = (-2) * y;
        //设置大图片
        $("#bg-img").css("backgroundPosition", `${bx}px ${by}px`);
    }).hover(
        function () {
            $("#mask").css("display", "block");
            var src = $("#md-img").children(":eq(0)").attr("src");
            var n = src.indexOf(".");
            var str = src.substring(n - 2, n);
            var num = sessionStorage['ProductId'];
            $("#bg-img").css("display", "block").css("background", `url(Images/detail/${num}/bg${str}.jpg) no-repeat 0 0`);
        },
        function () {
            $("#mask").css("display", "none");
            $("#bg-img").css("display", "none");
        }
    );
}


//右边其它商品的切换功能
$("#pd-aside-control").on("click", "a", function (e) {
    e.preventDefault();
    var action = $(this).attr("href");
    var data = $("#pd-aside-form").serialize();
    data += ("&action=" + action);
    update_pd_aside(data);
});
update_pd_aside("pd-side1=4&pd-side2=5&pd-side3=6&action=prev");
function update_pd_aside(data) {
    $.ajax({
        type: "GET",
        url: "data/detail_aside.php",
        data: data,
        success: function (result) {
            var html = "";
            html += `
                <li>
                  <div>
                    <img src="${result[0].pic}"/>
                  </div>
                  <div class="shade">￥${result[0].price}</div>
                  <p><a href="#">${result[0].ps}</a></p>
                  <input type="hidden" value="${result[0].aid}" name="pd-side1" form="pd-aside-form"/>
                </li>
                <li>
                  <div>
                    <img src="${result[1].pic}"/>
                  </div>
                    <div class="shade">￥${result[1].price}</div>
                    <p><a href="#">${result[1].ps}</a></p>
                    <input type="hidden" value="${result[1].aid}" name="pd-side2" form="pd-aside-form"/>
                </li>
                <li>
                  <div>
                    <img src="${result[2].pic}"/>
                  </div>
                  <div class="shade">￥${result[2].price}</div>
                  <p><a href="#">${result[2].ps}</a></p>
                  <input type="hidden" value="${result[2].aid}" name="pd-side3" form="pd-aside-form"/>
                </li>
            `;
            $("#pd-aside-items").html(html);
        }
    });
}

goto_buy();
addTo_cart();
//马上去购买
function goto_buy(){
    $('#buy_it').click(function(){
        product_addCart(function(){
            document.cookie=`UserId=${loginUid}`;
            document.cookie=`UserName=${loginUname}`;
            location.href='cart.html';
        },true);
    });
}

//加入购物车
function addTo_cart(){
    $('#add_cart').click(function(){
        product_addCart(function(){
            headNum();
            asideNum();
            alert('添加成功！');
        },false);
    });
}


//商品加入购物车方法
function product_addCart(callback,bool){
    $.ajax({
        type:'POST',
        url:'data/cart_product_add.php',
        data:{uid:loginUid,pid:productId},
        success:function(result){
            if(result.code === 2){
                $('#form .modal').show();
                $('#form .modal-content').show();
            }else if(result.code === 1){
                callback();
            }else if(result.code === 4){
                alert(result.msg);
                if(bool){
                    callback();
                }
            }
        }
    });
}