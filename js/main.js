
let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector('.arrow-left'),
arrowRight = document.querySelector('.arrow-right')
current = 0;


// Clear all images
function reset() {
for (let i = 0; i < sliderImages.length; i++) {
  sliderImages[i].style.display = "none";
}
}

// Initial slide
function startSlide() {
reset();
sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
current--;
}

// Show next
function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
if (current === 0) {
  current = sliderImages.length;
}
slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
if (current === sliderImages.length - 1) {
  current = -1;
}
slideRight();
});

startSlide();



const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const numberOfItems = document.querySelector('.order-num')
const itemQty = document.querySelector('.quantity')
let numberItem = 0 ;


const addItems = () => {
numberItem += 1
numberOfItems.innerHTML = numberItem

itemQty.innerHTML = `<p>${numberItem}</p>`
priceTotal()
}

// Function to add No. of Items
const subtractItems = () => {
numberItem -= 1
numberOfItems.innerHTML = numberItem
if(numberItem < 1){
  numberItem = 0;
  numberOfItems.innerHTML = numberItem
}

itemQty.innerHTML = `<p>${numberItem}</p>`
priceTotal()

}

const price = document.querySelector('#amt').innerHTML

const cartPrice = document.querySelector('#cartPrice')
const cartItem = document.querySelector('#cartItem')

const priceTotal = () => {
let acct = Number(price)
cartItem.innerHTML = `No. of Item(s): ${numberItem} * ${acct} = ${numberItem * acct} `;

}


plus.addEventListener('click', addItems)
minus.addEventListener('click', subtractItems)


const cart = document.querySelector('#cart')
const cartContainer = document.querySelector('.cartsection')


cart.onclick = () => {
cartContainer.classList.toggle('showCart')

}

const displayShoe = document.querySelectorAll('.shoe')

displayShoe.forEach(function(shoe){
  shoe.onclick =()=>{

   
    console.log('myshoe')
  }
})
console.log(displayShoe)

/* 
<div class="item-value">
      <div class="item-image">
        <img src="./images/image-product-1-thumbnail.jpg" alt="Shoe1">
      </div>
      <div class="item-name">
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 * 3 <span></span></p>
      </div>
      <div class="item-delete">
        <img src="./images/icon-delete.svg" alt="">
      </div>

</div>
    <div class="checkout">
      <button>Checkout</button>
    </div>
*/