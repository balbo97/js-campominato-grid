// CREO UNA VARIABILE A CUI ASSOCIO UN ELEMENTO NELL HTML 
const button_play = document.getElementById('play');

//FACCIO IN MODO CHE QUANDO CLICCO SUL BUTTON NEL HTML LA MIA FUNZIONE VENGA MESSA IN ATTO 
button_play.addEventListener('click', function(){

     //  creo una funzione che mi generi la singola casella della griglia 
     function square (){

        let cell = document.createElement('div');
        cell.classList.add('square') 

        return cell;
     }


})
  