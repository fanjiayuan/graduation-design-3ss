//这个参数是用来判断当前回车触发哪个按钮的情况
var state = null;

//侧边栏的动画效果
var aside={
    RIGHT:0,
    HEIGHT:0,
    BODYWIDTH:0,
    $aside:null,
    timer:null,
    init(){
        this.updateAside();
        this.myOn();
        this.myOut();
        window.onresize=function(){//如果窗口重定大小，则触发事件
            this.updateAside();
        }.bind(this);
        this.$aside.hover(
            ()=>this.myOn(),()=>this.myOut()
        );
    },
    updateAside(){
        this.$aside=$("#aside");
        this.BODYWIDTH=parseFloat($("body").css("width"));
        this.HEIGHT=outerHeight;
        if(innerWidth>this.BODYWIDTH){
            var w = innerWidth;
            this.RIGHT=(w-this.BODYWIDTH)/2-10+"px";
        }else {
            this.RIGHT = 0;
        }
        this.$aside.css("right",this.RIGHT).css("height",this.HEIGHT);
    },
    myOn(){
        clearTimeout(this.timer);
        this.$aside.stop(true).animate({"width":35,"opacity":1},600);
    },
    myOut(){
        this.timer=setTimeout(()=>{
            this.$aside.animate({"width":5,"opacity":0},1000);
        },5000);
    }
};
aside.init();

//后台生成登录模态窗
$("#form").load("data/form.php");
var loginUid=null,
    loginUname=null,
    productId = null;

$("#aside").on("click","a#login",function(e){
    //单击触发登录
    e.preventDefault();
    $(".modal").css("display","block");
    $("#div_login").css("display","block");
    state = 'login';
}).on("click","a#register",function(e){
    //单击触发注册
    e.preventDefault();
    location.href="register.html";
}).on("click","a#settle_up",function(e){
    //单击触发去购物车界面
    e.preventDefault();
    if(loginUid===null){
        //如果未登录，则弹出登录界面，拒绝跳转
        $(".modal").css("display","block");
        $("#div_login").css("display","block");
        state = 'login';
        return;
    }
    if($("#top span").html()==0){
        alert("您的购物车还是空的，请添加商品~");
        return;
    }
    //用cookie的方法实现不同网页的值传递
    document.cookie=`UserId=${loginUid}`;
    document.cookie=`UserName=${loginUname}`;
    location.href="cart.html";
}).on("click","a#react-login",function(e){
    //单击触发注销账号
    e.preventDefault();
    loginUid=loginUname=null;
    sessionStorage.clear();
    $("#header").load("data/header.php");
    $("#aside").load("data/aside.php");
    $("#form").load("data/form.php");
});


$("#form").on("click","span",function(){
    //单击×关闭登录窗口
    $(this).parent().css("display","none");
    $(".modal").css("display","none");
    state = null;
}).on("click","input#bt-login",function() {
    //单击按钮发起登录
    var data = $("#login-form").serialize();
    var input=this;
    $.ajax({
        type: "POST",
        url: "data/user_login.php",
        data: data,
        success: function (result) {
            if(result.code!==1){
                if(result.code === 5){
                    return location.href = 'admin.html';
                }
                $(".modal .alert").html(result.msg);
            }else{
                var str = `<span>${result.uname}</span>主人您回来啦<br>
                                <a id="react-login" href="#">注销</a>`;
                $(input).parent().parent().css("display","none");
                $(".modal").css("display","none");
                state = null;
                $("#welcome").html(str);
                loginUid=result.uid;
                loginUname=result.uname;
                headNum();//更新页眉中的购物车商品件数
                asideNum();
            }
        }
    });
});

//侧边栏移入购物车小边线消失
function aside_b_hide() {
    $('#aside').on('mouseenter', '.aside-cart', function () {
        $('#aside b').each(function (i, b) {
            $(b).css('borderColor','transparent');
        });
    }).on('mouseleave','.aside-cart',function(){
        $('#aside b').each(function (i, b) {
            $(b).css('borderColor','#666');
        });
    });
}

//侧边栏返回头部
function aside_to_top(){
    $('#aside').on('click','.aside-toTop',function(){
        toTop();
    });
}

//返回顶部方法
function toTop(){
    $('body').animate({
        scrollTop:0
    },800);
}

aside_to_top();
aside_b_hide();