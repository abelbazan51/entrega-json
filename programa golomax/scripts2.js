const Clickbotonindex = document.querySelectorAll(".botonindex");

Clickbotonindex.forEach((botonindex) => {
  btnalerta.addEventListener("click", addTodatosindex);
});

function addTodatosindex(e) {
  const boton = e.target;
  const nombrecliente = item.querySelector(".nombre").textcontent;
  const apellidocliente = item.querySelector(".datos").textcontent;
  const docimicilio = item.querySelector(".direccion").textcontent;
  const datosadicionales = item.querySelector(".datosadicionales").textcontent;

  const clientes = {
    nombre: nombrecliente,
    apellido: apellidocliente,
    docimicilio: docimicilio,
    datos: datosadicionales,
  };
  console.log(clientes);
}
