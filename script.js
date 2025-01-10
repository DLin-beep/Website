/*function toggleActive(activeSection) {
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

document.querySelectorAll('.content-container-about, .content-container-interests, .projects-container, .contact-container').forEach(container => {
    container.addEventListener('click', event => {
        event.stopPropagation();
    });
});*/
