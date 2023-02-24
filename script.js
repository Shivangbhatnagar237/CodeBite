let btn = document.querySelector(".menu-btn");
let web_menu = document.querySelector(".web-menu");
let mid = document.querySelector(".mid");
let lines = document.querySelectorAll(".lines");
let buttons = document.querySelectorAll(".btns");
let btm = document.querySelector("#btm-part");

let loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.transform = "translateY(-100%)";
  }, 1500);
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
});

let flag = false;
var margin;

const clicked = () => {
  flag = true;
  mid.style.transform = "rotate(45deg)";
  buttons.forEach((button) => (button.style.opacity = "0"));
  lines.forEach((line) => (line.style.transform = "rotate(-45deg)"));
  web_menu.style.transform = "translateX(0%)";
  btm.style.opacity = 0;
  scroller.style.display = "flex";
};

const clickedAgain = () => {
  margin = 0;
  flag = false;
  mid.style.transform = "rotate(0)";
  buttons.forEach((button) => (button.style.opacity = "1"));
  lines.forEach((line) => (line.style.transform = "rotate(0)"));
  web_menu.style.transform = "translateX(-100%)";
  btm.style.opacity = 1;
  scroller.style.display = "none";
};

btn.addEventListener("click", () => {
  if (!flag) {
    clicked();
  } else {
    clickedAgain();
  }
});

let guests = 2;
let guest_count_string = document.querySelector(".guests-info h4");
const increment = document.querySelector(".add");
const decrement = document.querySelector(".substract");

increment.addEventListener("click", () => {
  guests++;
  guest_count_string.innerText = `${guests} adults`;
});

decrement.addEventListener("click", () => {
  if (guests > 1) guests--;
  guest_count_string.innerText = `${guests} adults`;
});

let scroller = document.querySelector(".text-scroll");

web_menu.addEventListener("mousemove", (dets) => {
  let left = dets.screenX;
  let stripWidth = scroller.getBoundingClientRect().width;
  let right = 1600;
  margin = (left * stripWidth) / right;
  console.log(margin);
  scroller.style.marginLeft = `-${margin}px`;
});

const scroll = new LocomotiveScroll({
  el: scroller,
  smooth: true,
});

let checkIn = document.querySelector(".check-in");
let checkOut = document.querySelector(".check-out");
let loc = document.querySelector(".location");

const scrolledToPage2 = () => {
  document.querySelector(".location h3").textContent = "Select Table Category";
  document.querySelector(".location input").style.display = "none";
  loc.style.borderRight = "1px solid #e0e0e0";
  loc.style.cursor = "pointer";
  checkIn.querySelector("h3").textContent = "";
  checkOut.style.display = "none";
  checkIn.style.width = "35vw";
  checkIn.querySelector("input").style.display = "none";
};

const page1 = () => {
  document.querySelector(".location h3").textContent = "LOCATION";
  document.querySelector(".location input").style.display = "initial";
  loc.style.border = "none";
  checkIn.style.opacity = 1;
  checkIn.querySelector("h3").textContent = "CHECK-IN";
  checkOut.style.display = "flex";
  checkIn.style.width = "17.5vw";
  checkIn.querySelector("input").style.display = "initial";
};

const main = document.querySelector("#main");
const page2Top = document.querySelector(".page-2").getBoundingClientRect().top;
const page3Top = document.querySelector(".page-3").getBoundingClientRect().top;

main.addEventListener("scroll", (dets) => {
  let elem = dets.target;
  if (elem.scrollTop < page2Top) {
    btm.style.opacity = 1;
    page1();
  } else if (elem.scrollTop < page3Top) {
    btm.style.opacity = 1;
    scrolledToPage2();
  } else {
    btm.style.opacity = 0;
  }
});

let cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (dets) => {
  if (window.matchMedia("(max-width: 500px)").matches) {
    cursor.style.display = "none";
  } else {
    cursor.style.display = "block";
  }
  var posX = dets.clientX - cursor.getBoundingClientRect().width / 2;
  var posY = dets.clientY - cursor.getBoundingClientRect().height / 2;
  cursor.style.transform = `translate(${posX}px,${posY}px)`;
});

let pageOverlay = document.querySelector(".page-overlay");
loc.addEventListener("click", () => {
  pageOverlay.style.opacity = 1;
  document.querySelector(".table-catg").style.transform = "translateY(0%)";
});

let close = document.querySelector(".table-catg ion-icon");
close.addEventListener("click", () => {
  pageOverlay.style.opacity = 0;
});

let arr = ["cb.webp", "fd1.webp", "ct.webp"];
let arrCatg = ["Classic Booth", "Fine Dining", "Coffee Table"];

let catgImg = document.querySelectorAll(".catg img");
catgImg.forEach((catgImg) => {
  catgImg.addEventListener("click", (dets) => {
    document.querySelector(".check-in h3").textContent =
      arrCatg[arr.indexOf(dets.target.getAttribute("src").substring(9))];
    checkIn.querySelector("h3").style.color = "black";
  });
});

const restDetails = [
  {
    name: "DELUXE ROOM",
    rating: 4.5,
    price: "3000<sub>/day</sub>",
    dimension: "280/310<sub>sq.ft.</sub>",
    src: "./assets/luxury.webp",
    desc: "The Standard room, as you will see is definitely more than your average room, in terms of budget, location and service. With walls painted with bright pleasant colors and adorned with exquisite paintings, you will certainly be swept off your feet the instant you set foot here.",
  },
  {
    name: "GRAND VILLA",
    rating: 4.8,
    price: "7000<sub>/day</sub>",
    dimension: "400<sub>sq.ft.</sub>",
    src: "./assets/grand-villa.webp",
    desc: "Designed to give you maximum comfort and relaxation, spacious air-conditioned villa a living room, a bedroom with fabulous Jacuzzi bathtub and shower cubicles. These rooms are ideal for couples and families.",
  },
  {
    name: "COTTAGE",
    rating: 4.4,
    price: "5000<sub>/day</sub>",
    dimension: "350/300<sub>sq.ft.</sub>",
    src: "./assets/cottage.webp",
    desc: "The cottages come in a state-of-the-art layout as – water body view, which overlooks the serene blue waters of the sprawling long around the roofed approach way out right opposite the garden.",
  },
  {
    name: "EXECUTIVE",
    rating: 4.7,
    price: "4000<sub>/day</sub>",
    dimension: "290<sub>sq.ft.</sub>",
    src: "./assets/business.webp",
    desc: "For those who are looking for an added touch of personal service, the finest amenities and extra space, the Suite showcase is a spacious living room is brightly lit, with panoramic balcony that overlook spectacular scenic views.",
  },
  {
    name: "GRAND CLUB",
    rating: 4.9,
    price: "4200<sub>/day</sub>",
    dimension: "360/320<sub>sq.ft.</sub>",
    src: "./assets/resort.webp",
    desc: "Enter the spacious grand room, tastefully done and elegantly furnished with a majestic double bed and a chest of drawers. There is a plush chair near the window from where you can enjoy sweeping views of the swimming pool & garden.",
  },
];

let i = 0;

let restaurantName = document.querySelector(".restaurant-ki-list h1");
let rating = document.querySelector(".rating-list h1");
let price = document.querySelector(".price-list h1");
let dimension = document.querySelector(".dimensions-list h1");
let desc = document.querySelector(".res-desc h5");
let img = document.querySelector(".gallery-viewer img");

const getCurrentValue = () => {
  restaurantName.textContent = restDetails[i].name;
  rating.textContent = restDetails[i].rating;
  price.innerHTML = restDetails[i].price;
  dimension.innerHTML = restDetails[i].dimension;
  desc.textContent = restDetails[i].desc;
  document
    .querySelector(".gallery-viewer img")
    .setAttribute("src", restDetails[i].src);
  gsap.fromTo(
    rating,
    { y: -100, ease: Expo.easeInOut },
    { y: 0, ease: Expo.easeInOut, duration: 1 }
  );
  gsap.fromTo(
    price,
    { y: -100, ease: Expo.easeInOut },
    { y: 0, ease: Expo.easeInOut, duration: 1 }
  );
  gsap.fromTo(
    dimension,
    { y: -100, ease: Expo.easeInOut },
    { y: 0, ease: Expo.easeInOut, duration: 1 }
  );
  gsap.fromTo(
    restaurantName,
    { y: -100, ease: Expo.easeInOut },
    { y: 0, ease: Expo.easeInOut, duration: 1 }
  );
  gsap.fromTo(
    img,
    { xPercent: -100, ease: Expo.easeInOut },
    { xPercent: 0, ease: Expo.easeInOut, duration: 1 }
  );
  gsap.fromTo(
    desc,
    { opacity: 0, ease: Expo.easeInOut },
    { opacity: 1, ease: Expo.easeInOut, duration: 1.5 }
  );
};

const leftBtnClick = () => {
  if (i === 0) i = restDetails.length;
  getCurrentValue();
  i--;
};

const rightBtnClick = () => {
  if (i === restDetails.length) i = 0;
  getCurrentValue();
  i++;
};

let swiperMenu = [
  {
    src: "./assets/pizza.webp",
    name: "Pizza",
  },
  {
    src: "./assets/sandwich.webp",
    name: "Sandwich",
  },
  {
    src: "./assets/dosa.webp",
    name: "Dosa",
  },
  {
    src: "./assets/kachori.webp",
    name: "Kachori",
  },
  {
    src: "./assets/icecream.webp",
    name: "Icecream",
  },
  {
    src: "./assets/cake.webp",
    name: "Cake",
  },
  {
    src: "./assets/poha.webp",
    name: "Poha",
  },
  {
    src: "./assets/burger.webp",
    name: "Burger",
  },
  {
    src: "./assets/rolls.webp",
    name: "Rolls",
  },
];

function show() {
  var clutter = ``;
  swiperMenu.forEach((elem, index) => {
    clutter =
      clutter +
      `<div class="element">
    <div class="item-img">
    <img src= "${elem.src}" alt=""/>
    </div>
    <div class="item-name">
      <h3>${elem.name}</h3>
    </div>
  </div>`;
  });

  document.querySelector(".scroller").innerHTML = clutter;
}

show();

let cards = [
  {
    src: "./assets/thali.webp",
    name: "Mahadev Bhojnalay",
    foodCatg: "North Indian",
    rating: "3.6",
  },
  {
    src: "./assets/icecream.webp",
    name: "Manohar Dairy",
    foodCatg: "North Indian",
    rating: "4.3",
  },
  {
    src: "./assets/poha.webp",
    name: "Sharma Vishnu",
    foodCatg: "North Indian",
    rating: "4.2",
  },
  {
    src: "./assets/laddoo.webp",
    name: "Kuber Sweets",
    foodCatg: "North Indian",
    rating: "4.0",
  },
  {
    src: "./assets/burger.webp",
    name: "Burger King",
    foodCatg: "North Indian",
    rating: "4.3",
  },
  {
    src: "./assets/pizza.webp",
    name: "Pizza Hut",
    foodCatg: "Italian",
    rating: "4.2",
  },
];

function showCards() {
  var clutter = ``;
  cards.forEach((elem, index) => {
    clutter =
      clutter +
      `<div class="card">
      <div class="food-img">
        <img src="${elem.src}" alt="">
      </div>
      <div class="text">
        <div class="head-rating">
          <h2>${elem.name}</h2>
          <div class="rating-points">
            <h3>${elem.rating}</h3>
            <ion-icon name="star-outline"></ion-icon>
          </div>
        </div>
        <div class="t2">
          <h3>${elem.foodCatg}</h3>
        </div>
      </div>
    </div>`;
  });

  document.querySelector(".cards").innerHTML = clutter;
}

showCards();
