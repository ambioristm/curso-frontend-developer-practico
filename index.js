const menuEmail = document.querySelector('.navbar-email');
const burguerIcon = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');

  productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://www.oxfordstore.cl/media/catalog/product/cache/e2b750e3a1f8d67cf5cdd4eb0e9445ad/6/0/604ba2751ca145_0_1.jpg',
});
productList.push({
  name: 'Laptop Acer',
  price: 570,
  image: 'https://www.lenovo.com/medias/lenovo-laptops-ideapad-5-15in-intel-hero.png?context=bWFzdGVyfHJvb3R8MjQ1MzM5fGltYWdlL3BuZ3xoMDMvaDZmLzE0MTkxNjE1NDQyOTc0LnBuZ3wwZmM1N2FhMWMwODkxYTIwNjRkMWI2NDNlM2RjMjNiM2VlNGZiZGE4NmUzYWQxOTQ1OWY3N2YxN2M1MGM5NDYz',
});
productList.push({
  name: 'Camisa',
  price: 22,
  image: 'https://cdn.shopify.com/s/files/1/0438/9561/9735/products/CAT_0049_4_1024x1024.jpg?v=1675731931',
});
productList.push({
  name: 'Apple Watch',
  price: 145,
  image: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP860/series7-480.png',
});
productList.push({
  name: 'Jeans',
  price: 45,
  image: 'https://cdn.britannica.com/74/190774-131-CC3FEB1F/jeans-denim-pants-clothing.jpg',
});
productList.push({
  name: 'Tenis',
  price: 60,
  image: 'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg',
});
productList.push({
  name: 'Nike',
  price: 45,
  image: 'https://cdn.pixabay.com/photo/2021/02/13/05/58/tennis-6010392_1280.png',
});
productList.push({
  name: 'Camiseta Deportiva',
  price: 50,
  image: 'https://deportesmoya.es/146006-large_default/camiseta-fanatics-mlb-franchise-poly-mesh-pirates-negro.jpg',
});
productList.push({
  name: 'Iphone 14 Pro Max',
  price: 1022,
  image: 'https://ivenus.in/wp-content/uploads/2022/09/iphone-14-pro-Max-finish-select-202209-6-1inch-spaceblack_AV1_GEO_EMEA.png',
});
productList.push({
  name: 'Bocina',
  price: 15,
  image: 'https://portatilshoprd.com/wp-content/uploads/2022/12/81LWVY72GhL._AC_SL1500_.jpg',
});

//Productos creados dinamicamente.
function renderProducts(arr) {
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.append(productPrice, productName);
  
    const productInfoFigure = document.createElement('figure');
    const productInfoImg = document.createElement('img');
    productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productInfoImg);
  
    productInfo.append(productInfoDiv, productInfoFigure);
  
    productCard.append(productImg, productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);