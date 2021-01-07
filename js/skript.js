"use strict";

const menuButton = document.querySelector("#menu")
const menuButtonback = document.querySelector("#return")
const nav = document.querySelector("nav")

const toggleMenu = () => {
    nav.classList.toggle("visible")
}

const menuback = () => {
    nav.classList.toggle("visible")
}

menuButtonback.addEventListener("click", menuback)
menuButton.addEventListener("click", toggleMenu)

