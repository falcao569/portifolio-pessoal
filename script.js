document.addEventListener("DOMContentLoaded", function() {
    // Rolagem suave ao clicar nos links do menu
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Efeito de destaque na seção ativa
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                document.querySelector("nav ul li a[href='#" + section.id + "']").classList.add("active");
            } else {
                document.querySelector("nav ul li a[href='#" + section.id + "']").classList.remove("active");
            }
        });
    });
});
