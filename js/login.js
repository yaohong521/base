$(document).ready(function () {
    mui.init();
    getPosition();
});
document.getElementById("loginIn").addEventListener("tap", function () {
    var userId = document.getElementById("userId").value;
    var userPsw = document.getElementById("userPsw").value;
    if (userId.length == 0) {
        $("#errorTip").html("请输入您的用户名");
        return;
    }else{
        $("#errorTip").html("");
    }
    if (userPsw.length == 0) {
        $("#errorTip").html("请输入您的密码");
        return
    }else{
        $("#errorTip").html("");
    }
    var param = {
        USER_ID: userId,
        USER_PASSWORD: userPsw
    };
    Wda.Ajax.doPost(Config.ucenter + "/getUser", param).then(function (data) {

    }, function (error) {

    });
});

function getPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError,{
            // 指示浏览器获取高精度的位置，默认为false
            enableHighAcuracy: true,
            // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
            //timeout: 5000,
            // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
            maximumAge: 3000
        });
    }else{
        alert("Your browser does not support Geolocation!");
    }

}
function locationError(error){
    switch(error.code) {
        case error.TIMEOUT:
            alert("A timeout occured! Please try again!");
            break;
        case error.POSITION_UNAVAILABLE:
            alert('We can\'t detect your location. Sorry!');
            break;
        case error.PERMISSION_DENIED:
            alert('Please allow geolocation access for this to work.');
            break;
        case error.UNKNOWN_ERROR:
            alert('An unknown error occured!');
            break;
    }
}

 function locationSuccess(position){
    var coords = position.coords;
        alert(coords.latitude);
        alert(coords.longitude);
}