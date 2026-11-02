class Product {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const p1 = new Product("Keyboard");
const p2 = new Product("Mouse");

console.log(p1.getName());
console.log(p2.getName());

console.log(p1.getName === p2.getName);