let side=document.querySelector('.sidebar');
document.getElementById('show').addEventListener('click',()=>{
    console.log('hello')
    if(side.style.marginLeft=='0px'){
        side.style.marginLeft='-100%';  
    }else{
        side.style.marginLeft='0px';
    }
});