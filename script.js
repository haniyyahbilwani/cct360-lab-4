// STATE: remembers how many times the user has checked
let checks = 0;

function pickOutfit() {
    // VARIABLES: read what the user typed and ticked
    let temp = document.getElementById('tempInput').value;
    let raining = document.getElementById('rainBox').checked; // true or false

    // If nothing was typed, ask for a temperature and stop here
    if (temp === '') {
        document.getElementById('outfit').innerHTML = 'Please type a temperature first!';
        return;
    }

    temp = Number(temp); // turns the typed text into a number
    checks = checks + 1;

    // CONDITIONALS: 4 possible outfits
    if (temp <= 0) {
        document.getElementById('outfit').innerHTML = 'Freezing! Wear a winter coat, scarf and boots.';
        document.getElementById('page').style.backgroundColor = 'lightblue';
    } else if (temp < 10) {
        document.getElementById('outfit').innerHTML = 'Chilly. A jacket and jeans will do.';
        document.getElementById('page').style.backgroundColor = 'lightgray';
    } else if (temp < 20) {
        document.getElementById('outfit').innerHTML = 'Nice weather! A light sweater is perfect.';
        document.getElementById('  page').style.backgroundColor = 'lightgreen';
    } else {
        document.getElementById('outfit').innerHTML = 'Hot! T-shirt, shorts and sunglasses.';
        document.getElementById('page').style.backgroundColor = 'orange';
    }

    // CONDITIONAL: rain adds an extra tip
    if (raining === true) {
        document.getElementById('extra').innerHTML = "It's raining, so bring an umbrella!";
    } else {
        document.getElementById('extra').innerHTML = '';
    }

    // STATE: the page reacts differently after 5 checks
    if (checks >= 5) {
        document.getElementById('count').innerHTML = 'You have checked ' + checks + ' times... just wear layers!';
    } else {
        document.getElementById('count').innerHTML = 'Checks so far: ' + checks;
    }
}

// EVENT LISTENER: run pickOutfit when the button is clicked
document.getElementById('checkBtn').addEventListener('click', pickOutfit);