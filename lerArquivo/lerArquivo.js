import { readFile as fs } from "node:fs/promises";

async function lerArquivo(arquivo) {
  const data = await fs(arquivo, "utf8");
  try {
    const palavra = data.split(/\s+/);
    const numeroDePalavras = palavra.length;
    const caracter = data.split("");
    const numeroDeCaracteres = caracter.length;
    const ocorrencias = {};
    palavra.forEach((p) => {
      ocorrencias[p] = (ocorrencias[p] || 0) + 1;
    });

    console.log(
      `${arquivo} Este arquivo contem ${numeroDePalavras} de palavras e ${numeroDeCaracteres} de caracteres. e
        as suas ocorrências são: ${JSON.stringify(ocorrencias, null, 2)}`
    );
  } catch (erro) {
    console.error(`Erro ao ler o arquivo ${arquivo}: e as palavras`, erro);
  }
}

lerArquivo("../duplicatas/duplicatas.js");
