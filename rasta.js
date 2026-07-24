// Progress Bar

let progress = document.getElementById("progress");
let percent = document.getElementById("percent");

let value = 0;

let interval = setInterval(() => {

value++;

progress.style.width = value + "%";
percent.innerHTML = value + "% पूर्ण";

if(value >= 85){

clearInterval(interval);

}

},25);

// Download Demo

document.getElementById("download").addEventListener("click",function(){

alert("📄 प्रकल्प अहवाल डाउनलोड (Demo)");

});

// Image Preview

document.querySelectorAll(".images img").forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});

// Notice Blink

const notice=document.querySelector(".notice");

setInterval(()=>{

notice.style.opacity=".5";

setTimeout(()=>{

notice.style.opacity="1";

},500);

},2500);