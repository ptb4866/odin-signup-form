let password = document.getElementById("password") ;
let confirmPassword = document.getElementById("confirm-password");

let root  = document.documentElement; 

//const sendButton = document.getElementById("sendBtn");
const sendButton = document.querySelector("button");
sendButton.addEventListener("click", () => {

    

    if (password.value != confirmPassword.value ) {

       root.style.setProperty('--pwdNotMatch', "inline");     
       password.style.borderColor = "red";
       confirmPassword.style.borderColor = "red";

        
    } else  {

        root.style.setProperty('--pwdNotMatch', "none");
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
    }

}); 
    
