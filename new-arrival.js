const button = document.querySelectorAll(".button");
const imgContainer = document.querySelector("#show-image");

const Ladies = [
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/c3/11/c311734eb28437997e90186aba50ffa007988195.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Patterned Scarf",
    price: "Rs.1,299.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/56/0c/560c26f17db765fefa0cb1a76c31a6986a0784ce.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Padded triangle bikini top",
    price: "Rs.999.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/54/56/5456aeca8a2215c938787bc014538e88e2a75077.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Crochet-look-trim shorts",
    price: "Rs.2,699.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/bd/33/bd33d79ffbe703ec97b168dc5924a1091726cc10.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Fringe-trimmed knitted dress",
    price: "Rs.2,999.00",
  },
];

const Men = [
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/5a/05/5a0537b769ffe79eb8ade5c423092f9e3d475c06.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Baggy Cargo Jeans",
    price: "Rs.2,999.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/00/e2/00e2f71acd50ce24ac629f5b45f018b83cc9d0c3.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Baggy Cargo Jeans",
    price: "Rs.2,999.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/0a/84/0a84125398fb1e3913d44e9b4e56daf821ca41a9.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Boxy Fit Washed T-shirt",
    price: "Rs.1,499.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/3d/c3/3dc3e68d10cee4c50b5b0d43e99c3f28b03f93f0.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Wide Jeans",
    price: "Rs.2,699.00",
  },
];

const Divided = [
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/e7/9c/e79ccf6c7f3997f6c3f7ec3889ca72355fcb00d3.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Linen-blend shirt",
    price: "Rs.1,499.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/b9/d6/b9d6dc03fe1812cc975f84187d17d53cbd40d8d4.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "Wide tailored trousers",
    price: "Rs.1,499.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/af/58/af58f6fa1d6eeba003a66cec7db5c2b4fc1432bc.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Wide tailored trousers",
    price: "Rs.1,499.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/7f/11/7f111b0cf62afcf1a35a1129ff14301e1de3b408.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "Printed T-shirt",
    price: "Rs.499.00",
  },
];

const Baby = [
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/94/ea/94eae4b86a76b98f2ed240d3822fd8b8dc910253.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "3-piece set",
    price: "Rs.1,999.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/a3/6b/a36b11146a3f5aab2345a0c0fbf2e9d799824024.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "Flounce-collar lace dress",
    price: "Rs.2,299.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/fa/df/fadf2201cc4cd8e6346de552cc8e07b143de2358.jpg],origin[dam],category[kids_baby_girl_clothing_dresses],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "Sleeveless cotton dress",
    price: "Rs.799.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/0b/1f/0b1f307d847e95575c08384db858d2c54f338320.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "Cotton jersey sailor dress",
    price: "Rs.799.00",
  },
];

const Kids = [
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/dd/d1/ddd1df06abd14ee664c8796fae8b1d912cc1486e.jpg],origin[dam],category[kids_boys_clothing_tshirtsshirts_tshirts],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "Printed T-shirt",
    price: "Rs.299.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/82/50/82508cec906f007649ee98f37e65f3b38f7f77ba.jpg],origin[dam],category[kids_boys_clothing_shorts],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "Printed sweatshorts",
    price: "Rs.499.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/2e/b2/2eb2b77e6c0525fbef1291a1eafe96e5382543b6.jpg],origin[dam],category[kids_boys_clothing_tshirtsshirts_tshirts],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "Printed T-shirt",
    price: "Rs.299.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/64/31/64317e02ab01b69140a5095da4190facb23ae062.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Crochet-look dress",
    price: "Rs.799.00",
  },
];

const hmHome = [
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/f8/87/f887c61f7d0f60fa7ef84996ab4a1a1304450406.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "Stoneware plant pot",
    price: "Rs.1,299.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/89/fc/89fc84ce3ea27987c68fd684984fd2090ba60bd3.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    title: "Hooded bath towel",
    price: "Rs.1,499.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/3f/2d/3f2d1d3528de10d017038925fb5f2644ca136b89.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Reed diffuser",
    price: "Rs.649.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/7e/50/7e50d9c191051250a7b4f24e70c1d1e6f9f204e4.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "Small scented candle in glass holder",
    price: "Rs.249.00",
  },
];

const sport = [
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/29/58/295858f32ac2565f7f87fc0bb6d7481be1bae925.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "DryMove Light Support Sports Bra",
    price: "Rs.1,299.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/86/95/869561ae76c03ba812fa6733d6c9bc22509b326d.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "DryMove Sports shorts",
    price: "Rs.1,299.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/24/d2/24d2cd98d2884d9ccbf4aa88667153cd4fe73067.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "DryMove Pocket-detail sports leggings",
    price: "Rs.1,499.00",
  },
  {
    src: "https://lp2.hm.com/hmgoepprod?set=source[/ab/50/ab50d78067ea2642c9022708983815410250d5db.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]",
    title: "DryMove Cropped Sports top",
    price: "Rs.799.00",
  },
];

button.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    button.forEach((btn2, j) => {
      btn2.classList.remove("active");
    });
    btn.classList.add("active");
    imgContainer.innerHTML = "";
    if (btn.textContent === "Ladies") {
      appendContent(Ladies);
    } else if (btn.textContent === "Men") {
      appendContent(Men);
    } else if (btn.textContent === "Divided") {
      appendContent(Divided);
    } else if (btn.textContent === "Baby") {
      appendContent(Baby);
    } else if (btn.textContent === "Kids") {
      appendContent(Kids);
    } else if (btn.textContent === "H&M Home") {
      appendContent(hmHome);
    } else if (btn.textContent === "Sport") {
      appendContent(sport);
    }
  });
});

window.addEventListener("load", () => {
  imgContainer.classList.add("show-img-style");
  for (let i = 0; i < Ladies.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card-style");
    const image = document.createElement("img");
    image.classList.add("img-style");
    const title = document.createElement("p");
    const price = document.createElement("p");
    image.src = `${Ladies[i].src}`;
    title.textContent = `${Ladies[i].title}`;
    price.textContent = `${Ladies[i].price}`;
    card.append(image, title, price);
    imgContainer.append(card);
  }
});

function appendContent(name) {
  console.log(name);
  imgContainer.classList.add("show-img-style");
  for (let i = 0; i < name.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card-style");
    const image = document.createElement("img");
    image.classList.add("img-style");
    const title = document.createElement("p");
    const price = document.createElement("p");
    image.src = `${name[i].src}`;
    title.textContent = `${name[i].title}`;
    price.textContent = `${name[i].price}`;
    card.append(image, title, price);
    imgContainer.append(card);
  }
}
