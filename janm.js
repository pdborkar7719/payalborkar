// =========================
// Elements
// =========================

const popup = document.getElementById("popup");
const title = document.getElementById("title");
const docs = document.getElementById("docs");
const fee = document.getElementById("fee");
const time = document.getElementById("time");

// =========================
// Popup Open
// =========================

function openPopup(service, documents, charges, duration){

    title.innerHTML = service;
    docs.innerHTML = documents;
    fee.innerHTML = charges;
    time.innerHTML = duration;

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";

}

// =========================
// Popup Close
// =========================

function closePopup(){

    popup.style.display = "none";
    document.body.style.overflow = "auto";

}

// =========================
// Close Popup Outside Click
// =========================

popup.addEventListener("click", function(e){

    if(e.target === popup){

        closePopup();

    }

});

// =========================
// ESC Key Close
// =========================

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closePopup();

    }

});

// =========================
// Card Hover Animation
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";
        card.style.transition=".3s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// =========================
// Button Click Animation
// =========================

const buttons = document.querySelectorAll(".card button");

buttons.forEach(btn=>{

    btn.addEventListener("click",function(){

        this.style.transform="scale(.96)";

        setTimeout(()=>{

            this.style.transform="scale(1)";

        },150);

    });

});

// =========================
// Fade Animation
// =========================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});