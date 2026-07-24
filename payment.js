// =========================
// Total Amount Calculation
// =========================

const taxes = document.querySelectorAll(".tax");
const total = document.getElementById("total");

let amount = 0;

taxes.forEach(tax => {

    tax.addEventListener("change", calculateTotal);

});

function calculateTotal() {

    amount = 0;

    taxes.forEach(tax => {

        if (tax.checked) {

            amount += Number(tax.value);

        }

    });

    total.innerHTML = "एकूण रक्कम : ₹" + amount;

}

// =========================
// Payment Submit
// =========================

const form = document.getElementById("paymentForm");
const popup = document.getElementById("popup");
const txn = document.getElementById("txn");

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(amount===0){

        alert("कृपया किमान एक कर निवडा.");

        return;

    }

    const button=form.querySelector("button");

    button.disabled=true;

    button.innerHTML="<i class='fa-solid fa-spinner fa-spin'></i> Payment Processing...";

    setTimeout(()=>{

        const transactionID="GP"+Date.now();

        txn.innerHTML=`
        <strong>व्यवहार यशस्वी!</strong><br><br>
        Transaction ID:<br>
        <b>${transactionID}</b><br><br>
        भरलेली रक्कम:<br>
        <b>₹${amount}</b><br><br>
        दिनांक:<br>
        <b>${new Date().toLocaleString("mr-IN")}</b>
        `;

        popup.style.display="flex";

        createConfetti();

        button.disabled=false;
        button.innerHTML="<i class='fa-solid fa-lock'></i> Pay Now";

        form.reset();

        amount=0;

        total.innerHTML="एकूण रक्कम : ₹0";

    },2500);

});

// =========================
// Confetti Effect
// =========================

function createConfetti(){

    for(let i=0;i<60;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=
        (2+Math.random()*2)+"s";

        confetti.style.background=
        ["#ff007f","#22c55e","#3b82f6","#f59e0b"]
        [Math.floor(Math.random()*4)];

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },4000);

    }

}

// =========================
// Close Popup Outside Click
// =========================

popup.addEventListener("click",function(e){

    if(e.target===popup){

        popup.style.display="none";

    }

});

// =========================
// ESC Close
// =========================

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        popup.style.display="none";

    }

});

// =========================
// Fade Animation
// =========================

document.body.style.opacity="0";

window.onload=function(){

    document.body.style.transition=".5s";

    document.body.style.opacity="1";

};