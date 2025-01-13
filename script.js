document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector('.intro h2');
    const text = "I'm Manas Mittal";
    const typingSpeed = 100; // 100ms per character
    const totalTime = text.length * typingSpeed; // Total time to type all characters
    let index = 0;

    // Function to type the text
    function type() {
        if (index < text.length) {
            heading.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            // Remove typing-effect class and add a class for static cursor
            heading.classList.remove('typing-effect');
            heading.classList.add('typing-done');
        }
    }

    heading.classList.add('typing-effect');
    type();

    const contactLink = document.querySelector('nav a[href="#contact"]');
    contactLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to contact section
    });
    
});