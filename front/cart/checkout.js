let listCart = [];

function checkCart(){
    var cookieValue = document.cookie
    .split('; ')
    .find(row=> row.startsWith('listCart='));
    if(cookieValue){
        listCart = JSON.parse(cookieValue.split('=')[1]);

    }
}

checkCart();
addCartToHTML();
function addCartToHTML(){
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML ='';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let TotalPriceHTML = document.querySelector('.totalPrice');

    let totalQuantity = 0;
    let totalPrice = 0;

    if(listCart)
    {
        listCart.forEach(product =>{
            if(product){
                let newP = document.createElement('div');
                newP.classList.add('item');
                newP.innerHTML = 
                ` <img src="${product.image}" alt="">
                <div class="info">
                    <div class="name">${product.name}</div>
                    <div class="price">${product.price}</div>
                </div>
                <div class="quantity">${product.quantity}</div>
                <div class="returnPrice">${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newP);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText=totalQuantity;
    TotalPriceHTML.innerText = 'Rs'+ totalPrice;
}

const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', async () => {
  const url = 'http://localhost:5001/cart/checkout.html';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listCart)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
  window.alert('Request successful!');
});

