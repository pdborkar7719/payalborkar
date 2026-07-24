// ==========================
// Today's Date
// ==========================

const today = new Date();

const options = {
weekday: "long",
day: "numeric",
month: "long",
year: "numeric"
};

document.getElementById("todayDate").innerHTML =
today.toLocaleDateString("mr-IN", options);


// ==========================
// Ward Search
// ==========================

const search = document.getElementById("searchWard");

search.addEventListener("keyup", function () {

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if (text.includes(value)) {

card.style.display = "block";

} else {

card.style.display = "none";

}

});

});


// ==========================
// Card Hover Animation
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0px) scale(1)";

});

});


// ==========================
// Water Status Click
// ==========================

const status = document.querySelectorAll(".status");

status.forEach(item => {

item.style.cursor = "pointer";

item.addEventListener("click", () => {

alert(
"💧 पाणीपुरवठा माहिती\n\n" +
"स्थिती : " + item.innerText +
"\n\nअधिक माहितीसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधा."
);

});

});


// ==========================
// Notice Animation
// ==========================

const notice = document.querySelector(".notice");

setInterval(() => {

notice.style.opacity = ".4";

setTimeout(() => {

notice.style.opacity = "1";

},600);

},3000);


// ==========================
// Floating Water Emoji
// ==========================

setInterval(() => {

let drop = document.createElement("div");

drop.innerHTML = "💧";

drop.style.position = "fixed";

drop.style.left = Math.random()*100 + "vw";

drop.style.top = "-30px";

drop.style.fontSize = "24px";

drop.style.pointerEvents = "none";

drop.style.zIndex = "999";

drop.style.transition = "5s linear";

document.body.appendChild(drop);

setTimeout(()=>{

drop.style.top="110vh";

drop.style.opacity="0";

},100);

setTimeout(()=>{

drop.remove();

},5200);

},2000);


// ==========================
// Welcome Message
// ==========================

window.onload = function(){

setTimeout(()=>{

alert("💧 पाणीपुरवठा वेळापत्रक मध्ये आपले स्वागत आहे.");

},500);

};