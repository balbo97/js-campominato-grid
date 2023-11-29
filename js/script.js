// CREO UNA VARIABILE A CUI ASSOCIO UN ELEMENTO NELL HTML 
const button_play = document.getElementById('play');

//  creo una funzione che mi generi la singola casella della griglia 
function createCell(x){
    
    const cell = document.createElement('div');
    cell.classList.add('square') 

    cell.innerText = x
    
    return cell;
}


// RECUPERO LA GRIGLIA CREANDO UNA VARIABILE 
let grid = document.getElementById('grid');

//FACCIO IN MODO CHE QUANDO CLICCO SUL BUTTON NEL HTML LA MIA FUNZIONE VENGA MESSA IN ATTO 
button_play.addEventListener('click', function(){
    console.log('well done ')
    
    //CREO UN CICLO FOR
    for (let i=0; i<100; i++){
        
        let square = createCell(i+1);
        
        grid.appendChild(square)
    } 
})
