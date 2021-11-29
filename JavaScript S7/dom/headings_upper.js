let list;
for (let i = 1; i <= 6; i++) {
    list = document.querySelectorAll('h' + i);
    list.forEach(element => element.innerHTML = element.innerHTML.toUpperCase());
}