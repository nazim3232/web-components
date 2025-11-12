let containerCollection = document.querySelectorAll('.container');
console.log(containerCollection);

containerCollection.forEach((container) => {
    container.addEventListener('click', () => {
        container.classList.toggle('show');
    });
});