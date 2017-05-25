if(!sessionStorage["UserId"]){
    location.href="index.html";
}
loginUid=sessionStorage["UserId"];
loginUname=sessionStorage["UserName"];
$("#header").load("data/header.php",function(){
    headNum();
});
$("#footer").load("data/footer.php");


var orderName=null,
    orderAddr=null,
    orderPhone=null,
    cartId=null,
    orderId=null;

update_order();
function update_order(){
    $.ajax({
        type:"GET",
        url:"data/order_infor.php",
        data:{uid:loginUid},
        success:function(result){
            orderName=order_user_name.innerHTML=result.rcvName;
            orderAddr=order_user_addr.innerHTML=result.addr;
            orderPhone=order_user_phone.innerHTML=result.phone;
        }
    });
    $.ajax({
        type:"GET",
        url:"data/order_select.php",
        data:{uid:loginUid},
        success:function(result){
            var html="",sum=0;
            $.each(result,function(i,p){
                var tal=(p.price*p.count).toFixed(1);
                html+=
                    `<tr>
                    <td><img src="${p.pic1}"/></td>
                    <td class="order_name">${p.pname}</td>
                    <td class="order_price">￥${p.price}</td>
                    <td class="order_count">×${p.count}</td>
                    <td class="order_total">￥${tal}</td>
                    <td>有货</td>
                </tr>`;
                sum+=parseFloat(p.price*p.count);
                cartId=p.cartId;
            });
            $("#order_pro tbody").html(html);
            payPart(sum.toFixed(1));
        }
    });
}


$(".order_infor ul li>a").click(function(e){
    e.preventDefault();
    $(this).each(function(){
        $(this).parent().addClass("active")
            .siblings(".active").removeClass("active");
    });
    var sum=$("#allPro_pay").html();
    sum=parseFloat(sum.substring(1));
    payPart(sum);
});


function payPart(sum){
    $("#allPro_pay").html("￥"+sum);
    var trans=parseFloat($("#trans li.active>a").attr("href"));
    $("#trans_pay").html("￥"+trans);
    var last=(parseFloat(sum)+trans).toFixed(1);
    $("#last_pay").html("￥"+last);
}
$("#order_user_new").click(function(e){
    e.preventDefault();
    $(".order_modal").show();
});
$("#order_new_btn").click(function(){
    var newNa=order_new_name.value;
    var newAd=order_new_addr.value;
    var newPh=order_new_phone.value;
    if(newNa===""||newAd===""||newPh===""){
        alert("请填写完整信息！");
        return;
    }
    orderName=order_user_name.innerHTML=newNa;
    orderAddr=order_user_addr.innerHTML=newAd;
    orderPhone=order_user_phone.innerHTML=newPh;
    modalClose();
});
$("#order_modal_close").click(function(){
    modalClose();
});


function modalClose(){
    order_new_name.value=order_new_addr.value
        =order_new_phone.value="";
    $(".order_modal").hide();
}
$("#order_post").click(function(e){
    e.preventDefault();
    if(!confirm("确定提交订单？")){return;}
    var orderData={};
    orderData['rcvName']=order_user_name.innerHTML;
    orderData['addr']=order_user_addr.innerHTML;
    orderData['phone']=order_user_phone.innerHTML;
    if(orderData['addr']===""||orderData['phone']===""){
        alert("请填写收货人信息！");
        return;
    }
    orderData['price']=last_pay.innerHTML.substring(1);
    orderData['payway']=$("#payway li.active").data("pay");
    orderData['transway']=$("#transway li.active").data("trans");
    orderData['uid']=loginUid;
    var data=$.param(orderData);
    order_update(data);
});

function order_update(data){
    $.ajax({
        type:"POST",
        url:"data/order_update.php",
        data:data,
        success:function(result){
            orderId=result.oid;
            update_userSelf();
        }
    });
}

function update_userSelf(){
    $.ajax({
        type:"POST",
        url:"data/order_pd_update.php",
        data:{oid:orderId,cid:cartId},
        success:function(){
            update_userSelf_next();
        }
    });
}
function update_userSelf_next(){
    $.ajax({
        type:"POST",
        url:"data/order_cart_update.php",
        data:{cid:cartId},
        success:function(){
            sessionStorage['UserId']=loginUid;
            sessionStorage['UserName']=loginUname;
            location.href="orderSucc.html";
        }
    });
}