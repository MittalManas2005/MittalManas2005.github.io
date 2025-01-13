document.addEventListener("DOMContentLoaded", function() {

    window.showProject = function(project) {
        const projectDetails = document.getElementById('project-details');
        const projectTitle = document.getElementById('project-title');
        const projectImage = document.getElementById('project-image');
        const projectDescription = document.getElementById('project-description');
        const projectGithub = document.getElementById('project-github');

        // Set project details based on the project clicked
        if (project === 'project1') {
            console.log("Clicked")
            projectTitle.textContent = 'Enhanced XV6';
            projectImage.src = './images/enhanced-xv6.webp';
            projectDescription.textContent = 'This is the detailed description of Project 1.';
            projectGithub.href = 'https://github.com/MittalManas2005/AdvanceOS_Concurrency';
        } else if (project === 'project2') {
            projectTitle.textContent = 'Project Title 2';
            projectImage.src = 'path/to/image2.jpg';
            projectDescription.textContent = 'This is the detailed description of Project 2.';
            projectGithub.href = 'https://github.com/your-github-repo-2';
        } else if (project === 'project3') {
            projectTitle.textContent = 'Project Title 3';
            projectImage.src = 'path/to/image3.jpg';
            projectDescription.textContent = 'This is the detailed description of Project 3.';
            projectGithub.href = 'https://github.com/your-github-repo-3';
        }

        // Show the project details section and scroll to it
        projectDetails.style.display = 'block';
        projectDetails.scrollIntoView({ behavior: 'smooth' });
    };


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
    
    const skillsContainer = document.querySelector(".skills-container");
    const skills = [...skillsContainer.children]; // Get all child elements

    // Clone all skills and append them to the container for seamless looping
    skills.forEach((skill) => {
        const clone = skill.cloneNode(true); // Deep clone the element
        skillsContainer.appendChild(clone); // Append the clone
    });
   

});