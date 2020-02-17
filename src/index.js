//Eventos cifrado-descifrado
window.onload = () => {
  //Referencias
  const encodeButton = document.getElementById("encodeButton");
  const decodeButton = document.getElementById("decodeButton");
  //Observadores
  encodeButton.addEventListener('click', () => {
    let string = document.getElementById("inputString").value.toUpperCase();
    let offset = document.getElementById("key").value;
    let encodedString = window.cipher.encode(string, offset);
    document.getElementById("outputString").value = encodedString;
  });
  decodeButton.addEventListener('click', () => {
    let string = document.getElementById("inputString").value.toUpperCase();
    let offset = document.getElementById("key").value;
    let decodedString = window.cipher.decode(string, offset);
    document.getElementById("outputString").value = decodedString;
  });
}
