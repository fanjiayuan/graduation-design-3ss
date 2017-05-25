$("#header").load("data/header.php");
$("#footer").load("data/footer.php");
$("#aside").load("data/aside.php",function(){
    //处理注册页传递过来的用户id
    if(sessionStorage["newUserId"]){
        var str=`首次见面请多指教<span>${sessionStorage["newUserName"]}</span>主人<br>
                        <a id="react-login" href="#">注销</a>`;
        $("#welcome").html(str);
        loginUid=sessionStorage["newUserId"];
        loginUname=sessionStorage["newUserName"];
        sessionStorage.clear();
    }
    if(sessionStorage['UserId']==='undefined'){
        sessionStorage.clear();
        $('#form .modal').show();
        $('#form .modal-content').show();
        state = 'login';
    }
    if(sessionStorage['UserId']&&(sessionStorage['UserId']!=='undefined')){
        loginUid=sessionStorage['UserId'];
        loginUname=sessionStorage['UserName'];
        var str = `<span>${loginUname}</span><br>
                                <a id="react-login" href="#">注销</a>`;
        $("#welcome").html(str);
        headNum();
        asideNum();
    }
});


//五层商品的动态生成
var productCount = 0;
var proItemsArr = [];
loadProduct("_1F");
loadProduct("_2F");
loadProduct("_3F");
loadProduct("_4F");
loadProduct("_5F");

function loadProduct(id1){
    $.ajax({
        type:"GET",
        url:"data/product_select.php",
        data:{tableNum:id1},
        success:function(pager){
            var html="";
            html+=`
                <div id="f${id1}" class="floor">
                    <header></header>
            `;
            $.each(pager.data,function(i,p){
                html+=`
                    <div>
                        <a class="a_up" data-productNum="${productCount++}" href="${p.pid}">
                            <img src="${p.pic1}"/>
                        </a>
                        <a class="a_down" href="${p.pid}"><img src="${p.pic2}"/></a>
                    </div>
                `;
                //给弹出商品窗口使用
                proItemsArr.push({
                    alt:productCount,
                    pid:p.pid,
                    pic:p.pic1,
                    pname:p.pname
                });
            });
            html+="</div>";
            $("#"+id1).html(html);
           }
    });
}


//倒计时功能
var countDown={
    END:new Date("2017/4/23 00:00:00").getTime(),
    NOW:null,
    timer:null,
    interval:1000,
    init(){
        this.task();
        this.timer=setInterval(()=>this.task(),this.interval);
    },
    task(){
        this.NOW=new Date().getTime();
        var ss=Math.floor((this.END-this.NOW)/1000);
        if(ss>=0) {
            var h = Math.floor(ss / 3600);
            h<10&&(h="0"+h);
            var m = Math.floor(ss % 3600 / 60);
            m<10&&(m="0"+m);
            var s = ss % 60;
            s<10&&(s="0"+s);
            $("#countDown>p>span:first-child").html(h).next().html(m).next().html(s);
        }else{
            $("#countDown>p>span:first-child").html("00").next().html("00").next().html("00");
            clearInterval(this.timer);
            this.timer=null;
        }
    }
};
countDown.init();


//广告轮播功能
var sliderImgs=[
    {"alt":0,"src":"Images/main/TB2PSO3amuJ.eBjy0FgXXXBBXXa-880734502.jpg"},
    {"alt":1,"src":"Images/main/TB2bV8FaNeK.eBjSZFuXXcT4FXa-880734502.png"},
    {"alt":2,"src":"Images/main/TB2t0dAaCiK.eBjSZFsXXbxZpXa-880734502.jpg"}
];
var slider={
    $ul:null,
    LIWIDTH:0,
    INTERVAL:1500,
    WAIT:4000,
    timer:null,
    init(){
        this.$ul=$("#imgs");
        this.LIWIDTH=parseFloat($("#slider").css("width"));
        this.updateView();
        $("#indexs").on("mouseover","li",(e)=>{
            var target=$("#indexs>li").index(e.target);
            var old=sliderImgs[0].alt;
            if(target-old>0){
                $("#indexs>li.hover").removeClass("hover");
                $(e.target).addClass("hover");
            }
            this.move(target-old);
        });
        this.autoMove();
    },
    autoMove(){
        this.timer=setTimeout(()=>this.move(1),this.WAIT);
    },
    //向左翻页(相当于整个向右移动)
    moveRight(n){
        sliderImgs=sliderImgs.splice(n).concat(sliderImgs);
        this.updateView();
        this.$ul.css("left",parseFloat(this.$ul.css("left"))+n*this.LIWIDTH);
    },
    move(n){
        clearTimeout(this.timer);
        if(n<0){
            this.moveRight(n);
            this.$ul.stop(true).animate({left:0},this.INTERVAL,()=>this.autoMove());
        }else {
            this.$ul.stop(true).animate({left: -n * this.LIWIDTH}, this.INTERVAL, ()=>this.moveLeft(n));
        }
    },
    //向右翻页(相当于整个向左移动)
    moveLeft(n){
        sliderImgs=sliderImgs.concat(sliderImgs.splice(0,n));
        this.updateView();
        this.$ul.css("left",0);
        this.autoMove();
    },
    updateView(){
        var frag=document.createDocumentFragment();
        for(var i= 0,idxs="";i<sliderImgs.length;i++){
            var li="<li></li>";
            $(frag).append(li);
            $(frag).children(":last").css("background",`url(${sliderImgs[i].src}) no-repeat center center`);
            idxs+="<li></li>";
        }
        this.$ul.html(frag).css("width",this.LIWIDTH*sliderImgs.length);
        $("#indexs").html(idxs).children(`li:eq(${sliderImgs[0].alt})`).addClass("hover");
    }
};
slider.init();


//product-modal特效
function pro_modal(){
    pro_modal_update();
}

function pro_modal_update(){
    $('#section').on('click','a.a_down',function(e){
        e.preventDefault();
        pro_modal_body();
        var alt = $(this).prev().attr('data-productNum');
        var p = proItemsArr[alt];
        var html = `
                <div class="margin-border"></div>
                <div class="main"></div>
                <div class="p-pic">
                    <img src="${p.pic}">
                </div>
                <div class="p-name">
                   ${p.pname}
                </div>
                <div class="p2cart">
                    <a href="${p.pid}">加入购物车
                        <b></b>
                        <i></i>
                    </a>
                </div>
                <span>&times;</span>
        `;
        $('#product_modal .modal-body').addClass('active').html(html);
        $('#product_modal').show();
        pro_modal_a();
        pro_modal_close();
    });
}

function pro_modal_body(){
    var $div = $('#product_modal .modal-body');
    $div.css('height',innerHeight);
    var scrollTop = parseFloat(document.body.scrollTop);
    $div.css('top',scrollTop);
}

function pro_modal_a (){
    $('.p2cart a').hover(
        function () {
            $(this).toggleClass('active');
        }
    ).click(function(e){
        e.preventDefault();
        var pid=$(this).attr("href");
        $.ajax({
            type:"POST",
            url:"data/cart_product_add.php",
            data:{uid:loginUid,pid:pid},
            success:function(result){
                if(result.code === 2){
                    $('#form .modal').show();
                    $('#form .modal-content').show();
                    state = 'login';
                }else if(result.code === 1){
                    headNum();
                    asideNum();
                    product_addSuc_ani();
                }else if(result.code === 4){
                    alert(result.msg);
                    $('#product_modal').hide();
                    $('#product_modal .modal-body').removeClass('active');
                }
            }
        });
    });
}

function pro_modal_close(){
    $('#product_modal span').click(function(){
        $('#product_modal').hide();
        $('#product_modal .modal-body').removeClass('active');
    });
}

pro_modal();
a_up_jump();

//商品图片跳转
function a_up_jump(){
    $('#section').on('click','a.a_up',function(e){
        e.preventDefault();
        var pid = $(this).attr('href');
        $.ajax({
            type:"GET",
            url:"data/page_change_a.php",
            data:{pid:pid},
            success:function(result){
                if(result.code !== 1){
                    return alert('不存在这个商品的页面！');
                }
                if(loginUid!==null) {
                    sessionStorage['UserId'] = loginUid;
                    sessionStorage['UserName'] = loginUname;
                }
                sessionStorage['ProductId'] = pid;
                open('detail.php?pid='+pid,"_blank");
            }
        });
    });
}

//主页底部的返回顶部
function index_foot_toTop(){
    $('div.gotoTop>a').click(function(e){
        e.preventDefault();
        toTop();
    });
}
index_foot_toTop();

//商品添加成功动画
function product_addSuc_ani(){
    $('#product_addSuc').css({
        top:'40%',
        opacity:1,
        display:'block'
    });
    setTimeout(function(){
        $('#product_addSuc').animate({
            top:'30%',
            opacity:0
        },800,function(){
            $('#product_modal').hide();
            $('#product_addSuc').hide();
        });
    },500);
}