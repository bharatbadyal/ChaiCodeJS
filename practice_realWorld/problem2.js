function product(name,price) {
    this.name = name,
    this.price = price
}

product.prototype.getprice = function(){
    return this.price;
}

function PhysicalProduct(name,price,weight){
    product.call(this,name,price); //inherit properties
    this.weight = weight;
}

PhysicalProduct.prototype = Object.create(product.prototype);
PhysicalProduct.prototype.constructor = PhysicalProduct;
// this is prototypal chain setup

PhysicalProduct.prototype.calculateShipping = function(){
    return this.weight *5;
}

const book = new PhysicalProduct("xyz",500,2);
console.log(book.getprice());
console.log(book.calculateShipping())