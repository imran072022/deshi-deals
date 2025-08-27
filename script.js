// Reusable get element by id function
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// Add to cart button
const addToCartButtons = document.getElementsByClassName("add-to-cart-button");
for (let addToCartButton of addToCartButtons) {
  addToCartButton.addEventListener("click", function () {
    // Access product image, title, price
    const productImage =
      addToCartButton.parentNode.parentNode.parentNode.childNodes[1]
        .childNodes[1].src;
    const productTitle =
      addToCartButton.parentNode.parentNode.children[1].innerText;
    const productPrice = parseFloat(
      addToCartButton.parentNode.parentNode.children[2].childNodes[1].innerText
    );
    // Calculation
    let totalPrice = parseFloat(getElement("total-price").innerText);
    totalPrice += productPrice;
    let finalTotalPrice = (getElement("total-price").innerText =
      totalPrice.toFixed(2));

    const cartContainer = getElement("cart-container");
    console.log(cartContainer);
    const newCartItem = document.createElement("div");
    newCartItem.innerHTML = `
<div
              class="bg-[#F4F1F1] px-4 py-[10px] flex justify-between items-center rounded-[13px]"
            >
              <div class="h-[114px] flex justify-center items-center">
                <img class="h-full" src="${productImage}" alt="" />
              </div>
              <div>
                <h3 class="text-[#111111] text-xl font-semibold">
                  ${productTitle}
                </h3>
                <p class="text-[rgba(17,17,17,0.5)] text-xl">
                  <span id="item-price">${productPrice}</span>TK
                </p>
              </div>
            </div>
    `;
    cartContainer.appendChild(newCartItem);
  });
}
// Add cart items
