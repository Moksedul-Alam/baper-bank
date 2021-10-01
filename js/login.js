//login form permission to another page
 
document.getElementById('submit-button').addEventListener('click',function(){
   const userMail = document.getElementById('user-email');
  
   const emailValue = userMail.value;
   const userPassword = document.getElementById('user-password');
   const passwordValue = userPassword.value;

if(emailValue== 'm@gmail.com' && passwordValue =='1234'){
    window.location.href ='banking.html';
}
else 
{
    if(emailValue!='m@gmail.com'&&passwordValue!='1234'){
      alert('your password and email wrong');
   }
  else if(emailValue!='m@gmail.com'){
      alert('your email wrong');
   }
   else if(passwordValue!='1234'){
      alert('your password wrong');

   }
   
   
}

});


