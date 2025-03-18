document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("background");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let lines = [];

    function createLines() {
        for (let i = 0; i < 50; i++) {
            lines.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2,
            });
        }
    }

    function animateLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "white";

        lines.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x + 20, line.y + 20);
            ctx.stroke();

            line.x += line.speedX;
            line.y += line.speedY;
        });

        requestAnimationFrame(animateLines);
    }

    createLines();
    animateLines();
});
