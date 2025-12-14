document.getElementById('add-money').addEventListener('click',function(){
    const addAmount=document.getElementById('amount').value;
    const myPin=document.getElementById('pin').value;
    const mainBalance=document.getElementById('main-balance').innerText;
    if(myPin=='2222'){
        const total= parseFloat(mainBalance) + parseFloat(addAmount) ;
        document.getElementById('main-balance').innerText=total;
    }
    else{
        alert('you entered wrong pin');
    }
})