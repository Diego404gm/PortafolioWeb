
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
            // Sección inicio
            about: "About",
            studies: "Studies",
            experience: "Experience",
            contact: "Contact",
            greeting: "Hello, <span class='name'>I am Diego</span>",
            subtitle: "Web Developer",
            description: "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.",
            aboutme: "About Me",
            knowledge: "Knowledge",          
            knowledgeDetails1: "Web Development: Experience in Full Stack development using JavaScript for frontend interactivity and C# / .NET Core MVC for backend business logic. Proficiency in HTML and CSS for structuring and designing responsive web interfaces.",
            knowledgeDetails2: "Databases and Data Analysis: Knowledge of SQL Server and Oracle for database creation and management. Experience in Power BI for creating interactive dashboards and in Excel for data analysis and automation.",
            knowledgeDetails3: "Tools and Technologies: Use of DataTables and SweetAlert for dynamic data management and interactive validations, AJAX for handling asynchronous requests, and GitHub for version control and collaborative project management.",  

            // Sección know me
            contentKnowme: "Get to know me",
            contentSkills: "My Skills",
            contentDetails1: "I'm passionate about web development, both Front-End and Back-End, which allows me to build complete and functional applications from scratch.I enjoy facing challenges, learning new technologies, and improving my skills every day. I like working on projects that are not only functional but also visually appealing and accessible to users.",
            contentDetails2: "I have worked with technologies such as JavaScript, HTML, CSS, .NET Core, and SQL, developing applications with user authentication, structured databases, and interactive validations.",
            contentDetails3: "Beyond programming, I enjoy learning new technologies and taking on challenges, always striving to improve my skills and stay up to date in the web development world. I am passionate about problem-solving and optimizing processes to enhance both user experience and code efficiency.",            
            // Sección studies
            studiesTitle: "STUDIES",
            university: "Universidad Autónoma de Nuevo León",
            date: "2020 - 2024",
            faculty: "FACPYA Facultad de Contaduría Pública y Administración",
            career: "Licenciatura en Tecnologías de la Información",
            descriptionStudies: "During my studies in the field of Information Technology, I acquired knowledge in software development, databases, cybersecurity, and technology project management.",

            // Sección experience
            experienceTitle: "Experience",
            /*company: "Experience",*/
            position: "Technologies",
            startDate: "Date",
            /*endDate: "End Date",*/
            jobDescription: "I developed an interactive web portfolio with advanced features such as language switching (English/Spanish) and dark mode. I implemented a responsive and dynamic design using JavaScript for real-time translation and theme customization, improving accessibility and user experience.",

            // Sección contacto
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
            knowledgeDetails1: "Desarrollo Web: Experiencia en desarrollo Full Stack utilizando JavaScript para la interactividad en el frontend y C# / .NET Core MVC para la lógica de negocio en el backend. Dominio de HTML y CSS para la estructuración y diseño de interfaces web responsivas.",
            knowledgeDetails2: "Bases de Datos y Análisis de Datos: Manejo de SQL Server y Oracle para la creación y administración de bases de datos. Experiencia en Power BI para la creación de dashboards interactivos y en Excel para el análisis y automatización de datos.",
            knowledgeDetails3: " Herramientas y Tecnologías: Uso de DataTables y SweetAlert para la gestión de datos dinámicos y validaciones interactivas, AJAX para el manejo de solicitudes asíncronas y GitHub para el control de versiones y gestión de proyectos colaborativos.",


            
            contentKnowme: "Conóceme",
            contentSkills: "Mis Habilidades",
            contentDetails1: "Soy un apasionado del desarrollo web, tanto en el Front-End como en el Back-End, me gusta enfrentar desafíos, aprender nuevas tecnologías y mejorar mis habilidades cada día. Disfruto trabajar en proyectos que no solo sean funcionales, sino también atractivos y accesibles para los usuarios.",
            contentDetails2: "He trabajado con tecnologías como JavaScript, HTML, CSS, .NET Core y SQL, desarrollando aplicaciones con autenticación de usuarios, bases de datos estructuradas y validaciones interactivas.",
            contentDetails3: "Además de la programación, disfruto aprender nuevas tecnologías y enfrentar desafíos, siempre buscando mejorar mis habilidades y mantenerme actualizado en el mundo del desarrollo web. Me gusta la resolución de problemas y optimización de procesos para mejorar la experiencia del usuario y la eficiencia del código.",

            
            studiesTitle: "ESTUDIOS",
            university: "Universidad Autónoma de Nuevo León",
            date: "2020 - 2024",
            faculty: "FACPYA Facultad de Contaduría Pública y Administración",
            career: "Licenciatura en Tecnologías de la Información",
            descriptionStudies: "Durante mi formación en la carrera de Tecnologías de la Información, adquirí conocimientos en desarrollo de software, bases de datos, seguridad informática y gestión de proyectos tecnológicos.",

            
            experienceTitle: "Experiencia",
            /*company: "Empresa",*/
            position: "Tecnologias ",
            startDate: "Fecha",
            /*endDate: "Fecha Fin",*/
            jobDescription: "Desarrollé un portafolio web interactivo con funcionalidades avanzadas como cambio de idioma (en/es) y modo oscuro. Implementé un diseño responsivo y dinámico utilizando JavaScript para la traducción en tiempo real y la personalización del tema, mejorando la accesibilidad y experiencia del usuario. ",

              
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
        
        
        document.querySelector(".content-subtitle p").textContent = translations[currentLanguage].description;
        document.querySelector(".content-knowme").textContent = translations[currentLanguage].contentKnowme;
        document.querySelector(".content-skills").textContent = translations[currentLanguage].contentSkills;

        
        const contentDetailsInfo = document.querySelectorAll(".content-details-info");
        contentDetailsInfo[0].textContent = translations[currentLanguage].contentDetails1;
        contentDetailsInfo[1].textContent = translations[currentLanguage].contentDetails2;
        contentDetailsInfo[2].textContent = translations[currentLanguage].contentDetails3;

        const contentDetailsInfo2 = document.querySelectorAll(".content-details-info3");
        contentDetailsInfo2[0].textContent = translations[currentLanguage].knowledgeDetails1;
        contentDetailsInfo2[1].textContent = translations[currentLanguage].knowledgeDetails2;
        contentDetailsInfo2[2].textContent = translations[currentLanguage].knowledgeDetails3;

    
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
        
        if (labels.length >= 3) { 
            labels[0].textContent = translations[currentLanguage].fullName;
            labels[1].textContent = translations[currentLanguage].email;
            labels[2].textContent = translations[currentLanguage].messageLabel;
        }
        
  
        const cardFronts = document.querySelectorAll(".card-front");
        cardFronts.forEach(card => {
            const companyTitle = card.querySelector("h3");
            const positionElement = card.querySelectorAll("p")[0];
            const startDateElement = card.querySelectorAll("p")[1];
            

            if (companyTitle.textContent === "Empresa" || companyTitle.textContent === "Company") {
                companyTitle.textContent = translations[currentLanguage].company;
            }

            if (positionElement) {
                const positionStrong = positionElement.querySelector("strong");
                if (positionStrong) {
                    positionStrong.textContent = translations[currentLanguage].position + ":HTML, CSS, JavaScript, .NET Core";
                }
            }

            if (startDateElement) {
                const startDateStrong = startDateElement.querySelector("strong");
                if (startDateStrong) {
                    startDateStrong.textContent = translations[currentLanguage].startDate + ":10/03/2025";
                }
            }

          
        });

       
        const cardBacks = document.querySelectorAll(".card-back");
        cardBacks.forEach(card => {
            const descriptionElement = card.querySelector("p");
            if (descriptionElement) {
                const descriptionStrong = descriptionElement.querySelector("strong");
                if (descriptionStrong) {
                    descriptionStrong.textContent = translations[currentLanguage].jobDescription + "";
                }
            }
        });


        
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

