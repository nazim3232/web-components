let btn1 = document.getElementById('btn');
let popupElement = document.getElementById('participate');
console.log(popupElement, btn1);
btn1.addEventListener('click', ()=>{

     //console.log(btn1);
       popupElement.classList.add('show');
      
});
let btn2 = document.querySelector('#ok_btn');
btn2.addEventListener('click', ()=>{
popupElement.classList.remove('show');
})

//this is the popup and js in the html css and javascript 