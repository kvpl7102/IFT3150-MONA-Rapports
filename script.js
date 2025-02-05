document.querySelectorAll('.weekly-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});