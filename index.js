function addingEventListener() {
    function clickAlert() {
        alert('I was clicked!');
    }
    
    function addingEventListener() {
        const input = document.getElementById('button');
        
        if (input) {
            input.addEventListener('click', clickAlert);
        }
    }
    
    addingEventListener();
    
}
