function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function signUp() {
    alert("Sign up process initiated!");
}

let currentTestimonial = 1;
const totalTestimonials = 3;

function showTestimonial(index) {
    for (let i = 1; i <= totalTestimonials; i++) {
        document.getElementById(`testimonial${i}`).classList.remove('active');
    }
    document.getElementById(`testimonial${index}`).classList.add('active');
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials - 1) % totalTestimonials + 1;
    showTestimonial(currentTestimonial);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial % totalTestimonials) + 1;
    showTestimonial(currentTestimonial);
}

document.addEventListener('DOMContentLoaded', () => {
    showTestimonial(currentTestimonial);
});
