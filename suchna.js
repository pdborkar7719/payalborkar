// ===============================
// Search Notice
// ===============================

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// ===============================
// Notice Details
// ===============================

const noticeData = [

{
title:"ग्रामसभा बैठक",
text:"📍 ठिकाण : ग्रामपंचायत कार्यालय\n\n📅 दिनांक : 25 जुलै 2026\n\n🕚 वेळ : सकाळी 11:00\n\nसर्व ग्रामस्थांनी उपस्थित राहावे."
},

{
title:"पाणी पुरवठा",
text:"💧 देखभाल कामामुळे सकाळी 8 ते दुपारी 2 पर्यंत पाणीपुरवठा बंद राहील."
},

{
title:"रस्ता दुरुस्ती",
text:"🛣️ मुख्य रस्त्यावर काँक्रिटीकरणाचे काम सुरू आहे.\nवाहतूक पर्यायी मार्गाने वळविण्यात आली आहे."
},

{
title:"वृक्षारोपण",
text:"🌳 ग्रामपंचायत परिसरात वृक्षारोपण मोहीम आयोजित करण्यात आली आहे."
},

{
title:"स्वच्छता अभियान",
text:"🧹 रविवारी सकाळी 8 वाजता गाव स्वच्छता अभियान राबविण्यात येणार आहे."
},

{
title:"कर भरणा",
text:"💰 सर्व नागरिकांनी घरपट्टी व पाणीपट्टी नियोजित तारखेपूर्वी भरावी."
}

];


// ===============================
// More Details Popup (Alert Demo)
// ===============================

const readButtons = document.querySelectorAll(".buttons button:first-child");

readButtons.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

alert(

noticeData[index].title +

"\n\n" +

noticeData[index].text

);

});

});


// ===============================
// PDF Button
// ===============================

const pdfButtons=document.querySelectorAll(".pdf");

pdfButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("📄 Demo PDF Download");

});

});


// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".box h2");

counters.forEach(counter=>{

const target=+counter.innerText;

let count=0;

counter.innerText="0";

const update=()=>{

if(count<target){

count++;

counter.innerText=count;

setTimeout(update,50);

}

};

update();

});


// ===============================
// Card Animation
// ===============================

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*180);

});


// ===============================
// Hover Effect
// ===============================

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ===============================
// Back Button Effect
// ===============================

const back=document.querySelector(".back-btn");

back.addEventListener("mouseenter",()=>{

back.style.background="#ff007f";
back.style.color="#fff";

});

back.addEventListener("mouseleave",()=>{

back.style.background="#ececec";
back.style.color="#000";

});


// ===============================
// Page Loaded
// ===============================

window.onload=()=>{

console.log("Suchna Page Loaded Successfully.");

};