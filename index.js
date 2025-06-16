function convertToCelcius(fahrenheit) {
    return ((fahrenheit - 32) * 5/9);
}

function describeTemperature(fahrenheit) {
    const celcius = convertToCelcius(fahrenheit);

    let description;

    if (celcius < 0) {
        description = "disgustingly cold";
    } else if (celcius < 20) {
        description = "cold";
    } else if (celcius < 30) {
        description = "warm"
    } else if (celcius < 40) {
        description = "hot"
    } else {
        description = "disgustingly hot. Don't go outside.";
    }

    return `${fahrenheit} fahrenheit is ${celcius} celcius, it is ${description}!`;
} 

const fahrenheit = prompt("Fahrenheits:");
const description = describeTemperature(fahrenheit);
alert(description);