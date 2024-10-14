function addingEventListener() {
    const button = document.getElementById('button');
    if (button) {
        button.addEventListener('click', () => {
            console.log('Button clicked!');
        });
    } else {
        console.error('Button not found!');
    }
}

// Ensure the DOM is fully loaded before running the function
document.addEventListener('DOMContentLoaded', () => {
    addingEventListener();
});


