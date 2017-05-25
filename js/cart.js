//拒绝空账号直接输入url访问
if(document.cookie===""){
  location.href="index.html";
}

//获取cookie中传递的值
var arr=document.cookie.split("; ");
var cookieData={};
for(var i=0;i<arr.length;i++){
  var c=arr[i].split("=");
  cookieData[c[0]]=c[1];
}
loginUid=cookieData['UserId'];
loginUname=cookieData['UserName'];
sessionStorage["UserId"] = loginUid;
sessionStorage["UserName"] = loginUname;
headNum();
navNum();
$("#footer").load("data/footer.php");

//更新购物车的数据
function updateView(){
  $.ajax({
    type:"GET",
    url:"data/cart_detail_select.php",
    data:{uid:loginUid},
    success:function(result){
      var html="";
      $.each(result,function(i,p){
        var totalPrice=(p.price*p.count).toFixed(1);
        html+=`
          <tr>
            <td>
              <input type="checkbox" data-check="${p.checkchk}"/>
              <i></i>
              <input type="hidden" value="${p.did}" />
              <div><img src="${p.pic1}"/></div>
            </td>
            <td><a href="#">${p.pname}</a></td>
            <td>${p.price}</td>
            <td>
              <button>-</button><input type="text" value="${p.count}"/><button>+</button>
            </td>
            <td><span>${totalPrice}</span></td>
            <td><a href="${p.did}">删除</a></td>
          </tr>
        `;
      });
      $("#cart>tbody").html(html);
      //通过数据库里的商品是否选择数据来跟新页面的商品选择打钩(初始化时)
      $("#cart>tbody input[type='checkbox']").each(function(){
        if($(this).data("check")===1){
          $(this).prop("checked",true);
        }else{
          $(this).prop("checked",false);
        }
      });
      update_checked();
      update_check_i();
      var sum=0;
      $("#cart>tbody tr").each(function(i,tr){
        if($(tr).find("input[type='checkbox']").prop("checked")){
          sum+=parseFloat($(tr).find("span").html());
        }
      });
      $("#cart_footer span").html(sum.toFixed(1));
    }
  });
}
updateView();


//商品数量输入操作
$('#cart>tbody').on('blur','input[type="text"]',function () {
    var did=this.parentNode.parentNode.querySelector("[type='hidden']").value;
    pcount_update(did,this);
});

//把商品的数量更新过去
function pcount_update(did,input){
    $.ajax({
        type:"POST",
        url:"data/cart_detail_update_count.php",
        data:{did:did,count:input.value},
        success:function(result){
            if(result.code!==1){return;}
            updateView();
        }
    });
}

//商品数量加减操作
$("#cart>tbody").on("click","button",function(){
  var did=this.parentNode.parentNode.querySelector("[type='hidden']").value;
  var input=this.parentNode.querySelector("[type='text']");
  var btv=$(this).html();
  if(btv==="-"){
    input.value>1&&(input.value--);
  }else{
    input.value++;
  }
  pcount_update(did,input);
}).on("click","a:contains('删除')",function(e){//商品删除操作
  var c=confirm("真的要删除吗？");
  if(c===false) {return;}
  e.preventDefault();
  var did=$(this).attr("href");
  $.ajax({
    type:"POST",
    url:"data/cart_detail_delete.php",
    data:{did:did},
    success:function(result){
      if(result.code!==1){return;}
      updateView();
      headNum();
      navNum();
    }
  });
}).on("click","input[type='checkbox']",function(){
  change_checked(this);
});

//全选
$("#selAll").click(function(){
  var c=this.checked;
  $("#cart>tbody input[type='checkbox']").each(function(){
    this.checked=c;
    change_checked(this);
  });
});

//提交订单
$("#cart_footer button").click(function(){
  if(loginUid&&loginUname) {
    delCookie("UserId");
    delCookie("UserName");
    location.href = "order.html";
  }
});

//改变数据库中商品的选择属性
function change_checked(input){
  var isChecked=$(input).prop("checked")==true?1:0;
  var did=$(input).next().next().val();
  $.ajax({
    type:"POST",
    url:"data/cart_detail_update_checked.php",
    data:{did:did,isChecked:isChecked},
    success:function(){
      updateView();
    }
  });
}

//页面有操作时更新选择
function update_checked(){
  var inputs=document.querySelectorAll("#cart>tbody input[type='checkbox']");
  for(var i=0;i<inputs.length;i++){
    if(inputs[i].checked===false){break;}
  }
  if(i===inputs.length){
    selAll.checked=true;
  }else{
    selAll.checked=false;
  }
}

//点击触发选择/取消选择
$('#cart').on('click','input[type="checkbox"]+i',function(e){
  var tar = e.target;
  var prev = tar.previousElementSibling;
  prev.click();
  update_check_i();
});

//选择是通过图片来展示的，所以这里更新图片显示打钩
function update_check_i(){
  $('input[type="checkbox"]+i').each(function(i,p){
    if(p.previousElementSibling.checked===true){
      $(p).addClass('active');
      $(p).parent().parent().addClass('active');
    }else{
      $(p).removeClass('active');
      $(p).parent().parent().removeClass('active');
    }
  });
}

//更新掌柜热卖
hotSell_update();
function hotSell_update(){
    var pidStr = rand_pid();
    var arr = ['超值促销','热卖单品','今日特价','狂欢特价','上新特惠'];
    $.ajax({
        type:'GET',
        url:'data/cart_hotSell_select.php',
        data:{pidStr:pidStr},
        success:function(result){
            var html = ``;
            $.each(result,function(i,p){
                var oldPrice = rand_oldPrice(p.price);
                var sellNum = rand_sellNum();
                var act = arr[rand_activity()];
                html += `
                    <div class="item">
                      <img src="${p.pic1}">
                      <p class="price">¥ ${p.price} <s>¥${oldPrice}</s></p>
                      <p class="pname">${p.pname}</p>
                      <p>
                        <span class="pactivity">${act}</span>
                        <span class="sellNum">销量：${sellNum}</span>
                      </p>
                    </div>
                `;
            });
            $('#hotSell').html(html);
        }
    });
}

function rand_pid(){
  var arr = [10000,10001,10002,10003,10004,10005,10006,10007,10008,10009,10010,10011,
      20000,20001,20002,20003,20004,20005,20006,20007,20008,20009,20010,20011,
      30000,30001,30002,30003,30004,30005,30006,30007,
      40000,40001,40002,40003,40004,40005,40006,40007,
      50000,50001,50002,50003,50004,50005,50006,50007,50008,50009,50010,50011
  ];
  var output = '';
  for(var i = 0; i < 5; i++){
    var n = Math.floor(rand(arr.length,0));
    var del = arr.splice(n,1);
    output += del[0]+(i===4 ? '':',');
  }
  return output;
}

function rand_oldPrice(p){
    return parseInt(rand(2,1.5)*parseFloat(p));
}

function rand_sellNum(){
    return Math.floor(rand(5000,500));
}

function rand_activity(){
    return Math.floor(rand(5,0));
}

function rand(num,d){
    var n = Math.random()*num+d;
    return n;
}