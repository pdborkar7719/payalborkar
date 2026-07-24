// Popup Elements
const popup = document.getElementById("popup");
const title = document.getElementById("title");
const docs = document.getElementById("docs");
const fee = document.getElementById("fee");
const time = document.getElementById("time");

// Popup Open Function
function openPopup(certificateTitle, documents, charges, duration){

    title.innerHTML = certificateTitle;
    docs.innerHTML = documents;
    fee.innerHTML = charges;
    time.innerHTML = duration;

    popup.style.display = "flex";

    document.body.style.overflow = "hidden";

}

// Popup Close Function
function closePopup(){

    popup.style.display = "none";

    document.body.style.overflow = "auto";

}

// Click Outside Popup
popup.addEventListener("click", function(e){

    if(e.target === popup){

        closePopup();

    }

});

// ESC Key Close
document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closePopup();

    }

});

// Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// Smooth Fade In
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});