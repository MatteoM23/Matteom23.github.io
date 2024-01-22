document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    document.body.classList.add('fade-in');
});


let projects = [
    {
        title: "Stock Analysis and News API Tool",
        description: "This analyzes stocks to give a bullish, bearish, or neutral position and shows recent news articles about the designated ticker.",
        imageUrl: "2d3dstockimage.png",
        githubLink: "https://github.com/example/project1"
    },
    {
        title: "Calculator",
        description: "This is a basic calculator I designed using the python coding language.",
        imageUrl: "calculator.png",
        githubLink: "https://github.com/example/project2"
    },
    // ... other projects ...
];

function loadProjects() {
    const container = document.getElementById('project-container');
    if (container) {
        projects.forEach(project => {
            container.appendChild(createProjectElement(project));
        });
    }
}

function createProjectElement(project) {
    const element = document.createElement('div');
    element.className = 'project';
    const titleClass = project.title.length > 25 ? 'title-long' : 'title-short';
    element.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <div class="project-info">
            <h2 class="${titleClass}">${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    `;
    return element;
}


function truncateTitle(title, maxLength = 25) {
    if (title.length > maxLength) {
        const truncated = title.substring(0, maxLength) + '...';
        console.log(`Truncated title: ${truncated}`); // Debugging
        return truncated;
    }
    return title;
}