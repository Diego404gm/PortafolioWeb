document.addEventListener("DOMContentLoaded", function () {
    cargarEstudios();
});

function cargarEstudios() {
    fetch('/Estudios/ObtenerDatos')
        .then(response => response.json())
        .then(data => {
            console.log("Datos recibidos:", data);
            mostrarEstudios(data);
        })
        .catch(error => console.error("Error al obtener estudios:", error));
}

function mostrarEstudios(educationData) {
    const container = document.getElementById('education-cards');
    container.innerHTML = "";
    educationData.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'education-card hidden';
        card.innerHTML = `
        <div class="card-content">
            <div class="image-container">
                <img src="/img/uanl.jpg" alt="Universidad logo"> 
            </div>
            <div class="info-container">
                <div class="vertical-line"></div>
                <div class="education-info">
                    <div class="header-row">
                        <h3 class="university">${edu.universidad}</h3>
                        <span class="date">${edu.fechaInicio} - ${edu.fechaFin}</span>
                    </div>
                    <p class="faculty">${edu.facultad ?? 'Sin facultad'}</p>
                    <p class="career">${edu.carrera}</p>
                    <p class="description-studies">${edu.descripcion}</p>
                </div>
            </div>
        </div>
        `;
        container.appendChild(card);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.education-card').forEach(card => {
        observer.observe(card);
    });
}

// DARK MODE
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    const projectImg = document.getElementById("project-img");

    // Verificar estado inicial y actualizar iconos/imagen
    if (document.documentElement.classList.contains("dark-mode")) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline";
        if (projectImg) projectImg.src = "./img/portfolio-dark.png";
    } else {
        sunIcon.style.display = "inline";
        moonIcon.style.display = "none";
        if (projectImg) projectImg.src = "./img/portfolio-light.png";
    }

    // Toggle dark mode al hacer click
    darkModeToggle.addEventListener("click", (event) => {
        event.preventDefault();
        document.documentElement.classList.toggle("dark-mode");

        if (document.documentElement.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            sunIcon.style.display = "none";
            moonIcon.style.display = "inline";
            if (projectImg) projectImg.src = "./img/portfolio-dark.png";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            sunIcon.style.display = "inline";
            moonIcon.style.display = "none";
            if (projectImg) projectImg.src = "./img/portfolio-light.png";
        }
    });
});

// LANGUAGE TOGGLE - BEST PRACTICES
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("languageToggle");
    const flagIcon = document.getElementById("flag-icon");

    // Obtener idioma actual del atributo HTML (ya configurado por script inline)
    let currentLanguage = document.documentElement.getAttribute('data-current-lang') || 'es';

    // Aplicar idioma inicial (por si el script inline no corrió)
    applyLanguage(currentLanguage);
    updateFlagIcon(currentLanguage);

    // Event listener para toggle
    languageToggle.addEventListener("click", function (event) {
        event.preventDefault();

        // Cambiar idioma
        currentLanguage = currentLanguage === "es" ? "en" : "es";

        // Aplicar cambios
        applyLanguage(currentLanguage);
        updateFlagIcon(currentLanguage);

        // Guardar en localStorage
        localStorage.setItem("language", currentLanguage);

        // Actualizar atributos HTML
        document.documentElement.setAttribute('lang', currentLanguage);
        document.documentElement.setAttribute('data-current-lang', currentLanguage);
    });

    /**
     * Aplica el idioma a todos los elementos traducibles
     * @param {string} lang - 'es' o 'en'
     */
    function applyLanguage(lang) {
        // Seleccionar elementos con data-es Y data-en
        const translatableElements = document.querySelectorAll('[data-es][data-en]');

        translatableElements.forEach(element => {
            const text = lang === 'en'
                ? element.getAttribute('data-en')
                : element.getAttribute('data-es');

            if (text) {
                element.innerHTML = text;
            }
        });

        // Log para desarrollo (opcional, puedes quitarlo en producción)
        console.log(`Idioma aplicado: ${lang === 'es' ? 'Español' : 'English'}`);
    }

    /**
     * Actualiza el icono de la bandera según el idioma
     * @param {string} language - 'es' o 'en'
     */
    function updateFlagIcon(language) {
        if (language === "en") {
            // Mostrando inglés, el botón debe mostrar español (para cambiar a español)
            flagIcon.classList.remove("fa-flag-usa");
            flagIcon.classList.add("fa-flag");
        } else {
            // Mostrando español, el botón debe mostrar inglés (para cambiar a inglés)
            flagIcon.classList.remove("fa-flag");
            flagIcon.classList.add("fa-flag-usa");
        }
    }
});

// HAMBURGER MENU
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', function (event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// CONTACT FORM
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const form = this;
            const formGroups = document.querySelectorAll('.contact-form-group');
            const submitButton = document.querySelector('.contact-submit-btn');
            const successMessage = document.getElementById("successMessage");

            formGroups.forEach(group => {
                group.style.display = 'none';
            });
            submitButton.style.display = 'none';

            if (successMessage) {
                successMessage.style.display = 'block';
            }

            let formData = new FormData(this);
            fetch("https://formsubmit.co/ajax/diegoavila1018@gmail.com", {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        setTimeout(() => {
                            if (successMessage) {
                                successMessage.style.display = 'none';
                            }
                            formGroups.forEach(group => {
                                group.style.display = 'block';
                            });
                            submitButton.style.display = 'block';
                            form.reset();
                        }, 10000);
                    }
                })
                .catch(error => {
                    console.error("Error al enviar el formulario:", error);
                    formGroups.forEach(group => {
                        group.style.display = 'block';
                    });
                    submitButton.style.display = 'block';
                    if (successMessage) {
                        successMessage.style.display = 'none';
                    }
                    alert("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.");
                });
        });
    }
});

// CARD FLIP
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});

// SCROLL ANIMATIONS
document.addEventListener('DOMContentLoaded', function () {
    const textElements = document.querySelectorAll(`
        h5,
        .content-subtitle p,
        .content-details-info,
        .content-knowme,
        .content-skills,
        .content-knowledge,
        .content-details-info3,
        .project-content h3,
        .project-content p,
        .contact-card-title,
        .underline
    `);

    const cardElements = document.querySelectorAll(`
        .project-card,
        .timeline-item,
        .contact-card,
        .socialContainer
    `);

    textElements.forEach(element => {
        element.classList.add('hidden');
    });

    cardElements.forEach(element => {
        element.classList.add('hidden');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    textElements.forEach(element => {
        observer.observe(element);
    });

    cardElements.forEach(element => {
        observer.observe(element);
    });

    const socialIcons = document.querySelectorAll('.socialContainer');
    socialIcons.forEach((icon, index) => {
        icon.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
    });

    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card, index) => {
        card.style.transitionDelay = `${0.2 + (index * 0.2)}s`;
        observer.observe(card);
    });
});