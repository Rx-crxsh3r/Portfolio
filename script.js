document.addEventListener("DOMContentLoaded", function () {
    /** 🎨 Background Animation **/
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    Object.assign(canvas.style, {
        position: "fixed", top: "0", left: "0", zIndex: "-1"
    });

    const ctx = canvas.getContext("2d");

    // Resize canvas to fit screen
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create 60 animated lines
    let lines = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
    }));

    function animateLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "cyan";
        ctx.globalAlpha = 0.5;

        lines.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x + 25, line.y + 25);
            ctx.stroke();

            line.x += line.speedX;
            line.y += line.speedY;

            // Reverse direction if it hits screen edges
            if (line.x < 0 || line.x > canvas.width) line.speedX *= -1;
            if (line.y < 0 || line.y > canvas.height) line.speedY *= -1;
        });

        requestAnimationFrame(animateLines);
    }

    // Adjust background opacity on scroll
    window.addEventListener("scroll", () => {
        canvas.style.opacity = Math.max(0, 1 - window.scrollY / 500);
    });

    animateLines();

    /** 📌 Smooth Scrolling for Navigation **/
    document.querySelectorAll(".navigation button").forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = button.getAttribute("onclick").match(/'([^']+)'/)[1];
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    /** 🖥️ Project Navigation **/
    const projects = [
        { title: "Chatbot AI", description: "Built an intelligent chatbot using Python & NLP.", image: "images/image1.png", link: "https://github.com/yourchatbot" },
        { title: "Data Sorting with R", description: "Data visualization and cleaning using R.", image: "images/image2.png", link: "https://github.com/datasorting" },
        { title: "Portfolio Website", description: "Personal portfolio built using HTML, CSS, and JS.", image: "images/image3.jpg", link: "https://yourportfolio.com" }
    ];

    let currentProject = 0;

    // Update project details
    function updateProject() {
        const { title, description, image, link } = projects[currentProject];
        document.getElementById("project-title").innerText = title;
        document.getElementById("project-description").innerText = description;
        document.getElementById("project-image").src = image;
        document.getElementById("project-link").href = link;
    }

    // Add event listeners for project navigation
    document.getElementById("next").addEventListener("click", () => {
        currentProject = (currentProject + 1) % projects.length;
        updateProject();
    });

    document.getElementById("prev").addEventListener("click", () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        updateProject();
    });

    updateProject(); // Load initial project details
});
