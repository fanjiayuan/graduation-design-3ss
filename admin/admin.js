//页面其他的一些功能初始化
var pageInit = (function(){
    //跳转去主页
    $('#goto_index').click(function(){
        open('index.html','target');
    });
    //右上角两组确定取消的切换
    right_top_bind();
    //触发修改管理员密码
    touch_admin_password();
    //修改管理员密码
    modify_admin_password();
    //tab切换时的条件函数
    tabs_click();
}());

//商品管理部分的初始化
var productInit = (function() {
    loadProduct("_1F", function () {
        loadProduct("_2F", function () {
            loadProduct("_3F", function () {
                loadProduct("_4F", function () {
                    loadProduct("_5F", function () {
                        sessionStorage['imgModify'] && update_session_info();
                        //jqueryui的函数初始化
                        jqui_do();
                        //图片跳转回来后的处理函数
                        img_todo();
                        equal_h('_1F');
                        equal_h('_2F');
                        equal_h('_3F');
                        equal_h('_4F');
                        equal_h('_5F');
                    });
                });
            });
        });
    });
    //触发修改键的处理函数
    modify_action('_products','pname','price','save');
    //撤销键
    rightTop_return('return','pname','price','_products');
    //图片初始上传
    primary_uploadImg();
    //触发保存键
    touch_saveKey('save','_products',function(){
        save_all_products();
    });
    //触发删除键
    touch_a_delete();
    //触发新增键
    touch_add_pro();
}());

//用户管理部分的初始化
var userInit = (function() {
    loadUsers();
    //触发修改键
    modify_action('_users', 'uname', 'upwd','userSave');
    //触发撤销键
    rightTop_return('userReturn','uname','upwd','_users');
    //触发保存键
    touch_saveKey('userSave','_users',function(){
        save_all_users();
    });
    //触发删除键
    user_delete();
}());


//jqueryui的一些初始化
(function () {
    $("#datepicker").datepicker({
        inline: true
    });
    $('.buttons').button();
    $('#modify_admin_password').button();
    $('#goto_index').button();
    $('#admin_password_sure').button();
    $('#admin_password_cancel').button();
}());

//jqueryui的关于商品部分的一些操作
function jqui_do(){
    $( "#accordion" ).accordion({
        collapsible: true
    });
    $( "#tabs" ).tabs();
}

//保持div#_?F的高度
function equal_h(id){
    id = '#' + id;
    $(id).css('height', '700px');
}

//加载入商品信息
function loadProduct(id1,callback){
    $.ajax({
        type:"GET",
        url:"data/product_select.php",
        data:{tableNum:id1},
        success:function(pager){
            var html="";
            $.each(pager.data,function(i,p){
                html+=`
                            <tr class="pro-tr" id="pro_${p.pid}" data-modify="false">
                                <td class="pid">
                                    <span>${p.pid}</span>
                                    <input type="hidden" name="pid" form="form_${p.pid}" value="${p.pid}">
                                    <form id="form_${p.pid}"></form>
                                </td>
                                <td class="pic1">
                                    <div>
                                        <img src="${p.pic1}">
                                        <input type="hidden" value="${p.pic1}" data-storage="now" form="form_${p.pid}" name="pic1">
                                        <input type="hidden" value="${p.pic1}"  data-storage="latest">
                                        <input type="hidden" value="${p.pic1}" data-storage="primary">
                                    </div>
                                    <input type="file" class="modify-input" form="form_${p.pid}_1" name="pic1">
                                    <input type="submit" class="modify-input" form="form_${p.pid}_1">
                                    <form action="admin/primary_uploadImg.php" method="post" enctype="multipart/form-data" id="form_${p.pid}_1"></form>
                                </td>
                                <td class="pic2">
                                    <div>
                                        <img src="${p.pic2}">
                                        <input type="hidden" value="${p.pic2}" data-storage="now" form="form_${p.pid}" name="pic2">
                                        <input type="hidden" value="${p.pic2}" data-storage="latest">
                                        <input type="hidden" value="${p.pic2}" data-storage="primary">
                                    </div>
                                    <input type="file" class="modify-input" form="form_${p.pid}_2" name="pic2">
                                    <input type="submit" class="modify-input" form="form_${p.pid}_2">
                                    <form action="admin/primary_uploadImg.php" method="post" enctype="multipart/form-data" id="form_${p.pid}_2"></form>
                                </td>
                                <td class="pname">
                                    <span>${p.pname}</span>
                                    <input class="modify-input" value="${p.pname}">
                                    <input type="hidden" value="${p.pname}" data-storage="now" form="form_${p.pid}" name="pname">
                                    <input type="hidden" value="${p.pname}" data-storage="latest">
                                    <input type="hidden" value="${p.pname}" data-storage="primary">
                                </td>
                                <td class="price">
                                    <span>${p.price}</span>
                                    <input class="modify-input" value="${p.price}">
                                    <input type="hidden" value="${p.price}" data-storage="now" form="form_${p.pid}" name="price">
                                    <input type="hidden" value="${p.price}" data-storage="latest">
                                    <input type="hidden" value="${p.price}" data-storage="primary">
                                </td>
                                <td class="actions">
                                    <a href="#" class="a-modify">修改</a>
                                    <a href="#" class="a-delete">删除</a>
                                </td>
                            </tr>
                `;
            });
            $("#"+id1+" tbody").html(html);
            callback();
        }
    });
}

//是否操作过
var is_doAction = false,
    is_atModify = false;
//修改操作
function modify_action(parentId,childC1,childC2,id){
    var str = `
        <a href="#" data-sure="part">确定</a>
        <a href="#" data-cancel="part">取消</a>
    `;
    $('#'+parentId).on('click','a.a-modify',function(e){
        e.preventDefault();
        is_atModify = true;
        var parent = this.parentNode.parentNode;
        parent.dataset['modify'] = "true";
        if(parentId === '_products'){
            session_info_arr();
        }
        $(parent).find('input.modify-input').show();
        $(parent).find('.'+childC1+' span').hide();
        $(parent).find('.'+childC2+' span').hide();
        $(this.parentNode).html(str);
        touch_part_sure_cancel(parent,childC1,childC2,id);
    });
}


//触发局部商品的确定/取消
function touch_part_sure_cancel(parent,c1,c2,id){
    $('[data-sure="part"]').click(function(e){
        e.preventDefault();
        part_sure_cancel(1,parent,c1,c2,id);
    });
    $('[data-cancel="part"]').click(function(e){
        e.preventDefault();
        part_sure_cancel(-1,parent,c1,c2,id);
    });
}

//点击局部商品的确定/取消
function part_sure_cancel(dir,parent,c1,c2,id){
    is_atModify = false;
    if(dir === 1){
        return part_sure(parent,c1,c2,id);
    }else if(dir === -1){
        return part_cancel(parent,c1,c2);
    }
}

//点击局部商品的确定
function part_sure(parent,c1,c2,id){
    is_doAction = true;
    action_todo_true(id);
    var pnval = parent.querySelector('.'+c1+' .modify-input').value,
        prval = parent.querySelector('.'+c2+' .modify-input').value;
    $(parent).find('.'+c1+' [data-storage="latest"]').val(pnval);
    $(parent).find('.'+c2+' [data-storage="latest"]').val(prval);
    $(parent).find('.'+c1+' [data-storage="now"]').val(pnval);
    $(parent).find('.'+c2+' [data-storage="now"]').val(prval);
    do_part_sure_cancel(parent,pnval,prval,c1,c2);
}

//点击局部商品的取消
function part_cancel(parent,c1,c2){
    var pnval = parent.querySelector('.'+c1+' [data-storage="latest"]').value,
        prval = parent.querySelector('.'+c2+' [data-storage="latest"]').value;
    parent.querySelector('.'+c1+' .modify-input').value = pnval;
    parent.querySelector('.'+c2+' .modify-input').value = prval;
    do_part_sure_cancel(parent,pnval,prval,c1,c2);
}

//确定/取消的处理
function do_part_sure_cancel(parent,pnval,prval,c1,c2,pic1val,pic2val){
    var str=`
        <a href="#" class="a-modify">修改</a>
        <a href="#" class="a-delete">删除</a>
    `;
    $(parent).find('input.modify-input').hide();
    $(parent).find('.'+c1+' span').html(pnval).show();
    $(parent).find('.'+c2+' span').html(prval).show();
    $(parent).find('.actions').html(str);
    if(arguments.length === 7){
        $(parent).find('.pic1 img').attr('src',pic1val);
        $(parent).find('.pic2 img').attr('src',pic2val);
    }
}


//当操作过后执行的函数
function action_todo_true(id){
    action_todo('cannot','can',id);
}

function action_todo(c1,c2,id){
    $('#'+id).parent().children().each(function(i,p){
       $(p).removeClass(c1).addClass(c2);
    });
}

function action_todo_false(id){
    is_doAction = false;
    action_todo('can','cannot',id);
}


//右上角的撤销
function rightTop_return(id,c1,c2,parentId){
    $('#'+id).click(function(e){
        e.preventDefault();
        if($(this).hasClass('cannot')){
            return;
        }
        if(!window.confirm('确定撤销？（返回到上一次保存的数据）')){
            return;
        }
        return_pro_info(c1,c2,parentId);
        action_todo_false(id);
        if(id === 'return') {
            data_modify_return();
            sessionStorage.clear();
        }
    });
}

//撤销每个商品信息(回到最初)
function return_pro_info(c1,c2,id){
    $('#'+id+' .pro-tr').each(function(i,p){
        var pnval = p.querySelector('.'+c1+' [data-storage="primary"]').value,
            prval = p.querySelector('.'+c2+' [data-storage="primary"]').value,
            pic1val = p.querySelector('.pic1 [data-storage="primary"]')?p.querySelector('.pic1 [data-storage="primary"]').value:null,
            pic2val = p.querySelector('.pic2 [data-storage="primary"]')?p.querySelector('.pic2 [data-storage="primary"]').value:null;
        if(pic1val && pic2val) {
            do_part_sure_cancel(p, pnval, prval, c1, c2, pic1val, pic2val);
        }else{
            do_part_sure_cancel(p,pnval,prval,c1,c2);
        }
    });
}


//商品图片的初上传
function primary_uploadImg(){
    $('#_products').on('change','[type="file"]',function(){
        primary_uploadImg_func(this);
    }).on('click','.pro-tr img',function(){
        if(!is_atModify){
            return;
        }
        this.parentNode.nextElementSibling.click();
    });
}

function primary_uploadImg_func(file){
    var parent = file.parentNode.parentNode;
    sessionStorage['pid'] = $(parent).find('.pid span').html();
    var clickId = parent.parentNode.parentNode.parentNode.id;
    sessionStorage['clickId'] = clickId;
    file.nextElementSibling.click();
}

//处理图片函数
function img_todo(){
    if(sessionStorage['imgModify']) {
        action_todo_true();
        img_return_ani();
        document.getElementById(`pro_${sessionStorage['pid']}`).dataset['modify'] = true;
        $('#_products .pro-tr').each(function (i, p) {
            update_img_src(p);
        });
    }
}
//更新图片src
function update_img_src(p){
    var id = $(p).find('.pid span').html();
    if (sessionStorage['pid' + id]) {
        var pic = sessionStorage['pic' + id],
            src = sessionStorage['src' + id];
        src = 'admin/' + src;
        id = '#pro_' + id + ' .' + pic;
        $(id).find('img').attr('src', src);
        $(id).find('[data-storage="now"]').val(src);
    }
}

//图片处理页面跳转回来的动画
function img_return_ani(){
    document.getElementById('_1F').previousElementSibling.click();
    document.getElementById(sessionStorage['clickId']).previousElementSibling.click();
    action_todo_true('save');
    if(document.getElementById('pro_'+sessionStorage['pid'])) {
        var top = document.getElementById('pro_' + sessionStorage['pid']).offsetTop;
        top += 'px';
        $('body').animate({
            scrollTop: top
        }, 500,function(){
            equal_h(sessionStorage['clickId']);
        });
    }
}



//触发保存键
function touch_saveKey(id,p,callback){
    $('#'+id).click(function(e){
        e.preventDefault();
        if($(this).hasClass('cannot')){
            return;
        }
        if($('#'+p+' .modify-input').css('display') !== 'none'){
            alert('请先局部确定再保存！');
            return;
        }
        if(!window.confirm('确定保存？（保存后将无法撤销）')){
            return;
        }
        callback();
    });
}

//保存所有的操作函数
function save_all_products(){
    $('#_products .pro-tr').each(function(i,p){
        if($(p).data('modify') == true) {
            var data = $(p).find('.pid form').serialize();
            data = data + "&table=" + p.parentNode.parentNode.parentNode.id;
            $.ajax({
                type: "POST",
                url: 'admin/product_save.php',
                data: data,
                success: function () {
                    return;
                }
            });
        }
    });
    alert('保存成功！');
    data_modify_return();
    action_todo_false('save');
    sessionStorage.clear();
}


var sessionArr = [];
//每次保存的所有商品的价格姓名
function session_info_arr(){
    sessionArr = [];
    var num = document.querySelectorAll('#_products .pro-tr').length;
    $('#_products .pro-tr').each(function(i,p){
        if(p.dataset['modify'] === "true") {
            var pname = $(p).find('.pname span').html(),
                price = $(p).find('.price span').html(),
                id = $(p).attr('id');
            sessionArr.push({
                id:id,
                pname: pname,
                price: price
            });
        }
        if(i === num-1){
            sessionStorage['sArr'] = JSON.stringify(sessionArr);
        }
    });
}

//每次上传图片跳转回来都要更新姓名价格
function update_session_info(){
    if(sessionStorage['sArr']) {
        var sArr = sessionStorage['sArr'];
        sArr = JSON.parse(sArr);
        for (var i = 0; i < sArr.length; i++) {
            var sid = '#' + sArr[i]['id'];
            $(sid).find('.pname span').html(sArr[i].pname);
            $(sid).find('.pname [data-storage="now"]').val(sArr[i].pname);
            $(sid).find('.pname [data-storage="latest"]').val(sArr[i].pname);
            $(sid).find('.pname input.modify-input').val(sArr[i].pname);
            $(sid).find('.price span').html(sArr[i].price);
            $(sid).find('.price [data-storage="now"]').val(sArr[i].price);
            $(sid).find('.price [data-storage="latest"]').val(sArr[i].price);
            $(sid).find('.price input.modify-input').val(sArr[i].price);
        }
    }
}

//让所有data-modify=1的变回0
function data_modify_return(){
    $('#_products tr[data-modify="true"]').each(function(i,p){
        p.dataset['modify'] = "false";
    });
}


//删除键(独立的)
function touch_a_delete(){
    $('#accordion').on('click','a.a-delete',function(e){
        e.preventDefault();
        if(!window.confirm('确定删除？（删除的数据无法撤销！）')){
            return;
        }
        var pid = $(this).parent().parent().find('.pid span').html();
        var table = $(this).parent().parent().parent().parent().parent().attr('id');
        a_delete_todo(pid,table);
    });
}

//删除处理
function a_delete_todo(pid,table){
    $.ajax({
        type:'POST',
        url:'admin/product_delete.php',
        data:{pid:pid,table:table},
        success:function(){
            loadProduct(table);
        }
    });
}


//右上角的保存/撤销的显示与否与模块绑定
function right_top_bind(){
    $('#tabs_items').on('click','a',function(){
        $('#allActions').css('display',$('#_products').css('display'));
        $('#userActions').css('display',$('#_users').css('display'));
    });
}


//新增商品触发
function touch_add_pro(){
    $('#accordion').on('click','.buttons',function(){
        add_pro_row(this.dataset['from']);
    });
    add_pro_sure();
    add_pro_cancel();
}

//新增商品处理——新增空白一行
function add_pro_row(id){
    var html = `
         <tr class="pro-tr" data-modify="false">
             <td class="pid">
                  <span>？？？</span>
             </td>
             <td class="pic1">
                  <div><span>？？？</span></div>
             </td>
             <td class="pic2">
                  <div><span>？？？</span></div>
             </td>
             <td class="pname">
                  <input class="modify-input" placeholder="请输入商品名称" style="display: inline-block">
             </td>
             <td class="price">
                  <input class="modify-input" placeholder="价格" style="display: inline-block">
             </td>
             <td class="actions">
                  <a href="#" data-addPro="sure" data-from="${id}">确定</a>
                  <a href="#" data-addPro="cancel" data-from="${id}">取消</a>
             </td>
         </tr>
    `;
    $('#'+id+' tbody').append(html);
}

//新增商品的确定
function add_pro_sure(){
    $('#accordion').on('click','a[data-addPro="sure"]',function(e){
        e.preventDefault();
        add_pro_sure_ajax(this,$(this).data('from'));
    });
}

//新增商品的确定的ajax
function add_pro_sure_ajax(a,table){
    var pname = $(a).parent().siblings('.pname').children('input').val(),
        price = $(a).parent().siblings('.price').children('input').val();
    if(pname == ''){
        alert('商品名称不能为空！');
        return;
    }else if(price == ''){
        alert('商品价格不能为空！');
        return;
    }
    if(!window.confirm('确定新加这一项商品？(无法撤销！)')){
        return;
    }
    $.ajax({
        type:'POST',
        url:'admin/product_insert.php',
        data:{table:table,pname:pname,price:price},
        success:function(){
            alert('添加成功！');
            $(a).parent().parent().remove();
            loadProduct(table,function(){
                $('#'+table).find('.pro-tr').each(function(i,p){
                    update_img_src(p);
                });
            });
        }
    });
}

//新增商品的取消
function add_pro_cancel(){
    $('#accordion').on('click','a[data-addPro="cancel"]',function(e){
        e.preventDefault();
        $(this).parent().parent().remove();
    });
}


//触发修改管理员密码
function touch_admin_password(){
    $('#modify_admin_password').click(function(){
        $(this).next().show();
    });
}

//修改管理员密码
function modify_admin_password(){
    $('#admin_password_sure').click(function() {
        var val = $('#modify_admin_password').next().children('input').val();
        if (val == '') {
            alert('密码不能为空！');
            return;
        }
        if(!window.confirm('确定提交新密码？')){
            return;
        }
        $.ajax({
            type:'POST',
            url:'admin/admin_password.php',
            data:{val:val},
            success:function(){
                alert('密码修改成功！');
                $('#modify_admin_password').next().hide().children('input').val('');
            }
        });
    });
    $('#admin_password_cancel').click(function(){
        $('#modify_admin_password').next().hide().children('input').val('');
    });
}


//保存修改后的用户信息
function save_all_users(){
    $('#_users .pro-tr').each(function(i,p){
        if($(p).data('modify') == true) {
            var data = $(p).find('.uid form').serialize();
            $.ajax({
                type: 'POST',
                url: 'admin/user_save.php',
                data: data,
                success: function () {
                    return;
                }
            });
        }
    });
    alert('保存成功！');
    action_todo_false('userSave');
}


var nowTab = 'allActions',
    isSave = false;//避免出现两次弹窗
//tabs的切换条件——必须保存后再切换
function tabs_click(){
    $('#tabs_items').on('click','a',function(){
        if($('#'+nowTab).children('a:first-child').hasClass('can')){
            document.querySelector('[data-tab="'+nowTab+'"]').click();
            !isSave && alert('请保存当前管理部分再点击！');
            isSave = !isSave;
            return;
        }
        nowTab = $(this).data('tab');
    });
}

//用户信息删除键
function user_delete(){
    $('#_users').on('click','a.a-delete',function(e){
        e.preventDefault();
        if(!window.confirm('确定删除？（删除的数据无法撤销！）')){
            return;
        }
        var uid = $(this).parent().parent().find('.uid span').html();
        $.ajax({
            type:'POST',
            url:'admin/user_delete.php',
            data:{uid:uid},
            success:function(){
                loadUsers();
            }
        });
    });
}


//加载用户信息
function loadUsers(){
    $.ajax({
        type:'GET',
        url:'admin/user_select.php',
        success:function(result){
            var html = '';
            $.each(result,function(i,p){
                html += `
                    <tr class="pro-tr">
                        <td class="uid">
                            <span>${p.uid}</span>
                            <input type="hidden" form="user_${p.uid}" value="${p.uid}" name="uid">
                            <form id="user_${p.uid}"></form>
                        </td>
                        <td class="uname">
                            <span>${p.uname}</span>
                            <input class="modify-input" value="${p.uname}">
                            <input type="hidden" value="${p.uname}" data-storage="latest" form="user_${p.uid}" name="uname">
                            <input type="hidden" value="${p.uname}" data-storage="primary">
                        </td>
                        <td class="upwd">
                            <span>${p.upwd}</span>
                            <input class="modify-input" value="${p.upwd}">
                            <input type="hidden" value="${p.upwd}" data-storage="latest" form="user_${p.uid}" name="upwd">
                            <input type="hidden" value="${p.upwd}" data-storage="primary">
                        </td>
                        <td class="order-num">${p.orderNum}</td>
                        <td class="actions">
                            <a href="#" class="a-modify">修改</a>
                            <a href="#" class="a-delete">删除</a>
                        </td>
                    </tr>
                `;
            });
            $('#_users tbody').html(html);
        }
    });
}