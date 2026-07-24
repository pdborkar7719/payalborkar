// Parvane 2 JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    // Auto date
    const dateBox = document.getElementById("date");
    if (dateBox) {
        let today = new Date();
        dateBox.value = today.toLocaleDateString("mr-IN");
    }


    // Form validation
    if (form) {
        form.addEventListener("submit", function (e) {

            let inputs = form.querySelectorAll("input, textarea, select");
            let valid = true;

            inputs.forEach(function(input){

                if(input.hasAttribute("required") && input.value.trim() === ""){
                    valid = false;
                    input.style.border = "2px solid red";
                }
                else{
                    input.style.border = "1px solid #ccc";
                }

            });


            if(!valid){
                e.preventDefault();
                alert("कृपया सर्व आवश्यक माहिती भरा 🙏");
            }
            else{
                alert("अर्ज यशस्वीरित्या सादर झाला ✅");
            }

        });
    }


    // Reset button animation
    const resetBtn = document.querySelector("button[type='reset']");

    if(resetBtn){
        resetBtn.addEventListener("click",function(){
            alert("फॉर्म साफ केला आहे");
        });
    }

});