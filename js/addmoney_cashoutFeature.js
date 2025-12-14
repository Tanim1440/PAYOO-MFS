//for enable cash out btn
document.getElementById('cash-out-btn').addEventListener('click',function(){
    const cashOut=document.getElementById('cashOut-form');
    const cashIn=document.getElementById('cashIn-form');
    cashOut.classList.remove('hidden');
    cashIn.classList.add('hidden');
})
//for enable cash in btn
document.getElementById('add-money-btn').addEventListener('click',function(){
    document.getElementById('cashIn-form').classList.remove('hidden');
    document.getElementById('cashOut-form').classList.add('hidden');
    
})