//ejercicio 1
function filtrarCervezasPorAlcohol(beers, nivelAlcohol) {
  const cervezasFiltradas = beers
    .filter(function (beer) {
      return beer.abv <= nivelAlcohol;
    })
    .map(function (beer) {
      return {
        nombre: beer.name,
        alcohol: beer.abv,
        amargor: beer.ibu,
      };
    });
  console.log(cervezasFiltradas);
  return cervezasFiltradas;
}
const nivelAlcoholMaximo = 5;
filtrarCervezasPorAlcohol(beers, nivelAlcoholMaximo);

//ejercicio 2
function obtenerCervezasMasAlcoholicas(beers) {
  const cervezasOrdenadas = beers.sort(function (beerA, beerB) {
    return beerB.abv - beerA.abv;
  });
  const cervezasMasAlcoholicas = cervezasOrdenadas
    .slice(0, 10)
    .map(function (beer) {
      return {
        nombre: beer.name,
        alcohol: beer.abv,
      };
    });
  console.log(cervezasMasAlcoholicas);
  return cervezasMasAlcoholicas;
}
obtenerCervezasMasAlcoholicas(beers);

//ejercicio 3
function obtenerCervezasMenosAmargas(beers) {
  const cervezasOrdenadas = beers.sort(function (beerA, beerB) {
    return beerA.ibu - beerB.ibu;
  });
  const cervezasMenosAmargas = cervezasOrdenadas
    .slice(0, 10)
    .map(function (beer) {
      return {
        nombre: beer.name,
        amargor: beer.ibu,
      };
    });
  console.log(cervezasMenosAmargas);
  return cervezasMenosAmargas;
}
obtenerCervezasMenosAmargas(beers);

//ejercicio 4
function ordenarCervezasPorSRM(beers) {
  const cervezasFiltradas = beers.filter(function (beer) {
    return beer.srm >= 15;
  });
  const cervezasOrdenadas = cervezasFiltradas.sort(function (beerA, beerB) {
    return beerA.srm - beerB.srm;
  });
  const cervezasResultantes = cervezasOrdenadas.map(function (beer) {
    return {
      nombre: beer.name,
      srm: beer.srm,
      mayorOIgualA15: beer.srm >= 15,
    };
  });
  console.log(cervezasResultantes);
  return cervezasResultantes;
}
ordenarCervezasPorSRM(beers);

//ejercicio 5
let box = document.getElementById("box-table");
function datos(beer) {
  return `
<tr>
  <td>${beer.name}</td>
  <td>${beer.abv}</td>
  <td>${beer.ibu}</td>
</tr>
`;
}
function cargarDatos(beers) {
  let template = "";
  for (let beer of beers) {
    template += datos(beer);
  }
  box.innerHTML += template;
}
cargarDatos(beers);
