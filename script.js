document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    document.body.classList.add('fade-in');
});

const projects = [
    {
        title: "Weather App",
        description: "Fetches live weather data from an API for any city.",
        imageUrl: "weatherporfolioimage.png",
        githubLink: "https://github.com/MatteoM23/Weatherapp"
    },
    {
        title: "Random Password Generator",
        description: "Generates complex passwords with a single click.",
        imageUrl: "randompasswordgenpic.png",
        githubLink: "https://github.com/MatteoM23/AdvancedPasswordGenerator"
    },
    {
        title: "Stock Analysis and News API Tool",
        description: "Analyzes stocks and provides outlooks with news articles.",
        imageUrl: "2d3dstockimage.png",
        githubLink: "https://github.com/MatteoM23/YahoofinanceDataScraper"
    },
    {
        title: "Calculator",
        description: "A simple Python-based calculator.",
        imageUrl: "calculator.png",
        githubLink: "https://github.com/example/project2"
    },
    {
        title: "Todo List App",
        description: "A simple app to manage daily tasks.",
        imageUrl: "todoapp.png",
        githubLink: "https://github.com/example/todolist"
    },
    {
        title: "Blog Platform",
        description: "A personal blogging platform with basic CRUD operations.",
        imageUrl: "blog.png",
        githubLink: "https://github.com/example/blog-platform"
    },
    {
        title: "Image Gallery",
        description: "A responsive gallery for displaying images.",
        imageUrl: "gallery.png",
        githubLink: "https://github.com/example/image-gallery"
    },
    {
        title: "Chat Application",
        description: "Real-time messaging app using WebSocket.",
        imageUrl: "chat.png",
        githubLink: "https://github.com/example/chat-app"
    },
    {
        title: "E-commerce Site",
        description: "A mock e-commerce site with a shopping cart.",
        imageUrl: "ecommerce.png",
        githubLink: "https://github.com/example/ecommerce-site"
    },
    {
        title: "Game of Life",
        description: "Implementation of Conway's Game of Life.",
        imageUrl: "gameoflife.png",
        githubLink: "https://github.com/example/game-of-life"
    }
];

function loadProjects() {
    const container = document.querySelector('.project-grid');
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

// Set dynamic year in footer
document.getElementById('dynamicYear').textContent = new Date().getFullYear();
