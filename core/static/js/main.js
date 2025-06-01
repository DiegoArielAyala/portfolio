document.querySelectorAll(".navbar-nav .nav-item .menu-link").forEach(link => {
    link.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});

document.querySelector("html").addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
        bsCollapse.hide();
    }
});