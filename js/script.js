/*Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi
 - titolo e
 - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre. */

const image = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',

  'Lorem ipsum',

  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',

  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let cont = 0;

const slider = document.querySelector('.slider');
const slider_2 = document.querySelector('.slider_2');

for (let i = 0; i < image.length; i++) {
  const item = document.createElement('div');
  const item2 = document.createElement('div');

  item.className = 'disactive';

  if(i === cont){
    item.classList.add('active');
  }

  item.innerHTML = `<img class="cont_img_primary" src="${image[i]}" alt="">`;

  item2.innerHTML = `<img class="cont_img opac" src="${image[i]}" alt="">`;

  slider.append(item);
  slider_2.append(item2);

}


// HTMLCollection -> array di elementi HTML
const items = document.getElementsByClassName('disactive');
const items2 = document.getElementsByClassName('opac');


const prev = document.querySelector('.up_arrow');
const next = document.querySelector('.down_arrow');

prev.addEventListener('click',function(){
 
  items[cont].classList.remove('active');
  items2[cont].classList.remove('nitid', 'border', 'border-5');
 

  cont--;
  // se il contatore è < 0 prende l'ultmo elemento dell'array (array.length - 1)
  if(cont < 0) cont = items.length - 1;

  items[cont].classList.add('active');
  items2[cont].classList.add('nitid', 'border', 'border-5');
 
});

next.addEventListener('click',function(){
  
  items[cont].classList.remove('active');
  items2[cont].classList.remove('nitid', 'border', 'border-5');
  

  cont++;
  
  if(cont > items.length - 1) cont = 0;

  
  items[cont].classList.add('active');
  items2[cont].classList.add('nitid', 'border', 'border-5');
});
  



