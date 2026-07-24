// =============================
// Development Works - JS
// =============================

// Progress Bar Animation
window.addEventListener("load", () => {

    const bars = document.querySelectorAll(".bar");

    bars.forEach(bar => {

        const target = bar.style.width;

        bar.style.width = "0%";

        setTimeout(() => {

            bar.style.width = target;

            bar.style.transition = "2s ease";

        }, 300);

    });

});


// =============================
// Counter Animation
// =============================

const counters = document.querySelectorAll(".summary-box h3");

const speed = 50;

counters.forEach(counter => {

    const target = Number(counter.innerText);

    let count = 0;

    counter.innerText = "0";

    const update = () => {

        if(count < target){

            count++;

            counter.innerText = count;

            setTimeout(update, speed);

        }

    };

    update();

});


// =============================
// Card Hover Effect
// =============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


// =============================
// Popup Data
// =============================

const workDetails = [

{
title:"रस्ता काँक्रिटीकरण",
text:"📍 मुख्य रस्ता\n\n💰 खर्च : ₹12,50,000\n👷 ठेकेदार : ABC Construction\n📅 सुरूवात : 01/07/2026\n\nस्थिती : 80% पूर्ण."
},

{
title:"पाणी टाकी",
text:"📍 वार्ड २\n\n💰 खर्च : ₹8,00,000\n📅 पूर्ण झालेले काम.\n\nस्थिती : 100% पूर्ण."
},

{
title:"LED स्ट्रीट लाईट",
text:"📍 वार्ड ५\n\n💡 नवीन LED लाईट बसविण्याचे काम सुरू आहे.\n\nस्थिती : 60% पूर्ण."
},

{
title:"वृक्षारोपण",
text:"🌳 ५०० झाडे लावण्यात आली आहेत.\n\nस्थिती : पूर्ण."
},

{
title:"शाळा दुरुस्ती",
text:"🏫 वर्गखोल्या व छत दुरुस्तीचे काम सुरू.\n\nस्थिती : 45%."
},

{
title:"ग्रामपंचायत कार्यालय",
text:"🏛️ कार्यालयाचे नूतनीकरण सुरू.\n\nस्थिती : 70% पूर्ण."
}

];


// =============================
// Popup
// =============================

const buttons = document.querySelectorAll(".card button");

buttons.forEach((btn,index)=>{

    btn.addEventListener("click",()=>{

        alert(
workDetails[index].title +

"\n\n" +

workDetails[index].text
);

    });

});


// =============================
// Smooth Fade
// =============================

document.body.style.opacity="0";

window.onload=()=>{

document.body.style.transition=".6s";

document.body.style.opacity="1";

};


// =============================
// Ripple Effect
// =============================

buttons.forEach(btn=>{

btn.addEventListener("click",function(){

this.style.transform="scale(.95)";

setTimeout(()=>{

this.style.transform="scale(1)";

},150);

});

});


// =============================
// Back Button Effect
// =============================

const back=document.querySelector(".back-btn");

back.addEventListener("mouseenter",()=>{

back.style.background="#ff007f";
back.style.color="#fff";

});

back.addEventListener("mouseleave",()=>{

back.style.background="#ececec";
back.style.color="#000";

});