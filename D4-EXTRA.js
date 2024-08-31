// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray() {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);

  if (randomNumber > 5) {
    console.log("Il valore è maggiore di 5");
  } else {
    console.log("Il valore è minore di 5");
  }
}

checkArray();

/* EXTRA 2
   Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
   Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  {
    price: 20.55,
    name: "LipGloss",
    id: 2617,
    quantity: 43,
  },
  {
    price: 34.8,
    name: "Book",
    id: 1873,
    quantity: 53,
  },
  {
    price: 35,
    name: "Peluche",
    id: 1767,
    quantity: 22,
  },
  {
    price: 1.2,
    name: "Pen",
    id: 6135,
    quantity: 84,
  },
  {
    price: 62.05,
    name: "card",
    id: 4216,
    quantity: 18,
  },
];

function shoppingCartTotal() {
  for (let i = 0; i < shoppingCart.length; i++) {
    const product = shoppingCart[i];

    return product.price * product.quantity;
  }
}

console.log(shoppingCartTotal());

/* EXTRA 3
   Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
   Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart() {
  let newProduct = {
    price: 1.3,
    name: "bag",
    id: 1744,
    quantity: 23,
  };
  shoppingCart.push(newProduct);
  return shoppingCart.length;
}

console.log(addToShoppingCart());

/* EXTRA 4
   Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
   Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart() {
  let firstElement = shoppingCart[0];
  for (let i = 0; i < shoppingCart.length; i++) {
    let shoppingPrice = shoppingCart[i].price;

    if (shoppingPrice > firstElement.price) {
      firstElement = shoppingCart[i];
    }
  }
  return firstElement;
}

console.log(maxShoppingCart());

/* EXTRA 5
   Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
   Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(shoppingCart) {
  let lastEl = shoppingCart.pop();
  return lastEl;
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
   Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
   La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(x) {
  if (x < 0 || x > 9) {
    console.log("Il valore deve essere compreso tra 0 e 9");
    return;
  }

  let counter = 0;

  while (counter < 3) {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    if (random > x) {
      counter++;
    } else {
      counter = 0;
    }
  }
  console.log("Il numero generato casualmente è stato maggiore di", x, "per tre volte");
}

loopUntil(8);

/* EXTRA 7
  Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let quantity = arr.length;
  return sum / quantity;
}

console.log("La media aritmetica è:", average([2, 3, 4, 6]));

/* EXTRA 8
   Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(arrStr) {
  let firstString = "";
  for (let i = 0; i < arrStr.length; i++) {
    if (firstString.length > arrStr[i].length) {
      firstString;
    } else {
      firstString = arrStr[i];
    }
  }
  return firstString;
}

console.log(longest(["cavolini", "devo", "madonnina"]));

/* EXTRA 9
   Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
   La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
  */

/* SCRIVI QUI LA TUA RISPOSTA */

function antiSpam(emailContent) {
  if (!emailContent.includes("SPAM") && !emailContent.includes("SCAM")) {
    return true;
  } else {
    return false;
  }
}

console.log(antiSpam("parola a SPAM"));

/* EXTRA 10
   Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

function passedDays(data) {
  const today = new Date();

  const differenceBetweenTwoDates = today - new Date(data);
  const millesecondi = 1000 * 60 * 60 * 24;

  return Math.floor(differenceBetweenTwoDates / millesecondi);
}

console.log(passedDays("08-31-2023"));

/* EXTRA 11
   Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
   Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
   Es.: x = 3, y = 2
   ["00","01","02"
   "10","11","12"]
  */

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y) {}
