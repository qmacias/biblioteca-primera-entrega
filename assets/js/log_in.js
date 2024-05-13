document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.tabIndex = 3;

  document.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      if (document.activeElement === passwordInput) {
        event.preventDefault();
        submitButton.focus();
      }
    }
  });

  usernameInput.focus();

  // Agregar escuchadores de eventos input para restaurar estilos al escribir
  usernameInput.addEventListener("input", function () {
    cambiarEstilo("username", false);
  });

  passwordInput.addEventListener("input", function () {
    cambiarEstilo("password", false);
  });

  // Validación de formulario
  var form = document.getElementById("login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
    const usuario = usernameInput.value;
    const contrasenia = passwordInput.value;

    let validacionUsuario = validarString("username", usuario);
    let validacionContrasenia = validarString("password", contrasenia);

    if (validacionContrasenia && validacionUsuario) {
      form.submit(); // Una vez que logra ingresar el usuario, los botones de ingresar y registrarse se tienen que ocultar
    }
  });
});

function validarString(idElement, contenido) {
  let flagEsValido = true;
  if (contenido == "" || contenido == null) {
    cambiarEstilo(idElement, flagEsValido);
    flagEsValido = false;
  }

  return flagEsValido;
}

/**
 *
 * @param {*} idElement id del elemento a modificar
 * @param {*} isError true en caso de que haya que modificarlo a estilo de error, false para caso normal
 */
function cambiarEstilo(idElement, isError) {
  let element = document.getElementById(idElement);
  if (isError) {
    element.style.borderColor = "red";
  } else {
    element.style.borderColor = "#2C7DA0";
  }
  switch (idElement) {
    case "username":
      if (isError) {
        element.placeholder = "Por favor, ingresá tu usuario";
      } else {
        element.placeholder = "Usuario";
      }
      break;
    case "password":
      if (isError) {
        element.placeholder = "Por favor, ingresá tu contraseña";
      } else {
        element.placeholder = "Contraseña";
      }
      break;
  }
}
