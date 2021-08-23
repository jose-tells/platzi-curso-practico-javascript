const newPriceShow = document.getElementById("newPrice");
const price = document.getElementById("price");
const discount = document.getElementById("discount");
const newPriceBtn = document.getElementById("newPriceBtn");

// Coupons

const discountLayout = document.getElementById("discountMenu")


discountLayout.addEventListener("click", () => {
  if (discountLayout.innerText.toLocaleLowerCase().trim() == "have a discount code?"){
    console.log("coupon Mode")
    discountLayout.innerHTML = "Discount Calculator"
    discountLabel.innerHTML = "Discount coupon";
    newPriceBtn.innerHTML = "Validate";
  } else if(discountLayout.innerText.toLocaleLowerCase().trim() != "have a discount code?"){
    console.log("calculator mode")
    discountLayout.innerHTML = "Have a discount code?"
    discountLabel.innerHTML = "Discount";
    newPriceBtn.innerHTML = "Calculate";
  };
});

const discountLabel = document.getElementById("discountLabel")
const discountCode = document.getElementById("discount");
const discountCodeBtn = document.getElementById("discountCodeBtn")
const cuponStatus = document.getElementById("cuponStatus")

  newPriceBtn.addEventListener("click", (e) => {
    if (discountLayout.innerText.toLocaleLowerCase().trim() == "have a discount code?") {
      e.preventDefault();
      myNewPrice(price.value, discount.value)
    }else if (discountLayout.innerText.toLocaleLowerCase().trim() != "have a discount code?"){
      e.preventDefault();
      codeValidation(discountCode.value)
    }
  });

const cupons = [
  {
    code: "yesSir",
    discount: 10
  },
  {
    code: "bombaYplena",
    discount: 30
  },
  {
    code: "yalabetia",
    discount: 50
  }
]



function codeValidation(code) {
  switch (code) {
    case cupons[0].code :
      cuponStatus.innerHTML = `Your discount is ${cupons[0].discount}%`;
      break;
    case cupons[1].code :
      cuponStatus.innerHTML = `Your discount is ${cupons[1].discount}%`;
      break;
    case cupons[2].code : 
      cuponStatus.innerHTML = `Your discount is ${cupons[2].discount}%`;
      break;
    default :
      cuponStatus.innerHTML = "Introduce a valid cupon code";
  }
}

newPriceBtn.addEventListener("click", (e) => {
});

function myNewPrice(price, discount){
  let newPrice = ((price * (100 - discount)) / 100)
  newPriceShow.innerHTML = newPrice
};

