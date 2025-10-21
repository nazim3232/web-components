let popupContainer = document.querySelector('#click_btn');
let popUp = document.querySelector('#popup');
let popUpbtn = document.querySelector('#pop-up');

 

 popupContainer.addEventListener("click", ()=>
{
    popUp.classList.add('popup_visible');
})

popUpbtn.addEventListener("click", ()=>
{
    popUp.classList.remove('popup_visible');
})