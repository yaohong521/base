$(document).ready(function () {
    mui.init();
});
document.getElementById("loginIn").addEventListener("tap", function () {
    var userId = document.getElementById("userId").value;
    var userPsw = document.getElementById("userPsw").value;
    if (userId.length == 0) {
        $("#errorTip").html("请输入您的用户名");
        return;
    } else {
        $("#errorTip").html("");
    }
    if (userPsw.length == 0) {
        $("#errorTip").html("请输入您的密码");
        return
    } else {
        $("#errorTip").html("");
    }
    if (1 == 1) {
        $.alert("success", "温馨提示")
    }
    var param = {
        USER_ID: userId,
        USER_PASSWORD: userPsw
    };
    Wda.Ajax.doPost(Config.ucenter + "/getUser", param).then(function (data) {

    }, function (error) {

    });
});