const products = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      category: "computers",
      image: "./images/mis.png"
    },
    {
      id: 2,
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      category: "computers",
      image: "./images/keyboard.png"
    },
    {
      id: 3,
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      category: "computers",
      image: "./images/monitor.png"
    },
    {
      id: 4,
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      category: "headphones",
      image: "./images/chair.png"
    }
  ];

  function renderProduct() {
    const productsContainer = document.querySelector(".products");
  
    products.forEach((product) => {
      productsContainer.innerHTML += `
        <div class="product">
          
          <div class="product-img">
            <img src="${product.image}" alt="${product.title}">
          </div>
  
          <h3>${product.title}</h3>
  
          <h4>$${product.price}</h4>
  
          <p>${product.category}</p>
  
          <button onclick="addToCard(${product.id})">
            Add To Cart
          </button>
  
        </div>
      `;
    });
  }
  
  renderProduct();

  


  const bestSellingProducts = [
    {
      id: 345,
      title: "The north coat",
      price: 260,
      oldPrice: 360,
      category: "Clothes",
      image: "./images/kurtka.png",
      rating: 5,
      reviews: 65
    },
  
    {
      id: 346,
      title: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      category: "Bags",
      image: "./images/Cart.png",
      rating: 5,
      reviews: 65
    },
  
    {
      id: 347,
      title: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      category: "Electronics",
      image: "./images/sambufir.png",
      rating: 5,
      reviews: 65
    },
  
    {
      id: 348,
      title: "Small BookSelf",
      price: 360,
      category: "Furniture",
      image: "./images/desk.png",
      rating: 5,
      reviews: 65
    }
  ];


function renderSellingProducts() {
  const container = document.querySelector(".selling-products");

  bestSellingProducts.forEach((product) => {
    container.innerHTML += `
      <div class="sellingcard">

        <div class="selling-img">
          <img src="${product.image}" alt="${product.title}">

          <div class="card-icons">
            <button>
              <i class="fa-regular fa-heart"></i>
            </button>

            <button>
              <i class="fa-regular fa-eye"></i>
            </button>
          </div>
        </div>

        <h3>${product.title}</h3>

        <div class="price">
          <span>$${product.price}</span>
          ${
            product.oldPrice
              ? `<del>$${product.oldPrice}</del>`
              : ""
          }
        </div>

        <div class="rating">
          <span>★★★★★</span>
          <p>(${product.reviews})</p>
        </div>

        <button onclick="addToCard(${product.id})">
          Add To Cart
        </button>

      </div>
    `;
  });
}

renderSellingProducts();






const exploreProducts = [
  {
    id: 9,
    title: "Breed Dry Dog Food",
    price: 100,
    image: "./images/71RdoeXxtrL 1.png",
    rating: 4,
    reviews: 35
  },

  {
    id: 10,
    title: "CANON EOS DSLR Camera",
    price: 360,
    image: "./images/eos-250d-03-500x500 1.png",
    rating: 5,
    reviews: 95
  },

  {
    id: 11,
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    image: "./images/Frame 604.png",
    rating: 5,
    reviews: 325
  },

  {
    id: 12,
    title: "Curology Product Set",
    price: 500,
    image: "./images/curology-j7pKVQrTUsM-unsplash 1.png",
    rating: 4,
    reviews: 145
  },

  {
    id: 13,
    title: "Kids Electric Car",
    price: 960,
    image: "./images/Frame 608.png",
    rating: 5,
    reviews: 65
  },

  {
    id: 14,
    title: "Jr. Zoom Soccer Cleats",
    price: 1160,
    image: "./images/Copa_Sense 1.png",
    rating: 5,
    reviews: 35
  },

  {
    id: 15,
    title: "GP11 Shooter USB Gamepad",
    price: 660,
    image: "./images/GP11_PRD3 1.png",
    rating: 4,
    reviews: 55
  },

  {
    id: 16,
    title: "Quilted Satin Jacket",
    price: 660,
    image: "./images/Frame 608 (1).png",
    rating: 4,
    reviews: 55
  }
];



function renderExploreProducts() {
  const container = document.querySelector(".explore-products");

  exploreProducts.forEach((product) => {
    container.innerHTML += `
      <div class="explore-card">

        <div class="explore-img">

          <img 
            src="${product.image}" 
            alt="${product.title}"
          >

          <div class="explore-icons">

            <button>
              <i class="fa-regular fa-heart"></i>
            </button>

            <button>
              <i class="fa-regular fa-eye"></i>
            </button>

          </div>

        </div>

        <h3>${product.title}</h3>

        <div class="explore-price">
          $${product.price}
        </div>

        <div class="explore-rating">
          <span>★★★★★</span>
          <p>(${product.reviews})</p>
        </div>

        <button 
          class="add-cart"
          onclick="addToCard(${product.id})"
        >
          Add To Cart
        </button>

      </div>
    `;
  });
}

renderExploreProducts();



function addToCard(id) {
  const basket = JSON.parse(localStorage.getItem("basket")) || [];
  const allProducts = [...products, ...bestSellingProducts, ...exploreProducts];

  const findProduct = allProducts.find((product) => product.id === id);

  if (!findProduct) {
    alert("Mahsulot topilmadi");
    return;
  }

  const isExist = basket.find((item) => item && item.id === findProduct.id);

  if (isExist) {
    alert("Bu tovar savatda mavjud");
  } else {
    basket.push(findProduct);
    localStorage.setItem("basket", JSON.stringify(basket));
    alert("Tovar savatga qo'shildi");
  }
}