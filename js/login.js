$(document).ready(function () {
    mui.init();
    setTimeout(function () {
        $.alert("背景音乐已失效,待修复", "温馨提示");
    }, 1000)
});
document.getElementById("loginIn").addEventListener("tap", function () {
    var userId = document.getElementById("userId").value;
    var userPsw = document.getElementById("userPsw").value;
    if (userId.length == 0) {
        $("#errorTip").html("用户名为空");
        return;
    } else {
        $("#errorTip").html("");
    }
    if (userPsw.length == 0) {
        $("#errorTip").html("密码为空");
        return
    } else {
        $("#errorTip").html("");
    }
    if (1 == 1) {
        $.alert("进入下一版登录界面", "温馨提示", function () {
            window.location.href = 'views/index.html'
        })
    }
    // var param = {
    //     USER_ID: userId,
    //     USER_PASSWORD: userPsw
    // };
    // Wda.Ajax.doPost(Config.ucenter + "/getUser", param).then(function (data) {
    //
    // }, function (error) {
    //
    // });
});