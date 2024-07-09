// var Resp_menu_js = document.getElementById('Resp_menu');
// var Resp_nav_js = document.getElementById('Nav');
//     Resp_menu_js.addEventListener('click', function(){
//         Resp_nav_js.classList.toggle('Nav_Move');
//     })

var Resp_menu_js = document.getElementById('Resp_menu');
var nvmm = document.getElementsByTagName('nav')[0];
Resp_menu_js.addEventListener('click', function(){
    Resp_menu_js.classList.toggle('Nav_Move');
    nvmm.classList.toggle('newcdd');
    })
   