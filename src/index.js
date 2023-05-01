// ITERATION 1

function updateSubtotal(products) {

  let total = 0;

  for (const product of products) {
    let price = product.querySelector('.price span').innerText;

    let quantity = product.querySelector('.quantity input').value;
  
    let subtotale = price * quantity;
    total += subtotale;  
    product.querySelector('.subtotal span').textContent = subtotale;
  }

  document.querySelector("#total-value span").textContent = total;
}

function calculateAll() {
  const singleProduct = document.querySelectorAll('.product');
  updateSubtotal(singleProduct);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});
