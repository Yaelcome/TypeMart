import products from './products';

const productName: string = 'fanny pack';
let shipping: number = 0;
let taxPercent: number = 0.5;
let taxTotal: number;
let total: number;
let productPreOrder: boolean;
const shippingAddress: string = 'New York City, 6000 Philippines';

const product = products.filter (product => product.name === productName) [0];

console.log(product);

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} 

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

if (product.price >= 25 && shipping === 0) {
  console.log('We provide free shipping for this product.')
} else {
  shipping = 5;
};

if (product.preOrder === true) {
  console.log('We will send you a message when your order is on the way.');
};

console.log(`
Product name: ${product.name}
Shipping address: ${shippingAddress}
Price of the product: ${product.price}
Tax total: ${taxTotal}
Shipping: ${shipping}
Total Amount: ${total}
`)


