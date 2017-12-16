$(document).ready(function () {
    mui.init();
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
        $.alert("success", "温馨提示",function () {
            window.location.href='views/index.html'
        })
    }
    var param = {
        USER_ID: userId,
        USER_PASSWORD: userPsw
    };
    Wda.Ajax.doPost(Config.ucenter + "/getUser", param).then(function (data) {

    }, function (error) {

    });
});