# leeds_async_morning_task

## Pizza Shop (ayschronous callbacks)

### 1 - `makePizza`

You're the supervisor of a fast-food pizza restaurant and your staff are having trouble keeping up with the orders. You decide that, as always, javascript has the answers, and you decide to build a function to improve the efficiency of your staff and solve all of your management woes.

Your challenge is to write a function which processes a single pizza order, making it ready for delivery (cooked and boxed!) Your function should take a `pizzaOrder` (string)and `cb` (an error-first callback function).

You have been provided with 3 async utility functions:

`preparePizza`

- Takes a single pizza order and callback and invokes callback with a raw pizza.

`cookPizza`

- Takes a single raw pizza and callback and and invokes callback returns a cooked pizza.

`boxPizza`

- Takes a single cooked pizza and a callback and invokes callback with a boxedPizza

All of these utility functions are asynchronous so you'll have to make use of callbacks in order to get your pizzas ready for delivery in one piece.

**IMPORTANT** Your `makePizza` function should not return anything - you must call upon the utils functions to get the pizza cooked and boxed, ready for delivery!

You can use the pre-prepared tests for this.

### 2 - `makePizzas` - ADVANCED

Now you've got dealing with a single order down, you need to build a function that handles an array of pizzas, and brings them back in the correct order.

Using all the single pizza utils from before, write a function that takes an array and returns the prepared, cooked and boxed pizzas in an ordered array. You may not use a sort function.
