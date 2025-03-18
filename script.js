document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("background");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let lines = [];
    for (let i = 0; i < 50; i++) {
        lines.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speedX: (Math.random() - 0.5) * 1.5,
            speedY: (Math.random() - 0.5) * 1.5,
        });
    }

    function animateLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "white";
        ctx.globalAlpha = 0.7;

        lines.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x + 20, line.y + 20);
            ctx.stroke();
        });

        requestAnimationFrame(animateLines);
    }

    window.addEventListener("scroll", () => {
        lines.forEach(line => {
            line.x += line.speedX * 1.5;
            line.y += line.speedY * 1.5;
        });

        if (window.scrollY > 300) {
            canvas.style.opacity = Math.max(0, 1 - window.scrollY / 500);
        }
    });

    animateLines();
});

/* Project Navigation */
const projects = [
    { title: "Chatbot AI", description: "Built an intelligent chatbot using Python & NLP.", image: "images/image1.jpg" },
    { title: "Data Sorting with R", description: "Data visualization and cleaning using R.", image: "images/image2.jpg" },
    { title: "Portfolio Website", description: "Personal portfolio built using HTML, CSS, and JS.", image: "images/image3.jpg" }
];

let currentProject = 0;

function updateProject() {
    document.getElementById("project-title").innerText = projects[currentProject].title;
    document.getElementById("project-description").innerText = projects[currentProject].description;
    document.getElementById("project-image").src = projects[currentProject].image;
}

function nextProject() {
    currentProject = (currentProject + 1) % projects.length;
    updateProject();
}

function prevProject() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    updateProject();
}

updateProject();
