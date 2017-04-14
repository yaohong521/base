Wda = {
    Ajax: {
        doPost: function (url, param) {
            var dtd = $.Deferred();
            $.ajax({
                url: url,
                data: JSON.stringify(param),
                dataType: "json"
            }).then(function (data) {
                if (data.code == "0000") {
                    dtd.resolve(data.data);
                }else{
                    dtd.reject(data);
                }
            }, function (error) {
                dtd.reject(error);
            });
            return dtd.promise()
        }
    }
};
