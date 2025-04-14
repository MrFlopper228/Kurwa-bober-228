function onSelectChange(event){
    const ctgr = event.target.value
    if (ctgr == 0) {
        document.getElementById('a0').style.display='block';
        document.getElementById('a1').style.display='block';
        document.getElementById('a2').style.display='block';
        document.getElementById('a3').style.display='block';
        document.getElementById('a4').style.display='block';
        document.getElementById('a5').style.display='block';
    }
    if (ctgr == 1) {
        document.getElementById('a0').style.display='block';
        document.getElementById('a1').style.display='block';
        document.getElementById('a2').style.display='none';
        document.getElementById('a3').style.display='none';
        document.getElementById('a4').style.display='none';
        document.getElementById('a5').style.display='none';
    }
    if (ctgr == 2) {
        document.getElementById('a0').style.display='none';
        document.getElementById('a1').style.display='none';
        document.getElementById('a2').style.display='block';
        document.getElementById('a3').style.display='block';
        document.getElementById('a4').style.display='none';
        document.getElementById('a5').style.display='none';
    }
    if (ctgr == 3) {
        document.getElementById('a0').style.display='none';
        document.getElementById('a1').style.display='none';
        document.getElementById('a2').style.display='none';
        document.getElementById('a3').style.display='none';
        document.getElementById('a4').style.display='block';
        document.getElementById('a5').style.display='block';
    }
}
function cart1() {
    localStorage.setItem ('b1', '<img src="Куртка1.jpg">Куртка мужская<p>Цвет: синий</p><p>Цена: 5999р</p>')
}
function cart2() {
    localStorage.setItem ('b2', '<img src="Куртка2.jpg">Куртка мужская<p>Цвет: зеленый</p><p>Цена: 4999р</p>')
}
function cart3() {
    localStorage.setItem ('b3', '<img src="Рубашка1.jpg">Рубашка мужская<p>Цвет: полосатая</p><p>Цена: 1290р</p>')
}
function cart4() {
    localStorage.setItem ('b4', '<img src="Рубашка2.jpg">Рубашка мужская<p>Цвет: черный</p><p>Цена: 1390р</p>')
}
function cart5() {
    localStorage.setItem ('b5', '<img src="Штаны1.jpg">Штаны мужские<p>Цвет: черный</p><p>Цена: 990р</p>')
}
function cart6() {
    localStorage.setItem ('b6', '<img src="Штаны2.jpg">Штаны мужская<p>Цвет: темно-синий</p><p>Цена: 1190р</p>')
}
