if(!sessionStorage["UserId"]){
    location.href="index.html";
}
loginUid=sessionStorage["UserId"];
loginUname=sessionStorage["UserName"];
$("#header").load("data/header.php",function(){
    headNum();
});
$("#footer").load("data/footer.php");

update_userSelf();
function update_userSelf(){
    var start=$("tr.order_odd").length;
    $.ajax({
        type:"GET",
        url:"data/userSelf_select.php",
        data:{uid:loginUid,start:start},
        success:function(result){
            var html="";
            $.each(result,function(i,p){
                var imgs="";
                for(var j=0;j<p.imgs.length;j++){
                    imgs+=`
                        <img src="${p.imgs[j].pic1}">
                    `;
                }
                html+=`
                    <tr class="order_odd"><td colspan="6">订单编号：${p.row.oid}</td></tr>
                    <tr class="order_even">
                        <td><p>${imgs}</p></td>
                        <td>${p.row.rcvName}</td>
                        <td>
                            ￥${p.row.price}
                        </td>
                        <td class="userSelf_payway">${p.row.payway}</td>
                        <td class="userSelf_transway">${p.row.transway}</td>
                        <td>
                            <a class="delete_order" href="${p.row.oid}">删除</a>
                        </td>
                    </tr>
                `;
            });
            $("#userOrder tbody").append(html);
            update_payAtrans();
            if(result.length<5){
                $("#userOrder_loadMore").hide().next().show();
            }
        }
    });
}
$("#userOrder tbody").on("click","a.delete_order",function(e){
    e.preventDefault();
    if(!confirm("确定删除这条订单信息？")){return;}
    var oid=$(this).attr("href");
    $.ajax({
        type:"POST",
        url:"data/userSelf_order_delete.php",
        data:{oid:oid},
        success:function(){
            $("#userOrder tbody").html("");
            update_userSelf();
        }
    });
});
$("#userOrder_loadMore").click(function(){
    update_userSelf();
});
function update_payAtrans(){
    $("td.userSelf_payway").each(function(){
        switch ($(this).html()){
            case '0':$(this).html("网银支付"); break;
            case '1':$(this).html("支付宝支付");break;
            case '2':$(this).html("微信支付");break;
            default :$(this).html("其他支付方式");break;
        }
    });
    $("td.userSelf_transway").each(function(){
        switch ($(this).html()){
            case '0':$(this).html("圆通快递"); break;
            case '1':$(this).html("顺丰快递");break;
            case '2':$(this).html("中通快递");break;
            case '3':$(this).html("申通快递");break;
            default :$(this).html("其他快递方式");break;
        }
    });
}