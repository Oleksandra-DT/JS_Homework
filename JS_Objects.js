/*var country = {
    countryName: 'Ukraine',
    capital: 'Kyiv',
    territoryArea: 603628,
    currency: 'Hryvnia',
    getInfo: function () {
        let result = country;
        return result;
    }
}
console.log (country.getInfo());
country.language = 'ukrainian';
console.log (country.getInfo());
country.population = 33.2;
console.log (country.getInfo());
*/


/*var services = {

    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function () {
        var totalPrice = 0;
        for (var servicesKey in this) {
            if (typeof this[servicesKey] === 'string') {
                totalPrice += parseInt(this[servicesKey]);
            }
        }
        return totalPrice;
    },
    minPrice: function () {
        let min = Number.MAX_VALUE;
        for (var servicesKey in this) {
            let currentPrice = parseInt(this[servicesKey])
            if (typeof currentPrice === 'number' && min > currentPrice) {
                min = currentPrice;
            }
        }
        return min;
    },
    maxPrice: function () {
        var max = 0;
        for (var servicesKey in this) {
            let currentPrice = parseInt(this[servicesKey])
            if (typeof currentPrice === 'number' && max < currentPrice) {
                max = currentPrice;
            }
        }
        return max;

    }
}
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());*/