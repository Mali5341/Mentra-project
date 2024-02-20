const CONVENIENCE_FEES = 99;
let bagitemsObjects;
onload();

function onload() {
  loadBagItemObjects();
  bagitemsOnBagHomePage();
  loadbagsummaryaccount();
}

function loadBagItemObjects() {
  console.log(bagItems);
  bagitemsObjects = bagItems.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  })
  // console.log(bagitemsObjects);
}
function removefrombag(itemId) {
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  bagitemsOnBagHomePage();
  displayBag();
  loadbagsummaryaccount();

}
function bagitemsOnBagHomePage() {
  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagitemsObjects.forEach(bagItem => {
    innerHTML += gnerateItemhtml(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function gnerateItemhtml(item) {
  return ` <div class="bagitem-container">
        <img src="/${item.image}" alt="" class="item-imeges" >
        <div>
        <div class="company-name"${item.company}</div></div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="deliverd-return">
            <span class="deliverd-days">${item.return_period}days</span> <span id = "return-product"> Return Available</span>
        </div>
        <div class="deliverd-days">
            Delivary by <span>${item.delivery_date}</span>
        </div>
        </div>
        <div class="remove-from-cart">
        <div onclick = "removefrombag(${item.id})">X</div>
        </div>
        </div> `
}
function loadbagsummaryaccount() {
  let summaryaccount = document.querySelector('.bag-summary');
  let totalItem = bagitemsObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  bagitemsObjects.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });
  finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  summaryaccount.innerHTML = `

                
                    <div class="bag-details-container">
                        <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
                        <div class="price-item">
                          <span class="price-item-tag">Total MRP</span>
                          <span class="price-item-value">Rs ${totalMRP}</span>
                        </div>
                        <div class="price-item">
                          <span class="price-item-tag">Discount on MRP</span>
                          <span class="price-item-value priceDetail-base-discount">-Rs ${totalDiscount}</span>
                        </div>
                        <div class="price-item">
                          <span class="price-item-tag">Convenience Fee</span>
                          <span class="price-item-value">Rs 99</span>
                        </div>
                        <hr>
                        <div class="price-footer">
                          <span class="price-item-tag">Total Amount</span>
                          <span class="price-item-value">Rs ${finalPayment}</span>
                        </div>
                      </div>
                      <button class="btn-place-order">
                        <div class="ORDER-btn" onclick = moveOnnextpage()>PLACE ORDER</div>
                      </button>`;
}
function moveOnnextpage(){
  window.location.assign('paymentform.html')
}