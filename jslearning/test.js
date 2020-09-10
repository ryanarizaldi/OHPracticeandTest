const products = [
  {
    type: "shoes",
    color: "red",
    size: [38, 39, 40],
    brand: "Adidas",
  },
  {
    type: "shoes",
    color: "black",
    size: [36, 38],
    brand: "Adidas",
  },
  {
    type: "shoes",
    color: "gray",
    size: [40, 41],
    brand: "Nike",
  },
  {
    type: "bag",
    color: "black",
    size: null,
    brand: "Prada",
  },
  {
    type: "bag",
    color: "yellow",
    size: [30],
    brand: "Hermes",
  },
  {
    type: "bag",
    color: "brown",
    size: [30, 35, 40],
    brand: "Hermes",
  },
  {
    type: "jacket",
    color: "white",
    size: ["S", "M"],
    brand: "Chanel",
  },
];

const bags = products.filter((product) => {
  // Return only shoes
  // if() {
  //     return product
  // }
});

// console.log("bags", bags);

const bagJacket = products.filter((product) => {
  // Return bag and jacket
  // if() {
  //     return product
  // }
});

// console.log("bag and jacket", bagJacket);

const redShoes = products.filter((product) => {
  // Return shoes with color red
  // if() {
  //     return product
  // }
});

// console.log("red shoes", redShoes);

const shoesSize40 = products.filter((product) => {
  // Return shoes with size 40
  // if() {
  //     return product
  // }
});

// console.log("shoes size 40", shoesSize40);

// Return bag with brand Hermes size 35.
// If any also show chanel jacket
// If not show all hermes
const hermesBag = products.filter((product) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].brand === "Hermes" && products[i].type === "bag") {
      for (let j = 0; j < products[i].size.length; j++) {
        if (products[i].size[j] === 35) {
          return products[i].size[j];
        }
      }
    }
  }
});

const productRecomendation = console.log("Hermes bag", hermesBag); // write your code here

console.log("product recomendation", productRecomendation);
