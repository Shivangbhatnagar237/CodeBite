let btn = document.querySelector(".menu-btn");
let web_menu = document.querySelector(".web-menu");
let mid = document.querySelector(".mid");
let lines = document.querySelectorAll(".lines");
let buttons = document.querySelectorAll(".btns");
let btm = document.querySelector("#btm-part");

let loader = document.querySelector(".loader");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.style.transform = "translateY(-100%)";
  }, 1500);
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
});

let flag = false;

let sections = document.querySelectorAll(".sec");

sections.forEach((sec) => {
  sec.addEventListener("click", (e) => {
    let url = location.href.split("#")[0];
    clickedAgain();
    location.href = `${url}#page-${sec.id}`;
  });
});

var margin;

const clicked = () => {
  flag = true;
  mid.style.transform = "rotate(45deg)";
  buttons.forEach((button) => {
    if (window.matchMedia("(max-width: 480px)").matches)
      button.style.display = "none";
    else button.style.opacity = 0;
  });
  lines.forEach((line) => (line.style.transform = "rotate(-45deg)"));
  web_menu.style.transform = "translateX(0%)";
  btm.style.opacity = 0;
  scroller.style.display = "flex";
};

const clickedAgain = () => {
  margin = 0;
  flag = false;
  mid.style.transform = "rotate(0)";
  buttons.forEach((button) => {
    if (window.matchMedia("(max-width: 480px)").matches)
      button.style.display = "flex";
    else button.style.opacity = 1;
  });
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
  if (!window.matchMedia("(max-width: 480px)").matches) {
    let left = dets.screenX;
    let stripWidth = scroller.getBoundingClientRect().width;
    let right = 1600;
    margin = (left * stripWidth) / right;
    // gsap.to(scroller, {
    //   margin: `0 0 0 -${margin}px`
    // })
    scroller.style.marginLeft = `-${margin}px`;
  }
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

if (window.matchMedia("(max-width: 500px)").matches) {
  cursor.style.display = "none";
}

window.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.5,
    ease: Power4.easeOut,
  });
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
    bgsrc:
      "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "The Standard room, as you will see is definitely more than your average room, in terms of budget, location and service. With walls painted with bright pleasant colors and adorned with exquisite paintings, you will certainly be swept off your feet the instant you set foot here.",
  },
  {
    name: "GRAND VILLA",
    rating: 4.8,
    price: "7000<sub>/day</sub>",
    dimension: "400<sub>sq.ft.</sub>",
    src: "./assets/grand-villa.webp",
    bgsrc:
      "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Designed to give you maximum comfort and relaxation, spacious air-conditioned villa a living room, a bedroom with fabulous Jacuzzi bathtub and shower cubicles. These rooms are ideal for couples and families.",
  },
  {
    name: "COTTAGE",
    rating: 4.4,
    price: "5000<sub>/day</sub>",
    dimension: "350/300<sub>sq.ft.</sub>",
    src: "./assets/cottage.webp",
    bgsrc:
      "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    desc: "The cottages come in a state-of-the-art layout as – water body view, which overlooks the serene blue waters of the sprawling long around the roofed approach way out right opposite the garden.",
  },
  {
    name: "EXECUTIVE",
    rating: 4.7,
    price: "4000<sub>/day</sub>",
    dimension: "290<sub>sq.ft.</sub>",
    src: "./assets/business.webp",
    bgsrc: "https://images.pexels.com/photos/352096/pexels-photo-352096.jpeg",
    desc: "For those who are looking for an added touch of personal service, the finest amenities and extra space, the Suite showcase is a spacious living room is brightly lit, with panoramic balcony that overlook spectacular scenic views.",
  },
  {
    name: "GRAND CLUB",
    rating: 4.9,
    price: "4200<sub>/day</sub>",
    dimension: "360/320<sub>sq.ft.</sub>",
    src: "./assets/resort.webp",
    bgsrc: "https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg",
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
let hotel_view = document.querySelector(".hotel-view");

const getCurrentValue = () => {
  restaurantName.textContent = restDetails[i].name;
  rating.textContent = restDetails[i].rating;
  price.innerHTML = restDetails[i].price;
  dimension.innerHTML = restDetails[i].dimension;
  desc.textContent = restDetails[i].desc;
  hotel_view.style.backgroundImage = `url(${restDetails[i].bgsrc})`;
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
  gsap.fromTo(
    hotel_view,
    { opacity: 0, ease: Expo.easeInOut },
    { opacity: 1, ease: Expo.easeInOut, duration: 3, delay: -0.5 }
  );
};

const mousemove = () => {
  gsap.to(cursor, {
    scale: 4,
    duration: 0.3,
  });
};

const mouseleave = () => {
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
  });
};

const leftBtnClick = () => {
  if (i === 0) i = restDetails.length - 1;
  else i--;
  getCurrentValue();
};

const rightBtnClick = () => {
  if (i === restDetails.length - 1) i = 0;
  else i++;
  getCurrentValue();
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

let menuScroller = document.querySelector(".scroller");

function show() {
  var clutter = ``;
  swiperMenu.forEach((elem, index) => {
    clutter =
      clutter +
      `<div class="element">
    <div class="item-img">
    <img src="${elem.src}" alt="" loading="eager"/>
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
    time: "30 min",
  },
  {
    src: "./assets/icecream.webp",
    name: "Manohar Dairy",
    foodCatg: "North Indian",
    rating: "4.3",
    time: "26 min",
  },
  {
    src: "./assets/poha.webp",
    name: "Sharma Vishnu",
    foodCatg: "North Indian",
    rating: "4.2",
    time: "26 min",
  },
  {
    src: "./assets/laddoo.webp",
    name: "Kuber Sweets",
    foodCatg: "North Indian",
    rating: "4.0",
    time: "44 min",
  },
  {
    src: "./assets/burger.webp",
    name: "Burger King",
    foodCatg: "North Indian",
    rating: "4.3",
    time: "22 min",
  },
  {
    src: "./assets/pizza.webp",
    name: "Pizza Hut",
    foodCatg: "Italian",
    rating: "4.2",
    time: "33 min",
  },
];

function showCards() {
  var clutter = ``;
  cards.forEach((elem, index) => {
    clutter =
      clutter +
      `<div class="card swiper-slide">
      <div class="food-img">
        <img src="${elem.src}" alt="" loading="eager">
        <div class="time">
        <h4>${elem.time}</h4>
        </div>
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

if (!window.matchMedia("(max-width: 480px)").matches) {
  const lerp = (x, y, a) => x * (1 - a) + y * a;
  let book_now = document.querySelector(".book-now");

  book_now.addEventListener("mousemove", (dets) => {
    let dims = book_now.getBoundingClientRect();
    let xstart = dims.x;
    let xend = dims.x + dims.width;
    let ystart = dims.y;
    let yend = dims.y + dims.height;

    const xLerpValue = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    const yLerpValue = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

    gsap.to(book_now, {
      x: lerp(-50, 50, xLerpValue),
      y: lerp(-50, 50, yLerpValue),
      duration: 0.3,
    });

    gsap.to(cursor, {
      scale: 8,
      duration: 0.3,
    });
  });

  book_now.addEventListener("mouseleave", () => {
    gsap.to(book_now, {
      x: 0,
      y: 0,
      duration: 0.3,
    });
    gsap.to(cursor, {
      scale: 1,
      duration: 0.3,
    });
  });
}

let food_cards = document.querySelector(".cards");
if (window.matchMedia("(max-width: 480px)").matches) {
  gsap.fromTo(
    ".card",
    {
      y: "40%",
    },
    {
      y: "-560%",
      repeat: -1,
      duration: 10,
      ease: Power0.easeOut,
    }
  );
}
