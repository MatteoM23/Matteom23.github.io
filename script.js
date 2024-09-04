document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    document.body.classList.add('fade-in'); // Fade-in effect on load
});

const projects = [
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
