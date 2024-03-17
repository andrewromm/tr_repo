const shoppingCart = require('../shoppingCart');

describe('shoppingCart', () => {
    let cart;
    
    beforeEach(() => {
        cart = Object.create(shoppingCart);
    });
    
    test('addItem() adds an item to the cart', () => {
        cart.addItem('apple', 0.99, 1);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0].name).toBe('apple');
        expect(cart.items[0].price).toBe(0.99);
        expect(cart.items[0].quantity).toBe(1);
    });
    
    test('addItem() updates the quantity of an item if it is already in the cart', () => {
        cart.addItem('apple', 0.99, 1);
        cart.addItem('apple', 0.99, 2);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0].quantity).toBe(2);
    });
    
    test('removeItem() removes an item from the cart', () => {
        cart.addItem('apple', 0.99, 1);
        cart.addItem('banana', 0.59, 2);
        cart.removeItem('apple');
        expect(cart.items.length).toBe(1);
        expect(cart.items[0].name).toBe('banana');
    });
    
    test('updateQuantity() updates the quantity of an item in the cart', () => {
        cart.addItem('apple', 0.99, 1);
        cart.updateQuantity('apple', 3);
        expect(cart.items[1].quantity).toBe(3);
    });
    
    test('calculateTotal() calculates the total price of the items in the cart', () => {
        cart.addItem('apple', 0.99, 1);
        cart.addItem('banana', 0.59, 2);
        cart.calculateTotal();
        expect(cart.total).toBe(2.17);
    });
    
    test('clearCart() removes all items from the cart', () => {
        cart.addItem('apple', 0.99, 1);
        cart.addItem('banana', 0.59, 2);
        cart.clearCart();
        expect(cart.items.length).toBe(0);
        expect(cart.total).toBe(0);
    });
    
    test('applyDiscount() applies a discount to the total price of the items in the cart', () => {
        cart.addItem('apple', 5, 1);
        cart.addItem('banana', 10, 2);
        cart.applyDiscount('PROMO10');
        expect(cart.total).toBe(22.5);
    });
});