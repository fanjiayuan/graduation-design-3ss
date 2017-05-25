var state = state || null;

//更新页头中购物车商品数量
function cartNum(callback) {
    $.ajax({
        type: "GET",
        url: "data/cart_detail_select.php",
        data: {uid: loginUid},
        success: function (result) {
            var sum = 0;
            sum+=result.length;
            callback(sum);
        }
    });
}

function headNum(){
    cartNum(function(sum){
        $("#top span").html(` ${sum} `);
    });
}

function asideNum(){
    cartNum(function(sum){
        $('#asideNum').html(sum);
    });
}

function navNum(){
    cartNum(function(sum){
        $('#navNum').html(sum);
    });
}


//搜索建议功能
$("#header").on("keyup", "input#search-input", function () {
    var data = this.value;
    if (data === "") {
        return;
    }
    search_suggest(data);
}).on("click", "input#search-input", function () {
    var data = this.value;
    state = 'suggestion';
    if (data === "") {
        return;
    }
    search_suggest(data);
}).on("click", "a#search-control", function (e) {
    e.preventDefault();
    var v=$("#search-input").val();
    if(v===""){
        return;
    }
    $.ajax({
        type:"GET",
        url:"data/page_change.php",
        data:{kw:v},
        success:function(result){
            if(result.code!==1){
                alert(result.msg);
                return;
            }
            if(loginUid!==null) {
                sessionStorage['UserId'] = loginUid;
                sessionStorage['UserName'] = loginUname;
            }
            sessionStorage['ProductId'] = result.pid;
            open("detail.php?pid="+result.pid,"_blank");
        }
    });
});
function search_suggest(data) {
    $.ajax({
        type: "GET",
        url: "data/search_suggest.php",
        data: {kw: data},
        success(result){
            var html = "";
            if (result.code !== 1) {
                html += `<li>${result.msg}</li>`;
            } else {
                if (result.list.length >= 10) {
                    result.list.length = 10;
                }
                for (var i = 0; i < result.list.length; i++) {
                    html += `<li><a href="#">${result.list[i].pname}</a></li>`;
                }
            }
            $("#search-suggest").css("display", "block").html(html).find("a").click(function (e) {
                e.preventDefault();
                $("#search-input").val($(this).html());
                $("#search-suggest").css("display", "none");
            });
            $("body").one("click", function (e) {
                e.preventDefault();
                $("#search-suggest").css("display", "none");
            });
        }
    });
}

//删除cookie
function delCookie(name){
    var exp=new Date();
    exp.setTime(exp.getTime()-1);
    var val=cookieData[name];
    if(val==null){return;}
    document.cookie=name+"="+val+";expires="+exp.toGMTString();
}

//回车键判断
document.addEventListener('keyup',function(e){
    if(e.keyCode !== 13) {
        return;
    }
    switch(state){
        case 'suggestion':
            $('a#search-control').click();
            break;
        case 'login':
            $('input#bt-login').click();
            break;
        default:
            break;
    }
});