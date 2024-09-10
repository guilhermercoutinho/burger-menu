const btnShowAll = document.querySelector(".show-all");
const btnShowDiscountedItems = document.querySelector(".show-discounted-items");
const btnTotalMenu = document.querySelector(".total-menu");
const btnVeganProducts = document.querySelector(".vegan-products");

const ul = document.querySelector("ul");

function formatValue(value) {
  return (newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  }));
}

function showAll(products) {
  let myLi = "";

  products.forEach((product) => {
    myLi += myLi = `
        <li>
            <img src=${product.src} class="menu-image" />
            <p>${product.name}</p>
            <p class="item-price">${formatValue(product.price)}</p>
        </li>`;

    ul.innerHTML = myLi;
  });
}

function ShowDiscountedItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrices);
}

function totalMenuPrices() {
  const discountedItems = menuOptions.reduce(
    (acc, product) => (acc = acc + product.price * 0.9),
    0
  );

  const totalItems = menuOptions.reduce(
    (acc, product) => (acc = acc + product.price),
    0
  );

  ul.innerHTML = `
                <li>
                    <p>O Total do cardápio sem desconto é de ${formatValue(
                      totalItems
                    )}</p>
                </li>
                <li>
                    <p>O Total do cardápio com desconto é de ${formatValue(
                      discountedItems
                    )}</p>
                </li>`;
}

function veganMenu() {
  const veganProducts = menuOptions.filter((product) => product.vegan);

  showAll(veganProducts);
}

btnShowAll.addEventListener("click", () => showAll(menuOptions));
btnShowDiscountedItems.addEventListener("click", ShowDiscountedItems);
btnTotalMenu.addEventListener("click", totalMenuPrices);
btnVeganProducts.addEventListener("click", veganMenu);
