
let form = document.querySelector('.LoginForm')
form.addEventListener('submit', function (event) {
  let name = form.elements.Name
  let surname = form.elements.Surname
  let age = form.elements.Age
  let password = form.elements.Password
  let email = form.elements.Email
  event.preventDefault()
  console.log('clicked on validate')
  console.log('name: ', name.value)
  console.log('surname: ', surname.value)
  console.log('password: ', password.value)
  console.log('age: ', age.value)
  console.log('email: ', email.value)
})

