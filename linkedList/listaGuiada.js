class Node {
  constructor(data) {
    this.data = data; // guarda o valor do nó
    this.next = null; // guarda referência para o próximo nó
  }
}

class LinkedList {
  constructor() {
    this.head = null; // referência para o primeiro nó
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode; // se a lista estiver vazia, o novo nó se torna o head
    } else {
      let current = this.head; // se não, percorre a lista até o final
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode; // adiciona o novo nó ao final da lista
    }
  }
  get(index) {
    // garanto que a posição(index) não seja negativa
    if (index > -1) {
      let current = this.head; // referência para o primeiro nó
      let i = 0; // inicializa o contador
      while (current !== null && i < index) {
        // percorre a lista até o índice desejado
        current = current.next; // avança para o próximo nó
        i++; // incrementa o contador
      }
      return current !== null ? current.data : null; // se o nó atual não for nulo, retorna o dado, caso contrário, retorna null
    }
    {
      return null; // se o índice for inválido, retorna null
    }
  }

  delete(index) {
    if (this.head === null || index < 0) {
      throw new RangeError(`Sem dados ou índice inválido: ${index}`);
    }
    if (index === 0) {
      this.head = this.head.next;
      return true;
    }
    let current = this.head;
    let previous = null;
    let i = 0;
    while (current !== null && i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    if (current !== null) {
      previous.next = current.next;
      return true;
    }
    throw new RangeError(`Sem dados ou índice inválido: ${index}`);
  }
  value() {
    let current = this.head;
    let values = [];
    while (current !== null) {
      values.push(current.data);
      current = current.next;
    }
    return values; // retorna um array com os valores da lista
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log(list.value());
list.delete(2);
list.add(5);
console.log(list.value());
console.log(list.get(2));

console.log("Arquivo listaGuiada.js carregado com sucesso!");

// const No = new Node(10);
// const No2 = new Node(12);
// const No3 = new Node(14);

// No.next = No2;
// No2.next = No3;

// console.log(No.data, No.next.data, No2.next.data);
