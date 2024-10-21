let bagItems;
onload()

function onload() {
    let bagItemsstr = localStorage.getItem('bagItems')
    bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];
    DisplayItemsOnHomPage()
    displayBag();

}

function addTobag(itemId) {
    bagItems.push(itemId)
    localStorage.setItem("bagItems", JSON.stringify(bagItems))
    displayBag();

}

function displayBag() {
    let bagItemCount = document.getElementById('bag-item-count')
    if (bagItems.length > 0) {
        bagItemCount.style.visibility = "visible"
        bagItemCount.innerText = bagItems.length;

    } else {
        bagItemCount.style.visibility = "hidden"

    }

}
function DisplayItemsOnHomPage() {
    let itemcontainerElement = document.querySelector('.items-container');
    if (!itemcontainerElement) {
        return;
    }
    let innerHTML = ''
    items.forEach(item => {
        innerHTML += `<div class="item-container">
        <img src="${item.image}" alt="" class="item-imeges">
        <div class="rating">
            ${item.rating.stars}⭐|${item.rating.count}
        </div>
        <div style="padding:12px;">
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">${item.discount_percentage}% OFF</span>
        </div>
        <button class="btn" onclick ="addTobag(${item.id})">Add product</button>
        </div>
        </div>`
    })
    itemcontainerElement.innerHTML = innerHTML;

}
// function toggleicon(){
let toggleicon = document.getElementById('toggleicon');
const remove = document.getElementById('remove');
const nav = document.getElementById('home-logo')
toggleicon.addEventListener('click', function () {


    if (nav.style.display = "none") {
        nav.style.display = "block"
        console.log('clicked');
    }
    else {
        nav.style.display = "none"

    }
});
remove.addEventListener('click', function () {

    if (nav.style.display = "block") {
        nav.style.display = "none"
    }
    else {
        nav.style.display = "block"

    }
})
