let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav-links');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}
window.onscroll = () =>{
    navbar.classList.remove('active');

};

const navBar = document.getElementById('nav--bar');
navBar.addEventListener('click', scrollToDiv);

function scrollToDiv(evt) {
    evt.preventDefault();
    const targetNavLink = evt.target;
    if (targetNavLink.classList.contains('nav-link')) {
        console.log('clicked')
        const link = targetNavLink.getAttribute('href').slice(1);
        // if (link !== '') {
        document.getElementById(link).scrollIntoView({
            behavior: 'smooth'
        })
        // } else {
        //     document.getElementById(link).scrollTo(0, 0)
        // }
    }
}

// contentScroll = document.getElementById('scroll-div');

// // const barHeight = getComputedStyle(navBar).height
// let navBarHeight;
// if (navBar.offsetHeight) {
//     navBarHeight = navBar.offsetHeight;
// } else if (navBar.style.pixelHeight) {
//     navBarHeight = navBar.style.pixelHeight;
// }
// console.log(navBarHeight);

// const allowOverflow = getComputedStyle(contentScroll).overflowY;
// allowOverflow.value = 'scroll';
// console.log(allowOverflow)

// const divHeight = getComputedStyle(contentScroll).height;
// divHeight.value = `calc(${100}vh - ${nav}px)`;
// console.log(divHeight)
