function unico(elementosDuplicados) {
  const contagem = {}; // Dicionario para contar elementos

  for (let itemDaLista of elementosDuplicados) {
    /* A chave do dicionário é o item da lista, e o valor é a contagem de quantas vezes esse item aparece.*/
    contagem[itemDaLista] = (contagem[itemDaLista] || 0) + 1;
    // console.log(contagem);
  }
  for (let itemContagem in contagem) {
    if (contagem[itemContagem] == 1) {
      return `O item "${itemContagem}" aparece apenas uma vez.`;
    }
  }
}
console.log(unico(["banana", "maçã", "laranja", "banana", "uva", "maçã"])); // O item "laranja" aparece apenas uma vez.

//
