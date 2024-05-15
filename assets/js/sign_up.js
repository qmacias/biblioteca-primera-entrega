// import Link from "./link.js"

document.addEventListener("DOMContentLoaded", function () {
  // cargarLinks();

  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const birthdateInput = document.getElementById("birthdate");
  const countrySelect = document.getElementById("country");
  // No hay email en el registro ?

  const submitButton = document.querySelector('button[type="submit"]');

  submitButton.tabIndex = 9;

  document.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      if (document.activeElement === countrySelect) {
        event.preventDefault();
        submitButton.focus();
      }
    }
  });

  nameInput.focus();

  // Agregar escuchadores de eventos input para restaurar estilos al o seleccionar
  nameInput.addEventListener("input", function () {
    cambiarEstilo("name", false);
  });

  surnameInput.addEventListener("input", function () {
    cambiarEstilo("surname", false);
  });

  usernameInput.addEventListener("input", function () {
    cambiarEstilo("username", false);
  });

  passwordInput.addEventListener("input", function () {
    cambiarEstilo("password", false);
  });

  birthdateInput.addEventListener("input", function () {
    cambiarEstilo("birthdate", false);
  });

  countrySelect.addEventListener("select", function () {
    cambiarEstilo("country", false);
  });

  // Validar Formulario
  var form = document.getElementById("signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    const nombre = nameInput.value;
    const apellido = surnameInput.value;
    const usuario = usernameInput.value;
    const contrasenia = passwordInput.value;
    const fechaNacimiento = birthdateInput.value;
    const pais = countrySelect.value;

    //resultados de las validaciones
    let validacionNombre = validarString("name", nombre);
    let validacionApellido = validarString("surname", apellido);
    let validacionUsuario = validarString("username", usuario);
    let validacionContrasenia = validarString("password", contrasenia);
    let validacionFechaNacimiento = validarString("birthdate", fechaNacimiento);
    let validacionPais = validarString("country", pais);

    //carga en un array los resultados de las validaciones
    let validaciones = [];
    validaciones.push(validacionNombre);
    validaciones.push(validacionApellido);
    validaciones.push(validacionUsuario);
    validaciones.push(validacionContrasenia);
    validaciones.push(validacionFechaNacimiento);
    validaciones.push(validacionPais);

    let formValido = true;

    //determina si el formulario es válido o no. Si hay uno falso, el form no es válido
    for (let validacion of validaciones) {
      if (!validacion) {
        formValido = false;
        break;
      }
    }

    if (formValido) {
      form.submit(); // Una vez que el form es válido, se envía todo
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
 * @param {*} error true en caso de que haya que modificarlo error, false para caso normal
 */
function cambiarEstilo(idElement, error) {
  let element = document.getElementById(idElement);
  if (error) {
    element.style.borderColor = "red";
  } else {
    element.style.borderColor = "#2C7DA0";
  }

  switch (idElement) {
    case "name":
      if (error) {
        element.placeholder = "Por favor, ingresá tu nombre";
      } else {
        element.placeholder = "Nombre";
      }
      break;
    case "surname":
      if (error) {
        element.placeholder = "Por favor, ingresá tu apellido";
      } else {
        element.placeholder = "Apellido";
      }
      break;
    case "username":
      if (error) {
        element.placeholder = "Por favor, ingresá tu usuario";
      } else {
        element.placeholder = "Usuario";
      }
      break;
    case "password":
      if (error) {
        element.placeholder = "Por favor, ingresá contraseña";
      } else {
        element.placeholder = "Contraseña";
      }
      break;
    case "birthdate":
      if (error) {
        //cambia a la fecha actual por defecto si no se ingresó
        const fechaActual = new Date().toISOString().split("T")[0];
        element.value = fechaActual;
      }
      break;
    case "country":
      if (error) {
        //cambia a ARG por defecto si no se seleccionó nada
        element.selectedIndex = 1;
      }
      break;
  }
}

// function cargarLinks() {
//   let arrayLinks = [];

//   arrayLinks.push(new Link("../../index.html", "Biblioteca Online"));
//   arrayLinks.push(new Link("../../index.html", "Volver al inicio"));

//   let linksInnerHTML = "";

//   for(let link of arrayLinks){
//       let linkActual = "";

//       if (link.href == "#") {
//           linkActual = `<li><a class="box" href="${link.href}">${link.label}</a></li>`;
//       } else {
//           linkActual = `<li><a class="box border bd5" href="${link.href}">${link.label}</a></li>`;
//       }

//       linksInnerHTML += linkActual;
//   }


//   document.getElementById("ulColeccionLinks").innerHTML = linksInnerHTML;
// }
