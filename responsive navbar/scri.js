let manuBtn= document.querySelector('#list');
let menuItem = document.querySelector('#menuList');
let crossIcon = document.querySelector('#menu-cross');

manuBtn.addEventListener('click', ()=>{
menuItem.style.display='block';
manuBtn.style.display= 'none';
crossIcon.style.display='block';
})


crossIcon.addEventListener('click', ()=>{
menuItem.style.display='none';
manuBtn.style.display= 'block';
crossIcon.style.display='none';


})


