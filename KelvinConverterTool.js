//Today's forcast in Kelvin
const kelvin = 293;
console.log(`Today's forcast in Kelvin is: ${kelvin}`);

//Formula converting Kelvin to Celsius
let celsius = kelvin - 273;
console.log(`Today's forcast in Celsius is: ${celsius}`);

//Formula converting Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
console.log(`Today's forcast in Fahrenheit is: ${Math.floor(fahrenheit)}`);

//Formula converting Celsius to Newton
let newton = celsius * (33/100);
console.log(`Today's forcast in Newton is: ${Math.floor(newton)}`);