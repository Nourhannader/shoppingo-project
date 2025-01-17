const wrapper =document.querySelector('.wrapper');
const  loginLink=document.querySelector('.login-link');
const  registerLink=document.querySelector('.register-link');
const btnPopup =document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close')
const actionBtn=document.querySelectorAll('.links button')
const sumbitRegBtn=document.querySelector('.submitReg')


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
    actionBtn[0].removeAttribute('id')
    actionBtn[1].id='active'
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    actionBtn[1].removeAttribute('id')
    actionBtn[0].id='active'
});


btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    actionBtn[0].id='active'
})

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    actionBtn[0].removeAttribute('id');
    actionBtn[1].removeAttribute('id')
})
