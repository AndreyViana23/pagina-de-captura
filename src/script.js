document.addEventListener("DOMContentLoaded", function(){
    var emailInput = document.getElementById("emailInput");
    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function(){
        var userEmail = emailInput.value;

        if (userEmail.trim() !==""){
            alert("E-BOOK enviado para o E-mail" + userEmail);
            emailInput.value = "";
        }else {
            alert("Por Favor, preencha o campo de E-mail");
        };
    });
});