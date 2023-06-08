import nav from "../componends/nav.js";

document.getElementById("nav").innerHTML=nav()

let show = (data) => {
  console.log(data);

  data.map((ele) => {
    let img = document.createElement("img");
    img.src = ele.image;
    let title = document.createElement("h3");
    title.innerHTML = ele.title;
    let price = document.createElement("p");
    price.innerHTML = ele.price;  
    let div = document.createElement("div");
    div.append(img, title, price);
    document.getElementById("cart").append(div)
  });
};
let cart = JSON.parse(localStorage.getItem("cart")) || [];

show(cart)