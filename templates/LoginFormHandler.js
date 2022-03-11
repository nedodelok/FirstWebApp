
let form = document.querySelector('.LoginForm')
form.addEventListener('submit', function (event) {
  let name = form.elements.Name
  let surname = form.elements.Surname
  let age = form.elements.Age
  let password = form.elements.Password
  let email = form.elements.Email
  event.preventDefault()
var fields = form.querySelectorAll('.field')

form.addEventListener('submit', function (event) {
  event.preventDefault()

    var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
      var error = document.createElement('div')
    error.className='error'
    error.style.color = 'red'
    error.innerHTML = 'соси хуй'
    form[i].parentElement.insertBefore(error, fields[i])
    }
  }
})

})
