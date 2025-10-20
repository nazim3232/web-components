//this is called the assignment of the variabe .

let grand = document.querySelector('#grandParent');
let parent  = document.querySelector("#parent");
let child = document.querySelector("#child");
let innerChild = document.querySelector("#innerChild");
let deligation = document.querySelector("#multiParent");

//This is the section where I am assigning the  event for every istener.

grand.addEventListener('click', grandParentElement);
parent.addEventListener('click', parentElement);
child.addEventListener('click', childElement);
innerChild.addEventListener('click', innerChildElement);
function grandParentElement(e)
{
    e.stopPropagation();
    console.log("This is the grand parent.");
}


function parentElement(e)
{
     e.stopPropagation();
    console.log("This is the  parent.");
}
function childElement(e)
{    
    e.stopPropagation();
    console.log("This is the child element.");
}

function innerChildElement(e)
{
    e.stopPropagation();
    console.log("This is the inner child element.")
}


//this is the example of the event deligation.
//this is the example of the event deligation.
deligation.addEventListener('click', (e)=>{
    //e.target.parentElement.remove();
    console.log(e.target.textContent);
})