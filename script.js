const VacuumCleaners = [
    {
      name: "Dyson V11 Absolute",
      description: "The Dyson V11 Absolute provides powerful cleaning with intelligent suction adjustment.",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR26ZeLWiI4aAwMryLMjH3tz3I_bCQ2vBul4o8IbONclUffezzFmnQCUOYKC-sFsI3IHt0HzVFgMykC1hTk575EsdEVMbq1_BHt24EM_jEVTUkbL4kgxKF0&usqp=CAE", // Blank image
      priceWithDiscount: 49999, // Price in Rupees
      priceWithTaxes: 55999, // Price in Rupees with all taxes
      exclusiveOffer: "Available on dyson.in with exclusive offers"
    },
    {
      name: "Dyson V8 Animal",
      description: "The Dyson V8 Animal offers versatile cleaning for homes with pets, with powerful suction.",
      image: "https://m.media-amazon.com/images/I/41KWxpI6yCL._SX569_.jpg", // Blank image
      priceWithDiscount: 34999, // Price in Rupees
      priceWithTaxes: 38999, // Price in Rupees with all taxes
      exclusiveOffer: "Available on dyson.in with exclusive offers"
    },
    {
      name: "Dyson Cyclone V10",
      description: "The Dyson Cyclone V10 provides powerful suction to deep clean your home.",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGYzJio5uuLt2Wp00GknOcZLKOCD5V35TI9up2fB87hJzi8cP-kSfj4wusLR3BNYIunbe95UE58HEl9SeNOEPUyL_S8G5lBqOnc4NoNdU&usqp=CAE", // Blank image
      priceWithDiscount: 44999, // Price in Rupees
      priceWithTaxes: 49999, // Price in Rupees with all taxes
      exclusiveOffer: "Available on dyson.in with exclusive offers"
    },
    {
      name: "Dyson Omni-glide",
      description: "The Dyson Omni-glide is engineered for daily cleaning with ease and flexibility.",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ90pEKgYnaVODxD0Wy2Fs4Rry1WNQnWmtclf_85n8TWyE56X2eTvf_U90Veseok_91WWmdOUyW8ImzeMX1q7FW9YKmIjr2OCICiFYkDizmaD8RqgvrNjQt-Q&usqp=CAE", // Blank image
      priceWithDiscount: 29999, // Price in Rupees
      priceWithTaxes: 33999, // Price in Rupees with all taxes
      exclusiveOffer: "Available on dyson.in with exclusive offers"
    }
  ];
  
var container1= ""
VacuumCleaners.forEach(function(val1){
    container1 +=`<div class="second-card">
    <div class="pic"><img src="${val1.image}" alt=""></div>
    <h3 class="mt-6 text-xl font-semibold">${val1.name}</h3>
    <h3 class="mt-3 text-lg font-medium">${val1.description}</h3>
    <h3 class="mt-4 text-lg font-semibold">₹${val1.priceWithTaxes}(inclusive of all taxes)</h3>
    <h3 class="mt-1 text-2xl font-bold">₹${val1.priceWithDiscount}</h3>
    <h3 class="mt-2 text-lg font-normal">${val1.exclusiveOffer}</h3>
    <button class="btn text-lg font-normal px-2 py-2 bg-green-500 rounded-md mt-4 cursor-pointer">Add to Cart</button>
</div>`
})
document.querySelector(".second-cards").innerHTML = container1
var button = document.querySelector(".btn")
button.addEventListener("click",function(){
    button.innerHTML = "Go to Cart"
})

const HairProducts = [
    {
      name: "Dyson Supersonic Hair Dryer",
      description: "The Dyson Supersonic Hair Dryer is engineered for fast drying with no extreme heat.",
      image: "https://static.sweetcare.pt/img/prd/488/v-638343553190411358/dyson-017705sn_01.webp", // Blank image
      priceWithDiscount: 27990, // Price in Rupees
      priceWithTaxes: 31990, // Price in Rupees with all taxes
      exclusiveOffer: "Available on dyson.in with exclusive offers"
    },
    {
      name: "Dyson Airwrap Complete",
      description: "The Dyson Airwrap Complete styles hair without extreme heat using air to curl, wave, smooth, and volumize.",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDCbs0P21ZBeJ6gr7VvnBK_Zx1ArU2qD7ZaUkePtTFdpvz9n0gYarEmMkbD5A_JCe9GW3zQzdSrhz57qh5ZorSFdUcx4w9Ql4XJUcxUkQIbhx6r9RZhqq_&usqp=CAE", // Blank image
      priceWithDiscount: 41990, // Price in Rupees
      priceWithTaxes: 47990, // Price in Rupees with all taxes
      exclusiveOffer: "Available on dyson.in with exclusive offers"
    },
    {
      name: "Dyson Corrale Straightener",
      description: "The Dyson Corrale Straightener features flexing plates that shape to gather hair, delivering styling.",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTppWzVmutfC3hedLVQkOZfapIgysdXFMC0BldnqBJdSv7ux115tIfUknLhwf1vuf1rxa-9LzPp1-MNys4LW0IpJ2FV_f3TNrlqxt6qVcAM8AIt761HqNANtQ&usqp=CAE", // Blank image
      priceWithDiscount: 34990, // Price in Rupees
      priceWithTaxes: 39990, // Price in Rupees with all taxes
      exclusiveOffer: "Available on dyson.in with exclusive offers"
    },
    {
      name: "Dyson Supersonic Hair Dryer Limited Edition",
      description: "The Dyson Supersonic Hair Dryer Limited Edition comes with an exclusive color and additional accessories.",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcBlwfa5mNuWcIrFeb25JFGJJu4G1QBqdPscfc9NKw_NocvicAR20M1CLDG-_EVOY4qi6JIn_yH-TM95zUDeKxmhKhpGIr_6r3uolPnN8Gg00Ce276GHL2sg&usqp=CAE", // Blank image
      priceWithDiscount: 29990, // Price in Rupees
      priceWithTaxes: 33990, // Price in Rupees with all taxes
      exclusiveOffer: "Available on dyson.in with exclusive offers"
    }
  ];
  
var container2 = ""
HairProducts.forEach(function(val2){
    container2 +=`<div class="third-card">
    <div class="pic"><img src="${val2.image}" alt=""></div>
    <h3 class="mt-6 text-xl font-semibold">${val2.name}</h3>
    <h3 class="mt-3 text-lg font-medium">${val2.description}</h3>
    <h3 class="mt-4 text-lg font-semibold">₹${val2.priceWithTaxes}(inclusive of all taxes)</h3>
    <h3 class="mt-1 text-2xl font-bold">₹${val2.priceWithDiscount}</h3>
    <h3 class="mt-2 text-lg font-normal">${val2.exclusiveOffer}</h3>
    <button class="btn text-lg font-normal px-2 py-2 bg-green-500 rounded-md mt-4 cursor-pointer">Add to Cart</button>
</div>`
})

document.querySelector(".third-cards").innerHTML = container2
  