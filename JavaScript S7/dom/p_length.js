let list = document.querySelectorAll('p');
list.forEach(element => {
    element.insertAdjacentHTML('beforebegin', element.innerHTML.length);
});