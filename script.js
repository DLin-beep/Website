function toggleActive(activeSection) {
    const sections = document.querySelectorAll('.section');
    const isActive = activeSection.classList.contains('active');

    sections.forEach((section) => {
        section.classList.remove('active', 'inactive');
    });

    if (!isActive) {
        activeSection.classList.add('active');
        sections.forEach((section) => {
            if (!section.classList.contains('active')) {
                section.classList.add('inactive');
            }
        });
    }
}

// Prevent clicks on all content containers from propagating
document.querySelectorAll('.content, .content-container, .projects-container, .contact-container').forEach(container => {
    container.addEventListener('click', event => {
        event.stopPropagation();
    });
});
