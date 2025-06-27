document.addEventListener("DOMContentLoaded", function () {
    /** 🍔 Hamburger Menu Logic **/
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");
    const navLinks = document.querySelectorAll(".navigation a");

    menuBtn.addEventListener("click", () => {
        navigation.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
        });
    });

    /** 🎨 Background Animation **/
    const canvas = document.getElementById("background");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lines = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
    }));

    function animateLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "rgba(0, 255, 255, 0.5)";
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
    animateLines();
    
    window.addEventListener("scroll", () => {
        canvas.style.opacity = Math.max(0, 1 - window.scrollY / 500);
    });

    /** 📌 Smooth Scrolling **/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /** 🖥️ Project Navigation **/
    const projects = [
        {
            title: "Portfolio Website",
            description: "Developed a personal portfolio website using HTML, CSS, and JavaScript, featuring clean aesthetics and smooth animations to showcase projects and skills. ",
            image: "images/Portfolio.gif",
            link: "https://github.com/Rx-crxsh3r/Portfolio"
        },
        {
            title: "Procurement Order Tracking System (POTS)",
            description: "Led the development of the Inventory Manager module for a comprehensive procurement automation system in Java. The system features real-time stock monitoring and low-stock alerts. ",
            image: "images/pots-proj.gif",
            link: "https://github.com/Rx-crxsh3r/POTS-College"
        },
        {
            title: "Interactive Drawing Classifier - ML-Powered Shape Recognition Tool",
            description: "A Python GUI application that allows users to draw shapes on a canvas and trains machine learning models to classify drawings into three user-defined categories (like circle, square, triangle). The app includes features for saving training data, switching between different ML algorithms, and predicting the class of new drawings.",
            image: "images/ML-Drawer.gif",
            link: "https://github.com/Rx-crxsh3r/ML-PY-drawing"
        }
    ];

    let currentProject = 0;
    const projectTitle = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description");
    const projectImage = document.getElementById("project-image");
    const projectLink = document.getElementById("project-link");

    function updateProject() {
        if (!projects.length) return;
        const { title, description, image, link } = projects[currentProject];
        projectTitle.innerText = title;
        projectDescription.innerText = description;
        projectImage.src = image;
        projectLink.href = link;
    }

    document.getElementById("next").addEventListener("click", () => {
        currentProject = (currentProject + 1) % projects.length;
        updateProject();
    });

    document.getElementById("prev").addEventListener("click", () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        updateProject();
    });

    updateProject();
});