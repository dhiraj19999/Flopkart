let mainSlider = [
    {
      image:
        "https://rukminim2.flixcart.com/flap/3376/560/image/0582eaa382f0ea01.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/3376/560/image/951df9700e7e72ec.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/1688/280/image/13663a8300d0c5b6.jpg?q=50",
    },
  ];
  
  mainSlider.map(function (el) {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    let img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", el.image);
    div.append(img);
    document.querySelector("#container1 .glider").append(div);
  });
  
  new Glider(document.querySelector("#container1 .glider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: "#container1 .glider-prev",
      next: "#container1 .glider-next",
    },
  });
  
  let topOffers = [
    {
      name: "TV Units",
      offer: "From 2,490",
      desc: "From Flipkart Perfect Homes",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jjn6d8w0/tv-entertainment-unit/d/h/p/particle-board-arizona-100001413atv-home-full-wenge-with-frosty-original-imaf76dhwg94detb.jpeg?q=70",
    },
    {
      name: "Cabinet & Drawers",
      offer: "From 499",
      desc: "Modern & Trendy",
      image:
        "https://rukminim2.flixcart.com/image/200/200/k4rcmfk0/cabinet-drawer/2/j/g/pvc-fusion-v-nakoda-multicolor-original-imafnhdmbsurx3fh.jpeg?q=70",
    },
    {
      name: "Space Saving Furniture",
      offer: "From 199",
      desc: "Bean Bags, Shoe Racks & more",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jws547k0/shoe-rack/s/6/g/6-stand-01-cmerchants-original-imafhdvbzaa3df6z.jpeg?q=70",
    },
    {
      name: "Top Trending Children Books",
      offer: "up to 75% off",
      desc: "by Dreamland Publications",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kua4r680/book/n/g/v/101-panchtantra-stories-paperback-original-imag7fu5bt3m6thq.jpeg?q=70",
    },
    {
      name: "Ottoman & Pouffe",
      offer: "From 549",
      desc: "Trendy Collection",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jped7rk0/ottoman-pouffe/b/h/t/black-leatherette-tr-ottoman-pw001-tied-ribbons-original-imafbnayp3gxnvnu.jpeg?q=70",
    },
    {
      name: "Microphone",
      offer: "Upto 70% Off",
      desc: "Explore Now",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jn3hocw0/microphone/d/c/e/boya-by-m1-3-5mm-electret-condenser-microphone-with-1-4-adapter-original-imaf9v2jhhakavks.jpeg?q=70",
    },
    {
      name: "Musical Toy",
      offer: "Under 99",
      desc: "Toy Drums, Toy Piano & More",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kuwzssw0/musical-toy/z/z/a/dancing-cactus-repeats-what-you-say-usb-charging-cable-dancing-original-imag7xjgjarpbgkm.jpeg?q=70",
    },
    {
      name: "Ukuleles & Guitars",
      offer: "up to 75% off",
      desc: "By Kadence",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kr3tj0w0/acoustic-guitar/1/a/x/med-blu-c-medellin-original-imag4yumkdhun5vn.jpeg?q=70",
    },
    {
      name: "BLDC Fans",
      offer: "From 2,499",
      desc: "Bajaj, Usha & more",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kwqq1zk0/fan/9/p/m/renesa-28-1-ceiling-fan-1200-atomberg-original-imag9c52s2r9qbyq.jpeg?q=70",
    },
    {
      name: "Premium PowerBanks",
      offer: "Shop Now",
      desc: "Mi, Ambrane & more",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kdqa4y80/power-bank/7/j/u/powerlit-pro-10000-powerlit-pro-ambrane-original-imafukzjuzeymxge.jpeg?q=70",
    },
  ];
  
  let sliderDOM = function (el) {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
  
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");
    let img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", el.image);
    imgDiv.append(img);
  
    let infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "infoDiv");
    let title = document.createElement("p");
    title.setAttribute("class", "infoDiv-title");
    title.innerText = el.name;
    let offer = document.createElement("p");
    offer.setAttribute("class", "infoDiv-offer");
    offer.innerText = el.offer;
    let desc = document.createElement("p");
    desc.setAttribute("class", "infoDiv-desc");
    desc.innerText = el.desc;
    infoDiv.append(title, offer, desc);
    div.append(imgDiv, infoDiv);
    return div;
  };
  
  let bannerDOM = function (el) {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    let img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", el.image);
    div.append(img);
    return div;
  };
  
  topOffers.map(function (el) {
    document.querySelector("#container3 .glider").append(sliderDOM(el));
  });
  
  new Glider(document.querySelector("#container3 .glider"), {
    slidesToShow: 5.5,
    slidesToScroll: 5,
    draggable: true,
    arrows: {
      prev: "#container3 .glider-prev",
      next: "#container3 .glider-next",
    },
  });
  
  let banner1 = [
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/d73744cb5f0cb736.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/0da4789911c79c4a.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/112e160137467ec7.jpg?q=50",
    },
  ];
  banner1.map(function (el) {
    document.querySelector("#container4").append(bannerDOM(el));
  });
  
  let fashionDeals = [
    {
      name: "Kurtas & Kurtis",
      offer: "From 199",
      desc: "Libas, Varanga & more",
      image:
        "https://rukminim2.flixcart.com/image/200/200/ku2zjww0/kurta/1/j/5/s-ank-mp-2004c-anouk-original-imag79zg6jdrryfp.jpeg?q=70",
    },
    {
      name: "Brands Under a Grand!",
      offer: "Min 60% Off",
      desc: "Vero Moda, ONLY, AND",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kyvvtzk0/dress/l/y/i/l-dr890yl-berrylush-original-imagbyjhhaansjvh.jpeg?q=70",
    },
    {
      name: "Earrings, Jewellery Sets...",
      offer: "50-80% Off",
      desc: "Hurry Now! Limited Time Offer",
      image:
        "https://rukminim2.flixcart.com/flap/200/200/image/91bf27f127bf4c8f.jpg?q=70",
    },
    {
      name: "ADIDAS, PUMA & more",
      offer: "Min. 50% Off",
      desc: "Running, Walking Shoes...",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kvba7bk0/shoe/x/b/p/-original-imag88gaxkksgrnp.jpeg?q=70",
    },
    {
      name: "Campus, Asian..",
      offer: "From 299",
      desc: "Shoes, Sandals & more",
      image:
        "https://rukminim2.flixcart.com/image/200/200/ksuowi80/shoe/l/x/w/9-6g-842-campus-bt-grn-blk-original-imag6bndygzabwwt.jpeg?q=70",
    },
    {
      name: "Nike, Skechers, ASICS...",
      offer: "Up to 60% Off",
      desc: "Men's Sports Shoes...",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kvtuxe80/shoe/e/3/o/8-dc3728-003nike-9-nike-black-white-iron-grey-original-imag8mz3nmvgmhdd.jpeg?q=70",
    },
    {
      name: "Stylish Sunglasses",
      offer: "From 149",
      desc: "UV Protection, polarized...",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kg5fzww0-0/sunglass/p/8/d/be5028910-50-united-colors-of-benetton-original-imafwggg75qswg5f.jpeg?q=70",
    },
    {
      name: "USPA, Roadster, Provogue..",
      offer: "Under 799",
      desc: "Men's Casual Shoes...",
      image:
        "https://rukminim2.flixcart.com/image/200/200/krme93k0/shoe/a/i/5/8-li-21-provogue-green-original-imag5dk3xupbmnhy.jpeg?q=70",
    },
    {
      name: "Kids' Combo Packs",
      offer: "Under 399",
      desc: "New Gen, NOT, SmartRaho...",
      image:
        "https://rukminim2.flixcart.com/flap/200/200/image/9cc7b2c6ceb5ffd1.jpg?q=70",
    },
    {
      name: "Clearance Garage!",
      offer: "Min 60% Off + 10% Off",
      desc: "Tops, Dresses, Trousers..",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kyxb9u80/top/d/m/s/l-atp-10124-athena-original-imagbfn7gzyzqyzh.jpeg?q=70",
    },
  ];
  fashionDeals.map(function (el) {
    document.querySelector("#container5 .glider").append(sliderDOM(el));
  });
  
  new Glider(document.querySelector("#container5 .glider"), {
    slidesToShow: 5.5,
    slidesToScroll: 5,
    draggable: true,
    arrows: {
      prev: "#container5 .glider-prev",
      next: "#container5 .glider-next",
    },
  });
  
  let banner2 = [
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/a9fd4c05bf19818b.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/d1ed4c2f29aa98c3.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/a8f47549bc26188e.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/3ff56affa66f8331.jpeg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/6e6fa49db9aa0b72.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/ad9469e3d5485bac.jpg?q=50",
    },
  ];
  banner2.map(function (el) {
    document.querySelector("#container6").append(bannerDOM(el));
  });
  
  let homeFurnish = [
    {
      name: "Bath Towels",
      offer: "Upto 75% OFF",
      desc: "Exciting Offers",
      image:
        "https://rukminim2.flixcart.com/image/200/200/k0463rk0/bath-towel/z/p/k/swiss-republic-essential-plus-480-gsm-single-value-pack-100-original-imafjzd2herqwyf6.jpeg?q=70",
    },
    {
      name: "Hookah Accessories",
      offer: "Upto 80% Off",
      desc: "Price Crash!",
      image:
        "https://rukminim2.flixcart.com/image/200/200/ksqeky80/hookah/j/m/j/jc04692-jaipurcrafts-original-imag68e4fa2yhgrq.jpeg?q=70",
    },
    {
      name: "Wall Clocks",
      offer: "Upto 80% Off",
      desc: "Never Before Prices",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kingqkw0-0/wall-clock/c/d/j/wall-clock-twclck008t-analog-timex-original-imafyehbygeghgrz.jpeg?q=70",
    },
    {
      name: "Emergency Lights",
      offer: "Upto 80% Off",
      desc: "Price Crash!",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kxkqavk0/emergency-light/r/r/9/ojas-6-2000-philips-original-imagay6fqjd6xxz2.jpeg?q=70",
    },
    {
      name: "Floor Coverings",
      offer: "From 789",
      desc: "Door Mats, Carpets & more",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jupu7ww0/carpet-rug/n/5/w/simple-chawla-overseas-original-imafcmvdzefwajcy.jpeg?q=70",
    },
    {
      name: "Appliance Covers",
      offer: "From 789",
      desc: "Best Deal Price..",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kn4xhu80/appliance-cover/0/e/u/nit06-240fa-7kg-nitasha-original-imagfvabqh3mygmg.jpeg?q=70",
    },
    {
      name: "Artificial Flowers",
      offer: "Upto 80% Off",
      desc: "Never Before Prices",
      image:
        "https://rukminim2.flixcart.com/image/200/200/krxtrww0/artificial-flower/r/s/i/ll-ym-flipkart-smartbuy-original-imag5m9tpwfmyfdh.jpeg?q=70",
    },
    {
      name: "Designer Bedsheets",
      offer: "From 139",
      desc: "Best Offers",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jeokbrk0/bedsheet/p/j/s/blue-fruty-01-blue-fruty-01-flat-home-furnishing-bed-original-imafyfqz87wauj3e.jpeg?q=70",
    },
  ];
  homeFurnish.map(function (el) {
    document.querySelector("#container7 .glider").append(sliderDOM(el));
  });
  
  new Glider(document.querySelector("#container7 .glider"), {
    slidesToShow: 5.5,
    slidesToScroll: 5,
    draggable: true,
    arrows: {
      prev: "#container7 .glider-prev",
      next: "#container7 .glider-next",
    },
  });
  
  let banner3 = [
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/573e022be2528d96.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/aeaf8048f2adc287.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/22f97bc8a92ca929.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/041c3f32d1168051.jpeg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/4b1b31cda03f59f7.jpg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/44f2bcdad3a1715a.jpg?q=50",
    },
  ];
  banner3.map(function (el) {
    document.querySelector("#container8").append(bannerDOM(el));
  });
  
  let fashionBS = [
    {
      name: "Denims, Dresses, Bra",
      offer: "From 99",
      desc: "Levi's, Tokyo Talkies, Clovia",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kt7jv680/jean/j/f/2/28-21306-0469-levi-s-original-imag6hutswbqxurz.jpeg?q=70",
    },
    {
      name: "Handpicked Selection",
      offer: "Under 699",
      desc: "Men & Women Sunglasses",
      image:
        "https://rukminim2.flixcart.com/image/200/200/ktuewsw0/sunglass/f/q/n/daimond-cut-medium-singco-india-original-imag73fzzknhtnkq.jpeg?q=70",
    },
    {
      name: "Campus, Asian, Lotto..",
      offer: "From 299",
      desc: "Shoes, Sandals & more",
      image:
        "https://rukminim2.flixcart.com/image/200/200/ksuowi80/shoe/l/x/w/9-6g-842-campus-bt-grn-blk-original-imag6bndygzabwwt.jpeg?q=70",
    },
    {
      name: "Trending Now!",
      offer: "Under 199",
      desc: "Shoes ,Sandals & more",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kyhlfgw0/shoe/k/p/w/10-major-02-black-fosty-black-red-original-imagapxjvh9aqwgb.jpeg?q=70",
    },
    {
      name: "Women's Shoes, Sneakers",
      offer: "From 199",
      desc: "Sparx, Longwalk, Asian",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kyrlifk0/shoe/j/b/h/3-1201-myshtezia-white-original-imagaxdewpwsnuug.jpeg?q=70",
    },
    {
      name: "Saara, Divastri & more",
      offer: "Under 299",
      desc: "Top Branded Sarees",
      image:
        "https://rukminim2.flixcart.com/image/200/200/kkr72q80/sari/t/z/7/free-myn-73-grubstaker-unstitched-original-imagyyfgcz88ny7a.jpeg?q=70",
    },
    {
      name: "Timex, Fastrack, Sonata...",
      offer: "From 499",
      desc: "Grab The Best Deal!",
      image:
        "https://rukminim2.flixcart.com/image/200/200/ktyp8cw0/watch/d/8/q/1-th1791855-tommy-hilfiger-men-original-imag76uzh6zmebnn.jpeg?q=70",
    },
    {
      name: "Wallets & Belts",
      offer: "Under 499",
      desc: "Best Sellers Collection",
      image:
        "https://rukminim2.flixcart.com/flap/200/200/image/9b1f3b2f4f4c7f2b.jpg?q=70",
    },
  ];
  fashionBS.map(function (el) {
    document.querySelector("#container9 .glider").append(sliderDOM(el));
  });
  
  new Glider(document.querySelector("#container9 .glider"), {
    slidesToShow: 5.5,
    slidesToScroll: 5,
    draggable: true,
    arrows: {
      prev: "#container9 .glider-prev",
      next: "#container9 .glider-next",
    },
  });
  
  let banner4 = [
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/42de3996d59c9f1c.jpeg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/0a1181f698c751f0.jpeg?q=50",
    },
    {
      image:
        "https://rukminim2.flixcart.com/flap/960/960/image/751d43ee0fc09c6a.jpeg?q=50",
    },
  ];
  banner4.map(function (el) {
    document.querySelector("#container10").append(bannerDOM(el));
  });