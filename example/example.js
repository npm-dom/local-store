var store = require("..")()
    , body = document.body

var input = document.createElement("input")
input.value = store.get("foo")
body.appendChild(input)

var button = document.createElement("button")
button.textContent = "set data"
body.appendChild(button)

button.addEventListener("click", function () {
    store.set("foo", input.value)
})