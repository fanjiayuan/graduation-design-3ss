<?php
header('Content-Type:text/html;charset=UTF-8');
?>
        <div class="modal">
            <div class="modal-dialog">
                <div class="modal-content" style="display:none" id="div_login">
                    <h4>用户登录<a href="register.html">注册新用户</a></h4>
                    <p class="alert">
                        请在此处输入您的登录信息
                    </p>
                    <form id="login-form">
                        <input type="text" autocomplete="off" autofocus placeholder="请输入登录用户名" name="uname">
                        <input type="password" placeholder="请输入登录密码" name="upwd">
                        <input type="button" value="提交登录信息" id="bt-login">
                    </form>
					<span>&times</span>
                </div>
            </div>
        </div>

