document.addEventListener("DOMContentLoaded", () => {
  const tabs = () => {
    const cardDetailChange = document.querySelectorAll(".card-detail__change")
    const cardDetailChange1 = document.querySelector(".card-detail__buttons")
    const cardImage = document.querySelectorAll(".card__image")
    const cardDetailsTitle = document.querySelectorAll(".card-details__title")
    const changePrice = document.querySelectorAll(".card-details__price")
    const changeInfo = document.querySelectorAll(".card-details__description-list")
    const hideAll = () => {
      for (let i = 0; i < cardDetailChange.length; i++) {
        cardDetailChange[i].classList.remove("active")
        changePrice[i].classList.remove("active")
        cardImage[i].classList.remove("active")
        cardDetailsTitle[i].classList.remove("active")
        changeInfo[i].classList.remove("active")
      }
    }

    cardDetailChange1.addEventListener("click", (event) => {
      console.log(event.target)
      hideAll()
      event.target.classList.add("active")
      let key = event.target.getAttribute("data-tab")
      console.log(key)
      changePrice.forEach((element) => {
        if (element.getAttribute("data-nav") == key) {
          element.classList.add("active")
        }
      })
      cardImage.forEach((element) => {
        if (element.getAttribute("data-nav") == key) {
          element.classList.add("active")
        }
      })
      cardDetailsTitle.forEach((element) => {
        if (element.getAttribute("data-nav") == key) {
          element.classList.add("active")
        }
      })
      changeInfo.forEach((element) => {
        if (element.getAttribute("data-nav") == key) {
          element.classList.add("active")
        }
      })
      cardDetailChange.forEach((element) => {
        if (element.getAttribute("data-nav") == key) {
          element.classList.add("active")
        }
      })
    })
  }
  tabs()
})
