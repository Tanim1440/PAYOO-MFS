document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();

    const phonenumber=document.getElementById('phn-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    if(phonenumber=='019'&& pinNumber=='2222'){
        window.location.href='home.html' 
    }
    else{
        alert('wrong phone number or pin');
    }
})