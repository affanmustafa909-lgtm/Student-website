// reveat scrool animation

function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight - 120;

        if (rect < windowHeight) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);