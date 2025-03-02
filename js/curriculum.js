
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


document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline";
    }

    darkModeToggle.addEventListener("click", (event) => {
        event.preventDefault();
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            sunIcon.style.display = "none";
            moonIcon.style.display = "inline";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            sunIcon.style.display = "inline";
            moonIcon.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("languageToggle");
    const flagIcon = document.getElementById("flag-icon");
    const translations = {
        en: {
            // Textos existentes
            about: "About",
            studies: "Studies",
            experience: "Experience",
            contact: "Contact",
            greeting: "Hello, <span class='name'>I am Diego</span>",
            subtitle: "Web Developer",
            description: "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.",
            aboutme: "About Me",
            knowledge: "Knowledge",
            knowledgeDetails: "Skills",

            // Nuevos textos
            contentKnowme: "Get to know me",
            contentSkills: "My Skills",
            contentDetails1: "I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.",
            contentDetails2: "I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming",
            contentDetails3: "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.",

            // Sección Studies
            studiesTitle: "STUDIES",
            university: "Universidad Autónoma de Nuevo León",
            date: "2020 - 2024",
            faculty: "FACPYA Facultad de Contaduría Pública y Administración",
            career: "Licenciatura en Tecnologías de la Información",
            descriptionStudies: "Description of the studies carried out.",

            // Sección Experience
            experienceTitle: "Experience",
            company: "Company",
            position: "Position",
            startDate: "Start Date",
            endDate: "End Date",
            jobDescription: "Description",

            // Sección Contacto
            contactTitle: "Contact",
            contactWithMe: "Contact With Me",
            messageExit: "Message sent successfully!",
            fullName: "Full Name",
            email: "Email Address",
            messageLabel:"Message",
            send: "Send Message"



        },
        es: {
            
            about: "Acerca de mi",
            studies: "Estudios",
            experience: "Experiencia",
            contact: "Contacto",
            greeting: "Hola, <span class='name'>soy Diego</span>",
            subtitle: "Desarrollador Web",
            description: "Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales, principalmente en términos de programación y tecnología.",
            aboutme: "Acerca de mi",
            knowledge: "Conocimientos",
            knowledgeDetails: "Habilidades",

            
            contentKnowme: "Conóceme",
            contentSkills: "Mis Habilidades",
            contentDetails1: "Soy un Desarrollador Web enfocado en Frontend que construye y gestiona el Front-end de Sitios Web y Aplicaciones Web que conducen al éxito del producto en general. Echa un vistazo a algunos de mis trabajos en la sección de Proyectos.",
            contentDetails2: "También me gusta compartir contenido relacionado con lo que he aprendido a lo largo de los años en Desarrollo Web para ayudar a otras personas de la Comunidad de Desarrolladores. Siéntete libre de Conectar o Seguirme en mi LinkedIn e Instagram donde publico contenido útil relacionado con Desarrollo Web y Programación",
            contentDetails3: "Estoy abierto a oportunidades laborales donde pueda contribuir, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades y experiencia, no dudes en contactarme.",

            
            studiesTitle: "ESTUDIOS",
            university: "Universidad Autónoma de Nuevo León",
            date: "2020 - 2024",
            faculty: "FACPYA Facultad de Contaduría Pública y Administración",
            career: "Licenciatura en Tecnologías de la Información",
            descriptionStudies: "Descripción de los estudios realizados.",

            
            experienceTitle: "Experiencia",
            company: "Empresa",
            position: "Puesto",
            startDate: "Fecha Inicio",
            endDate: "Fecha Fin",
            jobDescription: "Descripción",

              // Sección Contacto
            contactTitle: "Contacto",
            contactWithMe: "Contacta Conmigo",
            messageExit: "¡Mensaje enviado con éxito!",
            fullName: "Nombre Completo",
            email: "Correo Electronico",
            messageLabel: "Mensaje",
            send: "Enviar Mensaje"
        }
    };

    let currentLanguage = localStorage.getItem("language") || "en";

    function updateLanguageTexts() {
      
        document.querySelector("a[href='#about']").textContent = translations[currentLanguage].about;
        document.querySelector("a[href='#studies']").textContent = translations[currentLanguage].studies;
        document.querySelector("a[href='#experience']").textContent = translations[currentLanguage].experience;
        document.querySelector("a[href='#contact']").textContent = translations[currentLanguage].contact;
        document.querySelector(".greeting").innerHTML = translations[currentLanguage].greeting;
        document.querySelector(".subtitle").textContent = translations[currentLanguage].subtitle;
        document.querySelector(".description").textContent = translations[currentLanguage].description;

       
        document.querySelector(".content-title-aboutme h5").textContent = translations[currentLanguage].aboutme;

        document.querySelector(".content-knowledge").textContent = translations[currentLanguage].knowledge;
        document.querySelector(".content-details-info3").textContent = translations[currentLanguage].knowledgeDetails;

        
        document.querySelector(".content-subtitle p").textContent = translations[currentLanguage].description;
        document.querySelector(".content-knowme").textContent = translations[currentLanguage].contentKnowme;
        document.querySelector(".content-skills").textContent = translations[currentLanguage].contentSkills;

        
        const contentDetailsInfo = document.querySelectorAll(".content-details-info");
        contentDetailsInfo[0].textContent = translations[currentLanguage].contentDetails1;
        contentDetailsInfo[1].textContent = translations[currentLanguage].contentDetails2;
        contentDetailsInfo[2].textContent = translations[currentLanguage].contentDetails3;

    
        document.querySelector(".translate[data-key='studies']").textContent = translations[currentLanguage].studiesTitle;
        document.querySelector(".university[data-key='university']").textContent = translations[currentLanguage].university;
        document.querySelector(".date[data-key='date']").textContent = translations[currentLanguage].date;
        document.querySelector(".faculty[data-key='faculty']").textContent = translations[currentLanguage].faculty;
        document.querySelector(".career[data-key='career']").textContent = translations[currentLanguage].career;
        document.querySelector(".description-studies[data-key='description-studies']").textContent = translations[currentLanguage].descriptionStudies;


      
        document.querySelector(".experience-section h5").textContent = translations[currentLanguage].experienceTitle;

        document.querySelector(".send-exit h3").textContent = translations[currentLanguage].messageExit;
        document.querySelector(".contact-section h5").textContent = translations[currentLanguage].contactTitle;
        document.querySelector(".contact-card-title").textContent = translations[currentLanguage].contactWithMe;
        document.querySelector(".contact-submit-btn").textContent = translations[currentLanguage].send;

        // Obtener todos los labels de los campos del formulario
        const labels = document.querySelectorAll(".contact-form-label");

        // Asignar traducciones a cada label según su posición
        if (labels.length >= 3) { // Asegurarse de que existan los tres labels
            labels[0].textContent = translations[currentLanguage].fullName;
            labels[1].textContent = translations[currentLanguage].email;
            labels[2].textContent = translations[currentLanguage].messageLabel;
        }
        

        
        const cardFronts = document.querySelectorAll(".card-front");
        cardFronts.forEach(card => {
            const companyTitle = card.querySelector("h3");
            const positionElement = card.querySelectorAll("p")[0];
            const startDateElement = card.querySelectorAll("p")[1];
            const endDateElement = card.querySelectorAll("p")[2];

            if (companyTitle.textContent === "Empresa" || companyTitle.textContent === "Company") {
                companyTitle.textContent = translations[currentLanguage].company;
            }

            if (positionElement) {
                const positionStrong = positionElement.querySelector("strong");
                if (positionStrong) {
                    positionStrong.textContent = translations[currentLanguage].position + ":";
                }
            }

            if (startDateElement) {
                const startDateStrong = startDateElement.querySelector("strong");
                if (startDateStrong) {
                    startDateStrong.textContent = translations[currentLanguage].startDate + ":";
                }
            }

            if (endDateElement) {
                const endDateStrong = endDateElement.querySelector("strong");
                if (endDateStrong) {
                    endDateStrong.textContent = translations[currentLanguage].endDate + ":";
                }
            }
        });

       
        const cardBacks = document.querySelectorAll(".card-back");
        cardBacks.forEach(card => {
            const descriptionElement = card.querySelector("p");
            if (descriptionElement) {
                const descriptionStrong = descriptionElement.querySelector("strong");
                if (descriptionStrong) {
                    descriptionStrong.textContent = translations[currentLanguage].jobDescription + ":";
                }
            }
        });

        // Cambiar el ícono de la bandera
        if (currentLanguage === "en") {
            flagIcon.classList.remove("fa-flag");
            flagIcon.classList.add("fa-flag-usa");
        } else {
            flagIcon.classList.remove("fa-flag-usa");
            flagIcon.classList.add("fa-flag");
        }
    }

    updateLanguageTexts();

    languageToggle.addEventListener("click", function (event) {
        event.preventDefault();
        currentLanguage = currentLanguage === "en" ? "es" : "en";
        localStorage.setItem("language", currentLanguage);
        updateLanguageTexts();
    });
});

//document.querySelectorAll('input').forEach(input => {
//    input.addEventListener('focus', function () {
//        this.parentElement.classList.add('focused');
//    });

//    input.addEventListener('blur', function () {
//        if (!this.value) {
//            this.parentElement.classList.remove('focused');
//        }
//    });
//});

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

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = this;
    const formGroups = document.querySelectorAll('.contact-form-group');
    const submitButton = document.querySelector('.contact-submit-btn');
    const successMessage = document.getElementById("successMessage");

    console.log("Mensaje de éxito:", successMessage);

    formGroups.forEach(group => {
        group.style.display = 'none';
    });
    submitButton.style.display = 'none';

    if (successMessage) {
        successMessage.style.display = 'block';
    } else {
        console.error("No se encontró el elemento successMessage");
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

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

//document.addEventListener("DOMContentLoaded", () => {
//    gsap.from(".main-container", { opacity: 0, duration: 1, y: -50, ease: "power2.out" });
//    gsap.from(".profile-image", { opacity: 0, duration: 1, x: -50, delay: 0.3 });
//    gsap.from(".greeting, .subtitle, .description", { opacity: 0, duration: 1, x: 50, stagger: 0.2, delay: 0.5 });
//    gsap.from(".icon-card", { opacity: 0, duration: 1, scale: 0, stagger: 0.2, delay: 1 });
//});

document.addEventListener('DOMContentLoaded', function () {
    // Elementos de texto a animar
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

    // Cards y otros elementos a animar
    const cardElements = document.querySelectorAll(`
        .project-card,
        .timeline-item,
        .contact-card,
        .socialContainer
    `);

    // Aplicar clase hidden a todos los elementos seleccionados
    textElements.forEach(element => {
        element.classList.add('hidden');
    });

    cardElements.forEach(element => {
        element.classList.add('hidden');
    });

    // Crear el observador para detectar cuando los elementos son visibles
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

    // Observar todos los elementos
    textElements.forEach(element => {
        observer.observe(element);
    });

    cardElements.forEach(element => {
        observer.observe(element);
    });

    // Añadir delays especiales para los iconos de habilidades
    const socialIcons = document.querySelectorAll('.socialContainer');
    socialIcons.forEach((icon, index) => {
        icon.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
    });

    // Animación de los education cards si existen
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card, index) => {
        card.style.transitionDelay = `${0.2 + (index * 0.2)}s`;
        observer.observe(card);
    });
});

