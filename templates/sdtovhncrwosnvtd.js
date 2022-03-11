var form = document.querySelector('.LoginForm')

var name = form.querySelector('.Name')
var surname = form.querySelector('.Surname')
var age = form.querySelector('.Age')
var password = form.querySelector('.Password')
var email = form.querySelector('.Email')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('clicked on validate')
  console.log('name: ', name.value)
    console.log('surname: ', surname.value)
  console.log('password: ', password.value)
  console.log('age: ', age.value)
  console.log('email: ', email.value)
})

