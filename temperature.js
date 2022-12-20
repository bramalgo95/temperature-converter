// Request user to choose in which metric is the temperature he is converting
let metric1 = prompt("In which metric is the temperature you are converting?\nC - Celsius\nF - Fahrenheit\nK - Kelvin");


// Request user for the temperature number he want convert 
let tempNum = Number(prompt("What is the temperature number you want to convert?"));

// Request user to choose what he want to convert their current temperature to
let metric2 = prompt("To which metric would you like to convert the temperature?\nC - Celsius\nF - Fahrenheit\nK - Kelvin");

// Consider case in which user choose Celcius as first choice and Fahrenheit as second choice
// Check for both uppercase and lowercase input
if ((metric1 == "C" || metric1 == "c") && (metric2 == "F" || metric2 == "f")) {
    let newTemp = tempNum * 9 / 5 + 32;
    alert(`${tempNum}\u00B0C is ${newTemp.toFixed(2)}\u00B0F.`);
}

// Consider case in which user choose Celcius as first choice and Kelvin as second choice
else if ((metric1 == "C" ||  metric1 == "c") && (metric2 == "K" || metric2 == "k")) {
    let newTemp = tempNum + 273.15;
    alert(`${tempNum}\u00B0C is ${newTemp.toFixed(2)}K.`);
}

// Consider case in which user choose Fahrenheit as first choice and Celcius as second choice
else if ((metric1 == "F" || metric1 == "f") && (metric2 == "C" || metric2 == "c")) {
    let newTemp = (tempNum - 32) * 5 / 9;
    alert(`${tempNum}\u00B0F is ${newTemp.toFixed(2)}\u00B0C.`);
}

// Consider case in which user choose Fahrenheit as first choice and Kelvin as second choice
else if ((metric1 == "F" || metric1 == "f") && (metric2 == "K" || metric2 == "k")) {
    let newTemp = (tempNum + 459.67) * 5 / 9;
    alert(`${tempNum}\u00B0F is ${newTemp.toFixed(2)}K.`);
}

// Consider case in which user choose Kelvin as first choice and Celsius as second choice
else if ((metric1 == "K" || metric1 == "k") && (metric2 == "C" || metric2 == "c")) {
    let newTemp = tempNum - 273.15;
    alert(`${tempNum}K is ${newTemp.toFixed(2)}\u00B0C.`);
}

// Consider case in which user choose Kelvin as first choice and Fahrenheit as second choice
else if ((metric1 == "K" || metric1 == "k") && (metric2 == "F" || metric2 == "f")) {
    let newTemp = tempNum * 9 / 5 - 459.67;
    alert(`${tempNum}K is ${newTemp.toFixed(2)}\u00B0F.`);
}

// If the user input another letter than should 
else if (metric1 != "C" || metric1 != "F" || metric1 != "K" || metric2 != "C" || metric2 != "F" || metric2 != "K" || metric1 != "c" || metric1 != "f" || metric1 != "k" || metric2 != "c" || metric2 != "f" || metric2 != "k"){
    alert("Please enter correct option!");
}
