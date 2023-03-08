"use strict";
// let aa = 10;
// localStorage.setItem("send", aa);
const login_button=document.querySelector('.sign_up_btn');
const name1=document.querySelector('.full_name');
const name2=document.querySelector('.user_name');
const pass1=document.querySelector('.password');
const pass2=document.querySelector('.password_cof');
const verify_check = localStorage.getItem("main_send");
const userCheck=verify_check.split(',');
const display=document.querySelector('.display');
login_button.addEventListener('click',function(){
    let c=0,i;
const full_name=name1.value;
const user=name2.value;
const password=pass1.value;
const con_password=pass2.value;
for(i=0;i<userCheck.length;i++)
{
    if(user===userCheck[i])
    {
       c=1;
    }
}
// console.log(c);
if(password===con_password)
{
    if(password.length==7){
            if(c===0){
    localStorage.setItem("send", full_name);
    localStorage.setItem("send1", user);
    localStorage.setItem("send2", password);
    display.classList.remove("display");
    setTimeout(()=>display.classList.add("display"),3000);
            }
            else
            {
                alert("You Already Signed In !...");
                pass1.value=pass2.value=name1.value=name2.value="";
            }
    }
    else
    {
        alert("password should contain 7 numeric number!...\n Try Again!...");
        pass1.value=pass2.value="";
    }
}
else
{
    alert("Check your password!...");
}
pass1.value=pass2.value=name1.value=name2.value="";
});