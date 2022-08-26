function clearBackgrounds(){
    var inputs = document.getElementsByTagName("input");
    var select = document.getElementsByTagName("select");

    for (var i = 0; i < inputs.length; i++) inputs[i].style.background = "";
    for (var j = 0; j < select.length; j++) select[j].style.background = "";
}

function validateFields(){
        try{
            var postalCodePattern = /^[A-Z]\d[A-Z]\d[A-Z]\d$/i;
            var emailPattern = /^\S+(@)+\w+(\.)+\S+$/;
            var passwordPattern = /^(?=.{6,})(?=.*\d)(?=.*[A-Z]).*$/;

            var inputs = document.getElementsByTagName("input");
            var select = document.getElementsByTagName("select");
            var postalCode = document.getElementById("pCode");
            var province = document.getElementById("province");
            var age = document.getElementById("age");
            var email = document.getElementById("email");
            var pwd1 = document.getElementById("pwd1");
            var pwd2 = document.getElementById("pwd2");

            for (var i = 0; i < inputs.length; i++){
                if(inputs[i].value === ""){
                    inputs[i].style.background = "#ffcb9a";
                    window.alert("Please fill out this field!");
                }
            }

            for (var j = 0; j < select.length; j++){
                if(select[j].value === ""){
                    select[j].style.background = "#ffcb9a";
                    window.alert("Please fill out this field!");
                }
            }

    
            if(postalCodePattern.test(postalCode.value) === false){
                clearBackgrounds();
                postalCode.style.background = "#ffcb9a";
                throw "Postal code has to be in the a0a0a0 format!";
            }
            else if(province.value !== "QC" && province.value !== "ON" && province.value !== "MN" && province.value !== "SK" && province.value !== "AB" && province.value !== "BC"){
                clearBackgrounds();
                province.style.background = "#ffcb9a";
                throw "Province has to be be QC, ON, MN, SK, AB, or BC!";
            }
            else if(age.value < 18){
                clearBackgrounds();
                age.style.background = "#ffcb9a";
                throw "Age has to be at least 18 years old!";
            }
            else if(emailPattern.test(email.value) === false){
                clearBackgrounds();
                email.style.background = "#ffcb9a";
                throw "The Email field must contain the @ and . characters!";
            }
            else if(pwd1.value !== pwd2.value){
                clearBackgrounds();
                pwd1.style.background = "#ffcb9a";
                pwd2.style.background = "#ffcb9a";
                throw "The Confirm Password and Password fields should have identical input!";
            }
            else if(passwordPattern.test(pwd1.value) === false){
                clearBackgrounds();
                pwd1.style.background = "#ffcb9a";
                pwd2.style.background = "#ffcb9a";
                throw "Passwords must have at least 6 characters and must contain at least one digit and one upper-case character!";
            }
            else{
                clearBackgrounds();
                window.alert("Thanks for registering with our website, your customer record was created successfully!");
                clearFields();
            }

        }
        catch(msg){
            window.alert(msg);
        }



}
function clearFields() {
    var inputFields = document.getElementsByTagName("input");
    var selectFields = document.getElementsByTagName("select");

    for (var i = 0; i < inputFields.length; i++) inputFields[i].value = "";
    for (var j = 0; j < selectFields.length; j++) selectFields[j].selectedIndex = -1;
}

function pageEvents(){
    clearFields();
    registerEvent();
    clearEvent();
}

function registerEvent(){
    var reg = document.getElementById("register");

    if (reg.addEventListener) {
        reg.addEventListener("click", validateFields, false);
    } else if (reg.attachEvent) {
        reg.attachEvent("onclick", validateFields);
    }
}

function clearEvent(){
    var clear = document.getElementById("clear");
    
    if (clear.addEventListener) {
        clear.addEventListener("click", clearFields, false);
    } else if (clear.attachEvent) {
        clear.attachEvent("onclick", clearFields);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", pageEvents, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", pageEvents);
}
