document.addEventListener("DOMContentLoaded", function () {  
    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
  
    nameInput.focus();
  
    // Agregar escuchadores de eventos input para restaurar estilos al o seleccionar
    nameInput.addEventListener("input", function () {
      cambiarEstilo("name", false);
    });
  
    surnameInput.addEventListener("input", function () {
      cambiarEstilo("surname", false);
    });
  
    emailInput.addEventListener("input", function () {
      cambiarEstilo("email", false);
    });
  
    subjectInput.addEventListener("input", function () {
      cambiarEstilo("subject", false);
    });
  
    messageInput.addEventListener("input", function () {
      cambiarEstilo("message", false);
    });
  
    // Validar Formulario
    var form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
  
      const nombre = nameInput.value;
      const apellido = surnameInput.value;
      const email = emailInput.value;
      const asunto = subjectInput.value;
      const mensaje = messageInput.value;
  
      //resultados de las validaciones
      let validacionNombre = validarString("name", nombre);
      let validacionApellido = validarString("surname", apellido);
      let validacionEmail = validarString("email", email);
      let validacionAsunto = validarString("subject", asunto);
      let validacionMensaje = validarString("message", mensaje);
  
      //carga en un array los resultados de las validaciones
      let validaciones = [];
      validaciones.push(validacionNombre);
      validaciones.push(validacionApellido);
      validaciones.push(validacionEmail);
      validaciones.push(validacionAsunto);
      validaciones.push(validacionMensaje);
  
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

    //validación extra del mail (que sea de hotmail o gmail o yahoo)
    if(contenido != "" && idElement == "email" && !validarEmail(contenido)){
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
      case "email":
        if (error) {
          element.value = "";
          element.placeholder = "Ingresá un correo válido (gmail o hotmail)";
        } else {
          element.placeholder = "Correo";
        }
        break;
      case "subject":
        if (error) {
          element.placeholder = "Por favor, agregá asunto";
        } else {
          element.placeholder = "Asunto";
        }
        break;
      case "message":
        if (error) {
            element.placeholder = "Por favor, escribí tu mensaje aquí..."
        }else{
            element.placeholder = "Escribe tu mensaje aquí...";
        }
        break;
    }
  }
/**
 * 
 * @param {*} email direccion de email. Tiene que contener gmail.com o hotmail.com
 * @returns true si contiene alguno de los mencionados, caso contrario retorna false
 */
function validarEmail(email){
    const pattern = /(gmail.com|hotmail.com)/i;
    // Usa .test para buscar si contiene las palabras, ignorando mayúsculas y minúsculas
    return pattern.test(email);
}