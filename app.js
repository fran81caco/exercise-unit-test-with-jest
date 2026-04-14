// Declaro los valores de las monedas
let oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07, // US Dollar
    "GBP": 0.87, // British Pound
};
// Declaro la funcion "fromEuroToDollar"
const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * oneEuroIs.USD;
};

// Declaro la funcion "fromDollarToYen"
    const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar/oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
};

// Declaro la funcion "fromYenToPound"      
const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
    return (valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };


