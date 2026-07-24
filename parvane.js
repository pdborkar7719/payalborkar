// =========================
// Popup Elements
// =========================

const popup = document.getElementById("popup");
const title = document.getElementById("title");
const docs = document.getElementById("docs");
const fee = document.getElementById("fee");
const time = document.getElementById("time");

// =========================
// Open Popup
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
// Close Popup
// =========================

function closePopup(){

    popup.style.display = "none";
    document.body.style.overflow = "auto";

}

// =========================
// Outside Click Close
// =========================

popup.addEventListener("click",function(e){

    if(e.target===popup){

        closePopup();

    }

});

// =========================
// ESC Key Close
// =========================

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closePopup();

    }

});

// =========================
// Card Hover Animation
// =========================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

// =========================
// Fade In
// =========================

window.onload=()=>{

    document.body.style.opacity="1";

};

// =========================
// Ripple Effect
// =========================

const buttons=document.querySelectorAll(".card button");

buttons.forEach(btn=>{

    btn.addEventListener("click",function(){

        this.style.transform="scale(.96)";

        setTimeout(()=>{

            this.style.transform="scale(1)";

        },150);

    });

});