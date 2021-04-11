window.onload = () => {
  const priceTag = document.querySelector("#price");
  fetch("https://blockchain.info/ticker")
    .then((res) => res.json())
    .then((res) => {
      const price = res.BRL.last;
      priceTag.innerHTML = parseInt(price * 2.7);
    });
};
