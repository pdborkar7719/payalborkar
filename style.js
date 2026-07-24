let deferredPrompt;

window.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("installPopup");
    const installBtn = document.getElementById("installBtn");

    window.addEventListener("beforeinstallprompt", (e) => {

        e.preventDefault();

        deferredPrompt = e;

        popup.style.display = "flex";

    });

    installBtn.addEventListener("click", async () => {

        if (!deferredPrompt) {
            alert("Install option is not available yet.");
            return;
        }

        popup.style.display = "none";

        deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;

        console.log("User choice:", outcome);

        deferredPrompt = null;

    });

});
window.addEventListener("load", () => {
    console.log("loaded");

    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log("Already installed");
    } else {
        console.log("Not installed");
    }
});