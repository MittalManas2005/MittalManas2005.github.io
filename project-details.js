document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const project = urlParams.get('project');

    const projectTitle = document.getElementById('project-title');
    const projectImage = document.getElementById('project-image');
    const projectDescription = document.getElementById('project-description');
    const projectGithub = document.getElementById('project-github');
    const projectTechnology = document.getElementById('project-technology')

    // Set project details based on the project parameter
    switch (project) {
        case 'project1':
            projectTitle.textContent = 'Enhanced XV6 and concurrency';
            projectImage.src = './images/enhanced-xv6.webp';
            projectDescription.textContent = 'Implemented a Copy-On-Write fork mechanism in the xv6 operating system, reducing memory usage by sharing pages between processes until modified. Also developed a distributed sorting system using threading and dynamic algorithm selection (Count Sort/Merge Sort) for efficient performance.';
            projectGithub.href = 'https://github.com/MittalManas2005/AdvanceOS_Concurrency';
            projectTechnology.textContent = 'C, xv6 OS, Multithreading, Synchronization (Locks, Semaphores), System Programming, POSIX API';
            break;
        case 'project3':
            projectTitle.textContent = 'Network File System';
            projectImage.src = './images/nfs-image.jpeg';
            projectDescription.textContent = 'Developed a distributed file system supporting a broad range of file operations such as creating, reading, writing, and deleting files. Included functionality for querying metadata and generating directory listings. Implemented real-time streaming with minimal latency. Optimized for concurrent client requests, leveraging advanced algorithms like Tries for file indexing and LRU caching for performance enhancement. The system ensures dynamic scalability, high availability via data replication, and fault recovery. Integrated both synchronous and asynchronous writing modes, with proactive failure detection, detailed error reporting, and comprehensive logging for operational transparency.';
            projectGithub.href = 'https://github.com/MittalManas2005/Networking-File-System';
            projectTechnology.textContent = 'C, Concurrent Programming, POSIX Threads, Semaphores, TCP Socket Programming, Version Control (Git), System Calls, Data Structures.';
            break;
        case 'project4':
            projectTitle.textContent = 'Custom Unix Shell';
            projectImage.src = './images/nfs-image.jpeg';
            projectDescription.textContent = 'Developed a Unix-like shell in C that supports process management, I/O redirection, piping, and background/foreground execution of processes. Key features include custom commands for file listing, directory navigation, command logging, process tracking, and fetching man pages. The shell also handles signals, supports multiple command delimiters, and provides a dynamic prompt.';
            projectGithub.href = 'https://github.com/MittalManas2005/Custom-C-Shell';
            projectTechnology.textContent = 'C, System Programming, POSIX API, Process Management, Signal Handling, File I/O, Version Control , HTTP Protocol.';
            break;
        case 'project5':
            projectTitle.textContent = 'BookStore Application';
            projectImage.src = './images/enhanced-xv6.webp';
            projectDescription.textContent = 'A role-based application for managing user access, book inventory, purchase history, reviews, and analytics. Provides tailored views for customers, authors, analysts, and administrators for efficient operations.';
            projectGithub.href = 'https://github.com/MittalManas2005/Book-Store-Application';
            projectTechnology.textContent = 'Python, MySQL, PyQt5, PyMySQL'
            break;
        default:
            // Handle unknown project case
            projectTitle.textContent = 'Project Not Found';
            projectImage.src = ''; // Optionally set a default image or leave it empty
            projectDescription.textContent = 'The project you are looking for does not exist.';
            projectGithub.href = '#'; // Optionally disable the link
            break;
    }
});
