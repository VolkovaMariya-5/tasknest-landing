const form = document.getElementById("subscribe-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("our_email");
    const emailValue = emailInput.value;
    if (emailValue ==="") {
        alert("Пожалуйста, введите Ваш e-mail")
        return;  }
    const checkedRadio = document.querySelector ('input[name="radio"]:checked');
    const radioValue = checkedRadio ? checkedRadio.value : 'Не выбран';
    console.log ("Выбранный вариант:" + radioValue,"," + "e-mail:" + emailValue);
    alert(`Спасибо за подписку!\nE-mail: ${emailValue}\nВыбранный вариант подписки: ${radioValue}`);
    
});