let array = [];

fetch("./datos.json|")
  .then((resp) => resp.JSON())
  .then((data) => {
    array = data;
  });
