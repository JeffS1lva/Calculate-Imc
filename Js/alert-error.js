export const boxError = {
  element: document.querySelector('.box-error'),
  open() {
    boxError.element.classList.add('open')
  },
  close() {
    boxError.element.classList.remove("open")
  }
}