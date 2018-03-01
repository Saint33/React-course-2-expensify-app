const add =  ( a, b ) => {

    return a + b;
};

console.log(add(55, 1));

const user = {
    name: 'Andrew',
    cities: ['Rostov-na-Donu', 'Moscow', 'New York'],
    printPlacesLived() {
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
    }
}

console.log(user.printPlacesLived());

//challenge area

const multiplier = {
    numbers: [4,5,6,7,2,3,4],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number)=> {
            return number * this.multiplyBy
    });
    }
}

console.log(multiplier.multiply());