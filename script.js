function del(){
    var value = document.getElementById('screen').value;
    document.getElementById('screen').value = value.substr(0, value.length-1);
}

var one = document.getElementById('one');
one.addEventListener('click', function(){
    var body = document.querySelector('body');
    var toggle = document.getElementById('circle');
    body.classList.remove('active1');
    body.classList.remove('active2');
    toggle.style.left='0';
})
var two = document.getElementById('two');
two.addEventListener('click', function(){
    var body = document.querySelector('body');
    var toggle = document.getElementById('circle');
    body.classList.remove('active2');
    body.classList.add('active1');
    toggle.style.left='33.5%';
})
var three = document.getElementById('three');
three.addEventListener('click', function(){
    var body = document.querySelector('body');
    var toggle = document.getElementById('circle');
    body.classList.add('active2');
    toggle.style.left='67%';
})