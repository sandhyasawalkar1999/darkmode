let dark = document.getElementById('moon');
let light = document.getElementById('sun');
let body = document.getElementsByTagName('body')[0];
let ballcircle = document.getElementById('ball');
let logodiv =document.getElementById('logo');

dark.addEventListener('click', function(e){
    body.style.backgroundColor='black';
    body.style.color='white';
    ballcircle.style.transform =` translateX(52px)`
    ballcircle.style.transition = 'all 1s ease'
    logodiv.style.backgroundColor='rgb(78,77,77)';
});


light.addEventListener('click', function(e){
    body.style.backgroundColor='white';
    body.style.color='black';
    ballcircle.style.transform =` translateX(-0px)`
    ballcircle.style.transition = 'all 1s ease';
    logodiv.style.backgroundColor='black';
});