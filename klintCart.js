/* Using JaaScript object literal pattern, create an object called “cart”. The cart object will have a “cartArray” property as an array, “addToCart” method, “removeFromCart” method and a “standBy” method.

 

The standby function should be able to accept commands and perform the tasks based on the commands passed. The commands are

 

    1. “add” which will add a product to cart
    2. “remove” which will remove a product from the cart
    3. “show-items” which will show all the items in the cart as string seperated by comma and space.
    4. “length” which will log out the number of products inside the cart
    5. “exit” which will gracefully exit the program.*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cart = {
  cartArry: [],
  addToCart(input) {
    cart.cartArry.push(input);
    rl.question("what do you want to do? ", cart.standBy);
  },
  removeFromCart(input) {
    cart.cartArry.pop(input);
    rl.question("what do you want to do? ", cart.standBy);
  },
  standBy: function (input) {
    if (input === "add") {
      rl.question("what do you want to add? ", cart.addToCart);
    }

    if (input === "remove") {
      rl.question("what do you want to remove? ", cart.removeFromCart);
    }

    if (input === "showcase") {
      const showcase = cart.cartArry.join(", ");
      console.log(showcase);
      rl.question("what do you want to do? ", cart.standBy);
    }

    if (input === "length") {
      const length = cart.cartArry.length;
      console.log(length);
      rl.question("what do you want to do? ", cart.standBy);
    }

    if (input === "exit") {
      rl.close();
    }
  },
};

rl.question("what do you want to do? ", cart.standBy);
