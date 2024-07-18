
function greet(neighbourName) {
    return "Hello, " + neighbourName;
}

function greetingWidget() {
    return {
        neighbourName: '',
        greeting: '',

        greetNeighbour() {
            if (this.neighbourName.trim() !== '') {
                this.greeting = greet(this.neighbourName);
            } else {
                this.greeting = 'Please enter a neighbour\'s name.';
            }
        }
    };
}



document.addEventListener('alpine:init', () => {
    Alpine.data('greetingsWidget', greetingWidget);
})