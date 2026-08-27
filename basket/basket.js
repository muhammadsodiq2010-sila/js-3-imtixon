function getBasket() {
    return JSON.parse(localStorage.getItem("basket")) || [];
  }
  
  function saveBasket(basket) {
    localStorage.setItem("basket", JSON.stringify(basket));
  }
  
  function renderCart() {
    const basket = getBasket();
    const cartItemsBox = document.querySelector(".cart-items");
  
    cartItemsBox.innerHTML = "";
  
    if (basket.length === 0) {
      cartItemsBox.innerHTML = `<div class="cart-empty">Savat bo'sh</div>`;
      document.getElementById("subtotal").textContent = "$0";
      document.getElementById("total").textContent = "$0";
      return;
    }
  
    let subtotal = 0;
  
    basket.forEach((item) => {
      const qty = item.qty || 1;
      const itemSubtotal = item.price * qty;
      subtotal += itemSubtotal;
  
      const row = document.createElement("div");
      row.classList.add("cart-item");
  
      row.innerHTML = `
        <div class="cart-item-product">
          <button class="remove-btn" onclick="removeFromCart(${item.id})">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <img src="${item.image}" alt="${item.title}">
          <span>${item.title}</span>
        </div>
  
        <div class="price">$${item.price}</div>
  
        <div class="quantity-box">
          <input type="number" min="1" value="${qty}" onchange="updateQty(${item.id}, this.value)">
        </div>
  
        <div class="subtotal">$${itemSubtotal}</div>
      `;
  
      cartItemsBox.appendChild(row);
    });
  
    document.getElementById("subtotal").textContent = `$${subtotal}`;
    document.getElementById("total").textContent = `$${subtotal}`;
  }
  
  function removeFromCart(id) {
    let basket = getBasket();
    basket = basket.filter((item) => item.id !== id);
    saveBasket(basket);
    renderCart();
  }
  
 
  
  renderCart();