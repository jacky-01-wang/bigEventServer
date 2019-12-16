var user={
    login: function (options) {
        $.ajax({
            type:"post",
            url:'http://localhost:8000/admin/login',
            data:{user_name:options.data.username,password:options.data.password},
            success: function (res) {
                if (res.code==200) {
                    options.success()
                }else{
                    options.fail()
                }
            }
       
        })
},
    logout: function (options) {
        $.ajax({
            type:"post",
            url:'http://localhost:8000/admin/logout',
            success: function (res) {
                if (res.code==200) {
                    options.success()
                }else{
                    options.fail()
                }
            }
        })
    }
    
}