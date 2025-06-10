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

/* 

const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("toast")

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
            const json = await response.json();
            statusDiv.textContent = "¡Gracias por tu mensaje! Me pondré en contacto contigo a la brevedad.";
            statusDiv.style.background = "#d4edda";
            form.reset();
            showToast("Mensaje enviado correctamente.");
        } else {
            statusDiv.textContent = "Ocurrió un error al enviar el mensaje.";
        statusDiv.style.background = "#f8d7da";
        showToast("Error al enviar el mensaje.");
    }
} catch (error) {
    statusDiv.textContent = "Error de red o del servidor.";
    statusDiv.style.background = "#f8d7da";
    showToast("Error de red o del servidor.");
}
});


function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
}

const form = document.getElementById("contactForm");

function createToast(message, type = "success") {
    const icons = {
        success: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/></svg>`,
        danger: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414Z"/></svg>`,
        loading: `<svg class="w-5 h-5 animate-spin" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="white" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>`
    };
    
    const colors = {
        success: "text-green-500 bg-white dark:bg-gray-800",
        danger: "text-red-500 bg-white dark:bg-gray-800",
        loading: "text-blue-500 bg-white dark:bg-gray-800"
    };
    
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `flex items-center max-w-xs p-4 text-sm rounded-lg shadow-sm ${colors[type]}`;
    toast.innerHTML = `
    <div class="inline-flex items-center justify-center w-8 h-8 mr-3">${icons[type]}</div>
    <span class="text-sm font-medium text-gray-700 dark:text-gray-200">${message}</span>
    `;

    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add("opacity-0", "transition-opacity", "duration-500");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    
    createToast("Enviando mensaje...", "loading");
    
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
            form.reset();
            createToast("¡Mensaje enviado con éxito!", "success");
        } else {
            createToast("Error al enviar el mensaje.", "danger");
    }
} catch (error) {
    createToast("Error de red o del servidor.", "danger");
}
});

*/

// Toast con bootstrap
function createBootstrapToast(message, type = "success") {
  const toastContainer = document.getElementById("toast-container");

  const toastEl = document.createElement("div");
  toastEl.className = `toast align-items-center text-bg-${type} border-0`;
  toastEl.setAttribute("role", "alert");
  toastEl.setAttribute("aria-live", "assertive");
  toastEl.setAttribute("aria-atomic", "true");

  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  toastContainer.appendChild(toastEl);

  // Inicializa el toast con Bootstrap JS
  const toast = new bootstrap.Toast(toastEl);
  toast.show();

  // Elimina el toast del DOM cuando se oculta
  toastEl.addEventListener('hidden.bs.toast', () => {
    toastEl.remove();
  });
}


const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  createBootstrapToast("Enviando mensaje...", "info");

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
      form.reset();
      createBootstrapToast("¡Mensaje enviado con éxito!", "success");
    } else {
      createBootstrapToast("Error al enviar el mensaje.", "danger");
    }
  } catch (error) {
    createBootstrapToast("Error de red o del servidor.", "danger");
  }
});

// Configuracion AOS
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 500,
        once: true,
        easing: "ease-in-out",
    });
});

// Animación de los link del menu al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".menu-link");

    function onScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 300;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active-link");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active-link");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", onScroll);
});
