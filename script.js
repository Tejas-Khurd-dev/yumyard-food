// MOBILE MENU
let hamburger = document.querySelector(".hamburger")
let mobileMenu = document.querySelector(".mobile-menu")
hamburger.addEventListener("click", () => mobileMenu.classList.toggle("mobile-menu-active"))

// MENU SECTION
const menu = [
  {
    "image": "https://images.slurrp.com/prod/recipe_images/transcribe/snack/Vegetable-Burger.webp",
    "menuFoodName": "Veggie Burger",
    "menuCardCart": 250
  },
  {
    "image": "https://i.pinimg.com/1200x/48/46/63/4846631505e7980bc256bb4938027372.jpg",
    "menuFoodName": "Veg Pizza",
    "menuCardCart": 320
  },
  {
    "image": "https://i.pinimg.com/1200x/b0/a1/a3/b0a1a3b49668107c69688802a59c8227.jpg",
    "menuFoodName": "Grilled Sandwich",
    "menuCardCart": 150
  },
  {
    "image": "https://i.pinimg.com/736x/7b/7a/4a/7b7a4ad672b6146c6c278cf6c596e3da.jpg",
    "menuFoodName": "French Fries",
    "menuCardCart": 120
  },
  {
    "image": "https://i.pinimg.com/1200x/4f/10/da/4f10da5c58089b7e57ef33222272ade1.jpg",
    "menuFoodName": "Cheesy Pasta",
    "menuCardCart": 280
  },
  {
    "image": "https://i.pinimg.com/1200x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg",
    "menuFoodName": "Veg Momos",
    "menuCardCart": 180
  },
  {
    "image": "https://i.pinimg.com/736x/2a/c9/e9/2ac9e9a6dab61d8bd826d93e6c8900eb.jpg",
    "menuFoodName": "Samosa",
    "menuCardCart": 200
  },
  {
    "image": "https://i.pinimg.com/1200x/68/5c/14/685c14c823f361e2daf0f5ec7848f136.jpg",
    "menuFoodName": "Paneer Roll",
    "menuCardCart": 160
  }
]
let menuCardString = ""

let menuCard = document.querySelector(".menu-card-container")

for(let i=0; i<menu.length; i++) {
  menuCardString += 
  `
  <div class="menu-food-card">
    <img src=${menu[i].image}>

    <div class="menu-card-content">
      <h2 class="menu-food-name text-center">${menu[i].menuFoodName}</h2>

      <div class="menu-card-cart text-center">
        <h3>&#8377 ${menu[i].menuCardCart}</h3>
        <a href="#" class="menu-card-btn btn">ADD TO CART</a>
      </div>
   </div>
  </div>

  `
}

menuCard.innerHTML = menuCardString

// CART TOGGLE 
const cartIcon = document.querySelector('.cart-icon')
const cartTabContainer = document.querySelector('.cart-tab-container')
const closeCartBtn = document.querySelector('.bottom-container .btn:first-child')

cartIcon.addEventListener("click", () => cartTabContainer.classList.add("cart-tab-container-active"))

closeCartBtn.addEventListener("click", () => cartTabContainer.classList.remove("cart-tab-container-active"))




// ADD TO CART FUNCTIONALITY 
let cartValue = 0
let totalPrice = 0
let cartHTML = ""
let singleItemPrices = []
let foodName = []

let totalPriceHTML = document.querySelector(".total-price")
let cartValueHTML = document.querySelector(".cart-value")
let cartList = document.querySelector(".cart-list ul");
let addToCardBtns = document.querySelectorAll(".menu-card-btn");

for(let i = 0; i < menu.length; i++){  
  addToCardBtns[i].addEventListener("click", () => {  

    if (foodName.includes(menu[i].menuFoodName)) {
      alert(`${menu[i].menuFoodName} is already in your cart! You can increase the quantity from cart.`);
      return; 
    }

    cartHTML += 
    `
    <li class="cart-list-item">
      <div class="cart-list-container flex between">
        <div class="cart-list-food-img"><img src="${menu[i].image}"></div>

        <div class="cart-list-food-name text-center"">
          <h3 class="cart-list-name text-center">${menu[i].menuFoodName}</h3>
          <h3 class="cart-list-price text-center">&#8377; <span class="item-price">${menu[i].menuCardCart}</span></h3>
        </div>

        <div class="cart-list-counter-container flex">
          <div class="minus-btn"><a href="#"><i class="fa-solid fa-minus"></i></a></div>
          <div class="quantity">&nbsp; 1 &nbsp;</div>
          <div class="plus-btn"><a href="#"><i class="fa-solid fa-plus"></i></a></div>

          <div class="trash">
            <a href="#"><i class="fa-solid fa-trash"></i></a>
          </div>
        </div>
      </div>
    </li>
    `;
    cartValue++
    singleItemPrices.push(menu[i].menuCardCart)
    foodName.push(menu[i].menuFoodName)
    totalPrice += menu[i].menuCardCart
    cartList.innerHTML = cartHTML; 

    totalPriceHTML.innerHTML = `<h3>Total Price: &#8377;${totalPrice}</h3>`
    cartValueHTML.innerHTML = cartValue

    quantity()
  })
}

function quantity() {
  let quantityHTMLs = document.querySelectorAll(".quantity");
  let minusBtns = document.querySelectorAll(".minus-btn");
  let plusBtns = document.querySelectorAll(".plus-btn");
  let itemPrices = document.querySelectorAll(".item-price");
  let trashBtns = document.querySelectorAll(".trash");

  

  for(let i = 0; i < minusBtns.length; i++) {
    let currentQuantity = 1; 
    let itemPrice = parseInt(itemPrices[i].textContent)
    console.log(itemPrice);
    
    let singleItemPrice = singleItemPrices[i];

    minusBtns[i].addEventListener("click", function() {
      if (currentQuantity <= 1) {
        quantityHTMLs[i].innerHTML = `&nbsp; 1 &nbsp;`;
        alert("Quantity can't be less than one")
      }
      else {
        currentQuantity--;
        totalPrice -= singleItemPrice
        quantityHTMLs[i].innerHTML = `&nbsp; ${currentQuantity} &nbsp;`;
        totalPriceHTML.innerHTML = `<h3>Total Price: &#8377;${totalPrice}</h3>`
        itemPrices[i].innerHTML =  currentQuantity * singleItemPrice
      }
    });

    plusBtns[i].addEventListener("click", function() {
      currentQuantity++;
      totalPrice += singleItemPrice
      quantityHTMLs[i].innerHTML = `&nbsp; ${currentQuantity} &nbsp;`;
      totalPriceHTML.innerHTML = `<h3>Total Price: &#8377;${totalPrice}</h3>`
      itemPrices[i].innerHTML =  currentQuantity * singleItemPrice
    });

    trashBtns[i].addEventListener("click", function() {
      
      let currentQty = parseInt(quantityHTMLs[i].textContent.trim());
      let priceToSubtract = singleItemPrice * currentQty;

      totalPrice -= priceToSubtract;
      totalPriceHTML.innerHTML = `<h3>Total Price: &#8377;${totalPrice}</h3>`;
      
      let cartListItem = trashBtns[i].closest('.cart-list-item');
      cartListItem.remove();

      let itemName = cartListItem.querySelector('.cart-list-name').textContent;
      let nameIndex = foodName.indexOf(itemName);
      if (nameIndex >= 0) {
        foodName.splice(nameIndex, 1);
        singleItemPrices.splice(nameIndex, 1);
      }

      cartValue--;
      cartValueHTML.innerHTML = cartValue;
    });
    
  }
}


// REVIEW SECTION
const reviews = [
  {
    name: "Tejas Khurd",
    image: "https://i.pinimg.com/1200x/34/42/60/344260af86ef267a839f91b265dde2d0.jpg",
    rating: 4,
    text: `Foodie is the best. Besides the many delicious meals, the service is 
    also very good, especially very fast
    delivery. I highly recommend Foodie to you.`
  },
  {
    name: "HARSH DHURI",
    image: "https://i.pinimg.com/1200x/93/59/fe/9359fe0c65122fc29bc9b4ff38c23ea9.jpg",
    rating: 5,
    text: `Amazing food quality and the delivery was super quick! The packaging was excellent and everything arrived hot. Will definitely order again.`
  },
  {
    name: "VEDANT DESAI",
    image: "https://i.pinimg.com/736x/13/ad/09/13ad090bace6f986114d96973c69a0bb.jpg",
    rating: 5,
    text: `Best food delivery service I've used. The variety of options is great and customer service is top-notch. Highly satisfied with every order.`
  },
  {
    name: "SHRAVANI CHORMORE",
    image: "https://i.pinimg.com/736x/57/5a/b3/575ab3182c51aad2bd18b6628c68210b.jpg",
    rating: 4,
    text: `Delicious food and great prices. The app is 
    easy to use and tracking is 
    very accurate. My go-to choice for food delivery!`
  }
];


let currentReview = 0;

function updateReview() {
  const review = reviews[currentReview];
  
  document.querySelector('.customer-review-detail img').src = review.image;
  
  document.querySelector('.customer-name').innerHTML = review.name;
  
  const ratingContainer = document.querySelector('.rating');
  ratingContainer.innerHTML = '';
  for (let i = 0; i < review.rating; i++) {
    ratingContainer.innerHTML += '<i class="fa-solid fa-star"></i>';
  }
  
  document.querySelector('.customer-review > p').innerHTML = review.text;
}

document.querySelector('.review-btn-left').addEventListener('click', () => {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  updateReview();
});

document.querySelector('.review-btn-right').addEventListener('click', () => {
  currentReview = (currentReview + 1) % reviews.length;
  updateReview();
});