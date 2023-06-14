const cart = {
  toppings: [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: .25,
    quantity: 0
  }, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: .25,
    quantity: 0
  }],
  iceCream: [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1.25,
    quantity: 0
  }, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
  }, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 1.25,
    quantity: 0
  }],
  container: [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0
  }, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0
  }]
}

function addIngredient(category, itemName) {
  let ingredient = cart[category].find(type => type.name == itemName)
  ingredient.quantity++
  drawCart()
}

function drawCart() {
  let cartElement = document.getElementById('cart')
  let cartHtml = ""
  Object.values(cart).forEach(types => {
    types.forEach(type => {
      if (type.quantity > 0) {
        cartHtml += `
        <div class="d-flex">
          <div class="col-6 p-2">
            <h3>${type.name}</h3>
          </div>
          <div class="col-6 d-flex justify-content-between p-2">
            <h3>$${type.price.toFixed(2)}</h3>
            <h3>${type.quantity}</h3>
            <h3>$${(type.price * type.quantity).toFixed(2)}</h3>
          </div>
        </div>`
      }
    })
  })
  cartElement.innerHTML = cartHtml
  drawTotal()
}

function drawTotal() {
  let total = 0
  let totalElement = document.getElementById('total')
  Object.values(cart).forEach(types => {
    types.forEach(type => {
      total += (type.quantity * type.price)
    })
  })
  totalElement.innerText = total.toFixed(2)
}

function pay() {
  let doesPay = window.confirm('Are you sure you want to pay?')
  if (!doesPay) {
    return
  } else {
    Object.values(cart).forEach(types => {
      types.forEach(type => {
        type.quantity = 0
      })
    })
    drawCart()
  }
}