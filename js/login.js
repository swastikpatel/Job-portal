function signIn(){
    var registeredUserData = localStorage.getItem("registered-user-data");
    console.log(registeredUserData);
    if(registeredUserData){

        let data = registeredUserData.split(",");
    
        if(document.getElementById("userpassword").value  === data[4]  && document.getElementById("username").value === data[2]){
            window.location.assign("../userTest.html")
        }else{
            alert("UserName or Password is invalid")
        }
    }else{
        alert("UserName or Password is invalid")

    }
}

