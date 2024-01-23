let container = document.querySelector(".container")

var list = document.createElement("ul");

let inputSentence = document.createElement("p");
inputSentence.textContent = "Enter your shopping item: "

let input = document.createElement("input");

let btnInput = document.createElement("button");
btnInput.addEventListener('click', () => {
    addShoppingItem(input.value, list)
    console.log(input.value)
})

container.appendChild(inputSentence)
container.appendChild(input)
container.appendChild(btnInput)
container.appendChild(list)

function addShoppingItem(item, list) {
    let listItem = document.createElement("li")
    let span = document.createElement("span")
    let btnDelete = document.createElement("button")

    btnDelete.textContent = "Delete"
    span.textContent = item

    listItem.appendChild(span)
    listItem.appendChild(btnDelete)
    list.appendChild(listItem)

    btnDelete.addEventListener("click", () => {
        list.removeChild(listItem)
    })
    input.focus()
}