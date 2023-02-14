"use strict";
let market_price = 2400;
let product = "Nike Jr Vapor 13 Club Fg/Mg";
let onSale = true;
let colors = ["black", "white", "red"];
let product_details = [
    product,
    market_price,
    onSale,
];
let size = 2;
function calculateDiscount(price, discount = 100) {
    if (price > 2000) {
        return price - discount;
    }
    return price;
}
let pewdiepie = {
    id: 1,
    name: "Felix Kjellberg",
    subscriber_count: 100000000,
    upload: (date) => {
        console.log(`${pewdiepie.name} uploaded a video on ${date.toDateString()}`);
    },
};
pewdiepie.upload(new Date());
if (market_price > 2000) {
    market_price = market_price * 0.9;
}
//# sourceMappingURL=index.js.map