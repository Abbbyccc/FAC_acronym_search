
import data from "./data.js"

const sumbmit_btn = document.getElementById('search_button')
sumbmit_btn.addEventListener('click', (event) => {
    event.preventDefault()
    const acronym_input = document.getElementById('acronym_input')
    const fullNameOutput = document.getElementById('fullName')
    fullNameOutput.innerHTML = `Sorry ${acronym_input.value} doesn't exist`
    for (let i = 0; i < data.length; i++) {
        if (acronym_input.value.toUpperCase() == data[i]['acronym'].toUpperCase()) {
            fullNameOutput.innerHTML = data[i]['fullName']
        }
    }
})

const acronym_input = document.getElementById('acronym_input')
const dropdown_list = document.getElementById('dropdown')

acronym_input.addEventListener("keydown", (event) => {
    removeAllChildNodes(dropdown_list)
    const searchName = event.key.toUpperCase()
    const filteredChar = []

    for (let i = 0; i < data.length; i++) {
        if (data[i]['acronym'].includes(searchName)) {
            filteredChar.push(data[i]['acronym'])
        }

    }
    for (let i = 0; i < filteredChar.length; i++) {
        const option_value = document.createElement("option")
        option_value.value = filteredChar[i]
        dropdown_list.appendChild(option_value)
    }

})


// CLEAR THE CONTENT BEFORE SEARCH AGAIN
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}