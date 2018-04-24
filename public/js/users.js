$("button").on("click", function(){
var createUser = function (userData) {
    $.post("/api/users", userData, function(result){
        console.log(result);
    })
    
}

var userInfo = {
    userName: "bob",
    password: "PaSsWoRd",
    email: "email@email.com",
};

createUser(userInfo);
})