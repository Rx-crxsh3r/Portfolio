document.addEventListener("DOMContentLoaded", function () {
    /** 🎨 Background Animation **/
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.id = "background";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    
    const ctx = canvas.getContext("2d");
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lines = [];
    for (let i = 0; i < 60; i++) {
        lines.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
        });
    }

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

            if (line.x < 0 || line.x > canvas.width) line.speedX *= -1;
            if (line.y < 0 || line.y > canvas.height) line.speedY *= -1;
        });

        requestAnimationFrame(animateLines);
    }

    window.addEventListener("scroll", () => {
        canvas.style.opacity = Math.max(0, 1 - window.scrollY / 500);
    });

    animateLines();

    /** 📌 Smooth Scrolling for Navigation **/
    document.querySelectorAll(".navigation button").forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = button.getAttribute("onclick").replace("navigateTo('", "").replace("')", "");
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    /** 🖥️ Project Navigation **/
    const projects = [
        { 
            title: "Chatbot AI", 
            description: "Built an intelligent chatbot using Python & NLP.", 
            image: "images/image1.png",
            link: "https://github.com/yourchatbot"
        },
        { 
            title: "Data Sorting with R", 
            description: "Data visualization and cleaning using R.", 
            image: "images/image2.jpg",
            link: "https://github.com/datasorting"
        },
        { 
            title: "Portfolio Website", 
            description: "Personal portfolio built using HTML, CSS, and JS.", 
            image: "images/image3.jpg",
            link: "https://yourportfolio.com"
        }
    ];

    let currentProject = 0;

    function updateProject() {
        document.getElementById("project-title").innerText = projects[currentProject].title;
        document.getElementById("project-description").innerText = projects[currentProject].description;
        document.getElementById("project-image").src = projects[currentProject].image;
        document.getElementById("project-link").href = projects[currentProject].link;
    }

    document.getElementById("next").addEventListener("click", function () {
        currentProject = (currentProject + 1) % projects.length;
        updateProject();
    });

    document.getElementById("prev").addEventListener("click", function () {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        updateProject();
    });

    updateProject();
});
