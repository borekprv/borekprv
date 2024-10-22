/*============================ toggle icon navbar ============================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*============================ scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/*================================= sticky navbar =================================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*========== remove toggle icon and navbar when click navbar link (scroll)=============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*================================= scroll reveal =================================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-img, .home-content p, .about-content', { origin: 'right' });

/*================================= typed js =================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*================================= send email =================================*/

const btn = document.getElementById('btn-send');
const inputs = document.querySelector('form');
btn.addEventListener('click', () => {
    Email.send({
        SecureToken: "2b28c12b-100d-4da4-8b3c-f6394db3f571",
        To: 'borekfurion@gmail.com',
        From: "borekfurion@gmail.com",
        Subject: "Wiadomość z portfolio od: " + inputs.elements['email'].value + " Temat: " + inputs.elements['subject'].value,
        Body: "Name: " + inputs.elements['name'].value + "<br>"
            + "Email: "  + inputs.elements['email'].value + "<br>"
            + "Phone: " + inputs.elements['phone'].value + "<br>"
            + "Subject: " + inputs.elements['subject'].value + "<br><br>"
            + "Message: " + inputs.elements['message'].value
            
    }).then(msg => alert("The email sent succesfully"))
})