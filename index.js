let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")
let home = 0
let away = 0

function home1() {
    home += 1
    homeEl.textContent = home
}

function home2() {
    home += 2
    homeEl.textContent = home
}

function home3() {
    home += 3
    homeEl.textContent = home
}

function away1() {
    away += 1
    awayEl.textContent = away
}

function away2() {
    away += 2
    awayEl.textContent = away
}

function away3() {
    away += 3
    awayEl.textContent = away
}