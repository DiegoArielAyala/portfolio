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

const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("formStatus")

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    statusDiv.textContent = "Enviando...";
    statusDiv.style.display = "block";
    statusDiv.style.background = "#f0f0f0";

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action || window.location.href, {
            method: "POST",
            body: formData,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            },
        });

        if (response.ok) {
            statusDiv.textContent = "¡Gracias por tu mensaje! Me pondré en contacto contigo a la brevedad."
        } else {
            statusDiv.textContent = "Ocurrió un error al enviar el mensaje.";
            statusDiv.style.background = "#f8d7da";
        }
    } catch (error) {
        statusDiv.textContent = "Error de red o del servidor.";
        statusDiv.style.background = "#f8d7da";
    }
});


function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message
}