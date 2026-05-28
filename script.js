const btn = document.getElementById("explorarBtn");

btn.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
});

const buttons = document.querySelectorAll(".card button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Jogo adicionado ao carrinho!");
  });
});