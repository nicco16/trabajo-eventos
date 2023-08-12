document.addEventListener('DOMContentLoaded', function(){
const divElement = document.getElementById('miDiv');
const buttonElement = document.getElementById('miBoton');

buttonElement.addEventListener('click', (event) => {
    // Evitar la propagación del evento clic del botón al div
    event.stopPropagation();

    
});

divElement.addEventListener('click', () => {
    
}); 
});   