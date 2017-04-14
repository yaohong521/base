$(document).ready(function () {
    mui.init();
});
document.getElementById("loginIn").addEventListener("tap", function () {
    var userId = document.getElementById("userId").value;
    var userPsw = document.getElementById("userPsw").value;
    if (userId.length == 0) {
        $.alert("请输入您的用户名","温馨提示");
        return;
    }
    if (userPsw.length == 0) {
        $.alert("请输入您的密码","温馨提示");
        return
    }
    var param = {
        USER_ID: userId,
        USER_PASSWORD: userPsw
    };
    Wda.Ajax.doPost(Config.ucenter + "/getUser", param).then(function (data) {

    }, function (error) {

    });
});
