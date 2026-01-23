let smb_btn = document.querySelector('.sbm-btn');
let img = document.querySelector("img");
let rating_value = document.querySelectorAll(".star-btn");
let container = document.querySelector('.container');
console.log(rating_value);
smb_btn.addEventListener('click', (e) => {
    e.preventDefault();
    container.innerHTML = ``;
    img.setAttribute("src", "asserts/illustration-thank-you.svg");

})