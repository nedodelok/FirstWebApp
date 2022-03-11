function ValidationName() {

    var reg = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
    var myMail = form.querySelector('.Name').value;
    var valid = reg.test(myMail);
    if (valid) ;
    else  {
        var error = form.querySelector('.Name')
    error.className='error'
    error.style.color = 'red'
    };

}

function ValidationSurname() {
    var reg = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
    var myMail = form.querySelector('.Surname').value;
    var valid = reg.test(myMail);
    if (valid);
else  {
        var error = form.querySelector('.Surname')
    error.className='error'
    error.style.color = 'red'
    };
}


let form = document.querySelector('.LoginForm')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    let login = form.querySelector('.Login')
  let name = form.querySelector('.Name')
  let surname = form.querySelector('.Surname')
  let age = form.querySelector('.Age')
  let password = form.querySelector('.Password')
  let email = form.querySelector('.Email')
      console.log('name: ', name.value)
    ValidationName()
    ValidationSurname()
    if (Age.validity.rangeUnderflow) {
        alert("ЗХРН;ГЩДМосфрзцвк")
    }
    if (Age.validity.rangeOverflow) {
        alert("ЗХРjfofdjfpgppgp")
    }

})