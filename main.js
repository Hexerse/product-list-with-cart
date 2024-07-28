data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

const addtocartbuttons = document.querySelectorAll(".add-to-cart");
const afteraddtocart = document.querySelectorAll(".after-add-to-cart");
const total = document.querySelector(".quantity");

let i = 0;
let totalValue = 0;
let cart = [];

const addtocartbutton = addtocartbuttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.add("hidden");
    afteraddtocart[index].classList.remove("hidden");
    totalValue += 1;
    printtotalValue(totalValue);
    cartManager(index);
    addtoCart(button);
  });
});

function addtoCart(button) {
  i = button.dataset.option;
  cart.push(data[i]);
  console.log(cart);
  generateHTML(data[i], i);
}

function cartManager(index) {
  let currentValue;
  const smallCarts = document.querySelectorAll(".number__of__items");
  const itemAmount = document.querySelectorAll(".item__amount");
  //compares the index to make sure values are decreased correctly
  const minus = document
    .querySelectorAll(".cart-minus")
    .forEach((selector, minusIndex) => {
      selector.addEventListener("click", () => {
        if (index === minusIndex) {
          smallCarts[index].innerHTML -= 1;
          totalValue -= 1;
          currentValue = smallCarts[index].innerHTML;
          printtotalValue(totalValue);
          itemamountTracker(currentValue, index);
        }
      });
    });
    //compares the selector index and addindex to make sure that values are added correctly
  const add = document
    .querySelectorAll(".cart-add")
    .forEach((selector, addIndex) => {
      selector.addEventListener("click", () => {
        if (index === addIndex) {
          currentValue = parseInt(smallCarts[index].innerHTML);
          currentValue += 1;
          totalValue += 1;
          smallCarts[index].innerHTML = currentValue;
          printtotalValue(totalValue);
          itemamountTracker(currentValue, index);
        }
      });
    });
  smallCarts[index].innerHTML += 1;
}

//Prints total value
const printtotalValue = (totalValue) => {
  total.innerHTML = totalValue;
};

printtotalValue(totalValue);

//Generates the cart items
function generateHTML(cartItem, data) {
  const div = document.querySelector(".cart__item");
  let html = "";
  html += `<div class="cart__item__header">
    <h4>${cartItem.name}</h4>
  </div>
  <div class="cart__item__text">
    <p class="item__amount" data-item="${data}">1x</p>
    <p class="cost__per__item">@ $${cartItem.price.toFixed(2)}</p>
    <p class="total__cost">$5.50</p>
  </div> `;

  div.innerHTML += html;
}
// currentValue from cartManager() takes the currentValue of each item
// index is the takes value of item arranged in DOM
function itemamountTracker(currentValue, index) {
  const itemAmount = document.querySelectorAll(".item__amount");
  itemAmount.forEach((item) => {
    if (item.dataset.item == index) {
      item.innerHTML = `${currentValue}x`;
    }
  });
}

//Still need to do total cost per item and order total