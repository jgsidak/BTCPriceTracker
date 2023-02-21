const btnFetch = document.querySelector('#btn-fetch');
const priceContainer = document.querySelector('#price-container');

btnFetch.addEventListener('click', () => {
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json?' + Date.now();
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const rate = data.bpi.USD.rate;
      priceContainer.textContent = `1 BTC = $${rate}`;
    })
    .catch(error => {
      console.log('Error:', error);
    });
});
