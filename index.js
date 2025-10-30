const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9},
]

let cashInRegister = 100;
const orderQue = []

// add a utility function "addNewPizza" that takes a pizza object and adds it to a menu

//ini jawabanku
// function addNewPizza (name, price){
//     let temp = { name: name, price: price}
//     menu.push(temp)
//     console.log(menu)
// }

// addNewPizza("meatball", 6)
// addNewPizza("pineapple", 9)

//ini jawaban mentor

function addNewPizza(pizzaObj){
    menu.push(pizzaObj)
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder (name) {
  for (let i = 0; i<= menu.length;i++){
      if (name === menu.name){
       console.log( cashInRegister += menu[i].price)
        orderQue.push({pizza: name, status:"ordered"})
    }
  }
  return name
}

console.log(placeOrder("Veggie"))
