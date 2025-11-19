// Portfolio Data - All content separated from structure
const portfolioData = {
    name: "Riyadh Hadjba",
    title: "Étudiant en Histoire de l'Art",
    about: "Étudiant passionné en 3ème année de licence d'histoire de l'art à la Faculté des Sciences Historiques de Strasbourg. Je me consacre à l'étude et à la valorisation du patrimoine artistique, combinant mes compétences en médiation culturelle avec une approche moderne de la conservation. Bilingue français-anglais et compétent en programmation Python, je cherche à créer des ponts entre l'art traditionnel et les technologies contemporaines.",
    
    contact: [
        { type: "email", label: "riyadhhadjba@gmail.com", url: "mailto:riyadhhadjba@gmail.com" },
        { type: "phone", label: "07 68 74 78 96", url: "tel:+33768747896" }
    ],
    
    experience: [
        {
            title: "Téléconseiller pour les Services Étudiants",
            company: "Centre régional des œuvres universitaires et scolaires",
            logo: "Logo/logo-crous.png",
            website: "https://www.crous-strasbourg.fr/",
            date: "Mars 2024 - Présent",
            description: "Prise en charge d'une cinquantaine d'appels par jour. Assistance et guidance des étudiants pour les bourses sur critères sociaux, le logement et autres sujets. Assimilation rapide d'une circulaire complexe et résolution efficace des problématiques étudiantes."
        },
        {
            title: "Ludothécaire",
            company: "Ludothèque Saint-Nicolas",
            logo: "Logo/ludotheque.png",
            website: "https://www.nancy.fr/culture/bibliotheques-mediatheques-de-nancy/ludotheque-saint-nicolas",
            date: "Juillet 2023 - Août 2023", 
            description: "Accueil de 80 visiteurs par jour en moyenne. Introduction variée à des jeux de société dans une collection de plus de 20 000 jeux. Médiation culturelle et animation auprès d'un public diversifié."
        },
        {
            title: "Bénévole polyvalent",
            company: "Musée Adolf Michaelis",
            logo: "Logo/musee_adolf_michaelis.png",
            website: "https://amamstrasbourg.org/",
            date: "Mars 2023 - Présent",
            description: "Accueil des visiteurs, orientation dans les expositions et assistance lors d'événements spéciaux. Contribution active à la vie culturelle du musée et à la médiation du patrimoine artistique."
        }
    ],
    
    education: [
        {
            degree: "Licence d'Histoire de l'Art (L3)",
            school: "Faculté des Sciences Historiques de Strasbourg",
            date: "En cours"
        },
        {
            degree: "Licence d'Histoire de l'Art (L2)",
            school: "Faculté des Sciences Historiques",
            date: "2023"
        },
        {
            degree: "Baccalauréat général option Mathématique et Physique-Chimie",
            school: "Lycée Henri Loritz",
            date: "2022"
        }
    ],
    
    projects: [
        {
            title: "Mon Portfolio",
            description: "Ce site web que vous consultez actuellement, développé avec HTML, CSS et JavaScript pour présenter mon parcours en histoire de l'art.",
            link: "#",
            linkText: "Vous y êtes !"
        }
    ]
};

// DOM Rendering Functions
function renderHeader() {
    document.getElementById('name').textContent = portfolioData.name;
    document.getElementById('title').textContent = portfolioData.title;
    
    const contactLinks = document.getElementById('contactLinks');
    portfolioData.contact.forEach(contact => {
        const link = document.createElement('a');
        link.href = contact.url;
        link.textContent = contact.label;
        link.className = 'contact-link';
        contactLinks.appendChild(link);
    });
}

function renderAbout() {
    document.getElementById('about').textContent = portfolioData.about;
}

function renderExperience() {
    const timeline = document.getElementById('experience');
    
    portfolioData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        item.innerHTML = `
            <a href="${exp.website}" target="_blank" class="timeline-logo">
                <img src="${exp.logo}" alt="Logo ${exp.company}">
            </a>
            <div class="timeline-content">
                <div class="timeline-date">${exp.date}</div>
                <h3 class="timeline-title">${exp.title}</h3>
                <div class="timeline-company">${exp.company}</div>
                <p class="timeline-description">${exp.description}</p>
            </div>
        `;
        
        timeline.appendChild(item);
    });
}

function renderEducation() {
    const educationList = document.getElementById('education');
    
    portfolioData.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'education-item';
        
        item.innerHTML = `
            <h3 class="education-degree">${edu.degree}</h3>
            <div class="education-school">${edu.school}</div>
            <div class="education-date">${edu.date}</div>
        `;
        
        educationList.appendChild(item);
    });
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects');
    
    portfolioData.projects.forEach(project => {
        const card = document.createElement('a');
        card.href = project.link;
        card.className = 'project-card';
        card.target = project.link.startsWith('http') ? '_blank' : '_self';
        
        card.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-link">
                ${project.linkText} →
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

function renderFooter() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Initialize the portfolio
function initPortfolio() {
    renderHeader();
    renderAbout();
    renderExperience();
    renderEducation();
    renderProjects();
    renderFooter();
}

// Start the application
document.addEventListener('DOMContentLoaded', initPortfolio);