let cart = localStorage.getItem('b1')
let cart1 = localStorage.getItem('b2')
let cart2 = localStorage.getItem('b3')
let cart3 = localStorage.getItem('b4')
let cart4 = localStorage.getItem('b5')
let cart5 = localStorage.getItem('b6')
//К сожалению, все функции выполняются последовательно, а не в том порядке в котором нажимает пользователь
//От этого товары в корзине появляются в той последовательности, в которой они указаны в каталоге
//То есть, если нажать сначала на 3 товар, потом на 1 товар, потом на 2 товар, то в корзине они будут в порядке 1-2-3
//Я понятия не имею как это пофиксить. Грусно :(
window.addEventListener('load', function() {
    if (cart == null) {
        cart == null
    }
    else {
        let clth = document.querySelector('#cloth')
        let element = document.createElement('span')
        element.innerHTML = cart
        clth.appendChild(element)
    }
})
window.addEventListener('load', function() {
    if (cart1 == null) {
        cart1 == null
    }
    else {
        let clth1 = document.querySelector('#cloth')
        let element1 = document.createElement('span')
        element1.innerHTML = cart1
        clth1.appendChild(element1)
    }
})
window.addEventListener('load', function() {
    if (cart2 == null) {
        cart2 == null
    }
    else {
        let clth2 = document.querySelector('#cloth')
        let element2 = document.createElement('span')
        element2.innerHTML = cart2
        clth2.appendChild(element2)
    }
})
window.addEventListener('load', function() {
    if (cart3 == null) {
        cart3 == null
    }
    else {
        let clth3 = document.querySelector('#cloth')
        let element3 = document.createElement('span')
        element3.innerHTML = cart3
        clth3.appendChild(element3)
    }
})
window.addEventListener('load', function() {
    if (cart4 == null) {
        cart4 == null
    }
    else {
        let clth4 = document.querySelector('#cloth')
        let element4 = document.createElement('span')
        element4.innerHTML = cart4
        clth4.appendChild(element4)
    }
})
window.addEventListener('load', function() {
    if (cart5 == null) {
        cart5 == null
    }
    else {
        let clth5 = document.querySelector('#cloth')
        let element5 = document.createElement('span')
        element5.innerHTML = cart5
        clth5.appendChild(element5)
    }
})