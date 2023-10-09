export const modal = {
  button: document.querySelector(".modal-card .close"),
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector("span"),

  open() {
    modal.wrapper.classList.add("open")
  },
  close() {
    modal.wrapper.classList.remove("open")
  },
}

modal.button.onclick = function () {
  modal.close()
}

window.addEventListener("keydown", clickEscape)

function clickEscape(event) {
  if (event.key === "Escape") {
    modal.close()
  }
}
