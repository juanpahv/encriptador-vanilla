let regex = /^[a-zA-Z\s]+$/;

function obtenerResultado(textoAMostrar) {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = `${textoAMostrar}`;
}

function displayText() {
  document.getElementsByClassName("noMensaje")[0].style.display = "none";
};

function encriptar() {
  let texto = document.getElementsByClassName("encriptador")[0].value;
  if (!regex.test(texto) || texto == "") {
    alert("El texto no debe contener caracteres especiales");
    return;
  } else {
    displayText();
    let format = texto.toLowerCase();
    let charArray = format.split("");
    var encriptado = [];
    charArray.forEach((letra) => {
      switch (letra) {
        case "a":
          encriptado += "ai";
          break;
        case "e":
          encriptado += "enter";
          break;
        case "i":
          encriptado += "imes";
          break;
        case "o":
          encriptado += "ober";
          break;
        case "u":
          encriptado += "ufat";
          break;
        default:
          encriptado += letra;
          break;
      }
    });
  }
  obtenerResultado(encriptado);
}

function desencriptar() {
  let texto = document.getElementsByClassName("encriptador")[0].value;
  if (!regex.test(texto) || texto == "") {
    alert("El texto no debe contener caracteres especiales");
    return;
  } else {
    displayText();
    let format = texto.toLowerCase();
    let charArray = format.split("");
    var desencriptado = [];
    for (let i = 0; i < charArray.length; i++) {
      let letra = charArray[i];

      switch (letra) {
        case "a":
          if (charArray[i + 1] === "i") {
            desencriptado += "a";
            i++; // Saltar al siguiente caracter después de "i"
          } else {
            desencriptado += letra;
          }
          break;
        case "e":
          if (charArray.slice(i, i + 5).join("") === "enter") {
            desencriptado += "e";
            i += 4; // Saltar al siguiente caracter después de "r"
          } else {
            desencriptado += letra;
          }
          break;
        case "i":
          if (charArray.slice(i, i + 4).join("") === "imes") {
            desencriptado += "i";
            i += 3; // Saltar al siguiente caracter después de "s"
          } else {
            desencriptado += letra;
          }
          break;
        case "o":
          if (charArray.slice(i, i + 4).join("") === "ober") {
            desencriptado += "o";
            i += 3; // Saltar al siguiente caracter después de "r"
          } else {
            desencriptado += letra;
          }
          break;
        case "u":
          if (charArray.slice(i, i + 4).join("") === "ufat") {
            desencriptado += "u";
            i += 3; // Saltar al siguiente caracter después de "t"
          } else {
            desencriptado += letra;
          }
          break;
        default:
          desencriptado += letra;
          break;
      }
    }
  }
  obtenerResultado(desencriptado);
}

document
  .getElementsByClassName("btnEncriptar")[0]
  .addEventListener("click", () => {
    encriptar();
  });

document
  .getElementsByClassName("btnDesencriptar")[0]
  .addEventListener("click", () => {
    desencriptar();
  });