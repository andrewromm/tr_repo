const PROMO_CODES = ["PROMO10", "PROMO20", "PROMO30"];

const shoppingCart = {
  items: [],
  total: 0,
  addItem: function (itemName, itemPrice, quantity) {
    // if the item is already in the cart, update the quantity
    const itemIndex = this.items.findIndex((item) => item.name === itemName);
    if (itemIndex > -1) {
      this.items[itemIndex].price = itemPrice;
      this.items[itemIndex].quantity = quantity;
    } else {
      // else add the item to the cart
      this.items.push({
        name: itemName,
        price: itemPrice,
        quantity: quantity,
      });
    }
    this.calculateTotal();
  },
  removeItem: function (itemName) {
    const itemIndex = this.items.findIndex((item) => item.name === itemName);
    this.items.splice(itemIndex, 1);
    this.calculateTotal();
  },
  updateQuantity: function (itemName, newQuantity) {
    const itemIndex = this.items.findIndex((item) => item.name === itemName);
    this.items[itemIndex].quantity = newQuantity;
    this.calculateTotal();
  },
  calculateTotal: function () {
    this.total = this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
  clearCart: function () {
    this.items = [];
    this.total = 0;
  },
  applyDiscount: function (promoCode) {
    if (PROMO_CODES.includes(promoCode)) {
      this.total *= 1 - parseInt(promoCode.slice(-2)) / 100;
    }
  },
};

module.exports = shoppingCart;
