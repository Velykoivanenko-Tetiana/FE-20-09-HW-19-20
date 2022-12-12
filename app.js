// add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".btn2");

// for (let i=0; i<addToCartBtns.length; i++){
//     addToCartBtns[i].addEventListener("click", function(){
// let prevproductsCount = +productsCountEl.textContent; 
// productsCountEl.textContent= prevproductsCount+1; });
// }

for (let i=0; i<addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener("click", function(){
productsCountEl.textContent= +productsCountEl.textContent+1; });
}

// addToCartBtns.forEach((item) => {
//     item.addEventListener("click", function () {
//       console.log("clicked foreach");
//     });
//   });

let moreDetailsBtns = document.querySelectorAll(".btn1");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => {
    item.addEventListener("click", openModal);
});


btnClose.addEventListener("click", closeModal);


function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}
function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

//   toggle like state
  let likeBtns = document.querySelectorAll (".heart");

  likeBtns.forEach((item)=>{
    item.addEventListener("click", function(){
        // if(item.classList.contains("liked")) {
        //     item.classList.remove("liked");
        // } else {
        //     item.classList.add("liked");
        // }
        item.classList.toggle("liked");
    });
  });

  function showModalByScroll(){
    if(window.scrollY>document.body.scrollHeight/2){
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

//   slider
  $(".slider-block").slick({
    dots:true,
  });

  AOS.init();

  let incrementBtns = document.querySelectorAll(".increment");
  let decrementBtns = document.querySelectorAll(".decrement");
  let inputFields = document.querySelectorAll(".product-quantity input");


//   incrementBtns.forEach((item,i)=>{
//     item.addEventListener("click", function (){
//         let currentCount = +inputFields[i].value;
//         inputFields[i].value = currentCount+1;
//     });
//   });

//   decrementBtns.forEach((item, i) => {
//     item.addEventListener ("click", function(){
//         let currentCount = +inputFields[i].value;
//         inputFields[i].value = currentCount-1;
//     });
//   });

function Counter (incrementBtn, decrementBtn, inputField,minCount = 1, maxCount = 10){
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };
  
this.toggleButtonState = function() {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;

};
this.toggleButtonState();
console.log(this);


this.increment = function (){
  this.domRefs.inputField.value = +this.domRefs.inputField.value+1;
  this.toggleButtonState();
};

this.decrement = function (){
  this.domRefs.inputField.value = +this.domRefs.inputField.value-1;
  this.toggleButtonState();
};

this.domRefs.incrementBtn.addEventListener("click",
this.increment.bind(this)
);

this.domRefs.decrementBtn.addEventListener("click",
this.decrement.bind(this)
);} 

let counter1 = new Counter(incrementBtns[0],decrementBtns[0], inputFields[0]);

