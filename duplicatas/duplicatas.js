/* -------------- Duplicatas -------------- */

/* Gera 20 números aleatórios entre 1 e 20 */

export function getRandomInt2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let arrayNumbersRandom = [];
  let hasDuplicates = false;
  let duplicatesPairs = [];
  /*  Gera 20 números aleatórios entre min e max */
  for (let i = 0; i < 20; i++) {
    arrayNumbersRandom.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  console.log("Números aleatórios gerados: ", arrayNumbersRandom);

  /* ------------ Verifica se há números duplicados -------------- */

  for (let i = 0; i < arrayNumbersRandom.length; i++) {
    for (let j = i + 1; j < arrayNumbersRandom.length; j++) {
      if (arrayNumbersRandom[i] === arrayNumbersRandom[j]) {
        hasDuplicates = true;
        duplicatesPairs.push({
          numbers: arrayNumbersRandom[i],
          indices: [i, j],
        });
        break;
      }
      if (hasDuplicates) break;
    }
  }
  /* ------------ Exibe se há números duplicados -------------- */
  console.log("Contém números duplicados? ", hasDuplicates);
  if (hasDuplicates) {
    duplicatesPairs.forEach((pair) => {
      console.log(
        "Indices dos números duplicados: ",
        pair.indices,
        pair.indices.length > 1 ? "s" : ""
      );
      console.log("Números duplicados: ", pair.numbers);
    });
  }

  return arrayNumbersRandom;
}
getRandomInt2(1, 20);
