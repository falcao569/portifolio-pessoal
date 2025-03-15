document.addEventListener("DOMContentLoaded", () => {
    // Efeito de rolagem suave para os links do menu
    document.querySelectorAll(".nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animação de entrada nos elementos conforme aparecem na tela
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".feature-item, .step").forEach(element => {
        observer.observe(element);
    });

    // Efeito de hover nos botões
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
            button.style.transition = "transform 0.3s";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });
});
