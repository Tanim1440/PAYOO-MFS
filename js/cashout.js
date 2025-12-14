document.getElementById('remove-money').addEventListener('click',function(){
    const removeAmount=document.getElementById('amount2').value;
    const myPin=document.getElementById('pin2').value;
    const mainBalance=document.getElementById('main-balance').innerText;
    if(myPin=='2222'){
        const remaining= parseFloat(mainBalance) - parseFloat(removeAmount) ;
        document.getElementById('main-balance').innerText=remaining;
    }
    else{
        alert('you entered wrong pin');
    }
})