document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    document.body.classList.add('fade-in');
});

const projects = [
    {
        title: "Weather App",
        description: "A weather app that fetches live weather data from an API for any city.",
        imageUrl: "weatherporfolioimage.png",
        githubLink: "https://github.com/MatteoM23/Weatherapp"
    },
    {
        title: "Random Password Generator",
        description: "An advanced tool that generates complex passwords with a single click.",
        imageUrl: "randompasswordgenpic.png",
        githubLink: "https://github.com/MatteoM23/AdvancedPasswordGenerator"
    },
    {
        title: "Stock Analysis and News API Tool",
        description: "This tool analyzes stocks and provides a bullish, bearish, or neutral outlook with recent news articles.",
        imageUrl: "2d3dstockimage.png",
        githubLink: "https://github.com/MatteoM23/YahoofinanceDataScraper"
    },
    {
        title: "Calculator",
        description: "A simple calculator designed using Python.",
        imageUrl: "calculator.png",
        githubLink: "https://github.com/example/project2"
    }
    // Add more projects as needed
];

function loadProjects() {
    const container = document.querySelector('.portfolio-grid');
    if (container) {
        projects.forEach(project => {
            const projectElement = createProjectElement(project);
            container.appendChild(projectElement);
        });
    }
}

function createProjectElement(project) {
    const projectCard = document.createElement('article');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <div class="project-info">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    `;
    return projectCard;
}

// Dynamically set the current year in the footer
document.getElementById('dynamicYear').textContent = new Date().getFullYear();
