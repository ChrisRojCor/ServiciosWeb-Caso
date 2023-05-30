// Obtén una referencia al formulario HTML
var form = document.getElementById('form');

// Agrega un evento de escucha para el evento "submit" del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtiene los valores de usuario y contraseña del formulario
  var username = document.getElementById('user').value;
  var password = document.getElementById('password').value;

  // Realiza la solicitud a la API para obtener los usuarios y contraseñas
  fetch('http://localhost:3000/user/read')
    .then(response => response.json())
    .then(data => {
      // Verifica si el usuario y contraseña coinciden con los datos de la API
      var userFound = data.find(userAuth => userAuth.user === username && userAuth.password === password);
      if (userFound) {
        window.location.href = "./valido.html";
        console.log('Credenciales válidas');
      } else {
        window.location.href = "./invalido.html";
        console.log('Credenciales inválidas');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
