const button = document.getElementById('my-button');
const body = document.getElementById('section-body');
let background = 'blue';

button.addEventListener('click', function() {
    if ( background === 'blue' ) {        
        body.style.setProperty('background-color', 'orange');
        background = 'orange';
    } else if ( background === 'orange' ) {
        body.style.setProperty('background-color', 'blue');
        background = 'blue';
    }
});