/*
Descrizione:
Rivediamo l’esercizio della lista della spesa visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
Consigli:
Potete provare a fare l'esercizio una prima volta col for e poi convertire piano piano in while.
Lista della spesa (da convertire in array)
Uova
Pane
Latte
Biscotti
Pasta
Affettati
Formaggio
Verdura
Frutta
Buon lavoro e a domani!
*/

//steps
/*
1.creo l'array contenitore della lista
2. dichiaro variabile globale e connetto al DOM
3.creazione ciclo while :
4.dichiaro variabile fuori dal ciclo
5.metto la condizionale tra parentesi
6.metto condizione di chiusura while all'interno del blocco funzione while
7.avvio il ciclo

*/
//1.
const listElements = ['uova', 'pane', 'latte', 'biscotti', 'pasta', 'affettati', 'formaggio', 'verdura', 'frutta '];
//2. 
const mainList = document.getElementById('shop-list');
//3-4
let i = 0;
let list = '';
//5
while (i < listElements.lenght) {
    list += `<li>${listElements[i]}</li>`;
    //6
    i++;
    mainList.innerHTML = list;
}
console.log(listElements)