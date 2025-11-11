let mother = document.querySelector('#mother');
console.log(mother);


mother.addEventListener('click', runner);

let header;
function runner(e)
{

    e.stopPropagation();
    mother.classList.toggle('parentClass');
    if(!header || !document.body.contains(header))
    {
     header = document.createElement('h1');
    let paintext = "This is my mother land this is the anotehhr country"
    header.textContent = paintext;
    
    document.body.append(header)
    }
}


document.body.addEventListener('click', (e)=>{
    e.stopPropagation();
    if(header)
    {
        header.remove();
    }
})