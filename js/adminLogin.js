 function SubmitLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("userpassword").value;

    if ((username.toLowerCase() === "shivam" && password.toLowerCase() === "user") || (username.toLowerCase() === "admin" && password.toLowerCase() === "adminpassword") || (username.toLowerCase() === "umed" && password.toLowerCase() === "pricecraft")){
        window.location.href="admindata.html";
    }else{
        alert("Invalid Login Credentials");
    }
 }