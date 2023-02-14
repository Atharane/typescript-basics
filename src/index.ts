let market_price: number = 2_400;
let product: string = "Nike Jr Vapor 13 Club Fg/Mg";
let onSale: boolean = true;
let colors: string[] = ["black", "white", "red"];

// tuples
let product_details: [string, number, boolean] = [
  product,
  market_price,
  onSale,
];

// enum
const enum Size {
  S = 1,
  M,
  L,
  XL,
}

let size: Size = Size.M; // 2

// functions

function calculateDiscount(price: number, discount = 100): number {
  // let some_unsused_variable: number = 10;

  if (price > 2000) {
    // return price - (discount || 0);
    return price - discount;
  }
  // undefined
  return price;
}

// objects

let pewdiepie: {
  readonly id: number;
  name: string;
  subscriber_count: number;
  upload: (date: Date) => void;
} = {
  id: 1,
  name: "Felix Kjellberg",
  subscriber_count: 100_000_000,
  upload: (date: Date) => {
    console.log(`${pewdiepie.name} uploaded a video on ${date.toDateString()}`);
  },
};

// pewdiepie.id = 2; // error
pewdiepie.upload(new Date());

if (market_price > 2000) {
  market_price = market_price * 0.9;
  // console.log(market_price);
}
