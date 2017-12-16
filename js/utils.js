Wda = {
    Ajax: {
        doPost: function (url, p) {
            var param = {
                param: encodeURIComponent(JSON.stringify(p))
            };
            var dtd = $.Deferred();
            $.ajax({
                method: 'post',
                url: url,
                data: param
            }).then(function (data) {
                if (data.code == "0000") {
                    dtd.resolve(data.data);
                } else {
                    dtd.reject(data);
                }
            }, function (error) {
                dtd.reject(error);
            });
            return dtd.promise()
        }
    }
};
