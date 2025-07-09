/*---------- REVISANDO A DUPLICATA ----------*/

function revisarDuplicata(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let arrayNumerosAleatorios = [];
  let haDuplicatas = false;
  let paresQueForamDuplicados = [];

  /* Gera 20 números aleatórios entre min e max */
  for (let i = 0; i < 20; i++) {
    arrayNumerosAleatorios.push(
      Math.floor(Math.random() * (max - min + 1) + min)
    );
  }
  console.log(`Os números gerados foram: `, arrayNumerosAleatorios);
  /* ------------ Verifica se há números duplicados -------------- */

  for (let i = 0; i < arrayNumerosAleatorios.length; i++) {
    for (let j = i + 1; j < arrayNumerosAleatorios.length; j++) {
      if (arrayNumerosAleatorios[i] === arrayNumerosAleatorios[j]) {
        haDuplicatas = true;
        paresQueForamDuplicados.push({
          numeros: arrayNumerosAleatorios[i],
          indices: [i, j],
        });
        break;
      }
      if (haDuplicatas) break;
    }
  }
  /* ------------ Exibe se há números duplicados -------------- */

  if (haDuplicatas) {
    paresQueForamDuplicados.forEach((par) => {
      par.indices.length > 1 ? "s" : ``;
      console.log(
        `Os números duplicados são: ${par.numeros} E seus Indices são: ${par.indices}`
      );
    });
  }
  return arrayNumerosAleatorios;
}

revisarDuplicata(1, 20);
