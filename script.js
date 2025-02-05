// Fonction pour déplier la section correspondant au hash de l'URL
function unsquashSectionForHash() {
  const hash = window.location.hash;
  if (hash) {
    // Rechercher l'élément de la section par son ID (ex: "#semaine3")
    const section = document.querySelector(hash);
    if (section) {
      // Trouver l'en-tête et le contenu associé dans cette section
      const header = section.querySelector('.weekly-header');
      const content = section.querySelector('.report-content');
      if (header && content && (content.style.display === "none" || content.style.display === "")) {
        content.style.display = "block";
      }
    }
  }
}

// Appeler la fonction au chargement de la page
window.addEventListener('load', unsquashSectionForHash);

// Écouter le changement du hash (par exemple, lors du clic sur un lien du nav)
window.addEventListener('hashchange', unsquashSectionForHash);

// Pour les clics sur les liens du nav, on peut également ajouter un écouteur 
// pour déplier immédiatement la section ciblée :
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const section = document.querySelector(targetId);
    if (section) {
      const content = section.querySelector('.report-content');
      if (content && (content.style.display === "none" || content.style.display === "")) {
        content.style.display = "block";
      }
    }
  });
});

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