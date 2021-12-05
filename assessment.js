let angle = document.querySelector('#angle');
let header = document.querySelector('.header');
let heading = document.querySelector('.heading')

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{

 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');

}
function finish(){
alert('Are you sure you want to submit your assessment?')
}

angle.onclick = () =>{
 header.classList.toggle('active');
}