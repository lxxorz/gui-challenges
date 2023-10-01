const scalar = document.querySelector("#scalar")
scalar.addEventListener("input", (e) => {
  const value = e.target.value
  const cardStack = document.querySelector(".card-stack")
  cardStack.style.setProperty("--scalar", value)
})
