console.log("Project 1");
let Name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

let validEmail = false; 
let validUser = false; 
let validPhone = false; 
 
Name.addEventListener("blur",function(){
    console.log("You blur on name");
    let regx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = Name.value;
    if (regx.test(str)) {
        console.log("Your Username is matched");
        Name.classList.remove("is-invalid")
         validUser = true; 
    } else {
        console.log("Your Username is does not matched");        
        Name.classList.add("is-invalid")
         validUser = false; 

    }
})
email.addEventListener("blur",function(){
    console.log("You blur on email");
    let regx =/^([_\-\.a-zA-z0-9]+)@([_\-\.a-zA-z0-9]+)\.[a-zA-Z]{2,7}$/;
    let str = email.value;
    if (regx.test(str)) {
        console.log("Your Email is matched");
        Name.classList.remove("is-invalid")
         validEmail = true; 
    } else {
        console.log("Your Email is does not matched");        
        email.classList.add("is-invalid")
         validEmail = false; 

    }
})
phone.addEventListener("blur",function(){
    console.log("You blur on phone");
    let regx = /^[0-9]{10}$/
    let str = phone.value;
    if (regx.test(str)) {
        console.log("You phone is matched");
        phone.classList.remove("is-invalid")
         validPhone = true; 
    } else {
        console.log("You phone is does not matched");        
        phone.classList.add("is-invalid")
         validPhone = false; 

    }
})
let submit = document.getElementById("submit");
submit.addEventListener("click",function(e){
    e.preventDefault();
    if (validEmail&&validPhone&validUser) {
        let success = document.getElementById("success");
        success.classList.add("show")
        failed.classList.remove("show")
        
    } else {
        let failed = document.getElementById("failed");
        failed.classList.add("show")
        success.classList.remove("show")
    }
})