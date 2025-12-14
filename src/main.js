// --- Elementy DOM ---
const startButton = document.getElementById('start-button');
const lightContainer = document.getElementById('traffic-light');

class TrafficLight {
    constructor(container) {
        this.container = container;
        this.currentState = 'red';
        this.lights = {};

        // === 1. TWORZENIE ELEMENTÓW DOM ===

        const red = document.createElement('div');
        red.className = 'light red';

        const yellow = document.createElement('div');
        yellow.className = 'light yellow';

        const green = document.createElement('div');
        green.className = 'light green';

        // Zapamiętujemy elementy
        this.lights.red = red;
        this.lights.yellow = yellow;
        this.lights.green = green;

        // Dodajemy do kontenera
        container.append(red, yellow, green);
    }

    start() {
        this.changeState('red');
    }

    changeState(newState) {
        this.currentState = newState;

        // === 3. Wyłączamy wszystkie światła ===
        for (const key in this.lights) {
            this.lights[key].classList.remove('active');
        }

        // === 4. Włączamy odpowiednie światło i ustawiamy następny krok ===

        switch (this.currentState) {

            case 'red':
                this.lights.red.classList.add('active');
                setTimeout(() => this.changeState('green'), 2000);
                break;

            case 'green':
                this.lights.green.classList.add('active');
                setTimeout(() => this.changeState('yellow'), 2000);
                break;

            case 'yellow':
                this.lights.yellow.classList.add('active');
                setTimeout(() => this.changeState('red'), 1000);
                break;
        }
    }
}

// === Inicjalizacja ===
const myLight = new TrafficLight(lightContainer);

// === 5. Event Listener ===
startButton.addEventListener('click', () => {
    myLight.start();
});
