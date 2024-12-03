// Gestion des animations lors du défilement
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hero, .features, .contact");
    const buttons = document.querySelectorAll(".cta-button");

    // Fonction pour vérifier la visibilité des sections lors du scroll
    function checkVisibility() {
        const windowHeight = window.innerHeight;

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            // Ajouter la classe 'visible' si la section est dans la zone visible
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    }

    // Attache l'événement scroll pour déclencher la vérification de visibilité
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Vérifie immédiatement au chargement de la page

    // Animation des boutons (effet au survol et clic)
    buttons.forEach((button) => {
        // Effet d'agrandissement au survol
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
            button.style.boxShadow = "0 8px 20px rgba(0, 128, 255, 0.5)";
            button.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        });

        // Retour à l'état normal lorsque la souris quitte le bouton
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        });

        // Effet de vague (ripple) au clic
        button.addEventListener("click", (e) => {
            const ripple = document.createElement("span");
            ripple.className = "ripple";
            button.appendChild(ripple);

            // Positionner l'effet de vague en fonction du clic
            const rect = button.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;

            // Supprime l'élément après l'animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Gestion du slider pour la section Hero
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".hero .slide");
    let currentIndex = 0;

    // Fonction pour passer à la diapositive suivante
    function switchSlide() {
        // Retirer la classe 'active' de la diapositive actuelle
        slides[currentIndex].classList.remove("active");

        // Passer à la prochaine diapositive ou revenir à la première
        currentIndex = (currentIndex + 1) % slides.length;

        // Ajouter la classe 'active' à la nouvelle diapositive
        slides[currentIndex].classList.add("active");
    }

    // Changer de diapositive toutes les 10 secondes
    setInterval(switchSlide, 10000);
});

