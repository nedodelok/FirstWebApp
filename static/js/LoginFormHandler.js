function ValidationName() {

    var reg = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
    var myMail = form.querySelector('.Name').value;
    var valid = reg.test(myMail);
    if (valid) ;
    else  {
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "Недопустимое имя";
    nameid.after(div)
    };

}

function ValidationSurname() {
    var reg = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
    var myMail = form.querySelector('.Surname').value;
    var valid = reg.test(myMail);
    if (valid);
else  {
        var error = form.querySelector('.Surname')
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "Недопустимая фамилия";
    surnameid.after(div)
    };
}

function AroundAge() {
    var vozrast  = form.querySelector('.Age').value;
    if (vozrast > 120) {
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "Число должно быть меньше или равно 120";
    ageid.after(div)
    }
    if (vozrast < 1) {
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "Число должно быть больше или равно 1";
    ageid.after(div)
    }
}

let form = document.querySelector('.LoginForm')

form.addEventListener('submit', function (event) {

    event.preventDefault()
  var alerts = form.querySelectorAll('.alert')
  for (var i = 0; i < alerts.length; i++) {
    alerts[i].remove()
  }

  var sendForm = false
    if ((form.querySelector(".Name").value === "")
        && (form.querySelector(".Surname").value === "")
        && (form.querySelector(".Age").value === "")
        && (form.querySelector(".Email").value === "") ){
        sendForm = true
    }
    else {
        ValidationName()
        ValidationSurname()
        AroundAge()
        let email = form.querySelector('.Email')
        if (!email.value) {
            let div = document.createElement('div');
            div.className = "alert";
            div.innerHTML = "Заполните поле";
            emailid.after(div)
        }
    }
    if (form.querySelectorAll('.alert').length === 0){
        sendForm = true
    }
    if (sendForm === true){
        form.submit();
    }
})