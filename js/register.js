
var registeredUserData = [];
let count = 0;


function register(event) {
    

    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email =  document.getElementById("email").value;
    const userName=  document.getElementById("username").value;
    const password = document.getElementById("userpassword").value;
    const confirmPassword = document.getElementById("confirmuserpassword").value;

    
    if(fullName === ""){
        alert("Please Enter Name");
    }else if (email === ""){
        alert("Please Enter Email");
    }else if (userName === ""){
        alert("Please Enter User Name");
    }else if (password === ""){
        alert("Please Enter Password");
    }else if (confirmPassword === ""){
        alert("Please Confirm Password");
    }else if(password != confirmPassword){
        alert("Password and Confirm Password Must be the same")
    }else{
        registeredUserData.push(fullName)
        registeredUserData.push(email)
        registeredUserData.push(userName)
        registeredUserData.push(password)
        registeredUserData.push(confirmPassword)
        console.log(registeredUserData);
        localStorage.setItem("registered-user-data" , registeredUserData);
        window.location.href = "login.html";
    }

}

