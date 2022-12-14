// add class navbarDark on navbar scroll
// const header = document.querySelector('.navbar');

// window.onscroll = function() {
//     var top = window.scrollY;
//     if(top >=100) {
//         header.classList.add('navbarDark');
//     }
//     else {
//         header.classList.remove('navbarDark');
//     }
// }

const hambager = document.querySelector('.hambager');
const menuItems = document.querySelector('.menu-items');
hambager.addEventListener('click', function(e){
  hambager.classList.toggle("active");
  menuItems.classList.toggle("active");
});


document.querySelectorAll(".menu-link").forEach(n => n.addEventListener("click", () => {
  hambager.classList.remove("active");
  menuItems.classList.remove("active");
}));