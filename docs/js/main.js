const jsonForm = document.querySelector("#jsonform");
const csvForm = document.querySelector("#csvform");
const bConvert = document.querySelector("#bConvert");

bConvert.addEventListener("click", (e) => {
  convertJSONtoCSV();
});

function convertJSONtoCSV() {
  let json;
  let keys = [];
  let values = [];

  try {
    json = JSON.parse(jsonForm.value);
  } catch (error) {
    console.log("formato incorrecto JSON");
    alert("formato incorrecto JSON");
  }
  if (Array.isArray(json)) {
    //algoritmo
    json.forEach((item) => {
      const nkeys = Object.keys(item);
      if (keys.length === 0) {
        keys = [...nkeys];
      } else {
        if (nkeys.length !== keys.length) {
          throw new Error("number of keys are diferents");
        } else {
          console.log("ok", nkeys);
        }
      }
      const row = keys.map((k) => {
        return item[k];
      });
      values.push([...row]);
    });
    console.log(keys, values);
  } else {
    alert("no es un arreglo de objetos");
  }
}
[
  {
    id: 0,
    nombre: "marcos",
    edad: 29,
  },
  {
    id: 0,
    nombre: "marcos",
    edad: 29,
  },
];
