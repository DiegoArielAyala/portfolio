let currentLang = localStorage.getItem("lang");

if (!currentLang) {
    const userLang = navigator.language || navigator.userLanguage;
    currentLang = userLang.startsWith("es") ? "es" : "en";
}

async function loadLanguage(lang) {
    try {
        const res = await fetch(`/static/lang/${lang}.json`);
        if(!res.ok) throw new Error("No se pudo cargar el archivo de idioma");
        const translations = await res.json();

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[key]) {
                el.textContent = translations[key];
            }
        });

        currentLang = lang;
        localStorage.setItem("lang", lang);

        const btn = document.getElementById("lang-toggle");
        if (btn) btn.textContent = lang.toUpperCase();
    } catch (error) {
        console.error("Error cargando idioma:", error);
    }
}

function toggleLanguage() {
    const nextLang = currentLang === "es" ? "en" : "es";
    loadLanguage(nextLang);
}

document.addEventListener("DOMContentLoaded", () => {
    loadLanguage(currentLang);

    const btn = document.getElementById("lang-toggle");
    if (btn) {
        btn.addEventListener("click", toggleLanguage);
    }
});