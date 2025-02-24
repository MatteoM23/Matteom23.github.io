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
        title: "A Calculator",
        description: "A simple Python-based calculator.",
        imageUrl: "calculator.png",
        githubLink: "https://github.com/MatteoM23/simplepythoncalculator",
        liveSiteLink: "https://matteom23.github.io/simplepythoncalculator/"
    },
    {
        title: "Todo List App",
        description: "A simple app to manage daily tasks.",
        imageUrl: "blog.png",
        githubLink: "https://github.com/MatteoM23/Todo-List-App/tree/main",
        liveSiteLink: "https://matteom23.github.io/Todo-List-App/"
    },
    {
        title: "Blog Platform",
        description: "A personal blogging platform with basic CRUD operations.",
        imageUrl: "image6.png",
        githubLink: "https://github.com/MatteoM23/blog",
        liveSiteLink: "https://matteom23.github.io/blog/"
    },
    {
        title: "Chat Application",
        description: "Real-time messaging app using WebSocket.",
        imageUrl: "image7.png",
        githubLink: "https://github.com/MatteoM23/realtimechatapp"
    },
    {
        title: "E-commerce Site",
        description: "A mock e-commerce site with a shopping cart.",
        imageUrl: "ecommerce.png",
        githubLink: "https://github.com/example/ecommerce-site",
        liveSiteLink: "https://matteom23.github.io/mockeccommercesiteexample/"
    }
];

function loadProjects() {
    const container = document.querySelector('.project-grid');
    if (container) {
        projects.forEach(project => {
            const projectElement = createProjectElement(project);
            container.appendChild(projectElement);
        });
    } else {
        console.error('Project grid container not found. Ensure projects.html includes a .project-grid div.');
    }
}

function createProjectElement(project) {
    const projectCard = document.createElement('article');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found';">
        <div class="project-info">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="project-buttons">
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="github-btn">View on GitHub</a>
                ${project.liveSiteLink ? `<a href="${project.liveSiteLink}" target="_blank" rel="noopener noreferrer" class="live-site-btn">View Live Site</a>` : ''}
            </div>
        </div>
    `;
    return projectCard;
}

// Set dynamic year in footer
document.getElementById('dynamicYear').textContent = new Date().getFullYear();
