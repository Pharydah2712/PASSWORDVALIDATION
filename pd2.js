emailInput =document.getElementById("email-input");
emailError =document.getElementById("email-error");
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

emailInput.addEventListener("change", () =>{
    console.log('emailInput');
    if(!emailInput.value.match(emailPattern)){
        emailError.removeAttribute("hidden");
    }
    else {
        emailError.setAttribute("hidden","");
    }
})
    
    passwordInput =document.getElementById("password-field");
    passwordError =document.getElementById("password-error");
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@4!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    passwordInput.addEventListener("change", () =>{
        console.log('passwordInput');
        if(!passwordInput.value.match(passwordPattern)){
            passwordError.removeAttribute("hidden");
        }
        else {
            passwordError.setAttribute("hidden","");
        }
    })
    
    cPasswordInput =document.getElementById("reconfirm-password");
    cPasswordError =document.getElementById("reconfirm-password-error");

    cPasswordInput.addEventListener("change", () =>{
        if(!(passwordInput.value == cPasswordInput.value)){
            cPasswordError.removeAttribute("hidden");
        }
        else {
            cPasswordError.setAttribute("hidden","");
        }
    })

    passwordEye=document.getElementById("passwordeye-icon")
    passwordInput.addEventListener("keydown", () =>{
        if(!(passwordInput.value == '')){
            passwordEye.removeAttribute("hidden");
        }
        else {
            passwordEye.setAttribute("hidden","");
        }
    })
passwordEye.addEventListener("click",
() => {
    console.log(passwordInput.getAttribute('type'));
    let type= '';
    if(passwordInput.getAttribute('type') === 'password'){
         type = 'text';
       }else{
         type = 'password';
       }             
       console.log(type);
passwordInput.setAttribute('type', type);
 
})

cPasswordEye=document.getElementById("cPasswordEye-icon")
    cPasswordInput.addEventListener("keydown", () =>{
        if(!(cPasswordInput.value == '')){
            CpasswordEye.removeAttribute("hidden");
        }
        else {
            cPasswordEye.setAttribute("hidden","");
        }
    })
cPasswordEye.addEventListener("click",
() => {
    console.log(cPasswordInput.getAttribute('type'));
    let type= '';
    if(cPasswordInput.getAttribute('type') === 'password'){
         type = 'text';
       }else{
         type = 'password';
       }             
       console.log(type);
CPasswordInput.setAttribute('type', type);
 
})