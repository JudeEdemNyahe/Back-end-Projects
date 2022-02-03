const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(mains) {
        this._courses.appetizers = mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);

    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + mains.price + desserts.price;

        return `Your meal is ${appetizer.name}, ${mains.name},${desserts.name}, ... The price is ${totalPrice}.`;
    }
};
menu.addDishToCourse('appetizers', 'soup', 10.25);
menu.addDishToCourse('appetizers', 'salad', 9.60);
menu.addDishToCourse('appetizers', 'appple sauce', 5.75);
menu.addDishToCourse('appetizers', 'pudding cake', 6.99);
menu.addDishToCourse('appetizers', 'cheese', 8.00);

menu.addDishToCourse('mains', 'Homemade pasta', 20.89);
menu.addDishToCourse('mains', 'Slow-cooked white beans', 54.87);
menu.addDishToCourse('mains', 'Tartiflette and aragula salade', 45.23);
menu.addDishToCourse('mains', 'Celeriac purée', 78.36);
menu.addDishToCourse('mains', 'Beet salad and fruit ketchup', 45.35);

menu.addDishToCourse('desserts', 'Caramel Cake', 10.25);
menu.addDishToCourse('desserts', 'White Chocolate', 11.25);
menu.addDishToCourse('desserts', 'Macaroon', 17.25);
menu.addDishToCourse('desserts', 'Iced Honey Nougatine', 9.25);
menu.addDishToCourse('desserts', 'Creme Brulee', 5.23);
let meal = menu.generateRandomMeal();
console.log(meal);