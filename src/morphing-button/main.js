const button = document.querySelector("#morphing-button")
const states = {
  idle: "idle",
  clicked: "🤣 clicked",
  loading: "loading",
  done: "done"
}


function setState(state) {
  document.startViewTransition(() => {
    button.innerHTML = state
  })
}

button.addEventListener("click", () => {
  setState(states.clicked)
  setTimeout(() => {
    setState(states.loading)
    setTimeout(() => {
      setState(states.done)
    }, 2000)
  }, 2000)
})
