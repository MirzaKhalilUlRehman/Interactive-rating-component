let smb_btn = document.querySelector('.sbm-btn');
let starBtns = document.querySelectorAll('.star-btn');
let container = document.querySelector('.container');
let selectedRating = null;

// Add click event to each star button
starBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        starBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        // Store selected value
        selectedRating = this.getAttribute('data-value');
    });
});

smb_btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!selectedRating) {
        alert("Please select a rating before submitting!");
        return;
    }
    
    container.innerHTML = ``;
    
    let img = document.createElement('img');
    img.src = "asserts/illustration-thank-you.svg";
    img.classList.add('thank-you-img');
    container.appendChild(img);

    let rating = document.createElement('div');
    let rating_text = document.createElement('p');
    rating_text.innerText = `You selected ${selectedRating} out of 5`;
    rating.classList.add('rating');
    rating.appendChild(rating_text);
    container.appendChild(rating);

    let heading = document.createElement('h1'); 
    heading.innerText = "Thank you!";
    container.appendChild(heading);

    let para1 = document.createElement('p');
    para1.innerText = "We appreciate you taking the time to give a rating.";
    container.appendChild(para1);

    let para2 = document.createElement('p');
    para2.innerText = "If you ever need more support, don't hesitate to get in touch!";
    container.appendChild(para2);
});